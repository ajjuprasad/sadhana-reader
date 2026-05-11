import * as admin from "firebase-admin";

admin.initializeApp();

export { createOrder } from "./createOrder";
export { verifyPayment } from "./verifyPayment";
export { setAdmin } from "./setAdmin";
export { adminStats } from "./adminStats";
export { adminUsers } from "./adminUsers";
export { sendDailyNotifications } from "./sendDailyNotifications";

// Webhook requires RAZORPAY_WEBHOOK_SECRET — only export when ready
// export { razorpayWebhook } from "./webhook";
