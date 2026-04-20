import { useState, useRef, useCallback, useEffect } from 'react';
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

const SPEED_MAP: Record<NarrationSpeed, number> = {
  slow: 0.75,
  normal: 0.85,
  fast: 1.0,
};

const FEMALE_HINTS = ['female', 'woman', 'samantha', 'karen', 'moira', 'tessa', 'fiona', 'victoria', 'zira', 'hazel', 'susan', 'linda'];
const MALE_HINTS = ['male', 'man', 'daniel', 'james', 'david', 'mark', 'alex', 'fred', 'tom', 'george'];

function scoreVoice(voice: SpeechSynthesisVoice, gender: NarrationVoiceGender): number {
  let score = 0;
  const name = voice.name.toLowerCase();

  if (name.includes('natural') || name.includes('neural')) score += 50;
  if (name.includes('enhanced') || name.includes('premium')) score += 40;
  if (voice.localService) score += 5;

  const genderHints = gender === 'female' ? FEMALE_HINTS : MALE_HINTS;
  const oppositeHints = gender === 'female' ? MALE_HINTS : FEMALE_HINTS;
  if (genderHints.some((h) => name.includes(h))) score += 30;
  if (oppositeHints.some((h) => name.includes(h))) score -= 30;

  if (name.includes('google') && name.includes('uk') && name.includes('english')) score += 20;
  if (name.includes('google')) score += 10;

  return score;
}

function selectVoice(gender: NarrationVoiceGender): SpeechSynthesisVoice | null {
  const voices = speechSynthesis.getVoices();
  const english = voices.filter((v) => v.lang.startsWith('en'));
  if (english.length === 0) return voices[0] || null;
  english.sort((a, b) => scoreVoice(b, gender) - scoreVoice(a, gender));
  return english[0];
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
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef(false);

  const cleanup = useCallback(() => {
    speechSynthesis.cancel();
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    activeRef.current = false;
    setState({ isActive: false, isPlaying: false, isPaused: false, currentIndex: -1, totalSegments: 0 });
  }, []);

  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  const speakSegment = useCallback((index: number) => {
    if (!activeRef.current) return;
    if (index >= segmentsRef.current.length) {
      activeRef.current = false;
      setState((s) => ({ ...s, isPlaying: false, isPaused: false, currentIndex: segmentsRef.current.length - 1 }));
      return;
    }

    indexRef.current = index;
    setState((s) => ({ ...s, currentIndex: index, isPlaying: true, isPaused: false }));

    const utterance = new SpeechSynthesisUtterance(segmentsRef.current[index]);
    const voice = selectVoice(options.voiceGender);
    if (voice) utterance.voice = voice;
    utterance.rate = SPEED_MAP[options.speed];
    utterance.pitch = options.pitch;
    utterance.volume = 1;

    utterance.onend = () => {
      if (!activeRef.current) return;
      const isGreeting = index === 0;
      const isLastParagraph = index === segmentsRef.current.length - 2;
      const pauseMs = isGreeting ? 1500 : isLastParagraph ? 1200 : 800;

      pauseTimerRef.current = setTimeout(() => {
        speakSegment(index + 1);
      }, pauseMs);
    };

    speechSynthesis.speak(utterance);
  }, [options.voiceGender, options.speed, options.pitch]);

  const start = useCallback((title: string, paragraphs: string[], moral: string) => {
    speechSynthesis.cancel();
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);

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
  }, [speakSegment]);

  const pause = useCallback(() => {
    speechSynthesis.pause();
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    setState((s) => ({ ...s, isPlaying: false, isPaused: true }));
  }, []);

  const resume = useCallback(() => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      setState((s) => ({ ...s, isPlaying: true, isPaused: false }));
    } else {
      speakSegment(indexRef.current);
    }
  }, [speakSegment]);

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
