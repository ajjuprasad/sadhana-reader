import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { stories } from '../data/stories';
import StoryCard from './StoryCard';

export default function StoriesPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const isFiltering = searchQuery.length > 0;

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    if (!q) return stories;
    return stories.filter((s) =>
      s.title.toLowerCase().includes(q) ||
      s.source.toLowerCase().includes(q) ||
      s.subtitle.toLowerCase().includes(q) ||
      s.moral.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="relative min-h-screen pb-8">
      <Helmet>
        <title>Stories for Kids | Sadhana Reader</title>
        <meta name="description" content="Beautiful stories from Hindu mythology for children — tales of courage, kindness, and wisdom from the Ramayana, Bhagavata Purana, and Panchatantra." />
      </Helmet>

      <div className="sticky top-0 z-30" style={{ backgroundColor: 'var(--color-bg)' }}>
        {/* Header bar */}
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
            {isFiltering ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''}` : 'Stories for Kids'}
          </h1>
          <button
            onClick={() => {
              const url = `${window.location.origin}/stories`;
              const text = 'Stories for Kids on Sādhanā Reader. Beautiful tales of courage, kindness and wisdom for children, with narration.';
              if (navigator.share) {
                navigator.share({ title: 'Stories for Kids', text, url }).catch(() => {});
              } else {
                window.open(`https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`, '_blank');
              }
            }}
            className="p-2 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-text-primary)' }}
            aria-label="Share Stories for Kids"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>

        {/* Search bar */}
        <div className="px-4 pb-2">
          <div className="max-w-3xl mx-auto">
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
                placeholder="Search stories by title, source, or moral..."
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
          </div>
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
                📖
              </span>
              <h2 className="font-display font-bold text-xl mt-3 mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Timeless Tales, Little Listeners
              </h2>
              <p className="font-body text-sm leading-relaxed max-w-md mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                Stories of courage, kindness, and wisdom from Hindu mythology —
                written for children aged 5–10, perfect for bedtime reading or storytelling time.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Story grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`grid-${searchQuery}`}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.map((story, index) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  index={index}
                  onClick={() => navigate(`/story/${story.id}`)}
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
                No stories match "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="font-hind font-medium text-xs px-4 py-2 rounded-full transition-opacity hover:opacity-70"
                style={{ backgroundColor: 'var(--color-bg-card)', color: 'var(--color-text-secondary)', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                Clear search
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
