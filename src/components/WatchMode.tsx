import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { storyScenes } from '../data/scenes';
import type { Story } from '../data/stories';
import type { NarrationVoiceGender } from '../hooks/useSettings';

interface WatchModeProps {
  story: Story;
  voiceGender: NarrationVoiceGender;
  onClose: () => void;
}

function buildSegments(title: string, paragraphs: string[], moral: string) {
  const greeting = `Hello! Let me tell you a wonderful story called ${title}. Are you ready? Here we go!`;
  const closing = `And that's the end of our story! Remember: ${moral}`;
  return {
    texts: [greeting, ...paragraphs, closing],
    filenames: [
      '0-greeting.mp3',
      ...paragraphs.map((_, i) => `${i + 1}.mp3`),
      'closing.mp3',
    ],
  };
}

export default function WatchMode({ story, voiceGender, onClose }: WatchModeProps) {
  const scenes = storyScenes[story.id] || [];
  const segments = buildSegments(story.title, story.paragraphs, story.moral);

  const [currentSegment, setCurrentSegment] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [finished, setFinished] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activeRef = useRef(true);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const segmentRef = useRef(0);

  const base = import.meta.env.BASE_URL || '/';
  const norm = base.endsWith('/') ? base : `${base}/`;

  const currentSceneIndex = scenes.findIndex(
    (s) => currentSegment >= s.segmentStart && currentSegment <= s.segmentEnd
  );

  const sceneUrl =
    currentSceneIndex >= 0
      ? `${norm}illustrations/${story.id}/${scenes[currentSceneIndex].image}`
      : '';

  const audioUrl = (filename: string) =>
    `${norm}narration/${story.id}/${voiceGender}/${filename}`;

  const displayText = segments.texts[currentSegment] || '';

  const getPauseMs = (index: number) => {
    if (index === 0) return 1500;
    if (index === segments.texts.length - 2) return 1200;
    return 800;
  };

  const playSegment = useCallback(
    (index: number) => {
      if (!activeRef.current) return;
      if (index >= segments.filenames.length) {
        setFinished(true);
        setIsPlaying(false);
        return;
      }

      segmentRef.current = index;
      setCurrentSegment(index);
      setIsPlaying(true);

      const audio = audioRef.current!;
      audio.onended = () => {
        if (!activeRef.current) return;
        pauseTimerRef.current = setTimeout(
          () => playSegment(index + 1),
          getPauseMs(index)
        );
      };
      audio.onerror = () => {
        if (!activeRef.current) return;
        pauseTimerRef.current = setTimeout(() => playSegment(index + 1), 300);
      };
      audio.src = audioUrl(segments.filenames[index]);
      audio.play().catch(() => {
        if (activeRef.current) {
          pauseTimerRef.current = setTimeout(() => playSegment(index + 1), 300);
        }
      });
    },
    [segments.filenames, voiceGender, story.id]
  );

  useEffect(() => {
    audioRef.current = new Audio();
    activeRef.current = true;
    playSegment(0);

    return () => {
      activeRef.current = false;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeAttribute('src');
      }
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [playSegment]);

  const handleTap = () => {
    if (finished) return;
    if (isPlaying) {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleClose = () => {
    activeRef.current = false;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute('src');
    }
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    onClose();
  };

  const progress =
    segments.texts.length > 0
      ? ((currentSegment + 1) / segments.texts.length) * 100
      : 0;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ backgroundColor: '#000' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleTap}
    >
      {/* Progress bar */}
      <div
        className="absolute top-0 left-0 right-0 z-10 h-1"
        style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
      >
        <motion.div
          className="h-full"
          style={{ backgroundColor: 'var(--color-accent-primary)' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
        className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        aria-label="Close"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Scene image with crossfade */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence>
          {sceneUrl && (
            <motion.img
              key={currentSceneIndex}
              src={sceneUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          )}
        </AnimatePresence>

        {/* Gradient for text readability */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '45%',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
            pointerEvents: 'none',
          }}
        />

        {/* Story text */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 pt-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSegment}
              className="font-body text-sm sm:text-base leading-relaxed text-center max-w-lg mx-auto"
              style={{ color: 'rgba(255,255,255,0.95)', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              {displayText}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Pause indicator */}
        <AnimatePresence>
          {!isPlaying && !finished && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ pointerEvents: 'none' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <polygon points="8,4 20,12 8,20" />
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Finished overlay */}
        <AnimatePresence>
          {finished && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center px-6"
              style={{ backgroundColor: 'rgba(0,0,0,0.65)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <p
                className="font-display font-bold text-xl text-center mb-2"
                style={{ color: '#fff' }}
              >
                {story.title}
              </p>
              <p
                className="font-body text-sm text-center mb-8 max-w-sm"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                {story.moral}
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 rounded-full font-hind font-medium text-sm"
                style={{
                  backgroundColor: 'var(--color-accent-primary)',
                  color: '#fff',
                  boxShadow: '0 4px 14px rgba(255,153,51,0.4)',
                }}
              >
                Done
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
