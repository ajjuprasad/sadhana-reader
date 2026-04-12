import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { stotras } from '../data/stotras';
import VerseCard from './VerseCard';
import MalaBead from './MalaBead';
import SettingsDrawer from './SettingsDrawer';
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
  const [settingsOpen, setSettingsOpen] = useState(false);
  const {
    settings,
    updateFontSize,
    toggleDeepamMode,
    toggleContemplationMode,
  } = settingsState;

  const totalVerses = stotra?.verses.length ?? 0;
  const { currentVerse, direction, nextVerse, prevVerse } = useReader(totalVerses);

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

        <h2
          className="font-display font-bold text-sm sm:text-base text-center"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {stotra.title}
        </h2>

        {/* Settings button */}
        <button
          className="p-1 hover:opacity-70 transition-opacity"
          style={{ color: 'var(--color-text-primary)' }}
          onClick={() => setSettingsOpen(true)}
          aria-label="Open settings"
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
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </svg>
        </button>
      </motion.header>

      {/* Main reading area */}
      <div className="flex-1 flex items-center justify-center py-6 sm:py-10 relative overflow-hidden">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={verse.id + '-' + stotra.id}
              custom={direction}
              variants={{
                enter: (d: number) => ({
                  opacity: 0,
                  x: d * 40,
                  rotateY: d * -5,
                  scale: 0.96,
                }),
                center: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
                exit: (d: number) => ({
                  opacity: 0,
                  x: d * -40,
                  rotateY: d * 5,
                  scale: 0.96,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
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

      {/* Settings Drawer */}
      <SettingsDrawer
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        settings={settings}
        onFontSizeChange={updateFontSize}
        onToggleDeepam={toggleDeepamMode}
        onToggleContemplation={toggleContemplationMode}
      />
    </div>
  );
}
