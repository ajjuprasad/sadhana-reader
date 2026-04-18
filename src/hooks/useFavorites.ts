import { useState, useEffect, useCallback } from 'react';
import { collection, doc, setDoc, deleteDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { firestore } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';

const LOCAL_KEY = 'sadhana-reader-favorites';

export function useFavorites() {
  const { user } = useAuth();
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    if (!user) {
      const stored = localStorage.getItem(LOCAL_KEY);
      setFavoriteIds(stored ? JSON.parse(stored) : []);
      return;
    }

    const favCol = collection(firestore, 'users', user.uid, 'favorites');
    const unsub = onSnapshot(favCol, (snap) => {
      setFavoriteIds(snap.docs.map((d) => d.id));
    });
    return unsub;
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const stored = localStorage.getItem(LOCAL_KEY);
    if (!stored) return;
    const localFavs: string[] = JSON.parse(stored);
    if (localFavs.length === 0) return;
    const favCol = collection(firestore, 'users', user.uid, 'favorites');
    localFavs.forEach((id) => {
      setDoc(doc(favCol, id), { createdAt: serverTimestamp() }, { merge: true });
    });
    localStorage.removeItem(LOCAL_KEY);
  }, [user]);

  const isFavorite = useCallback(
    (stotraId: string) => favoriteIds.includes(stotraId),
    [favoriteIds],
  );

  const toggleFavorite = useCallback(
    (stotraId: string) => {
      if (user) {
        const favDoc = doc(firestore, 'users', user.uid, 'favorites', stotraId);
        if (favoriteIds.includes(stotraId)) {
          deleteDoc(favDoc);
        } else {
          setDoc(favDoc, { createdAt: serverTimestamp() });
        }
      } else {
        setFavoriteIds((prev) => {
          const next = prev.includes(stotraId)
            ? prev.filter((id) => id !== stotraId)
            : [...prev, stotraId];
          localStorage.setItem(LOCAL_KEY, JSON.stringify(next));
          return next;
        });
      }
    },
    [user, favoriteIds],
  );

  return { favoriteIds, isFavorite, toggleFavorite };
}
