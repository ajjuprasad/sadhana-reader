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

const FALLBACK_RATE: Record<NarrationSpeed, number> = {
  slow: 0.75,
  normal: 0.85,
  fast: 1.0,
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
  const useEdgeRef = useRef(true);
  const optionsRef = useRef(options);
  optionsRef.current = options;

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

  const getPauseMs = (index: number) => {
    if (index === 0) return 1500;
    if (index === segmentsRef.current.length - 2) return 1200;
    return 800;
  };

  const playFallback = useCallback((index: number) => {
    if (!activeRef.current) return;
    if (index >= segmentsRef.current.length) {
      activeRef.current = false;
      setState((s) => ({ ...s, isPlaying: false, isPaused: false }));
      return;
    }

    useEdgeRef.current = false;
    indexRef.current = index;
    setState((s) => ({ ...s, currentIndex: index, isPlaying: true, isPaused: false }));

    const utterance = new SpeechSynthesisUtterance(segmentsRef.current[index]);
    const voices = speechSynthesis.getVoices();
    const english = voices.filter((v) => v.lang.startsWith('en'));
    const indian = english.filter((v) => v.lang === 'en-IN' || v.name.toLowerCase().includes('india'));
    const neural = english.filter((v) => {
      const n = v.name.toLowerCase();
      return n.includes('natural') || n.includes('neural') || n.includes('enhanced');
    });
    const preferred = indian.length > 0 ? indian : neural.length > 0 ? neural : english;
    if (preferred.length > 0) utterance.voice = preferred[0];

    const opts = optionsRef.current;
    utterance.rate = FALLBACK_RATE[opts.speed];
    utterance.pitch = opts.pitch;

    utterance.onend = () => {
      if (!activeRef.current) return;
      pauseTimerRef.current = setTimeout(() => playFallback(index + 1), getPauseMs(index));
    };
    utterance.onerror = () => {
      if (!activeRef.current) return;
      pauseTimerRef.current = setTimeout(() => playFallback(index + 1), 300);
    };

    speechSynthesis.speak(utterance);
  }, []);

  const playEdge = useCallback((index: number) => {
    if (!activeRef.current) return;
    if (index >= segmentsRef.current.length) {
      activeRef.current = false;
      setState((s) => ({ ...s, isPlaying: false, isPaused: false }));
      return;
    }

    indexRef.current = index;
    setState((s) => ({ ...s, currentIndex: index, isPlaying: true, isPaused: false }));

    const doPlay = (url: string) => {
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => {
        if (!activeRef.current) return;
        pauseTimerRef.current = setTimeout(() => playEdge(index + 1), getPauseMs(index));
      };
      audio.onerror = () => playFallback(index);
      audio.play().catch(() => playFallback(index));

      // Prefetch next segment
      const next = index + 1;
      if (next < segmentsRef.current.length && !audioCacheRef.current.has(next)) {
        const opts = optionsRef.current;
        synthesize(segmentsRef.current[next], {
          voice: VOICES[opts.voiceGender],
          rate: RATE_MAP[opts.speed],
          pitch: pitchToSsml(opts.pitch),
        }).then((blob) => {
          if (activeRef.current) {
            audioCacheRef.current.set(next, URL.createObjectURL(blob));
          }
        }).catch(() => {});
      }
    };

    const cached = audioCacheRef.current.get(index);
    if (cached) {
      doPlay(cached);
      return;
    }

    const opts = optionsRef.current;
    synthesize(segmentsRef.current[index], {
      voice: VOICES[opts.voiceGender],
      rate: RATE_MAP[opts.speed],
      pitch: pitchToSsml(opts.pitch),
    }).then((blob) => {
      if (!activeRef.current) return;
      const url = URL.createObjectURL(blob);
      audioCacheRef.current.set(index, url);
      doPlay(url);
    }).catch(() => {
      if (!activeRef.current) return;
      playFallback(index);
    });
  }, [playFallback]);

  const start = useCallback((title: string, paragraphs: string[], moral: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    speechSynthesis.cancel();
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    clearAudioCache();
    useEdgeRef.current = true;

    const greeting = `Hello! Let me tell you a wonderful story called ${title}. Are you ready? Here we go!`;
    const closing = `And that's the end of our story! Remember: ${moral}`;
    const segments = [greeting, ...paragraphs, closing];

    segmentsRef.current = segments;
    activeRef.current = true;
    indexRef.current = 0;
    setState({
      isActive: true,
      isPlaying: true,
      isPaused: false,
      currentIndex: 0,
      totalSegments: segments.length,
    });

    playEdge(0);
  }, [playEdge, clearAudioCache]);

  const pause = useCallback(() => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    if (!useEdgeRef.current) {
      speechSynthesis.pause();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
    setState((s) => ({ ...s, isPlaying: false, isPaused: true }));
  }, []);

  const resume = useCallback(() => {
    if (!useEdgeRef.current) {
      if (speechSynthesis.paused) {
        speechSynthesis.resume();
      } else {
        playFallback(indexRef.current);
      }
    } else if (audioRef.current && audioRef.current.src) {
      audioRef.current.play().catch(() => {});
    } else {
      playEdge(indexRef.current);
    }
    setState((s) => ({ ...s, isPlaying: true, isPaused: false }));
  }, [playEdge, playFallback]);

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
