import { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { stotras, comingSoonStotras } from '../data/stotras';
import StotraCard from './StotraCard';
import ComingSoonCard from './ComingSoonCard';
import ProfileButton from './ProfileButton';
import { useAuth } from '../contexts/AuthContext';
import { useFavorites } from '../hooks/useFavorites';
import { useTranslation } from '../i18n/useTranslation';

const sacredEase = [0.76, 0, 0.24, 1] as const;

const recentItems = [
  { id: 'dakshinamurthy-stotram', title: 'Dakshinamurthy Stotram', timestamp: '2026-04-19T23:00:00Z', desc: '10 verses by Adi Shankaracharya revealing the Advaita truth through the south-facing form of Shiva, the supreme Guru.' },
  { id: 'guru-ashtakam', title: 'Guru Ashtakam', timestamp: '2026-04-19T22:30:00Z', desc: '8 verses by Adi Shankaracharya on the supreme importance of the Guru — all attainments are in vain without devotion to the Guru\'s lotus feet.' },
  { id: 'damodarashtakam', title: 'Damodarashtakam', timestamp: '2026-04-19T22:00:00Z', desc: '8 verses by Satyavrata Muni from the Padma Purana, celebrating baby Krishna bound by Mother Yashoda\'s love.' },
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

  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHidden, setHeaderHidden] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeaderHidden(!entry.isIntersecting),
      { threshold: 0, rootMargin: `-${appBarHeight}px 0px 0px 0px` },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [appBarHeight]);

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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 transition-opacity duration-300"
            style={{ opacity: (headerHidden || searchFocused) ? 1 : 0, pointerEvents: (headerHidden || searchFocused) ? 'auto' : 'none' }}
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

      {/* Header */}
      <motion.header
        ref={headerRef}
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

      {/* Favorites — hidden when filtering */}
      {!isFiltering && favoriteStotras.length > 0 && (
        <section className="max-w-3xl mx-auto mb-12 sm:mb-16">
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
              {t('home.favorites')} ({favoriteStotras.length})
            </h2>
            <div
              className="h-px w-12"
              style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.3 }}
            />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {favoriteStotras.map((stotra, index) => (
              <StotraCard
                key={stotra.id}
                stotra={stotra}
                index={index}
                onClick={() => navigate(`/stotra/${stotra.id}`)}
              />
            ))}
          </div>
        </section>
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
              {filteredStotras.map((stotra, index) => (
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
      </section>

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

      {/* Coming soon — hidden when filtering */}
      {!isFiltering && comingSoonStotras.length > 0 && (
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
            {comingSoonStotras.map((stotra, index) => (
              <ComingSoonCard
                key={stotra.id}
                stotra={stotra}
                index={index}
              />
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <motion.footer
        className="text-center mt-12 sm:mt-16 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p
          className="font-hind text-xs mb-3"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {t('home.designedBy')}{' '}
          <a
            href="https://www.linkedin.com/in/ajjuprasad"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
            style={{ color: 'var(--color-accent-primary)' }}
          >
            Ajay Prasad
          </a>
        </p>
        <p
          className="font-hind text-xs"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {t('home.feedbackVia')}{' '}
          <a
            href="https://wa.me/919513097770?text=Hi%20Ajay%2C%20I%20have%20feedback%20on%20Sadhana%20Reader%3A%20"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
            style={{ color: 'var(--color-accent-primary)' }}
          >
            {t('common.whatsapp')}
          </a>
          {' · '}
          <a
            href="mailto:ajaiprasad@gmail.com?subject=Sadhana%20Reader%20Feedback"
            className="underline hover:opacity-80 transition-opacity"
            style={{ color: 'var(--color-accent-primary)' }}
          >
            {t('common.email')}
          </a>
        </p>
      </motion.footer>

    </div>
    </div>
  );
}
