import { motion } from 'framer-motion';

interface NarrationPlayerProps {
  isPlaying: boolean;
  isPaused: boolean;
  currentIndex: number;
  totalSegments: number;
  storyTitle?: string | null;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
}

export default function NarrationPlayer({
  isPlaying,
  isPaused,
  currentIndex,
  totalSegments,
  storyTitle,
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
    label = `Paragraph ${storyIndex + 1} of ${storyTotal}`;
  }

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-[max(env(safe-area-inset-bottom,12px),12px)] pt-3"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid rgba(255,153,51,0.2)',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="max-w-2xl mx-auto flex items-center gap-3">
        {/* Play/Pause button */}
        <button
          onClick={isPlaying ? onPause : onResume}
          className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full transition-transform active:scale-90"
          style={{ backgroundColor: 'var(--color-accent-primary)' }}
          aria-label={isPlaying ? 'Pause narration' : 'Resume narration'}
        >
          {isPlaying ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          )}
        </button>

        {/* Progress info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              {storyTitle && (
                <p
                  className="font-display font-bold text-xs truncate leading-tight"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {storyTitle}
                </p>
              )}
              <span
                className="font-hind text-[0.65rem]"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {label}
              </span>
            </div>
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
