// One-time bootstrap to grant the 'admin' custom claim to the first admin.
// After this runs once, further admin grants/revocations use the setAdmin
// callable function from the in-app admin dashboard.
//
// Usage:
//   1. Download a Firebase service-account key from Firebase Console:
//      Project settings → Service accounts → Generate new private key.
//      Save it locally as serviceAccount.json (DO NOT commit).
//   2. node scripts/grant-admin.mjs ajaiprasad@gmail.com
//
// To revoke, pass --revoke as a second argument.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import admin from 'firebase-admin';

const __dirname = dirname(fileURLToPath(import.meta.url));
const KEY_PATH = resolve(__dirname, '..', 'serviceAccount.json');

const [, , email, action] = process.argv;
if (!email) {
  console.error('Usage: node scripts/grant-admin.mjs <email> [--revoke]');
  process.exit(1);
}
const revoke = action === '--revoke';

let serviceAccount;
try {
  serviceAccount = JSON.parse(readFileSync(KEY_PATH, 'utf8'));
} catch (err) {
  console.error(`Could not read service account key at ${KEY_PATH}.`);
  console.error('Download one from Firebase Console → Project settings → Service accounts.');
  process.exit(1);
}

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const user = await admin.auth().getUserByEmail(email);
const claims = { ...(user.customClaims ?? {}) };
if (revoke) delete claims.admin;
else claims.admin = true;
await admin.auth().setCustomUserClaims(user.uid, claims);

console.log(`${revoke ? 'Revoked' : 'Granted'} admin on ${email} (uid: ${user.uid}).`);
console.log('User must sign out and back in for the new token to take effect.');
process.exit(0);
