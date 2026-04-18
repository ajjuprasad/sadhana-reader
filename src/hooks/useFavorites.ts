import { useState, useEffect, useCallback } from 'react';
import { collection, doc, setDoc, deleteDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { firestore } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';

export function useFavorites() {
  const { user } = useAuth();
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    if (!user) {
      setFavoriteIds([]);
      return;
    }

    const favCol = collection(firestore, 'users', user.uid, 'favorites');
    const unsub = onSnapshot(favCol, (snap) => {
      setFavoriteIds(snap.docs.map((d) => d.id));
    });
    return unsub;
  }, [user]);

  const isFavorite = useCallback(
    (stotraId: string) => favoriteIds.includes(stotraId),
    [favoriteIds],
  );

  const toggleFavorite = useCallback(
    (stotraId: string) => {
      if (!user) return;
      const favDoc = doc(firestore, 'users', user.uid, 'favorites', stotraId);
      if (favoriteIds.includes(stotraId)) {
        deleteDoc(favDoc);
      } else {
        setDoc(favDoc, { createdAt: serverTimestamp() });
      }
    },
    [user, favoriteIds],
  );

  return { favoriteIds, isFavorite, toggleFavorite };
}
