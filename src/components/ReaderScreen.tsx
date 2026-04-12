import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { stotras } from '../data/stotras';
import VerseCard from './VerseCard';
import MalaBead from './MalaBead';
import { useReader } from '../hooks/useReader';
import type { useSettings } from '../hooks/useSettings';

const sacredEase = [0.76, 0, 0.24, 1] as const;

interface ReaderScreenProps {
  settingsState: ReturnType<typeof useSettings>;
}

export default function ReaderScreen({ settingsState }: ReaderScreenProps) {
  const { stotraId } = useParams<{ stotraId: string }>();
  const navigate = useNavigate();
  const stotra = stotras.find((s) => s.id === stotraId);
  const { settings } = settingsState;

  const totalVerses = stotra?.verses.length ?? 0;
  const { currentVerse, nextVerse, prevVerse } = useReader(totalVerses);

  if (!stotra) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p
            className="font-display text-xl mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Stotra not found
          </p>
          <button
            onClick={() => navigate('/')}
            className="font-hind text-sm underline"
            style={{ color: 'var(--color-accent-primary)' }}
          >
            Return home
          </button>
        </div>
      </div>
    );
  }

  const verse = stotra.verses[currentVerse];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <motion.header
        className="sticky top-0 z-30 flex items-center justify-between px-4 py-3"
        style={{
          backgroundColor: 'var(--color-bg)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: sacredEase as unknown as number[] }}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 font-hind text-sm hover:opacity-70 transition-opacity"
          style={{ color: 'var(--color-text-primary)' }}
          aria-label="Back to home"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Back</span>
        </button>

        <div className="text-center">
          <h2
            className="font-display font-bold text-sm sm:text-base"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {stotra.title}
          </h2>
          <p
            className="font-hind text-xs"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {currentVerse + 1} / {totalVerses}
          </p>
        </div>

        {/* Empty spacer to keep title centered */}
        <div style={{ width: 20 }} />
      </motion.header>

      {/* Main reading area */}
      <div className="flex-1 flex items-center justify-center py-6 sm:py-10 relative overflow-hidden">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={verse.id + '-' + stotra.id}
              initial={{ opacity: 0, x: 60, rotateY: -8, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, x: -60, rotateY: 8, scale: 0.94 }}
              transition={{
                duration: 0.4,
                ease: sacredEase as unknown as number[],
              }}
            >
              <VerseCard
                verse={verse}
                fontSize={settings.fontSize}
                contemplationMode={settings.contemplationMode}
                onSwipeLeft={nextVerse}
                onSwipeRight={prevVerse}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mala bead progress */}
      <div
        className="sticky bottom-0 z-20"
        style={{
          backgroundColor: 'var(--color-bg)',
          borderTop: '1px solid rgba(0,0,0,0.04)',
        }}
      >
        <MalaBead totalVerses={totalVerses} currentVerse={currentVerse} />
      </div>
    </div>
  );
}
