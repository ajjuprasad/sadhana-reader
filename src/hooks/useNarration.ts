import { useState, useRef, useCallback, useEffect } from 'react';
import type { NarrationVoiceGender } from './useSettings';

interface NarrationOptions {
  voiceGender: NarrationVoiceGender;
}

interface NarrationState {
  isActive: boolean;
  isPlaying: boolean;
  isPaused: boolean;
  currentIndex: number;
  totalSegments: number;
}

interface Segment {
  filename: string;
  text: string;
}

function buildSegments(title: string, paragraphs: string[], moral: string): Segment[] {
  const greeting = `Hello! Let me tell you a wonderful story called ${title}. Are you ready? Here we go!`;
  const closing = `And that's the end of our story! Remember: ${moral}`;
  return [
    { filename: '0-greeting.mp3', text: greeting },
    ...paragraphs.map((p, i) => ({ filename: `${i + 1}.mp3`, text: p })),
    { filename: 'closing.mp3', text: closing },
  ];
}

function narrationUrl(storyId: string, gender: NarrationVoiceGender, filename: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalized = base.endsWith('/') ? base : `${base}/`;
  return `${normalized}narration/${storyId}/${gender}/${filename}`;
}

export function useNarration(options: NarrationOptions) {
  const [state, setState] = useState<NarrationState>({
    isActive: false,
    isPlaying: false,
    isPaused: false,
    currentIndex: -1,
    totalSegments: 0,
  });

  const segmentsRef = useRef<Segment[]>([]);
  const storyIdRef = useRef<string | null>(null);
  const indexRef = useRef(-1);
  const activeRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const useStaticRef = useRef(true);
  const optionsRef = useRef(options);
  optionsRef.current = options;

  const cleanup = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute('src');
      audioRef.current.load();
    }
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    speechSynthesis.cancel();
    activeRef.current = false;
    setState({ isActive: false, isPlaying: false, isPaused: false, currentIndex: -1, totalSegments: 0 });
  }, []);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeAttribute('src');
      }
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      speechSynthesis.cancel();
    };
  }, []);

  const getPauseMs = (index: number) => {
    if (index === 0) return 1500;
    if (index === segmentsRef.current.length - 2) return 1200;
    return 800;
  };

  const playFallback = useCallback((index: number) => {
    if (!activeRef.current) return;
    if (index >= segmentsRef.current.length) {
      activeRef.current = false;
      setState({ isActive: false, isPlaying: false, isPaused: false, currentIndex: -1, totalSegments: 0 });
      return;
    }

    useStaticRef.current = false;
    indexRef.current = index;
    setState((s) => ({ ...s, currentIndex: index, isPlaying: true, isPaused: false }));

    const opts = optionsRef.current;
    const utterance = new SpeechSynthesisUtterance(segmentsRef.current[index].text);
    const voices = speechSynthesis.getVoices();
    const english = voices.filter((v) => v.lang.startsWith('en'));

    const FEMALE_HINTS = ['female', 'woman', 'samantha', 'karen', 'moira', 'tessa', 'fiona', 'victoria', 'zira', 'hazel', 'susan', 'linda', 'neerja'];
    const MALE_HINTS = ['male', 'man', 'daniel', 'james', 'david', 'mark', 'alex', 'fred', 'tom', 'george', 'prabhat', 'ravi'];
    const wantedHints = opts.voiceGender === 'female' ? FEMALE_HINTS : MALE_HINTS;
    const unwantedHints = opts.voiceGender === 'female' ? MALE_HINTS : FEMALE_HINTS;

    const scored = english.map((v) => {
      let score = 0;
      const n = v.name.toLowerCase();
      if (n.includes('natural') || n.includes('neural')) score += 50;
      if (n.includes('enhanced') || n.includes('premium')) score += 40;
      if (v.lang === 'en-IN' || n.includes('india')) score += 20;
      if (wantedHints.some((h) => n.includes(h))) score += 30;
      if (unwantedHints.some((h) => n.includes(h))) score -= 30;
      return { voice: v, score };
    }).sort((a, b) => b.score - a.score);

    if (scored.length > 0) utterance.voice = scored[0].voice;
    utterance.rate = 0.85;

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

  const playStatic = useCallback((index: number) => {
    if (!activeRef.current) return;
    if (index >= segmentsRef.current.length) {
      activeRef.current = false;
      setState({ isActive: false, isPlaying: false, isPaused: false, currentIndex: -1, totalSegments: 0 });
      return;
    }

    const storyId = storyIdRef.current;
    if (!storyId) {
      playFallback(index);
      return;
    }

    indexRef.current = index;
    setState((s) => ({ ...s, currentIndex: index, isPlaying: true, isPaused: false }));

    const audio = audioRef.current!;
    const url = narrationUrl(storyId, optionsRef.current.voiceGender, segmentsRef.current[index].filename);

    audio.onended = () => {
      if (!activeRef.current) return;
      pauseTimerRef.current = setTimeout(() => playStatic(index + 1), getPauseMs(index));
    };

    audio.onerror = () => {
      if (!activeRef.current) return;
      playFallback(index);
    };

    audio.src = url;
    audio.play().catch(() => {
      if (!activeRef.current) return;
      playFallback(index);
    });
  }, [playFallback]);

  const start = useCallback((storyId: string, title: string, paragraphs: string[], moral: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute('src');
    }
    speechSynthesis.cancel();
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    useStaticRef.current = true;

    // Reuse or create a single Audio element to satisfy mobile autoplay policy
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const segments = buildSegments(title, paragraphs, moral);
    segmentsRef.current = segments;
    storyIdRef.current = storyId;
    activeRef.current = true;
    indexRef.current = 0;
    setState({
      isActive: true,
      isPlaying: true,
      isPaused: false,
      currentIndex: 0,
      totalSegments: segments.length,
    });

    playStatic(0);
  }, [playStatic]);

  const pause = useCallback(() => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    if (!useStaticRef.current) {
      speechSynthesis.pause();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
    setState((s) => ({ ...s, isPlaying: false, isPaused: true }));
  }, []);

  const resume = useCallback(() => {
    if (!useStaticRef.current) {
      if (speechSynthesis.paused) {
        speechSynthesis.resume();
      } else {
        playFallback(indexRef.current);
      }
    } else if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    setState((s) => ({ ...s, isPlaying: true, isPaused: false }));
  }, [playFallback]);

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
