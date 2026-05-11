import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

// Returns the most-recently-seen users for the admin dashboard. Admin-only.
// Pagination is via cursor (the lastSeenAt millis of the last item in the
// previous page).
export const adminUsers = onCall(async (request) => {
  if (!request.auth?.token.admin) {
    throw new HttpsError("permission-denied", "Admin only");
  }
  const { limit = 50, cursorMs } = (request.data ?? {}) as {
    limit?: number;
    cursorMs?: number;
  };
  const pageSize = Math.min(Math.max(limit, 1), 200);

  let query = admin
    .firestore()
    .collection("users")
    .orderBy("lastSeenAt", "desc")
    .limit(pageSize);

  if (cursorMs && Number.isFinite(cursorMs)) {
    query = query.startAfter(admin.firestore.Timestamp.fromMillis(cursorMs));
  }

  const snap = await query.get();
  const items = snap.docs.map((d) => {
    const data = d.data();
    return {
      uid: d.id,
      email: data.email ?? null,
      displayName: data.displayName ?? null,
      photoURL: data.photoURL ?? null,
      firstLoginAt: data.firstLoginAt?.toMillis?.() ?? null,
      lastLoginAt: data.lastLoginAt?.toMillis?.() ?? null,
      lastSeenAt: data.lastSeenAt?.toMillis?.() ?? null,
      loginCount: data.loginCount ?? 0,
    };
  });
  const last = items[items.length - 1];
  return {
    items,
    nextCursorMs: last?.lastSeenAt ?? null,
    hasMore: items.length === pageSize,
  };
});
