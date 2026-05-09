import { onCall, HttpsError } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as admin from "firebase-admin";
import * as crypto from "crypto";

const razorpayKeySecret = defineSecret("RAZORPAY_KEY_SECRET");

export const verifyPayment = onCall(
  { secrets: [razorpayKeySecret] },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "Sign in required");
    }

    const { orderId, paymentId, signature } = request.data as {
      orderId: string;
      paymentId: string;
      signature: string;
    };

    if (!orderId || !paymentId || !signature) {
      throw new HttpsError("invalid-argument", "Missing payment details");
    }

    // Verify HMAC signature
    const expectedSignature = crypto
      .createHmac("sha256", razorpayKeySecret.value())
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    if (expectedSignature !== signature) {
      throw new HttpsError("permission-denied", "Invalid payment signature");
    }

    const db = admin.firestore();
    const orderRef = db.collection("orders").doc(orderId);
    const orderSnap = await orderRef.get();

    if (!orderSnap.exists) {
      throw new HttpsError("not-found", "Order not found");
    }

    const orderData = orderSnap.data()!;

    if (orderData.userId !== request.auth.uid) {
      throw new HttpsError("permission-denied", "Order does not belong to user");
    }

    const batch = db.batch();

    // Update order status
    batch.update(orderRef, {
      status: "paid",
      paymentId,
      paidAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Record purchase for the user
    if (orderData.contentType === "subscription") {
      const subRef = db
        .collection("users")
        .doc(request.auth.uid)
        .collection("subscription")
        .doc("current");

      const now = new Date();
      const expiresAt = new Date(now);
      expiresAt.setMonth(expiresAt.getMonth() + 1);

      batch.set(subRef, {
        plan: orderData.contentId,
        status: "active",
        startedAt: admin.firestore.FieldValue.serverTimestamp(),
        expiresAt: admin.firestore.Timestamp.fromDate(expiresAt),
        orderId,
        paymentId,
      });
    } else {
      const purchaseRef = db
        .collection("users")
        .doc(request.auth.uid)
        .collection("purchases")
        .doc(orderData.contentId);

      batch.set(purchaseRef, {
        contentType: orderData.contentType,
        amount: orderData.amount,
        purchasedAt: admin.firestore.FieldValue.serverTimestamp(),
        orderId,
        paymentId,
      });
    }

    await batch.commit();

    return { success: true, contentId: orderData.contentId };
  }
);
