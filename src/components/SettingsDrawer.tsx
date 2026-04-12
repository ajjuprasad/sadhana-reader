import { motion, AnimatePresence } from 'framer-motion';
import DiyaFlame from './DiyaFlame';
import type { Settings } from '../hooks/useSettings';

interface SettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  settings: Settings;
  onFontSizeChange: (size: number) => void;
  onToggleDeepam: () => void;
  onToggleContemplation: () => void;
}

const sacredEase = [0.76, 0, 0.24, 1] as const;

export default function SettingsDrawer({
  isOpen,
  onClose,
  settings,
  onFontSizeChange,
  onToggleDeepam,
  onToggleContemplation,
}: SettingsDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl px-6 pt-6 pb-8 max-h-[80vh] overflow-y-auto"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              boxShadow: '0 -4px 30px rgba(0,0,0,0.15)',
            }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.5, ease: sacredEase as unknown as number[] }}
            role="dialog"
            aria-label="Settings"
          >
            {/* Handle */}
            <div className="flex justify-center mb-4">
              <div
                className="w-10 h-1 rounded-full"
                style={{ backgroundColor: 'var(--color-text-muted)', opacity: 0.4 }}
              />
            </div>

            {/* Header with close button */}
            <div className="flex items-center justify-between mb-6">
              <div style={{ width: 28 }} />
              <h2
                className="font-display font-bold text-xl"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Settings
              </h2>
              <button
                onClick={onClose}
                className="p-1 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-text-muted)' }}
                aria-label="Close settings"
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Font Size */}
            <div className="mb-8">
              <label
                className="block font-hind font-semibold text-sm mb-3"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Font Size: {settings.fontSize}px
              </label>
              <input
                type="range"
                min={14}
                max={36}
                step={1}
                value={settings.fontSize}
                onChange={(e) => onFontSizeChange(Number(e.target.value))}
                className="w-full accent-saffron"
                aria-label="Adjust font size"
              />
              {/* Preview */}
              <p
                className="font-sanskrit text-center mt-3"
                lang="sa"
                style={{
                  fontSize: `${settings.fontSize}px`,
                  color: 'var(--color-text-primary)',
                  lineHeight: 2.2,
                }}
              >
                ॐ नमः शिवाय
              </p>
            </div>

            {/* Deepam Mode */}
            <div className="flex items-center justify-between mb-6 py-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-6" style={{ paddingTop: 3 }}>
                  <DiyaFlame size={24} />
                </div>
                <div>
                  <p
                    className="font-hind font-semibold text-sm"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    Deepam Mode
                  </p>
                  <p
                    className="font-hind text-xs"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Warm, lamp-lit dark theme
                  </p>
                </div>
              </div>
              <button
                onClick={onToggleDeepam}
                className={`relative w-12 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-saffron ${
                  settings.deepamMode ? 'bg-saffron' : ''
                }`}
                style={{
                  backgroundColor: settings.deepamMode
                    ? 'var(--color-accent-primary)'
                    : 'var(--color-text-muted)',
                  opacity: settings.deepamMode ? 1 : 0.4,
                }}
                role="switch"
                aria-checked={settings.deepamMode}
                aria-label="Toggle Deepam Mode"
              >
                <span
                  className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300"
                  style={{
                    transform: settings.deepamMode
                      ? 'translateX(20px)'
                      : 'translateX(0)',
                  }}
                />
              </button>
            </div>

            {/* Contemplation Mode */}
            <div className="flex items-center justify-between py-3">
              <div>
                <p
                  className="font-hind font-semibold text-sm"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Contemplation Mode
                </p>
                <p
                  className="font-hind text-xs"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Shows only Sanskrit and meaning
                </p>
              </div>
              <button
                onClick={onToggleContemplation}
                className="relative w-12 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-saffron"
                style={{
                  backgroundColor: settings.contemplationMode
                    ? 'var(--color-accent-primary)'
                    : 'var(--color-text-muted)',
                  opacity: settings.contemplationMode ? 1 : 0.4,
                }}
                role="switch"
                aria-checked={settings.contemplationMode}
                aria-label="Toggle Contemplation Mode"
              >
                <span
                  className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300"
                  style={{
                    transform: settings.contemplationMode
                      ? 'translateX(20px)'
                      : 'translateX(0)',
                  }}
                />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
