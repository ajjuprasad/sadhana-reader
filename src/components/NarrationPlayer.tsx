import { motion } from 'framer-motion';

interface NarrationPlayerProps {
  isPlaying: boolean;
  isPaused: boolean;
  currentIndex: number;
  totalSegments: number;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
}

export default function NarrationPlayer({
  isPlaying,
  isPaused,
  currentIndex,
  totalSegments,
  onPause,
  onResume,
  onStop,
}: NarrationPlayerProps) {
  const progress = totalSegments > 0 ? ((currentIndex + 1) / totalSegments) * 100 : 0;
  const storyIndex = currentIndex - 1;
  const storyTotal = totalSegments - 2;

  let label: string;
  if (currentIndex === 0) {
    label = 'Introduction';
  } else if (currentIndex >= totalSegments - 1) {
    label = 'Wrapping up';
  } else {
    label = `Paragraph ${storyIndex} of ${storyTotal}`;
  }

  return (
    <motion.div
      className="rounded-2xl p-4 mb-6"
      style={{
        backgroundColor: 'rgba(255,153,51,0.08)',
        border: '1px solid rgba(255,153,51,0.2)',
      }}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3">
        {/* Play/Pause button */}
        <button
          onClick={isPlaying ? onPause : onResume}
          className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full transition-transform active:scale-90"
          style={{ backgroundColor: 'var(--color-accent-primary)' }}
          aria-label={isPlaying ? 'Pause narration' : 'Resume narration'}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          )}
        </button>

        {/* Progress info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5">
            <span
              className="font-hind font-medium text-xs"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {label}
            </span>
            <span
              className="font-hind text-xs"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {isPaused ? 'Paused' : 'Listening'}
            </span>
          </div>
          {/* Progress bar */}
          <div
            className="w-full h-1.5 rounded-full overflow-hidden"
            style={{ backgroundColor: 'rgba(255,153,51,0.15)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: 'var(--color-accent-primary)' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Stop button */}
        <button
          onClick={onStop}
          className="flex-shrink-0 p-2 rounded-full hover:opacity-70 transition-opacity"
          style={{ color: 'var(--color-text-muted)' }}
          aria-label="Stop narration"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
