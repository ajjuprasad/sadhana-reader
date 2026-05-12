import { onCall, HttpsError } from "firebase-functions/v2/https";
import { logger } from "firebase-functions/v2";
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
    throw new HttpsError(
      "permission-denied",
      `Admin only (caller=${callerEmail ?? "anon"}, isBootstrap=${isBootstrap})`,
    );
  }

  let target;
  try {
    target = await admin.auth().getUser(uid);
  } catch (err) {
    logger.error("setAdmin: getUser failed", err);
    const msg = err instanceof Error ? err.message : String(err);
    throw new HttpsError("internal", `getUser: ${msg}`);
  }

  const claims = { ...(target.customClaims ?? {}), admin: makeAdmin };
  if (!makeAdmin) delete (claims as { admin?: boolean }).admin;

  try {
    await admin.auth().setCustomUserClaims(uid, claims);
  } catch (err) {
    logger.error("setAdmin: setCustomUserClaims failed", err);
    const msg = err instanceof Error ? err.message : String(err);
    throw new HttpsError("internal", `setCustomUserClaims: ${msg}`);
  }

  return { ok: true, uid, admin: makeAdmin };
});
