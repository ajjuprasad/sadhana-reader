import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { stotras } from '../data/stotras';
import { stories } from '../data/stories';
import ProfileButton from './ProfileButton';
import HamburgerMenu from './HamburgerMenu';
import FavoriteButton from './FavoriteButton';
import { useTranslation } from '../i18n/useTranslation';
import {
  getStotraOfTheDay,
  getStoryOfTheDay,
  getReflectionOfTheDay,
  getPanchangaSnapshot,
  getTimeGreeting,
} from '../lib/dailyDiscovery';

const sacredEase = [0.76, 0, 0.24, 1] as const;

function tileTransition(index: number) {
  return {
    duration: 0.5,
    delay: index * 0.08,
    ease: sacredEase as unknown as number[],
  };
}

const CATEGORY_COLORS: Record<string, { color: string; bg: string }> = {
  festival:  { color: '#E65100', bg: 'rgba(230, 81, 0, 0.10)' },
  ekadasi:   { color: '#1565C0', bg: 'rgba(21, 101, 192, 0.10)' },
  purnima:   { color: '#6A1B9A', bg: 'rgba(106, 27, 154, 0.10)' },
  amavasya:  { color: '#37474F', bg: 'rgba(55, 71, 79, 0.10)' },
  sankranti: { color: '#F9A825', bg: 'rgba(249, 168, 37, 0.12)' },
  jayanti:   { color: '#2E7D32', bg: 'rgba(46, 125, 50, 0.10)' },
  vrata:     { color: '#AD1457', bg: 'rgba(173, 20, 87, 0.10)' },
};

export default function HomeScreen() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const today = useMemo(() => new Date(), []);

  const stotra = useMemo(() => getStotraOfTheDay(today), [today]);
  const story = useMemo(() => getStoryOfTheDay(today), [today]);
  const reflection = useMemo(() => getReflectionOfTheDay(today), [today]);
  const panchanga = useMemo(() => getPanchangaSnapshot(today), [today]);
  const greeting = useMemo(() => getTimeGreeting(), []);

  const dateStr = today.toLocaleDateString('en-IN', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>Sadhana Reader — Daily Stotras, Stories & Spiritual Practice</title>
        <meta name="description" content="Your daily spiritual companion. Read Hindu stotras, discover stories for kids, and contemplate timeless wisdom — refreshed every day." />
        <link rel="canonical" href="https://sadhanareader.org/" />
      </Helmet>

      {/* Sticky app bar */}
      <div
        className="sticky top-0 z-30"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-1">
            <HamburgerMenu />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5"
            >
              <span
                className="text-xl select-none"
                style={{ color: 'var(--color-accent-primary)' }}
                aria-hidden="true"
              >
                ॐ
              </span>
              <span
                className="font-display font-bold text-base"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {t('home.title')}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-1">
            <a
              href={(() => {
                const message = t('home.shareMessage', { url: window.location.origin });
                return `https://wa.me/?text=${encodeURIComponent(message)}`;
              })()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-text-primary)' }}
              aria-label="Share Sādhanā Reader on WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </a>
            <ProfileButton />
          </div>
        </div>
      </div>

      <div className="px-4 pb-8 sm:pb-12">
        <div className="max-w-3xl mx-auto">

          {/* ── Greeting ── */}
          <motion.header
            className="mt-6 sm:mt-8 mb-6"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={tileTransition(0)}
          >
            <h1
              className="font-display font-bold text-2xl sm:text-3xl tracking-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {greeting}
            </h1>
            <p
              className="font-hind text-sm mt-1"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {dateStr}
              {panchanga.hinduMonth && (
                <span style={{ color: 'var(--color-text-muted)' }}>
                  {' · '}{panchanga.hinduMonth.name} · {panchanga.hinduMonth.sanskrit}
                </span>
              )}
            </p>
          </motion.header>

          {/* ── Stotra of the Day ── */}
          <motion.button
            className="relative w-full text-left rounded-2xl overflow-hidden mb-4 group focus:outline-none focus:ring-2 focus:ring-saffron"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              border: '1px solid rgba(255,153,51,0.15)',
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={tileTransition(1)}
            whileHover={{ scale: 1.01, boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.99 }}
            onClick={() => navigate(`/stotra/${stotra.id}`)}
          >
            <FavoriteButton
              stotraId={stotra.id}
              size={20}
              className="absolute top-3 right-3 z-10"
            />
            <div className="p-5 sm:p-7">
              <p
                className="font-label font-semibold uppercase text-[0.6rem] tracking-[0.14em] mb-3"
                style={{ color: 'var(--color-accent-primary)' }}
              >
                Stotra of the Day
              </p>
              <h2
                className="font-display font-bold text-xl sm:text-2xl mb-1 group-hover:text-saffron transition-colors duration-200 leading-snug"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {stotra.title}
              </h2>
              <p
                className="font-hind text-xs mb-3"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {panchanga.varaName} · {stotra.deity}
              </p>
              <p
                className="font-body text-sm leading-relaxed line-clamp-2 mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {stotra.description}
              </p>
              <span
                className="font-hind font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                style={{ color: 'var(--color-accent-primary)' }}
              >
                Read now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(255,153,51,0.06), transparent)' }}
            />
          </motion.button>

          {/* ── Story of the Day ── */}
          <motion.button
            className="w-full text-left rounded-2xl overflow-hidden mb-4 group focus:outline-none focus:ring-2 focus:ring-saffron"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={tileTransition(2)}
            whileHover={{ scale: 1.01, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.99 }}
            onClick={() => navigate(`/story/${story.id}`)}
          >
            <div className="p-5 sm:p-6">
              <p
                className="font-label font-semibold uppercase text-[0.6rem] tracking-[0.14em] mb-2"
                style={{ color: 'var(--color-accent-primary)' }}
              >
                Story of the Day
              </p>
              <h3
                className="font-display font-bold text-base sm:text-lg leading-snug mb-1 group-hover:text-saffron transition-colors duration-200"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {story.title}
              </h3>
              <p
                className="font-hind text-[0.6rem] uppercase tracking-wider mb-2"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {story.source}
              </p>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {story.moral}
              </p>
              <span
                className="font-hind font-medium text-sm mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                style={{ color: 'var(--color-accent-primary)' }}
              >
                Read
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </motion.button>

          {/* ── Reflection of the Day ── */}
          <motion.div
            className="w-full rounded-2xl overflow-hidden mb-4"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={tileTransition(3)}
          >
            <div className="p-5 sm:p-6">
              <p
                className="font-label font-semibold uppercase text-[0.6rem] tracking-[0.14em] mb-3"
                style={{ color: 'var(--color-accent-gold)' }}
              >
                Reflection
              </p>
              <p
                className="font-body italic text-base leading-relaxed"
                style={{ color: 'var(--color-text-primary)' }}
              >
                "{reflection.text}"
              </p>
              {reflection.sanskrit && (
                <p
                  className="font-body text-sm mt-2"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {reflection.sanskrit}
                </p>
              )}
              <p
                className="font-hind text-xs mt-3 uppercase tracking-wider"
                style={{ color: 'var(--color-text-muted)' }}
              >
                — {reflection.source}
              </p>
            </div>
          </motion.div>

          {/* ── Panchanga Quick-View ── */}
          <motion.button
            className="w-full text-left rounded-2xl overflow-hidden mb-8 group focus:outline-none focus:ring-2 focus:ring-saffron"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={tileTransition(4)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => navigate('/panchanga')}
          >
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <p
                  className="font-label font-semibold uppercase text-[0.6rem] tracking-[0.14em]"
                  style={{ color: 'var(--color-accent-primary)' }}
                >
                  Today's Pañchāṅga
                </p>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-text-muted)' }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>

              {panchanga.hinduMonth && (
                <p
                  className="font-display font-bold text-base mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {panchanga.hinduMonth.name} · {panchanga.hinduMonth.sanskrit}
                  <span
                    className="font-hind font-normal text-xs ml-2"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {panchanga.hinduMonth.season}
                  </span>
                </p>
              )}

              {panchanga.todayEvent && (
                <div
                  className="flex items-center gap-2 mb-2 px-3 py-2 rounded-lg"
                  style={{
                    backgroundColor: CATEGORY_COLORS[panchanga.todayEvent.category]?.bg ?? 'rgba(255,153,51,0.08)',
                  }}
                >
                  <span
                    className="font-label font-semibold text-[0.6rem] uppercase tracking-wider px-1.5 py-0.5 rounded"
                    style={{
                      color: CATEGORY_COLORS[panchanga.todayEvent.category]?.color ?? 'var(--color-accent-primary)',
                    }}
                  >
                    Today
                  </span>
                  <span
                    className="font-hind font-medium text-sm"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {panchanga.todayEvent.name}
                  </span>
                </div>
              )}

              {panchanga.upcoming.length > 0 && (
                <div className="flex flex-col gap-1.5">
                  {panchanga.upcoming.map((event) => (
                    <div key={event.date + event.name} className="flex items-center gap-2">
                      <span
                        className="font-label font-semibold text-[0.55rem] uppercase tracking-wider flex-shrink-0"
                        style={{ color: CATEGORY_COLORS[event.category]?.color ?? 'var(--color-text-muted)' }}
                      >
                        in {event.daysUntil}d
                      </span>
                      <span
                        className="font-hind text-xs"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {event.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.button>

          {/* ── Explore ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={tileTransition(5)}
          >
            <h2
              className="font-display font-bold text-base mb-3"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Explore
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => navigate('/stotras')}
                className="rounded-2xl p-4 sm:p-5 text-left group hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}
              >
                <span className="text-2xl select-none block mb-2">🙏</span>
                <h3
                  className="font-display font-bold text-sm mb-0.5 group-hover:text-saffron transition-colors duration-200"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  All Stotras
                </h3>
                <p
                  className="font-hind text-xs"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {stotras.length} stotras
                </p>
              </button>

              <button
                onClick={() => navigate('/stories')}
                className="rounded-2xl p-4 sm:p-5 text-left group hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}
              >
                <span className="text-2xl select-none block mb-2">📖</span>
                <h3
                  className="font-display font-bold text-sm mb-0.5 group-hover:text-saffron transition-colors duration-200"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  All Stories
                </h3>
                <p
                  className="font-hind text-xs"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {stories.length} stories
                </p>
              </button>
            </div>
          </motion.div>

          {/* ── Footer ── */}
          <footer className="mt-12 mb-4">
            <div
              className="h-px mb-6"
              style={{ backgroundColor: 'var(--color-border, rgba(0,0,0,0.06))' }}
            />
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('/panchanga')}
                  className="font-hind text-xs hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Pañchāṅga 2026
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="font-hind text-xs hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  About Sadhana Reader
                </button>
              </div>
              <p
                className="font-hind text-[0.65rem]"
                style={{ color: 'var(--color-text-muted)', opacity: 0.6 }}
              >
                Open source · Built with devotion
              </p>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
