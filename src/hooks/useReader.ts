import { useState, useCallback, useEffect } from 'react';
import { haptic } from '../utils/haptics';

export function useReader(totalVerses: number) {
  const [currentVerse, setCurrentVerse] = useState(0);

  const goToVerse = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalVerses) {
        setCurrentVerse(index);
      }
    },
    [totalVerses]
  );

  const nextVerse = useCallback(() => {
    setCurrentVerse((prev) => {
      const next = Math.min(prev + 1, totalVerses - 1);
      if (next !== prev) haptic();
      return next;
    });
  }, [totalVerses]);

  const prevVerse = useCallback(() => {
    setCurrentVerse((prev) => {
      const next = Math.max(prev - 1, 0);
      if (next !== prev) haptic();
      return next;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextVerse();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevVerse();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextVerse, prevVerse]);

  // Reset when total changes (new stotra)
  useEffect(() => {
    setCurrentVerse(0);
  }, [totalVerses]);

  return {
    currentVerse,
    goToVerse,
    nextVerse,
    prevVerse,
    isFirst: currentVerse === 0,
    isLast: currentVerse === totalVerses - 1,
    progress: totalVerses > 0 ? (currentVerse + 1) / totalVerses : 0,
  };
}
