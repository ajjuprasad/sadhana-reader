import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { stotras } from '../data/stotras';
import VerseCard from './VerseCard';
import MalaBead from './MalaBead';
import SettingsDrawer from './SettingsDrawer';
import PetalShower from './PetalShower';
import { useReader } from '../hooks/useReader';
import type { useSettings } from '../hooks/useSettings';
import { useReadCount } from '../hooks/useReadCounts';

const sacredEase = [0.76, 0, 0.24, 1] as const;

interface ReaderScreenProps {
  settingsState: ReturnType<typeof useSettings>;
}

export default function ReaderScreen({ settingsState }: ReaderScreenProps) {
  const { stotraId } = useParams<{ stotraId: string }>();
  const navigate = useNavigate();
  const stotra = stotras.find((s) => s.id === stotraId);
  useReadCount(stotraId, true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [completed, setCompleted] = useState(false);
  const {
    settings,
    updateFontSize,
    toggleDeepamMode,
    toggleHideSanskrit,
    setLanguage,
  } = settingsState;

  const totalVerses = stotra?.verses.length ?? 0;
  const handleComplete = useCallback(() => setCompleted(true), []);
  const { currentVerse, direction, nextVerse, prevVerse, goToVerse } = useReader(
    totalVerses,
    handleComplete
  );

  // Reset completion when switching stotras
  useEffect(() => {
    setCompleted(false);
  }, [stotraId]);

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
        className="sticky top-0 z-30 grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-3"
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
          className="justify-self-start flex items-center gap-2 font-hind text-sm hover:opacity-70 transition-opacity"
          style={{ color: 'var(--color-text-primary)' }}
          aria-label="Back to home"
        >
          <svg
            width="22"
            height="22"
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
          className="font-display font-bold text-sm sm:text-base text-center truncate"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {stotra.title}
        </h2>

        {/* Share + Settings */}
        <div className="justify-self-end flex items-center gap-1">
          <a
            href={(() => {
              const baseUrl = window.location.href.split('#')[0];
              const stotraUrl = `${baseUrl}#/stotra/${stotra.id}`;
              const benefit = stotra.benefits?.[0];
              const message = benefit
                ? `Read ${stotra.title} on Sādhanā Reader.\n${benefit}.\n${stotraUrl}`
                : `Read ${stotra.title} on Sādhanā Reader.\n${stotraUrl}`;
              return `https://wa.me/?text=${encodeURIComponent(message)}`;
            })()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-text-primary)' }}
            aria-label={`Share ${stotra.title}`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </a>

          <button
            className="p-2 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-text-primary)' }}
            onClick={() => setSettingsOpen(true)}
            aria-label="Open settings"
          >
            <svg
              width="22"
              height="22"
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
        </div>
      </motion.header>

      {/* Main reading area */}
      {completed ? (
        <div className="flex-1 flex items-center justify-center px-4 py-10 sm:py-16 relative">
          {/* Pushpāñjali — a shower of flower petals in offering */}
          <PetalShower />
          <motion.div
            className="max-w-md w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: sacredEase as unknown as number[],
            }}
          >
            {/* Lotus/completion glyph */}
            <div
              className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full select-none"
              style={{
                backgroundColor: 'rgba(255,153,51,0.1)',
                color: 'var(--color-accent-primary)',
                fontSize: '2.25rem',
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              ॐ
            </div>

            <h1
              className="font-display font-black text-2xl sm:text-3xl mb-2"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Reading complete
            </h1>

            <p
              className="font-sanskrit text-base mb-4"
              style={{
                color: 'var(--color-accent-primary)',
                lineHeight: 1.8,
              }}
            >
              {stotra.subtitle}
            </p>

            <p
              className="font-body text-sm leading-relaxed mb-8 max-w-sm mx-auto"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Thank you for reading {stotra.title} on Sādhanā Reader. May this
              practice bring peace, devotion, and grace into your day.
            </p>

            {/* Primary CTA: Share */}
            <motion.a
              href={(() => {
                const baseUrl = window.location.href.split('#')[0];
                const stotraUrl = `${baseUrl}#/stotra/${stotra.id}`;
                const benefit = stotra.benefits?.[0];
                const message = benefit
                  ? `Read ${stotra.title} on Sādhanā Reader.\n${benefit}.\n${stotraUrl}`
                  : `Read ${stotra.title} on Sādhanā Reader.\n${stotraUrl}`;
                return `https://wa.me/?text=${encodeURIComponent(message)}`;
              })()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-hind font-semibold text-base px-8 py-3 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'var(--color-accent-primary)' }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 8px 30px rgba(255,153,51,0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Share ${stotra.title}`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Share
            </motion.a>

            {/* Secondary CTA: Return home */}
            <div className="mt-4 flex justify-center">
              <motion.button
                onClick={() => navigate('/')}
                className="font-hind font-medium text-sm px-6 py-2.5 rounded-full"
                style={{
                  color: 'var(--color-accent-primary)',
                  border: '1px solid var(--color-accent-primary)',
                  backgroundColor: 'transparent',
                }}
                whileHover={{
                  scale: 1.04,
                  backgroundColor: 'rgba(255,153,51,0.08)',
                }}
                whileTap={{ scale: 0.96 }}
              >
                Return home
              </motion.button>
            </div>

            {/* Tertiary: Read again */}
            <button
              onClick={() => {
                setCompleted(false);
                goToVerse(0);
              }}
              className="mt-6 font-hind text-xs underline hover:opacity-80 transition-opacity"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Read again
            </button>
          </motion.div>
        </div>
      ) : (
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
                  hideSanskrit={settings.hideSanskrit}
                  onSwipeLeft={nextVerse}
                  onSwipeRight={prevVerse}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Mala bead progress */}
      {!completed && (
        <div
          className="sticky bottom-0 z-20"
          style={{
            backgroundColor: 'var(--color-bg)',
            borderTop: '1px solid rgba(0,0,0,0.04)',
          }}
        >
          <MalaBead totalVerses={totalVerses} currentVerse={currentVerse} />
        </div>
      )}

      {/* Settings Drawer */}
      <SettingsDrawer
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        settings={settings}
        onFontSizeChange={updateFontSize}
        onToggleDeepam={toggleDeepamMode}
        onToggleHideSanskrit={toggleHideSanskrit}
        onLanguageChange={setLanguage}
      />
    </div>
  );
}
