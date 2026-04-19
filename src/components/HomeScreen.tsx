import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { stotras, comingSoonStotras } from '../data/stotras';
import StotraCard from './StotraCard';
import ComingSoonCard from './ComingSoonCard';
import ProfileButton from './ProfileButton';
import { useAuth } from '../contexts/AuthContext';
import { useFavorites } from '../hooks/useFavorites';
import { useTranslation } from '../i18n/useTranslation';

const sacredEase = [0.76, 0, 0.24, 1] as const;

const recentItems = [
  { id: 'argala-stotram', title: 'Argala Stotram', timestamp: '2026-04-19T22:00:00Z', desc: '25 verses from the Durga Saptashati invoking Goddess Chandika\'s grace for victory, beauty, and fame.' },
  { id: 'bilvashtakam', title: 'Bilvashtakam', timestamp: '2026-04-19T21:00:00Z', desc: '9 verses by Adi Shankaracharya extolling the supreme merit of offering bilva leaves to Lord Shiva.' },
  { id: 'sudarshana-ashtakam', title: 'Sudarshana Ashtakam', timestamp: '2026-04-19T20:00:00Z', desc: '8 verses by Vedanta Desika glorifying Lord Sudarshana, the divine discus of Lord Vishnu.' },
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
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHidden, setHeaderHidden] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeaderHidden(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>Sadhana Reader — A Digital Sanctum for Hindu Stotras</title>
        <meta name="description" content="Read and contemplate Hindu stotras including Hanuman Chalisa, Bhaja Govindam, Vishnu Sahasranamam, and more. A beautiful, ad-free digital sanctum for daily practice." />
        <link rel="canonical" href="https://sadhanareader.org/" />
      </Helmet>
      {/* Sticky app bar */}
      <div
        className="sticky top-0 z-30 flex items-center justify-between px-4 py-2"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1.5 transition-opacity duration-300"
          style={{ opacity: headerHidden ? 1 : 0, pointerEvents: headerHidden ? 'auto' : 'none' }}
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

      {/* Favorites */}
      {favoriteStotras.length > 0 && (
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

      {/* All Stotras */}
      <section className="max-w-3xl mx-auto">
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

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        {stotras.map((stotra, index) => (
          <StotraCard
            key={stotra.id}
            stotra={stotra}
            index={index}
            onClick={() => navigate(`/stotra/${stotra.id}`)}
          />
        ))}
      </div>
      </section>

      {/* Recently added */}
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

      {/* Coming soon */}
      {comingSoonStotras.length > 0 && (
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
