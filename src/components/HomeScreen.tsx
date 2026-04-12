import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { stotras } from '../data/stotras';
import StotraCard from './StotraCard';
import SettingsDrawer from './SettingsDrawer';
import type { useSettings } from '../hooks/useSettings';

const sacredEase = [0.76, 0, 0.24, 1] as const;

interface HomeScreenProps {
  settingsState: ReturnType<typeof useSettings>;
}

export default function HomeScreen({ settingsState }: HomeScreenProps) {
  const navigate = useNavigate();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const {
    settings,
    updateFontSize,
    toggleDeepamMode,
    toggleContemplationMode,
  } = settingsState;

  return (
    <div className="relative min-h-screen px-4 py-8 sm:py-12">
      {/* Settings gear - top right */}
      <motion.button
        className="fixed top-4 right-4 z-30 p-2 rounded-full hover:opacity-70 transition-opacity"
        style={{
          color: 'var(--color-text-primary)',
          backgroundColor: 'var(--color-bg-card)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
        onClick={() => setSettingsOpen(true)}
        aria-label="Open settings"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
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
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      </motion.button>

      {/* Header */}
      <motion.header
        className="text-center mb-10 sm:mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: sacredEase as unknown as number[] }}
      >
        <div
          className="text-5xl mb-3 select-none"
          style={{ color: 'var(--color-accent-primary)' }}
          aria-hidden="true"
        >
          ॐ
        </div>
        <h1
          className="font-display font-black text-3xl sm:text-4xl tracking-tight mb-2"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Sadhana Reader
        </h1>
        <p
          className="font-sanskrit text-lg"
          lang="sa"
          style={{ color: 'var(--color-text-secondary)', opacity: 0.8 }}
        >
          साधना पाठक
        </p>
        <p
          className="font-body text-sm mt-2 italic"
          style={{ color: 'var(--color-text-muted)' }}
        >
          A digital sanctum for contemplation
        </p>
      </motion.header>

      {/* Grid */}
      <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        {stotras.map((stotra, index) => (
          <StotraCard
            key={stotra.id}
            stotra={stotra}
            index={index}
            onClick={() => navigate(`/read/${stotra.id}`)}
          />
        ))}
      </div>

      {/* Footer */}
      <motion.footer
        className="text-center mt-12 sm:mt-16 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p
          className="font-hind text-xs"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Crafted with devotion
        </p>
      </motion.footer>

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
