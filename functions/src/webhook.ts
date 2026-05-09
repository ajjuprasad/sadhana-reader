import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as admin from "firebase-admin";
import * as crypto from "crypto";

const razorpayWebhookSecret = defineSecret("RAZORPAY_WEBHOOK_SECRET");

export const razorpayWebhook = onRequest(
  { secrets: [razorpayWebhookSecret] },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).send("Method not allowed");
      return;
    }

    const signature = req.headers["x-razorpay-signature"] as string;
    if (!signature) {
      res.status(400).send("Missing signature");
      return;
    }

    const body = JSON.stringify(req.body);
    const expectedSignature = crypto
      .createHmac("sha256", razorpayWebhookSecret.value())
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      res.status(403).send("Invalid signature");
      return;
    }

    const event = req.body.event;
    const payment = req.body.payload?.payment?.entity;

    if (event === "payment.captured" && payment) {
      const orderId = payment.order_id;
      if (orderId) {
        const db = admin.firestore();
        const orderRef = db.collection("orders").doc(orderId);
        const orderSnap = await orderRef.get();

        if (orderSnap.exists && orderSnap.data()?.status === "created") {
          const orderData = orderSnap.data()!;

          const batch = db.batch();
          batch.update(orderRef, {
            status: "paid",
            paymentId: payment.id,
            paidAt: admin.firestore.FieldValue.serverTimestamp(),
            verifiedVia: "webhook",
          });

          if (orderData.contentType === "subscription") {
            const subRef = db
              .collection("users")
              .doc(orderData.userId)
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
              paymentId: payment.id,
            });
          } else {
            const purchaseRef = db
              .collection("users")
              .doc(orderData.userId)
              .collection("purchases")
              .doc(orderData.contentId);
            batch.set(purchaseRef, {
              contentType: orderData.contentType,
              amount: orderData.amount,
              purchasedAt: admin.firestore.FieldValue.serverTimestamp(),
              orderId,
              paymentId: payment.id,
            });
          }

          await batch.commit();
        }
      }
    }

    res.status(200).json({ status: "ok" });
  }
);
