import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { firestore } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';

interface Subscription {
  plan: string;
  status: 'active' | 'expired';
  expiresAt: { toDate: () => Date };
}

export function useSubscription() {
  const { user } = useAuth();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setIsSubscribed(false);
      setPlan(null);
      setLoading(false);
      return;
    }

    const subDoc = doc(firestore, 'users', user.uid, 'subscription', 'current');
    const unsub = onSnapshot(subDoc, (snap) => {
      if (snap.exists()) {
        const data = snap.data() as Subscription;
        const now = new Date();
        const expires = data.expiresAt?.toDate?.() ?? new Date(0);
        const active = data.status === 'active' && expires > now;
        setIsSubscribed(active);
        setPlan(active ? data.plan : null);
      } else {
        setIsSubscribed(false);
        setPlan(null);
      }
      setLoading(false);
    });
    return unsub;
  }, [user]);

  return { isSubscribed, plan, loading };
}
