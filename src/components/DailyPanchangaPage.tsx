import { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { usePanchanga } from '../hooks/usePanchanga';
import { useLocation } from '../hooks/useLocation';
import { calendarEvents2026, hinduMonths2026 } from '../data/calendar2026';
import type { CalendarEvent, EventCategory } from '../data/calendar2026';
import LocationSelector from './LocationSelector';
import ProfileButton from './ProfileButton';

const sacredEase = [0.76, 0, 0.24, 1] as const;

const CATEGORY_COLORS: Record<EventCategory, { color: string; bg: string }> = {
  festival:  { color: '#E65100', bg: 'rgba(230, 81, 0, 0.10)' },
  ekadasi:   { color: '#1565C0', bg: 'rgba(21, 101, 192, 0.10)' },
  purnima:   { color: '#6A1B9A', bg: 'rgba(106, 27, 154, 0.10)' },
  amavasya:  { color: '#37474F', bg: 'rgba(55, 71, 79, 0.10)' },
  sankranti: { color: '#F9A825', bg: 'rgba(249, 168, 37, 0.12)' },
  jayanti:   { color: '#2E7D32', bg: 'rgba(46, 125, 50, 0.10)' },
  vrata:     { color: '#AD1457', bg: 'rgba(173, 20, 87, 0.10)' },
};

function formatTime(d: Date): string {
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

function toDateKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function Skeleton() {
  return (
    <div className="space-y-4 px-4 pt-4">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="h-16 rounded-xl animate-pulse"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        />
      ))}
    </div>
  );
}

function PanchangaRow({ label, value, sanskrit, index }: { label: string; value: string; sanskrit: string; index: number }) {
  return (
    <motion.div
      className="flex items-start justify-between py-3"
      style={{ borderBottom: '1px solid var(--color-border, rgba(0,0,0,0.06))' }}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: sacredEase }}
    >
      <span
        className="font-hind font-medium text-xs uppercase tracking-wider flex-shrink-0 w-20"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {label}
      </span>
      <div className="text-right">
        <span
          className="font-display font-semibold text-sm"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {value}
        </span>
        <span
          className="font-body text-xs ml-2"
          style={{ color: 'var(--color-accent-primary)', opacity: 0.8 }}
        >
          {sanskrit}
        </span>
      </div>
    </motion.div>
  );
}

function TimingRow({ label, start, end, color, index }: { label: string; start: Date; end: Date; color: string; index: number }) {
  return (
    <motion.div
      className="flex items-center justify-between py-3"
      style={{ borderBottom: '1px solid var(--color-border, rgba(0,0,0,0.06))' }}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: sacredEase }}
    >
      <span
        className="font-hind font-medium text-xs uppercase tracking-wider"
        style={{ color }}
      >
        {label}
      </span>
      <span
        className="font-hind text-sm"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {formatTime(start)} – {formatTime(end)}
      </span>
    </motion.div>
  );
}

export default function DailyPanchangaPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { location, setLocation, requestBrowserLocation } = useLocation();
  const [locationOpen, setLocationOpen] = useState(false);

  const selectedDate = useMemo(() => {
    const dateParam = searchParams.get('date');
    if (dateParam) {
      const parsed = new Date(dateParam + 'T00:00:00');
      if (!isNaN(parsed.getTime())) return parsed;
    }
    return new Date();
  }, [searchParams.get('date')]);

  const isToday = toDateKey(selectedDate) === toDateKey(new Date());

  const { panchanga, loading, error } = usePanchanga(selectedDate, location);

  const todayEvent: CalendarEvent | undefined = useMemo(() => {
    const key = toDateKey(selectedDate);
    return calendarEvents2026.find((e) => e.date === key);
  }, [selectedDate]);

  const hinduMonth = useMemo(() => {
    const key = toDateKey(selectedDate);
    return hinduMonths2026.find((m) => key >= m.startDate && key <= m.endDate);
  }, [selectedDate]);

  const navigateDay = (offset: number) => {
    const next = new Date(selectedDate);
    next.setDate(next.getDate() + offset);
    setSearchParams({ date: toDateKey(next) });
  };

  const goToday = () => setSearchParams({});

  const dateLabel = selectedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="relative min-h-screen pb-8">
      <Helmet>
        <title>Daily Panchanga — Sadhana Reader</title>
        <meta name="description" content="Today's Hindu Panchanga with tithi, nakshatra, yoga, karana, sunrise, sunset, and auspicious timings." />
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
            {isToday ? "Today's" : 'Daily'} Pañchāṅga
          </h1>
          <ProfileButton />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        {/* Date + Hindu month */}
        <motion.div
          className="text-center mt-4 mb-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: sacredEase }}
        >
          <p
            className="font-display font-bold text-base"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {dateLabel}
          </p>
          {hinduMonth && (
            <p
              className="font-hind text-xs mt-1"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {hinduMonth.name} · {hinduMonth.sanskrit} · {hinduMonth.season}
            </p>
          )}
        </motion.div>

        {/* Date navigation */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <button
            onClick={() => navigateDay(-1)}
            className="p-2 rounded-full hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-text-primary)', backgroundColor: 'var(--color-bg-card)' }}
            aria-label="Previous day"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          {!isToday && (
            <button
              onClick={goToday}
              className="px-3 py-1 rounded-full font-hind text-xs font-medium"
              style={{
                backgroundColor: 'rgba(255,153,51,0.12)',
                color: 'var(--color-accent-primary)',
              }}
            >
              Today
            </button>
          )}
          <button
            onClick={() => navigateDay(1)}
            className="p-2 rounded-full hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-text-primary)', backgroundColor: 'var(--color-bg-card)' }}
            aria-label="Next day"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>

        {loading && <Skeleton />}

        {error && (
          <div className="text-center py-12">
            <p className="font-hind text-sm" style={{ color: 'var(--color-text-muted)' }}>
              {error}
            </p>
          </div>
        )}

        {panchanga && !loading && (
          <>
            {/* Sunrise / Sunset */}
            <motion.div
              className="grid grid-cols-2 gap-3 mb-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: sacredEase }}
            >
              <div
                className="rounded-xl p-4 text-center"
                style={{ backgroundColor: 'var(--color-bg-card)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <p className="font-hind text-[0.6rem] uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>
                  Sunrise
                </p>
                <p className="font-display font-bold text-lg" style={{ color: '#E65100' }}>
                  {formatTime(panchanga.sunrise)}
                </p>
              </div>
              <div
                className="rounded-xl p-4 text-center"
                style={{ backgroundColor: 'var(--color-bg-card)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <p className="font-hind text-[0.6rem] uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>
                  Sunset
                </p>
                <p className="font-display font-bold text-lg" style={{ color: '#6A1B9A' }}>
                  {formatTime(panchanga.sunset)}
                </p>
              </div>
            </motion.div>

            {/* Panchanga Elements */}
            <motion.div
              className="rounded-2xl overflow-hidden mb-5"
              style={{ backgroundColor: 'var(--color-bg-card)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: sacredEase }}
            >
              <div className="px-5 pt-4 pb-1">
                <p
                  className="font-label font-semibold uppercase text-[0.6rem] tracking-[0.14em] mb-2"
                  style={{ color: 'var(--color-accent-primary)' }}
                >
                  Pañchāṅga
                </p>
                <PanchangaRow
                  label="Tithi"
                  value={`${panchanga.tithi.paksha} ${panchanga.tithi.info.name}`}
                  sanskrit={panchanga.tithi.info.sanskrit}
                  index={0}
                />
                <PanchangaRow
                  label="Nakṣatra"
                  value={panchanga.nakshatra.info.name}
                  sanskrit={panchanga.nakshatra.info.sanskrit}
                  index={1}
                />
                <PanchangaRow
                  label="Yoga"
                  value={panchanga.yoga.info.name}
                  sanskrit={panchanga.yoga.info.sanskrit}
                  index={2}
                />
                <PanchangaRow
                  label="Karaṇa"
                  value={panchanga.karana.info.name}
                  sanskrit={panchanga.karana.info.sanskrit}
                  index={3}
                />
                <PanchangaRow
                  label="Vāra"
                  value={`${panchanga.vara.name} (${panchanga.vara.planet})`}
                  sanskrit={panchanga.vara.sanskrit}
                  index={4}
                />
              </div>
            </motion.div>

            {/* Inauspicious Timings */}
            <motion.div
              className="rounded-2xl overflow-hidden mb-5"
              style={{ backgroundColor: 'var(--color-bg-card)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: sacredEase }}
            >
              <div className="px-5 pt-4 pb-1">
                <p
                  className="font-label font-semibold uppercase text-[0.6rem] tracking-[0.14em] mb-2"
                  style={{ color: '#AD1457' }}
                >
                  Inauspicious Timings
                </p>
                <TimingRow label="Rāhu Kāla" start={panchanga.rahuKala.start} end={panchanga.rahuKala.end} color="#AD1457" index={0} />
                <TimingRow label="Yama Gaṇḍa" start={panchanga.yamaGanda.start} end={panchanga.yamaGanda.end} color="#AD1457" index={1} />
                <TimingRow label="Gulika Kāla" start={panchanga.gulikaKala.start} end={panchanga.gulikaKala.end} color="#AD1457" index={2} />
              </div>
            </motion.div>

            {/* Auspicious Timing */}
            <motion.div
              className="rounded-2xl overflow-hidden mb-5"
              style={{ backgroundColor: 'var(--color-bg-card)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: sacredEase }}
            >
              <div className="px-5 pt-4 pb-1">
                <p
                  className="font-label font-semibold uppercase text-[0.6rem] tracking-[0.14em] mb-2"
                  style={{ color: '#2E7D32' }}
                >
                  Auspicious
                </p>
                <TimingRow label="Abhijit Muhūrta" start={panchanga.abhijitMuhurta.start} end={panchanga.abhijitMuhurta.end} color="#2E7D32" index={0} />
              </div>
            </motion.div>
          </>
        )}

        {/* Today's Event */}
        {todayEvent && (
          <motion.div
            className="rounded-2xl overflow-hidden mb-5"
            style={{
              backgroundColor: CATEGORY_COLORS[todayEvent.category]?.bg ?? 'var(--color-bg-card)',
              border: `1px solid ${CATEGORY_COLORS[todayEvent.category]?.color ?? 'var(--color-border)'}22`,
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: sacredEase }}
          >
            <div className="px-5 py-4">
              <p
                className="font-label font-semibold uppercase text-[0.6rem] tracking-[0.14em] mb-2"
                style={{ color: CATEGORY_COLORS[todayEvent.category]?.color }}
              >
                {isToday ? "Today's Event" : 'Event'}
              </p>
              <p
                className="font-display font-bold text-sm"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {todayEvent.name}
              </p>
              {todayEvent.sanskrit && (
                <p className="font-body text-xs mt-0.5" style={{ color: 'var(--color-accent-primary)', opacity: 0.8 }}>
                  {todayEvent.sanskrit}
                </p>
              )}
              <p
                className="font-body text-xs mt-2 leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {todayEvent.description}
              </p>
            </div>
          </motion.div>
        )}

        {/* Footer links */}
        <div className="flex flex-col gap-3 mt-6">
          <button
            onClick={() => navigate('/panchanga')}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-hind font-medium text-sm transition-opacity hover:opacity-70"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              color: 'var(--color-accent-primary)',
              border: '1px solid var(--color-border, rgba(0,0,0,0.06))',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            View Full Calendar
          </button>

          <button
            onClick={() => setLocationOpen(true)}
            className="flex items-center justify-center gap-1.5 py-2 font-hind text-xs transition-opacity hover:opacity-70"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {location.name}
            <span style={{ color: 'var(--color-accent-primary)' }}>Change</span>
          </button>
        </div>
      </div>

      <LocationSelector
        open={locationOpen}
        current={location}
        onSelect={setLocation}
        onRequestBrowser={requestBrowserLocation}
        onClose={() => setLocationOpen(false)}
      />
    </div>
  );
}
