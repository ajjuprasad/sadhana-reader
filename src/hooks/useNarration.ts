import { useState, useRef, useCallback, useEffect } from 'react';
import { synthesize, VOICES } from '../services/edgeTts';
import type { NarrationVoiceGender, NarrationSpeed } from './useSettings';

interface NarrationOptions {
  voiceGender: NarrationVoiceGender;
  speed: NarrationSpeed;
  pitch: number;
}

interface NarrationState {
  isActive: boolean;
  isPlaying: boolean;
  isPaused: boolean;
  currentIndex: number;
  totalSegments: number;
}

const RATE_MAP: Record<NarrationSpeed, string> = {
  slow: '-20%',
  normal: '-10%',
  fast: '+5%',
};

function pitchToSsml(pitch: number): string {
  const pct = Math.round((pitch - 1) * 100);
  return pct >= 0 ? `+${pct}Hz` : `${pct}Hz`;
}

export function useNarration(options: NarrationOptions) {
  const [state, setState] = useState<NarrationState>({
    isActive: false,
    isPlaying: false,
    isPaused: false,
    currentIndex: -1,
    totalSegments: 0,
  });

  const segmentsRef = useRef<string[]>([]);
  const indexRef = useRef(-1);
  const activeRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const audioCacheRef = useRef<Map<number, string>>(new Map());
  const useFallbackRef = useRef(false);

  const clearAudioCache = useCallback(() => {
    audioCacheRef.current.forEach((url) => URL.revokeObjectURL(url));
    audioCacheRef.current.clear();
  }, []);

  const cleanup = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current = null;
    }
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    speechSynthesis.cancel();
    clearAudioCache();
    activeRef.current = false;
    setState({ isActive: false, isPlaying: false, isPaused: false, currentIndex: -1, totalSegments: 0 });
  }, [clearAudioCache]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      speechSynthesis.cancel();
      clearAudioCache();
    };
  }, [clearAudioCache]);

  const prefetchNext = useCallback((index: number) => {
    const next = index + 1;
    if (next >= segmentsRef.current.length) return;
    if (audioCacheRef.current.has(next)) return;

    const voice = VOICES[options.voiceGender];
    synthesize(segmentsRef.current[next], {
      voice,
      rate: RATE_MAP[options.speed],
      pitch: pitchToSsml(options.pitch),
    }).then((blob) => {
      if (activeRef.current) {
        audioCacheRef.current.set(next, URL.createObjectURL(blob));
      }
    }).catch(() => {});
  }, [options.voiceGender, options.speed, options.pitch]);

  const speakWithFallback = useCallback((index: number) => {
    if (!activeRef.current) return;
    if (index >= segmentsRef.current.length) {
      activeRef.current = false;
      setState((s) => ({ ...s, isPlaying: false, isPaused: false, currentIndex: segmentsRef.current.length - 1 }));
      return;
    }

    indexRef.current = index;
    setState((s) => ({ ...s, currentIndex: index, isPlaying: true, isPaused: false }));

    const utterance = new SpeechSynthesisUtterance(segmentsRef.current[index]);
    const voices = speechSynthesis.getVoices();
    const english = voices.filter((v) => v.lang.startsWith('en'));
    if (english.length > 0) utterance.voice = english[0];
    utterance.rate = options.speed === 'slow' ? 0.75 : options.speed === 'fast' ? 1.0 : 0.85;
    utterance.pitch = options.pitch;

    utterance.onend = () => {
      if (!activeRef.current) return;
      const pauseMs = index === 0 ? 1500 : index === segmentsRef.current.length - 2 ? 1200 : 800;
      pauseTimerRef.current = setTimeout(() => speakWithFallback(index + 1), pauseMs);
    };

    speechSynthesis.speak(utterance);
  }, [options.speed, options.pitch]);

  const speakSegment = useCallback((index: number) => {
    if (!activeRef.current) return;
    if (index >= segmentsRef.current.length) {
      activeRef.current = false;
      setState((s) => ({ ...s, isPlaying: false, isPaused: false, currentIndex: segmentsRef.current.length - 1 }));
      return;
    }

    if (useFallbackRef.current) {
      speakWithFallback(index);
      return;
    }

    indexRef.current = index;
    setState((s) => ({ ...s, currentIndex: index, isPlaying: true, isPaused: false }));

    const playAudio = (url: string) => {
      const audio = new Audio(url);
      audioRef.current = audio;

      audio.onended = () => {
        if (!activeRef.current) return;
        const pauseMs = index === 0 ? 1500 : index === segmentsRef.current.length - 2 ? 1200 : 800;
        pauseTimerRef.current = setTimeout(() => speakSegment(index + 1), pauseMs);
      };

      audio.onerror = () => {
        if (!activeRef.current) return;
        speakSegment(index + 1);
      };

      audio.play().catch(() => {
        if (activeRef.current) speakSegment(index + 1);
      });

      prefetchNext(index);
    };

    const cached = audioCacheRef.current.get(index);
    if (cached) {
      playAudio(cached);
      return;
    }

    const voice = VOICES[options.voiceGender];
    synthesize(segmentsRef.current[index], {
      voice,
      rate: RATE_MAP[options.speed],
      pitch: pitchToSsml(options.pitch),
    }).then((blob) => {
      if (!activeRef.current) return;
      const url = URL.createObjectURL(blob);
      audioCacheRef.current.set(index, url);
      playAudio(url);
    }).catch(() => {
      if (!activeRef.current) return;
      useFallbackRef.current = true;
      speakWithFallback(index);
    });
  }, [options.voiceGender, options.speed, options.pitch, prefetchNext, speakWithFallback]);

  const start = useCallback((title: string, paragraphs: string[], moral: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    speechSynthesis.cancel();
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    clearAudioCache();
    useFallbackRef.current = false;

    const greeting = `Hello! Let me tell you a wonderful story called "${title}". Are you ready? Here we go!`;
    const closing = `And that's the end of our story! Remember: ${moral}`;
    const segments = [greeting, ...paragraphs, closing];

    segmentsRef.current = segments;
    activeRef.current = true;
    setState({
      isActive: true,
      isPlaying: true,
      isPaused: false,
      currentIndex: 0,
      totalSegments: segments.length,
    });

    speakSegment(0);
  }, [speakSegment, clearAudioCache]);

  const pause = useCallback(() => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    if (useFallbackRef.current) {
      speechSynthesis.pause();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
    setState((s) => ({ ...s, isPlaying: false, isPaused: true }));
  }, []);

  const resume = useCallback(() => {
    if (useFallbackRef.current) {
      if (speechSynthesis.paused) {
        speechSynthesis.resume();
      } else {
        speakWithFallback(indexRef.current);
      }
    } else if (audioRef.current && audioRef.current.src) {
      audioRef.current.play().catch(() => {});
    } else {
      speakSegment(indexRef.current);
    }
    setState((s) => ({ ...s, isPlaying: true, isPaused: false }));
  }, [speakSegment, speakWithFallback]);

  const stop = useCallback(() => {
    cleanup();
  }, [cleanup]);

  return {
    ...state,
    start,
    pause,
    resume,
    stop,
  };
}
