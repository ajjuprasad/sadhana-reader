import { useState, useEffect, useCallback } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';

interface Purchase {
  contentType: 'stotra' | 'story';
  amount: number;
  purchasedAt: unknown;
}

export function usePurchases() {
  const { user } = useAuth();
  const [purchasedIds, setPurchasedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setPurchasedIds([]);
      setLoading(false);
      return;
    }

    const col = collection(firestore, 'users', user.uid, 'purchases');
    const unsub = onSnapshot(col, (snap) => {
      setPurchasedIds(snap.docs.map((d) => d.id));
      setLoading(false);
    });
    return unsub;
  }, [user]);

  const hasPurchased = useCallback(
    (contentId: string) => purchasedIds.includes(contentId),
    [purchasedIds],
  );

  return { purchasedIds, hasPurchased, loading };
}
