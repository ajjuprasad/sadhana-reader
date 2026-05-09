import * as admin from "firebase-admin";

admin.initializeApp();

export { createOrder } from "./createOrder";
export { verifyPayment } from "./verifyPayment";

// Webhook requires RAZORPAY_WEBHOOK_SECRET — only export when ready
// export { razorpayWebhook } from "./webhook";
