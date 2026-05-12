import { useCallback, useEffect, useState } from 'react';
import { getMessaging, getToken, isSupported, deleteToken } from 'firebase/messaging';
import { doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { app, firestore } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';

type PermissionState = 'default' | 'granted' | 'denied' | 'unsupported';

const VAPID_KEY = import.meta.env.VITE_FCM_VAPID_KEY as string | undefined;

function tokenKey(token: string): string {
  // Firestore doc IDs cannot exceed 1500 bytes and shouldn't contain slashes.
  // FCM tokens are URL-safe but long — use a stable suffix as the doc id.
  return token.slice(0, 80).replace(/[^A-Za-z0-9_-]/g, '_');
}

export function usePushNotifications() {
  const { user } = useAuth();
  const [permission, setPermission] = useState<PermissionState>('default');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Initial permission state.
  useEffect(() => {
    let cancelled = false;
    isSupported()
      .then((ok) => {
        if (cancelled) return;
        if (!ok || typeof Notification === 'undefined') {
          setPermission('unsupported');
          return;
        }
        setPermission(Notification.permission as PermissionState);
      })
      .catch(() => {
        if (!cancelled) setPermission('unsupported');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const subscribe = useCallback(async () => {
    if (!user) {
      setError('Sign in to enable reminders.');
      return;
    }
    if (!VAPID_KEY) {
      setError('Push not configured (missing VAPID key).');
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const reg = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
      const perm = await Notification.requestPermission();
      setPermission(perm as PermissionState);
      if (perm !== 'granted') return;
      const messaging = getMessaging(app);
      const t = await getToken(messaging, {
        vapidKey: VAPID_KEY,
        serviceWorkerRegistration: reg,
      });
      if (!t) {
        setError('Could not obtain push token.');
        return;
      }
      setToken(t);
      const id = tokenKey(t);
      await setDoc(
        doc(firestore, 'users', user.uid, 'fcmTokens', id),
        {
          token: t,
          createdAt: serverTimestamp(),
          userAgent: navigator.userAgent,
        },
        { merge: true },
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setBusy(false);
    }
  }, [user]);

  const unsubscribe = useCallback(async () => {
    if (!user) return;
    setBusy(true);
    setError(null);
    try {
      const messaging = getMessaging(app);
      const t = token;
      await deleteToken(messaging).catch(() => {});
      if (t) {
        await deleteDoc(doc(firestore, 'users', user.uid, 'fcmTokens', tokenKey(t))).catch(() => {});
      }
      setToken(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setBusy(false);
    }
  }, [user, token]);

  return { permission, busy, error, token, subscribe, unsubscribe };
}
