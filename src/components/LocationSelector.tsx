import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PanchangaLocation } from '../hooks/useLocation';
import { PRESET_LOCATIONS } from '../hooks/useLocation';

interface Props {
  open: boolean;
  current: PanchangaLocation;
  onSelect: (loc: PanchangaLocation) => void;
  onRequestBrowser: () => Promise<void>;
  onClose: () => void;
}

export default function LocationSelector({ open, current, onSelect, onRequestBrowser, onClose }: Props) {
  const [locating, setLocating] = useState(false);

  const handleBrowser = async () => {
    setLocating(true);
    try {
      await onRequestBrowser();
      onClose();
    } catch {
      // Geolocation denied/failed — user can pick manually
    } finally {
      setLocating(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[100]"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[101] rounded-t-2xl overflow-hidden"
            style={{ backgroundColor: 'var(--color-bg)', maxHeight: '70vh' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          >
            <div className="px-5 pt-5 pb-3">
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="font-display font-bold text-sm"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Select Location
                </h3>
                <button
                  onClick={onClose}
                  className="p-1.5 hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--color-text-muted)' }}
                  aria-label="Close"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <button
                onClick={handleBrowser}
                disabled={locating}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-4 transition-opacity"
                style={{
                  backgroundColor: 'var(--color-accent-primary)',
                  color: '#fff',
                  opacity: locating ? 0.6 : 1,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
                <span className="font-hind font-medium text-sm">
                  {locating ? 'Detecting...' : 'Use my location'}
                </span>
              </button>

              <p
                className="font-hind text-[0.6rem] uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Or choose a city
              </p>

              <div className="grid grid-cols-2 gap-2 pb-6">
                {PRESET_LOCATIONS.map((loc) => {
                  const isActive = loc.name === current.name;
                  return (
                    <button
                      key={loc.name}
                      onClick={() => { onSelect(loc); onClose(); }}
                      className="px-3 py-2.5 rounded-xl font-hind text-sm font-medium text-left transition-all"
                      style={{
                        backgroundColor: isActive ? 'rgba(255,153,51,0.12)' : 'var(--color-bg-card)',
                        color: isActive ? 'var(--color-accent-primary)' : 'var(--color-text-primary)',
                        border: isActive ? '1px solid rgba(255,153,51,0.3)' : '1px solid var(--color-border, rgba(0,0,0,0.06))',
                      }}
                    >
                      {loc.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
