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
      {/* Top bar with settings */}
      <div className="flex justify-end mb-2">
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
