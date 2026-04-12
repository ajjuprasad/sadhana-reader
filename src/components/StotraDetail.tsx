import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { stotras } from '../data/stotras';
import StotraIcon from './StotraIcon';
import SettingsDrawer from './SettingsDrawer';
import type { useSettings } from '../hooks/useSettings';

const sacredEase = [0.76, 0, 0.24, 1] as const;

interface StotraDetailProps {
  settingsState: ReturnType<typeof useSettings>;
}

export default function StotraDetail({ settingsState }: StotraDetailProps) {
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

        <div />

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

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <motion.div
          className="max-w-md w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: sacredEase as unknown as number[] }}
        >
          {/* Large icon */}
          <div
            className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full"
            style={{ backgroundColor: 'rgba(255,153,51,0.1)' }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 32 32"
              fill="none"
              style={{ color: 'var(--color-accent-gold)' }}
            >
              <StotraIcon stotraId={stotra.id} />
            </svg>
          </div>

          {/* Title */}
          <h1
            className="font-display font-black text-2xl sm:text-3xl mb-1"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {stotra.title}
          </h1>

          {/* Subtitle in Devanagari */}
          <p
            className="font-sanskrit text-lg mb-4"
            style={{ color: 'var(--color-accent-primary)', lineHeight: 1.8 }}
          >
            {stotra.subtitle}
          </p>

          {/* Description */}
          <p
            className="font-body text-sm leading-relaxed mb-6 max-w-sm mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {stotra.description}
          </p>

          {/* Details row */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className="font-hind text-xs px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(255,153,51,0.12)',
                color: 'var(--color-accent-primary)',
              }}
            >
              {stotra.deity}
            </span>
            <span
              className="font-hind text-xs px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(255,153,51,0.12)',
                color: 'var(--color-accent-primary)',
              }}
            >
              {stotra.verses.length} verses
            </span>
            <span
              className="font-hind text-xs px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(255,153,51,0.12)',
                color: 'var(--color-accent-primary)',
              }}
            >
              {stotra.estimatedMinutes} min
            </span>
          </div>

          {/* Start button */}
          <motion.button
            className="font-hind font-semibold text-base px-8 py-3 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'var(--color-accent-primary)' }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(255,153,51,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/read/${stotra.id}`)}
          >
            Begin Reading
          </motion.button>
        </motion.div>
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
