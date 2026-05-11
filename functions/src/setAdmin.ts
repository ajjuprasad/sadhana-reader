import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

// Grants or revokes the 'admin' custom claim on a target user's auth token.
// Only existing admins can call this. The very first admin is bootstrapped
// out-of-band by scripts/grant-admin.mjs.
export const setAdmin = onCall(async (request) => {
  if (!request.auth?.token.admin) {
    throw new HttpsError("permission-denied", "Admin only");
  }
  const { uid, admin: makeAdmin } = request.data as { uid: string; admin: boolean };
  if (!uid || typeof makeAdmin !== "boolean") {
    throw new HttpsError("invalid-argument", "uid (string) and admin (boolean) required");
  }
  const target = await admin.auth().getUser(uid);
  const claims = { ...(target.customClaims ?? {}), admin: makeAdmin };
  if (!makeAdmin) delete (claims as { admin?: boolean }).admin;
  await admin.auth().setCustomUserClaims(uid, claims);
  return { ok: true, uid, admin: makeAdmin };
});
