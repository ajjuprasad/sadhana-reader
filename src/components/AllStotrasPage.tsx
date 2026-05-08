import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { stotras } from '../data/stotras';
import StotraCard from './StotraCard';

export default function AllStotrasPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeity, setSelectedDeity] = useState<string | null>(null);

  const sorted = useMemo(() => [...stotras].sort((a, b) => a.title.localeCompare(b.title)), []);
  const deities = useMemo(() => Array.from(new Set(stotras.map((s) => s.deity))).sort(), []);

  const isFiltering = searchQuery.length > 0 || selectedDeity !== null;

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return sorted.filter((s) => {
      if (selectedDeity && s.deity !== selectedDeity) return false;
      if (q && !s.title.toLowerCase().includes(q) && !s.deity.toLowerCase().includes(q) && !s.description.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [sorted, searchQuery, selectedDeity]);

  return (
    <div className="relative min-h-screen pb-8">
      <Helmet>
        <title>All Stotras | Sadhana Reader</title>
        <meta name="description" content="Browse all Hindu stotras available on Sadhana Reader." />
      </Helmet>

      {/* Sticky header bar */}
      <div className="sticky top-0 z-30" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-sm font-hind transition-opacity hover:opacity-70"
            style={{ color: 'var(--color-accent-primary)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Home
          </button>
          <h1 className="font-display font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>
            {isFiltering ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''}` : `All Stotras (${sorted.length})`}
          </h1>
          <div style={{ width: 42 }} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-4">
        {/* Intro section — hidden while filtering */}
        <AnimatePresence>
          {!isFiltering && (
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-4xl select-none" style={{ color: 'var(--color-accent-primary)' }}>
                🙏
              </span>
              <h2 className="font-display font-bold text-xl mt-3 mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Sacred Verses, Daily Devotion
              </h2>
              <p className="font-body text-sm leading-relaxed max-w-md mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                A curated collection of Hindu stotras and prayers — from Hanuman Chalisa to Vishnu Sahasranamam,
                perfect for daily practice and contemplation.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search bar + deity chips */}
        <div className="mb-4">
          <div className="relative">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stotras by name or deity..."
              className="w-full pl-10 py-2.5 rounded-xl font-hind outline-none transition-shadow duration-200"
              style={{
                fontSize: '16px',
                paddingRight: '36px',
                backgroundColor: 'var(--color-bg-card)',
                color: 'var(--color-text-primary)',
                border: '1px solid transparent',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
                e.currentTarget.style.boxShadow = 'inset 0 0 0 1px var(--color-accent-primary)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:opacity-70"
                style={{ color: 'var(--color-text-muted)' }}
                aria-label="Clear search"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Deity filter chips */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide mt-2.5">
            <button
              onClick={() => setSelectedDeity(null)}
              className="flex-shrink-0 font-hind font-medium text-xs px-3.5 py-1.5 rounded-full transition-all duration-200"
              style={{
                backgroundColor: selectedDeity === null ? 'var(--color-accent-primary)' : 'var(--color-bg-card)',
                color: selectedDeity === null ? '#fff' : 'var(--color-text-secondary)',
                border: selectedDeity === null ? '1px solid transparent' : '1px solid rgba(0,0,0,0.06)',
              }}
            >
              All Deities
            </button>
            {deities.map((deity) => (
              <button
                key={deity}
                onClick={() => setSelectedDeity(selectedDeity === deity ? null : deity)}
                className="flex-shrink-0 font-hind font-medium text-xs px-3.5 py-1.5 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: selectedDeity === deity ? 'var(--color-accent-primary)' : 'var(--color-bg-card)',
                  color: selectedDeity === deity ? '#fff' : 'var(--color-text-secondary)',
                  border: selectedDeity === deity ? '1px solid transparent' : '1px solid rgba(0,0,0,0.06)',
                }}
              >
                {deity}
              </button>
            ))}
          </div>
        </div>

        {/* Stotras grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`grid-${selectedDeity}-${searchQuery}`}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.map((stotra, index) => (
                <StotraCard
                  key={stotra.id}
                  stotra={stotra}
                  index={index}
                  onClick={() => navigate(`/stotra/${stotra.id}`)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="font-body text-sm mb-3" style={{ color: 'var(--color-text-muted)' }}>
                No stotras match "{searchQuery}"
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedDeity(null); }}
                className="font-hind font-medium text-xs px-4 py-2 rounded-full transition-opacity hover:opacity-70"
                style={{ backgroundColor: 'var(--color-bg-card)', color: 'var(--color-text-secondary)', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
