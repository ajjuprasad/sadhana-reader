import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

// Reads the 'admin' custom claim from the user's ID token. Returns
// { isAdmin, loading }. Refreshes the token on mount so a freshly granted
// claim is picked up without forcing a sign-out.
export function useIsAdmin() {
  const { user, loading: authLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setIsAdmin(false);
      setLoading(false);
      return;
    }
    let cancelled = false;
    user
      .getIdTokenResult(true)
      .then((res) => {
        if (cancelled) return;
        setIsAdmin(res.claims.admin === true);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setIsAdmin(false);
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [user, authLoading]);

  return { isAdmin, loading };
}
