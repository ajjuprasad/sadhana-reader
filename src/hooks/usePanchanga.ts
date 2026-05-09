import { useState, useEffect, useRef } from 'react';
import type { DailyPanchanga } from '../lib/panchangaEngine';
import type { PanchangaLocation } from './useLocation';

export function usePanchanga(date: Date, location: PanchangaLocation) {
  const [panchanga, setPanchanga] = useState<DailyPanchanga | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const requestId = useRef(0);

  useEffect(() => {
    const id = ++requestId.current;
    setLoading(true);
    setError(null);

    import('../lib/panchangaEngine')
      .then((mod) => mod.computeDailyPanchanga(date, location.lat, location.lng))
      .then((result) => {
        if (id !== requestId.current) return;
        setPanchanga(result);
        setLoading(false);
      })
      .catch((err) => {
        if (id !== requestId.current) return;
        setError(err instanceof Error ? err.message : 'Failed to compute panchanga');
        setLoading(false);
      });
  }, [date.toDateString(), location.lat, location.lng]);

  return { panchanga, loading, error };
}
