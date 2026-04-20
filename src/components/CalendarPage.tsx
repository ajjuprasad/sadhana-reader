import { useState, useRef, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { calendarEvents2026, hinduMonths2026 } from '../data/calendar2026';
import type { CalendarEvent, EventCategory } from '../data/calendar2026';
import ProfileButton from './ProfileButton';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const CATEGORY_CONFIG: Record<EventCategory, { label: string; color: string; bg: string }> = {
  festival:  { label: 'Festival',  color: '#E65100', bg: 'rgba(230, 81, 0, 0.10)' },
  ekadasi:   { label: 'Ekādaśī',  color: '#1565C0', bg: 'rgba(21, 101, 192, 0.10)' },
  purnima:   { label: 'Pūrṇimā',  color: '#6A1B9A', bg: 'rgba(106, 27, 154, 0.10)' },
  amavasya:  { label: 'Amāvasyā', color: '#37474F', bg: 'rgba(55, 71, 79, 0.10)' },
  sankranti: { label: 'Saṅkrānti', color: '#F9A825', bg: 'rgba(249, 168, 37, 0.12)' },
  jayanti:   { label: 'Jayantī',  color: '#2E7D32', bg: 'rgba(46, 125, 50, 0.10)' },
  vrata:     { label: 'Vrata',    color: '#AD1457', bg: 'rgba(173, 20, 87, 0.10)' },
};

function getHinduMonthForDate(dateStr: string): string | null {
  for (const m of hinduMonths2026) {
    if (dateStr >= m.startDate && dateStr <= m.endDate) {
      return `${m.name} (${m.sanskrit}) · ${m.season}`;
    }
  }
  return null;
}

function CategoryBadge({ category }: { category: EventCategory }) {
  const cfg = CATEGORY_CONFIG[category];
  return (
    <span
      className="inline-block px-2 py-0.5 rounded-full font-hind text-[0.6rem] font-semibold tracking-wide uppercase"
      style={{ color: cfg.color, backgroundColor: cfg.bg }}
    >
      {cfg.label}
    </span>
  );
}

function EventCard({ event, index }: { event: CalendarEvent; index: number }) {
  const d = new Date(event.date + 'T00:00:00');
  const day = d.getDate();
  const weekday = d.toLocaleDateString('en-US', { weekday: 'short' });
  const cfg = CATEGORY_CONFIG[event.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
      className="flex gap-3 sm:gap-4 py-3 sm:py-4"
      style={{ borderBottom: '1px solid var(--color-border, rgba(0,0,0,0.06))' }}
    >
      <div className="flex flex-col items-center justify-start pt-0.5" style={{ minWidth: '2.8rem' }}>
        <span
          className="text-lg sm:text-xl font-display font-bold leading-none"
          style={{ color: cfg.color }}
        >
          {day}
        </span>
        <span
          className="text-[0.6rem] font-hind font-medium uppercase tracking-wider mt-0.5"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {weekday}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3
            className="font-display font-semibold text-sm sm:text-base leading-snug"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {event.name}
          </h3>
          <CategoryBadge category={event.category} />
        </div>
        {event.sanskrit && (
          <p
            className="font-body text-xs mt-0.5"
            style={{ color: 'var(--color-accent-primary)', opacity: 0.8 }}
          >
            {event.sanskrit}
          </p>
        )}
        <p
          className="font-body text-xs sm:text-sm mt-1 leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {event.description}
        </p>
        {event.deity && (
          <p
            className="font-hind text-[0.65rem] mt-1 uppercase tracking-wider"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {event.deity}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function CalendarPage() {
  const navigate = useNavigate();
  const now = new Date();
  const currentMonthIndex = now.getMonth();
  const [selectedMonth, setSelectedMonth] = useState(currentMonthIndex);
  const [selectedCategories, setSelectedCategories] = useState<Set<EventCategory>>(new Set());
  const chipScrollRef = useRef<HTMLDivElement>(null);

  const eventsForMonth = useMemo(() => {
    const monthStr = String(selectedMonth + 1).padStart(2, '0');
    return calendarEvents2026.filter((e) => e.date.startsWith(`2026-${monthStr}`));
  }, [selectedMonth]);

  const filteredEvents = useMemo(() => {
    if (selectedCategories.size === 0) return eventsForMonth;
    return eventsForMonth.filter((e) => selectedCategories.has(e.category));
  }, [eventsForMonth, selectedCategories]);

  const hinduMonthLabel = useMemo(() => {
    const mid = `2026-${String(selectedMonth + 1).padStart(2, '0')}-15`;
    return getHinduMonthForDate(mid);
  }, [selectedMonth]);

  const toggleCategory = (cat: EventCategory) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  useEffect(() => {
    if (chipScrollRef.current) {
      const btn = chipScrollRef.current.children[selectedMonth] as HTMLElement | undefined;
      btn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [selectedMonth]);

  const upcomingEvent = useMemo(() => {
    const today = now.toISOString().slice(0, 10);
    return calendarEvents2026.find(
      (e) => e.date >= today && (e.category === 'festival' || e.category === 'jayanti'),
    );
  }, []);

  return (
    <div className="relative min-h-screen pb-8">
      <Helmet>
        <title>Hindu Calendar 2026 — Panchanga | Sadhana Reader</title>
        <meta name="description" content="Hindu calendar 2026 with festivals, Ekadasi dates, Purnima, Amavasya, Sankranti, and sacred events. Your go-to Panchanga reference." />
      </Helmet>

      {/* Header */}
      <div
        className="sticky top-0 z-30"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <div className="flex items-center justify-between px-4 py-2">
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
          <h1
            className="font-display font-bold text-sm tracking-wide"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Pañchāṅga 2026
          </h1>
          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                const url = window.location.origin + '/panchanga';
                const text = 'Hindu Calendar 2026 — Festivals, Pūrṇimā & sacred events: ' + url;
                if (navigator.share) {
                  navigator.share({ title: 'Pañchāṅga 2026', text, url }).catch(() => {});
                } else {
                  window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
                }
              }}
              className="p-2 hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-text-primary)' }}
              aria-label="Share calendar"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
            <ProfileButton />
          </div>
        </div>

        {/* Month scroller */}
        <div
          ref={chipScrollRef}
          className="flex gap-1.5 px-4 pb-2 overflow-x-auto scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {MONTHS.map((m, i) => {
            const isActive = i === selectedMonth;
            return (
              <button
                key={m}
                onClick={() => setSelectedMonth(i)}
                className="flex-shrink-0 px-3 py-1.5 rounded-full font-hind text-xs font-medium transition-all"
                style={{
                  backgroundColor: isActive ? 'var(--color-accent-primary)' : 'transparent',
                  color: isActive ? '#fff' : 'var(--color-text-muted)',
                  border: isActive ? 'none' : '1px solid var(--color-border, rgba(0,0,0,0.08))',
                }}
              >
                {m.slice(0, 3)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        {/* Next upcoming festival banner */}
        {upcomingEvent && (
          <motion.div
            className="mt-4 mb-2 px-4 py-3 rounded-xl"
            style={{
              backgroundColor: CATEGORY_CONFIG[upcomingEvent.category].bg,
              border: `1px solid ${CATEGORY_CONFIG[upcomingEvent.category].color}22`,
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-hind text-[0.6rem] uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>
              Coming up
            </p>
            <p className="font-display font-bold text-sm" style={{ color: CATEGORY_CONFIG[upcomingEvent.category].color }}>
              {upcomingEvent.name}
              <span className="font-hind font-normal text-xs ml-2" style={{ color: 'var(--color-text-secondary)' }}>
                {new Date(upcomingEvent.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
              </span>
            </p>
          </motion.div>
        )}

        {/* Hindu month label */}
        {hinduMonthLabel && (
          <div className="mt-4 mb-1 text-center">
            <p
              className="font-hind text-[0.65rem] uppercase tracking-widest"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {hinduMonthLabel}
            </p>
          </div>
        )}

        {/* Category filters */}
        <div className="flex flex-wrap gap-1.5 mt-3 mb-4 justify-center">
          {(Object.keys(CATEGORY_CONFIG) as EventCategory[]).filter(
            (cat) => calendarEvents2026.some((e) => e.category === cat),
          ).map((cat) => {
            const cfg = CATEGORY_CONFIG[cat];
            const isActive = selectedCategories.has(cat);
            return (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className="px-2.5 py-1 rounded-full font-hind text-[0.6rem] font-medium tracking-wide uppercase transition-all"
                style={{
                  backgroundColor: isActive ? cfg.bg : 'transparent',
                  color: isActive ? cfg.color : 'var(--color-text-muted)',
                  border: `1px solid ${isActive ? cfg.color + '44' : 'var(--color-border, rgba(0,0,0,0.06))'}`,
                  opacity: isActive ? 1 : 0.7,
                }}
              >
                {cfg.label}
              </button>
            );
          })}
        </div>

        {/* Event list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedMonth}-${Array.from(selectedCategories).join()}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, i) => (
                <EventCard key={`${event.date}-${event.name}`} event={event} index={i} />
              ))
            ) : (
              <div className="text-center py-16">
                <div
                  className="text-3xl mb-2 select-none"
                  style={{ color: 'var(--color-accent-primary)', opacity: 0.3 }}
                >
                  ☾
                </div>
                <p
                  className="font-display text-sm"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  No events this month
                  {selectedCategories.size > 0 ? ' for the selected filters' : ''}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Month summary */}
        <div className="mt-6 text-center">
          <p
            className="font-hind text-[0.65rem] tracking-wide"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {eventsForMonth.length} event{eventsForMonth.length !== 1 ? 's' : ''} in {MONTHS[selectedMonth]} 2026
          </p>
        </div>
      </div>
    </div>
  );
}
