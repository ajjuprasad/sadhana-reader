import { useCallback } from 'react';

export function useContentAccess() {
  const canAccess = useCallback((_contentId?: string, _premium?: boolean): boolean => true, []);

  return { canAccess, isSubscribed: true, loading: false };
}
