import { useState, useCallback, useEffect, useRef } from 'react';

export function useReader(totalVerses: number, onComplete?: () => void) {
  const [currentVerse, setCurrentVerse] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  // Keep onComplete in a ref so nextVerse stays stable but always calls the
  // latest handler.
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const goToVerse = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalVerses) {
        setCurrentVerse((prev) => {
          setDirection(index >= prev ? 1 : -1);
          return index;
        });
      }
    },
    [totalVerses]
  );

  const nextVerse = useCallback(() => {
    setCurrentVerse((prev) => {
      if (prev >= totalVerses - 1) {
        // Defer so we don't schedule a parent setState during our own update.
        if (onCompleteRef.current) {
          setTimeout(() => onCompleteRef.current?.(), 0);
        }
        return prev;
      }
      setDirection(1);
      return prev + 1;
    });
  }, [totalVerses]);

  const prevVerse = useCallback(() => {
    setDirection(-1);
    setCurrentVerse((prev) => Math.max(prev - 1, 0));
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
    direction,
    goToVerse,
    nextVerse,
    prevVerse,
    isFirst: currentVerse === 0,
    isLast: currentVerse === totalVerses - 1,
    progress: totalVerses > 0 ? (currentVerse + 1) / totalVerses : 0,
  };
}
