import { useState, useEffect, useRef } from 'react';
import { db } from '../lib/firebase';
import { ref, runTransaction, onValue } from 'firebase/database';

export function useReadCounts(stotraId: string | undefined) {
  const [count, setCount] = useState(0);
  const incrementedRef = useRef<string | null>(null);

  useEffect(() => {
    if (!stotraId) return;

    const countRef = ref(db, `readCounts/${stotraId}`);
    const unsubscribe = onValue(countRef, (snapshot) => {
      setCount(snapshot.val() || 0);
    });

    return unsubscribe;
  }, [stotraId]);

  useEffect(() => {
    if (!stotraId || incrementedRef.current === stotraId) return;
    incrementedRef.current = stotraId;

    const countRef = ref(db, `readCounts/${stotraId}`);
    runTransaction(countRef, (currentCount) => (currentCount || 0) + 1);
  }, [stotraId]);

  return count;
}
