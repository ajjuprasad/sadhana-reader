import { useCallback } from 'react';
import { usePurchases } from './usePurchases';
import { useSubscription } from './useSubscription';

export function useContentAccess() {
  const { hasPurchased, loading: purchasesLoading } = usePurchases();
  const { isSubscribed, loading: subLoading } = useSubscription();

  const canAccess = useCallback(
    (contentId: string, premium?: boolean): boolean => {
      if (!premium) return true;
      if (isSubscribed) return true;
      if (hasPurchased(contentId)) return true;
      return false;
    },
    [isSubscribed, hasPurchased],
  );

  return { canAccess, isSubscribed, loading: purchasesLoading || subLoading };
}
