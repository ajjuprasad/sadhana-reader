import { doc, setDoc, serverTimestamp, increment, getDoc } from 'firebase/firestore';
import { logEvent } from 'firebase/analytics';
import type { User } from 'firebase/auth';
import { firestore, analyticsPromise } from './firebase';

const APP_OPEN_THROTTLE_KEY = 'sadhana-last-app-open';
const APP_OPEN_THROTTLE_MS = 6 * 60 * 60 * 1000; // 6 hours

// Called once per successful sign-in. Creates the users/{uid} doc on first
// sign-in (firstLoginAt), and bumps lastLoginAt / loginCount thereafter.
export async function recordSignIn(user: User): Promise<void> {
  const ref = doc(firestore, 'users', user.uid);
  const snap = await getDoc(ref).catch(() => null);
  const exists = snap?.exists();
  await setDoc(
    ref,
    {
      email: user.email ?? null,
      displayName: user.displayName ?? null,
      photoURL: user.photoURL ?? null,
      lastLoginAt: serverTimestamp(),
      lastSeenAt: serverTimestamp(),
      loginCount: increment(1),
      ...(exists ? {} : { firstLoginAt: serverTimestamp() }),
    },
    { merge: true },
  );
  const analytics = await analyticsPromise;
  if (analytics) logEvent(analytics, 'login', { method: 'google' });
}

// Called on every app mount. Throttled to once every 6h to avoid write spam
// from reloads. Updates lastSeenAt on the user doc and fires an app_open
// analytics event.
export async function recordAppOpen(user: User | null): Promise<void> {
  const last = Number(sessionStorage.getItem(APP_OPEN_THROTTLE_KEY) ?? 0);
  if (Date.now() - last < APP_OPEN_THROTTLE_MS) return;
  sessionStorage.setItem(APP_OPEN_THROTTLE_KEY, String(Date.now()));

  const analytics = await analyticsPromise;
  if (analytics) logEvent(analytics, 'app_open');

  if (!user) return;
  const ref = doc(firestore, 'users', user.uid);
  await setDoc(ref, { lastSeenAt: serverTimestamp() }, { merge: true }).catch(() => {
    // Silent — analytics already captured the open.
  });
}
