import { onCall, HttpsError } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as admin from "firebase-admin";
import Razorpay from "razorpay";

const razorpayKeyId = defineSecret("RAZORPAY_KEY_ID");
const razorpayKeySecret = defineSecret("RAZORPAY_KEY_SECRET");

export const createOrder = onCall(
  { secrets: [razorpayKeyId, razorpayKeySecret] },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "Sign in to make a purchase");
    }

    const { contentId, contentType, amount } = request.data as {
      contentId: string;
      contentType: "stotra" | "story" | "subscription";
      amount: number;
    };

    if (!contentId || !contentType || !amount || amount < 1) {
      throw new HttpsError("invalid-argument", "Missing or invalid parameters");
    }

    const razorpay = new Razorpay({
      key_id: razorpayKeyId.value(),
      key_secret: razorpayKeySecret.value(),
    });

    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay expects paise
      currency: "INR",
      receipt: `${contentType}_${contentId}_${Date.now()}`,
      notes: {
        userId: request.auth.uid,
        contentId,
        contentType,
      },
    });

    await admin
      .firestore()
      .collection("orders")
      .doc(order.id)
      .set({
        userId: request.auth.uid,
        contentId,
        contentType,
        amount,
        razorpayOrderId: order.id,
        status: "created",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

    return {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: razorpayKeyId.value(),
    };
  }
);
