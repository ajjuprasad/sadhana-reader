import { useState, useEffect, useRef } from 'react';
import { db } from '../lib/firebase';
import { ref, runTransaction, onValue } from 'firebase/database';

const DB_PATH = 'readings';

export function useReadCount(stotraId: string | undefined, shouldIncrement = false) {
  const [count, setCount] = useState(0);
  const incrementedRef = useRef<string | null>(null);

  useEffect(() => {
    if (!stotraId) return;

    const countRef = ref(db, `${DB_PATH}/${stotraId}`);
    const unsubscribe = onValue(countRef, (snapshot) => {
      setCount(snapshot.val() || 0);
    });

    return unsubscribe;
  }, [stotraId]);

  useEffect(() => {
    if (!stotraId || !shouldIncrement || incrementedRef.current === stotraId) return;
    incrementedRef.current = stotraId;

    const countRef = ref(db, `${DB_PATH}/${stotraId}`);
    runTransaction(countRef, (currentCount) => (currentCount || 0) + 1);
  }, [stotraId, shouldIncrement]);

  return count;
}
