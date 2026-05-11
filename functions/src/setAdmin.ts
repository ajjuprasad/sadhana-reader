import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

// The single bootstrap email allowed to self-grant admin without an
// existing admin token. After this user has been granted admin once, the
// normal admin-only path takes over for everyone else.
const BOOTSTRAP_EMAIL = "ajaiprasad@gmail.com";

// Grants or revokes the 'admin' custom claim on a target user's auth token.
// Allowed callers:
//   1. Any existing admin (admin: true on token)
//   2. The bootstrap email, but only to grant admin to themselves
export const setAdmin = onCall(async (request) => {
  const callerUid = request.auth?.uid;
  const callerEmail = request.auth?.token?.email;
  const callerIsAdmin = request.auth?.token?.admin === true;

  const { uid, admin: makeAdmin } = request.data as { uid: string; admin: boolean };
  if (!uid || typeof makeAdmin !== "boolean") {
    throw new HttpsError("invalid-argument", "uid (string) and admin (boolean) required");
  }

  const isBootstrap =
    callerEmail === BOOTSTRAP_EMAIL && uid === callerUid && makeAdmin === true;

  if (!callerIsAdmin && !isBootstrap) {
    throw new HttpsError("permission-denied", "Admin only");
  }

  const target = await admin.auth().getUser(uid);
  const claims = { ...(target.customClaims ?? {}), admin: makeAdmin };
  if (!makeAdmin) delete (claims as { admin?: boolean }).admin;
  await admin.auth().setCustomUserClaims(uid, claims);
  return { ok: true, uid, admin: makeAdmin };
});
