import { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { stotras, comingSoonStotras } from '../data/stotras';
import StotraCard from './StotraCard';
import ComingSoonCard from './ComingSoonCard';
import ProfileButton from './ProfileButton';
import HamburgerMenu from './HamburgerMenu';
import { useAuth } from '../contexts/AuthContext';
import { useFavorites } from '../hooks/useFavorites';
import { useTranslation } from '../i18n/useTranslation';

const sacredEase = [0.76, 0, 0.24, 1] as const;

const recentItems = [
  { id: 'shri-rudram-namakam', title: 'Shri Rudram (Namakam)', timestamp: '2026-04-20T12:00:00Z', desc: '55 verses from the Krishna Yajurveda — the most ancient Vedic hymn to Lord Rudra, with all 11 anuvakas of sacred "namo" salutations.' },
  { id: 'shiva-mahimna-stotram', title: 'Shiva Mahimna Stotram', timestamp: '2026-04-20T11:00:00Z', desc: '35 verses by Pushpadanta extolling the infinite greatness of Lord Shiva — His cosmic dance, transcendence, and boundless compassion.' },
  { id: 'narayana-kavacham', title: 'Narayana Kavacham', timestamp: '2026-04-20T10:30:00Z', desc: 'A powerful protective armor from the Bhagavata Purana invoking Lord Vishnu\'s divine weapons and forms to shield the devotee.' },
  { id: 'siddha-kunjika-stotram', title: 'Siddha Kunjika Stotram', timestamp: '2026-04-20T10:00:00Z', desc: 'The "master key" stotra from the Rudra Yamala Tantra — reciting this alone bestows the fruit of the entire Devi Mahatmyam.' },
  { id: 'indrakshi-stotram', title: 'Indrakshi Stotram', timestamp: '2026-04-20T09:30:00Z', desc: 'A hymn to Goddess Indrakshi (Durga) from the Skanda Purana, invoking her protection and grace through her thousand-eyed form.' },
];

function formatLocalTime(iso: string): string {
  const d = new Date(iso);
  const date = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  const time = d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  const tz = d.toLocaleTimeString(undefined, { timeZoneName: 'short' }).split(' ').pop() || '';
  return `${date}, ${time} ${tz}`;
}

function RecentList({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="flex flex-col gap-3">
      {recentItems.map((item, i) => (
        <motion.button
          key={item.id}
          onClick={() => navigate(`/stotra/${item.id}`)}
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-left"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{
            duration: 0.4,
            delay: i * 0.08,
            ease: sacredEase as unknown as number[],
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex-1 min-w-0">
            <p
              className="font-hind font-medium uppercase"
              style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem', letterSpacing: '0.08em' }}
            >
              {formatLocalTime(item.timestamp)}
            </p>
            <p
              className="font-display font-semibold text-sm mt-0.5"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {item.title}
            </p>
            <p
              className="font-body text-xs mt-1 leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {item.desc}
            </p>
          </div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>
      ))}
    </div>
  );
}

const COMING_SOON_INITIAL = 6;

function ComingSoonSection() {
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();
  const visible = showAll ? comingSoonStotras : comingSoonStotras.slice(0, COMING_SOON_INITIAL);
  const hasMore = comingSoonStotras.length > COMING_SOON_INITIAL;

  return (
    <section className="max-w-3xl mx-auto mt-12 sm:mt-16">
      <motion.div
        className="flex items-center justify-center gap-2 mb-5 sm:mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: sacredEase as unknown as number[] }}
      >
        <div
          className="h-px w-12"
          style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.3 }}
        />
        <h2
          className="font-hind font-semibold uppercase"
          style={{
            fontSize: '0.625rem',
            color: 'var(--color-accent-primary)',
            letterSpacing: '0.18em',
          }}
        >
          {t('home.comingSoon')} ({comingSoonStotras.length})
        </h2>
        <div
          className="h-px w-12"
          style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.3 }}
        />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        <AnimatePresence initial={false}>
          {visible.map((stotra, index) => (
            <motion.div
              key={stotra.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index >= COMING_SOON_INITIAL ? (index - COMING_SOON_INITIAL) * 0.04 : 0 }}
            >
              <ComingSoonCard stotra={stotra} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && !showAll && (
        <motion.button
          onClick={() => setShowAll(true)}
          className="mx-auto mt-5 flex items-center gap-2 px-5 py-2.5 rounded-full font-hind text-xs font-medium tracking-wide transition-colors"
          style={{
            color: 'var(--color-accent-primary)',
            backgroundColor: 'var(--color-accent-primary-bg, rgba(255, 153, 51, 0.08))',
            border: '1px solid var(--color-accent-primary)',
            opacity: 0.85,
          }}
          whileHover={{ opacity: 1, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Show all {comingSoonStotras.length} upcoming
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.button>
      )}
    </section>
  );
}

export default function HomeScreen() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useAuth();
  const { favoriteIds } = useFavorites();
  const favoriteStotras = user ? stotras.filter((s) => favoriteIds.includes(s.id)) : [];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeity, setSelectedDeity] = useState<string | null>(null);

  const deities = useMemo(
    () => Array.from(new Set(stotras.map((s) => s.deity))).sort(),
    [],
  );

  const isFiltering = searchQuery.length > 0 || selectedDeity !== null;
  const searchSentinelRef = useRef<HTMLDivElement>(null);
  const appBarRef = useRef<HTMLDivElement>(null);
  const [appBarHeight, setAppBarHeight] = useState(44);
  const [isStuck, setIsStuck] = useState(false);
  const [chipsExpanded, setChipsExpanded] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showAllStotras, setShowAllStotras] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const activateSearch = useCallback(() => {
    flushSync(() => setSearchFocused(true));
    searchInputRef.current?.focus();
  }, []);

  useEffect(() => {
    const bar = appBarRef.current;
    if (bar) setAppBarHeight(bar.getBoundingClientRect().height);
  }, []);

  useEffect(() => {
    const el = searchSentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
        if (entry.isIntersecting) setChipsExpanded(false);
      },
      { threshold: 0, rootMargin: `-${appBarHeight}px 0px 0px 0px` },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [appBarHeight]);

  const filteredStotras = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return stotras.filter((s) => {
      if (selectedDeity && s.deity !== selectedDeity) return false;
      if (q && !s.title.toLowerCase().includes(q) && !s.deity.toLowerCase().includes(q) && !s.description.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [searchQuery, selectedDeity]);



  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>Sadhana Reader — A Digital Sanctum for Hindu Stotras</title>
        <meta name="description" content="Read and contemplate Hindu stotras including Hanuman Chalisa, Bhaja Govindam, Vishnu Sahasranamam, and more. A beautiful, ad-free digital sanctum for daily practice." />
        <link rel="canonical" href="https://sadhanareader.org/" />
      </Helmet>
      {/* Sticky app bar + docked search */}
      <div
        ref={appBarRef}
        className="sticky top-0 z-30"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-1">
            <HamburgerMenu />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 transition-opacity duration-300"
              style={{ opacity: (isStuck || searchFocused) ? 1 : 0, pointerEvents: (isStuck || searchFocused) ? 'auto' : 'none' }}
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

        {/* Search bar — appears in sticky header when docked or activated */}
        {(isStuck || searchFocused) && (
          <div
            className="px-4 pb-2 transition-shadow duration-200"
            style={{ boxShadow: isStuck ? '0 2px 8px rgba(0,0,0,0.06)' : 'none' }}
          >
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
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('home.searchPlaceholder')}
                  className="w-full pl-10 py-2.5 rounded-xl font-hind outline-none transition-shadow duration-200"
                  style={{
                    fontSize: '16px',
                    paddingRight: isStuck ? '70px' : '36px',
                    backgroundColor: 'var(--color-bg-card)',
                    color: 'var(--color-text-primary)',
                    border: '1px solid transparent',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
                    e.currentTarget.style.boxShadow = 'inset 0 0 0 1px var(--color-accent-primary)';
                    setSearchFocused(true);
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
                    setSearchFocused(false);
                  }}
                />
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="p-1 rounded-full hover:opacity-70"
                      style={{ color: 'var(--color-text-muted)' }}
                      aria-label="Clear search"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  )}
                  {isStuck && (
                    <button
                      onClick={() => setChipsExpanded(!chipsExpanded)}
                      className="relative p-1 rounded-full transition-colors duration-150"
                      style={{
                        color: selectedDeity || chipsExpanded ? 'var(--color-accent-primary)' : 'var(--color-text-muted)',
                      }}
                      aria-label="Toggle filters"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="7" y1="12" x2="17" y2="12" />
                        <line x1="10" y1="18" x2="14" y2="18" />
                      </svg>
                      {selectedDeity && (
                        <span
                          className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full"
                          style={{ backgroundColor: 'var(--color-accent-primary)' }}
                        />
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Deity filter chips */}
              {(!isStuck || chipsExpanded) && (
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide mt-2.5">
                  <button
                    onClick={() => { setSelectedDeity(null); if (isStuck) setChipsExpanded(false); }}
                    className="flex-shrink-0 font-hind font-medium text-xs px-3.5 py-1.5 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: selectedDeity === null ? 'var(--color-accent-primary)' : 'var(--color-bg-card)',
                      color: selectedDeity === null ? '#fff' : 'var(--color-text-secondary)',
                      border: selectedDeity === null ? '1px solid transparent' : '1px solid rgba(0,0,0,0.06)',
                    }}
                  >
                    {t('home.allDeities')}
                  </button>
                  {deities.map((deity) => (
                    <button
                      key={deity}
                      onClick={() => { setSelectedDeity(selectedDeity === deity ? null : deity); if (isStuck) setChipsExpanded(false); }}
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
              )}
            </div>
          </div>
        )}
      </div>

    <div className="px-4 pb-8 sm:pb-12">

      {/* Header — hidden when search is active */}
      {!searchFocused && (
      <motion.header
        className="text-center mb-10 sm:mb-14 mt-6 sm:mt-8"
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
          {t('home.title')}
        </h1>
        <p
          className="font-body text-sm mt-2 italic"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {t('home.subtitle')}
        </p>
      </motion.header>
      )}

      {/* Sentinel — triggers isStuck when scrolled behind app bar */}
      <div ref={searchSentinelRef} className="h-0" />

      {/* Fake search bar — tap target in flow position */}
      {!isStuck && !searchFocused && (
        <div className="mb-3">
          <div className="max-w-3xl mx-auto">
            <div className="relative cursor-text" onClick={activateSearch}>
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
              <div
                className="w-full pl-10 pr-9 py-2.5 rounded-xl font-hind select-none"
                style={{
                  fontSize: '16px',
                  backgroundColor: 'var(--color-bg-card)',
                  color: searchQuery ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                  border: '1px solid transparent',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                {searchQuery || t('home.searchPlaceholder')}
              </div>
              {searchQuery && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSearchQuery(''); }}
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
                {t('home.allDeities')}
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
        </div>
      )}

      {/* Stotras — filtered or all */}
      <section className="max-w-3xl mx-auto">
        {!isFiltering && (
          <motion.div
            className="flex items-center justify-center gap-2 mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: sacredEase as unknown as number[] }}
          >
            <div
              className="h-px w-12"
              style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.3 }}
            />
            <h2
              className="font-hind font-semibold uppercase"
              style={{
                fontSize: '0.625rem',
                color: 'var(--color-accent-primary)',
                letterSpacing: '0.18em',
              }}
            >
              {t('home.allStotras')} ({stotras.length})
            </h2>
            <div
              className="h-px w-12"
              style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.3 }}
            />
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {filteredStotras.length > 0 ? (
            <motion.div
              key={`grid-${selectedDeity}-${searchQuery}`}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {(isFiltering || showAllStotras ? filteredStotras : filteredStotras.slice(0, 18)).map((stotra, index) => (
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="text-4xl mb-3 select-none"
                style={{ color: 'var(--color-accent-primary)', opacity: 0.4 }}
                aria-hidden="true"
              >
                ॐ
              </div>
              <p
                className="font-display font-semibold text-base mb-1"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {t('home.noResults')}
              </p>
              <p
                className="font-body text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {t('home.noResultsHint')}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {!isFiltering && !showAllStotras && filteredStotras.length > 18 && (
          <motion.button
            onClick={() => setShowAllStotras(true)}
            className="mx-auto mt-6 flex items-center gap-2 px-5 py-2.5 rounded-full font-hind text-xs font-medium tracking-wide transition-colors"
            style={{
              color: 'var(--color-accent-primary)',
              backgroundColor: 'var(--color-accent-primary-bg, rgba(255, 153, 51, 0.08))',
              border: '1px solid var(--color-accent-primary)',
              opacity: 0.85,
            }}
            whileHover={{ opacity: 1, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Show all {filteredStotras.length} stotras
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.button>
        )}
      </section>

      {/* Panchanga banner — hidden when filtering */}
      {!isFiltering && (
        <motion.section
          className="max-w-3xl mx-auto mt-10 sm:mt-14 px-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate('/panchanga')}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-transform active:scale-[0.98]"
            style={{
              backgroundColor: 'var(--color-accent-primary-bg, rgba(255, 153, 51, 0.06))',
              border: '1px solid var(--color-accent-primary)',
              borderColor: 'rgba(255, 153, 51, 0.2)',
            }}
          >
            <span className="text-2xl select-none" style={{ color: 'var(--color-accent-primary)' }}>
              🪔
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>
                Pañchāṅga 2026
              </p>
              <p className="font-hind text-xs mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>
                Hindu calendar — festivals, Ekādaśī, Pūrṇimā & more
              </p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-primary)', opacity: 0.6 }}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </motion.section>
      )}

      {/* Recently added — hidden when filtering */}
      {!isFiltering && (
      <section className="max-w-3xl mx-auto mt-12 sm:mt-16">
        <motion.div
          className="flex items-center justify-center gap-2 mb-5 sm:mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: sacredEase as unknown as number[] }}
        >
          <div
            className="h-px w-12"
            style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.3 }}
          />
          <h2
            className="font-hind font-semibold uppercase"
            style={{
              fontSize: '0.625rem',
              color: 'var(--color-accent-primary)',
              letterSpacing: '0.18em',
            }}
          >
            {t('home.recentlyAdded')}
          </h2>
          <div
            className="h-px w-12"
            style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.3 }}
          />
        </motion.div>

        <RecentList navigate={navigate} />
      </section>
      )}


      {/* Footer nav */}
      <motion.footer
        className="max-w-3xl mx-auto mt-12 sm:mt-16 pb-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="h-px w-full mb-6" style={{ backgroundColor: 'var(--color-border, rgba(0,0,0,0.06))' }} />
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            { label: 'Pañchāṅga 2026', path: '/panchanga' },
            { label: 'About Sadhana Reader', path: '/about' },
          ].map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className="font-hind text-xs font-medium hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-accent-primary)' }}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <p
          className="font-hind text-[0.6rem] text-center mt-4"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Open source · Built with devotion
        </p>
      </motion.footer>

    </div>
    </div>
  );
}
