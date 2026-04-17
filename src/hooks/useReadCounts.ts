import { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'sadhana-reader-read-counts';

function loadCounts(): Record<string, number> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return {};
}

export function useReadCounts(stotraId: string | undefined) {
  const [counts, setCounts] = useState<Record<string, number>>(loadCounts);
  const incrementedRef = useRef<string | null>(null);

  useEffect(() => {
    if (!stotraId || incrementedRef.current === stotraId) return;
    incrementedRef.current = stotraId;
    setCounts((prev) => {
      const updated = { ...prev, [stotraId]: (prev[stotraId] || 0) + 1 };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, [stotraId]);

  return stotraId ? counts[stotraId] || 0 : 0;
}
