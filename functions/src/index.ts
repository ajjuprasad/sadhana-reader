import * as admin from "firebase-admin";

admin.initializeApp();

// Razorpay payment functions are temporarily disabled — re-enable along
// with the RAZORPAY_* secret setup in the deploy workflow when needed.
// export { createOrder } from "./createOrder";
// export { verifyPayment } from "./verifyPayment";
// export { razorpayWebhook } from "./webhook";

export { setAdmin } from "./setAdmin";
export { adminStats } from "./adminStats";
export { adminUsers } from "./adminUsers";
export { sendDailyNotifications } from "./sendDailyNotifications";
