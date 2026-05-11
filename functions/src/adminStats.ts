import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

const DAY = 24 * 60 * 60 * 1000;

// Returns aggregate engagement stats. Admin-only.
export const adminStats = onCall(async (request) => {
  if (!request.auth?.token.admin) {
    throw new HttpsError("permission-denied", "Admin only");
  }
  const now = Date.now();
  const oneDayAgo = admin.firestore.Timestamp.fromMillis(now - 1 * DAY);
  const sevenDaysAgo = admin.firestore.Timestamp.fromMillis(now - 7 * DAY);
  const twentyEightDaysAgo = admin.firestore.Timestamp.fromMillis(now - 28 * DAY);
  const thirtyDaysAgo = admin.firestore.Timestamp.fromMillis(now - 30 * DAY);

  const users = admin.firestore().collection("users");

  const [totalSnap, dauSnap, mauSnap, retained7Snap, retained28Snap] = await Promise.all([
    users.count().get(),
    users.where("lastSeenAt", ">=", oneDayAgo).count().get(),
    users.where("lastSeenAt", ">=", thirtyDaysAgo).count().get(),
    users
      .where("firstLoginAt", "<=", sevenDaysAgo)
      .where("lastSeenAt", ">=", sevenDaysAgo)
      .count()
      .get(),
    users
      .where("firstLoginAt", "<=", twentyEightDaysAgo)
      .where("lastSeenAt", ">=", twentyEightDaysAgo)
      .count()
      .get(),
  ]);

  return {
    totalUsers: totalSnap.data().count,
    dau: dauSnap.data().count,
    mau: mauSnap.data().count,
    retained7d: retained7Snap.data().count,
    retained28d: retained28Snap.data().count,
    generatedAt: now,
  };
});
