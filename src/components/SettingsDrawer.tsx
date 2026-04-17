import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Settings } from '../hooks/useSettings';
import type { Language } from '../hooks/useSettings';
import { useTranslation } from '../i18n/useTranslation';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'ml', label: 'മലയാളം' },
];

interface SettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  settings: Settings;
  onSave: (next: Settings) => void;
}

const sacredEase = [0.76, 0, 0.24, 1] as const;

function settingsEqual(a: Settings, b: Settings): boolean {
  return (
    a.fontSize === b.fontSize &&
    a.deepamMode === b.deepamMode &&
    a.hideSanskrit === b.hideSanskrit &&
    a.language === b.language
  );
}

export default function SettingsDrawer({
  isOpen,
  onClose,
  settings,
  onSave,
}: SettingsDrawerProps) {
  const { t } = useTranslation();
  const [draft, setDraft] = useState<Settings>(settings);

  useEffect(() => {
    if (isOpen) setDraft(settings);
  }, [isOpen, settings]);

  const hasChanges = !settingsEqual(draft, settings);

  const handleSave = () => {
    onSave(draft);
    onClose();
  };

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
                {t('settings.title')}
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
                {t('settings.fontSize', { size: draft.fontSize })}
              </label>
              <input
                type="range"
                min={14}
                max={36}
                step={1}
                value={draft.fontSize}
                onChange={(e) => setDraft((d) => ({ ...d, fontSize: Number(e.target.value) }))}
                className="w-full accent-saffron"
                aria-label="Adjust font size"
              />
              {/* Preview */}
              <p
                className="font-sanskrit text-center mt-3"
                lang="sa"
                style={{
                  fontSize: `${draft.fontSize}px`,
                  color: 'var(--color-text-primary)',
                  lineHeight: 2.2,
                }}
              >
                ॐ नमः शिवाय
              </p>
            </div>

            {/* Deepam Mode */}
            <div className="flex items-center justify-between mb-6 py-3">
              <div>
                <p
                  className="font-hind font-semibold text-sm"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {t('settings.deepamMode')}
                </p>
                <p
                  className="font-hind text-xs"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {t('settings.deepamDesc')}
                </p>
              </div>
              <button
                onClick={() => setDraft((d) => ({ ...d, deepamMode: !d.deepamMode }))}
                className={`relative w-12 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-saffron ${
                  draft.deepamMode ? 'bg-saffron' : ''
                }`}
                style={{
                  backgroundColor: draft.deepamMode
                    ? 'var(--color-accent-primary)'
                    : 'var(--color-text-muted)',
                  opacity: draft.deepamMode ? 1 : 0.4,
                }}
                role="switch"
                aria-checked={draft.deepamMode}
                aria-label="Toggle Deepam Mode"
              >
                <span
                  className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300"
                  style={{
                    transform: draft.deepamMode
                      ? 'translateX(20px)'
                      : 'translateX(0)',
                  }}
                />
              </button>
            </div>

            {/* Hide Sanskrit Verses */}
            <div className="flex items-center justify-between py-3 mb-6">
              <div>
                <p
                  className="font-hind font-semibold text-sm"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {t('settings.hideSanskrit')}
                </p>
                <p
                  className="font-hind text-xs"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {t('settings.hideSanskritDesc')}
                </p>
              </div>
              <button
                onClick={() => setDraft((d) => ({ ...d, hideSanskrit: !d.hideSanskrit }))}
                className="relative w-12 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-saffron"
                style={{
                  backgroundColor: draft.hideSanskrit
                    ? 'var(--color-accent-primary)'
                    : 'var(--color-text-muted)',
                  opacity: draft.hideSanskrit ? 1 : 0.4,
                }}
                role="switch"
                aria-checked={draft.hideSanskrit}
                aria-label="Toggle Hide Sanskrit Verses"
              >
                <span
                  className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300"
                  style={{
                    transform: draft.hideSanskrit
                      ? 'translateX(20px)'
                      : 'translateX(0)',
                  }}
                />
              </button>
            </div>

            {/* Language */}
            <div className="py-3">
              <label
                className="block font-hind font-semibold text-sm mb-3"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {t('settings.language')}
              </label>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setDraft((d) => ({ ...d, language: lang.code }))}
                    className="px-4 py-2 rounded-full font-hind text-sm transition-all duration-200"
                    style={{
                      backgroundColor:
                        draft.language === lang.code
                          ? 'var(--color-accent-primary)'
                          : 'transparent',
                      color:
                        draft.language === lang.code
                          ? '#fff'
                          : 'var(--color-text-secondary)',
                      border:
                        draft.language === lang.code
                          ? '1px solid var(--color-accent-primary)'
                          : '1px solid var(--color-text-muted)',
                      opacity: draft.language === lang.code ? 1 : 0.7,
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Save button */}
            <div className="mt-8 flex justify-center">
              <motion.button
                onClick={handleSave}
                disabled={!hasChanges}
                className="font-hind font-semibold text-base px-10 py-3 rounded-full text-white shadow-lg transition-opacity duration-200"
                style={{
                  backgroundColor: 'var(--color-accent-primary)',
                  opacity: hasChanges ? 1 : 0.4,
                  cursor: hasChanges ? 'pointer' : 'not-allowed',
                }}
                whileHover={hasChanges ? { scale: 1.05, boxShadow: '0 8px 30px rgba(255,153,51,0.3)' } : {}}
                whileTap={hasChanges ? { scale: 0.95 } : {}}
              >
                {t('settings.save')}
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
