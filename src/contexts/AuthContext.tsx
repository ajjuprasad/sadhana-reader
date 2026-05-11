import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut as firebaseSignOut,
  type User,
  type AuthError,
} from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';
import { recordSignIn, recordAppOpen } from '../lib/userTracking';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRedirectResult(auth)
      .then((res) => {
        if (res?.user) recordSignIn(res.user).catch(() => {});
      })
      .catch(() => {});
    let lastUid: string | null = null;
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (u && u.uid !== lastUid) {
        lastUid = u.uid;
        recordAppOpen(u).catch(() => {});
      } else if (!u) {
        lastUid = null;
        recordAppOpen(null).catch(() => {});
      }
    });
    return unsubscribe;
  }, []);

  const signIn = useCallback(async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) recordSignIn(result.user).catch(() => {});
    } catch (err) {
      const code = (err as AuthError).code;
      if (code === 'auth/popup-blocked' || code === 'auth/popup-closed-by-browser') {
        await signInWithRedirect(auth, googleProvider);
      } else {
        console.error('Sign-in error:', code, (err as AuthError).message);
        alert(`Sign-in failed: ${code}`);
      }
    }
  }, []);

  const signOut = useCallback(async () => {
    await firebaseSignOut(auth);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
