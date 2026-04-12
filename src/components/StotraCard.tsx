import { motion } from 'framer-motion';
import type { Stotra } from '../data/stotras';

interface StotraCardProps {
  stotra: Stotra;
  index: number;
  onClick: () => void;
}

const sacredEase = [0.76, 0, 0.24, 1] as const;

function StotraIcon({ stotraId }: { stotraId: string }) {
  const s = { stroke: 'currentColor', fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (stotraId) {
    case 'hanuman-chalisa':
      // Gada (mace) — Hanuman's iconic weapon
      return (
        <>
          <circle cx="16" cy="7" r="4.5" {...s} strokeWidth="1.6" />
          <path d="M12.5 4.5 L19.5 9.5 M19.5 4.5 L12.5 9.5" {...s} strokeWidth="1" />
          <line x1="16" y1="11.5" x2="16" y2="29" {...s} strokeWidth="2.2" />
          <path d="M13.5 26 L18.5 26" {...s} strokeWidth="1.4" />
        </>
      );

    case 'ganesha-pancharatnam':
      // Ganesha — elephant face with ears, trunk, tusk, eyes, tilak
      return (
        <>
          <ellipse cx="16" cy="12" rx="7" ry="8" {...s} strokeWidth="1.6" />
          <path d="M9 10 Q4 7 5 3" {...s} strokeWidth="1.6" />
          <path d="M23 10 Q28 7 27 3" {...s} strokeWidth="1.6" />
          <path d="M16 20 Q15 24 12 28" {...s} strokeWidth="2" />
          <path d="M19 17 Q20 20 21 22" {...s} strokeWidth="1.4" />
          <circle cx="12.5" cy="11" r="1.2" stroke="none" fill="currentColor" />
          <circle cx="19.5" cy="11" r="1.2" stroke="none" fill="currentColor" />
          <circle cx="16" cy="7" r="1" stroke="none" fill="currentColor" />
        </>
      );

    case 'shiva-panchakshara':
      // Trishul (trident) — Shiva's weapon
      return (
        <>
          <line x1="16" y1="3" x2="16" y2="29" {...s} strokeWidth="2" />
          <path d="M16 10 Q10 8 8 3" {...s} strokeWidth="1.8" />
          <path d="M16 10 Q22 8 24 3" {...s} strokeWidth="1.8" />
          <path d="M14.5 5 L16 2 L17.5 5" {...s} strokeWidth="1.2" />
          <path d="M12 13 L20 13" {...s} strokeWidth="1.4" />
        </>
      );

    case 'mahalakshmi-ashtakam':
      // Lotus (padma) — Lakshmi's symbol
      return (
        <>
          <circle cx="16" cy="14" r="3" {...s} strokeWidth="1.4" />
          <path d="M16 11 Q14 6 16 3 Q18 6 16 11" {...s} strokeWidth="1.3" />
          <path d="M16 17 Q14 22 16 25 Q18 22 16 17" {...s} strokeWidth="1.3" />
          <path d="M13 14 Q8 12 5 14 Q8 16 13 14" {...s} strokeWidth="1.3" />
          <path d="M19 14 Q24 12 27 14 Q24 16 19 14" {...s} strokeWidth="1.3" />
          <path d="M13.5 11.5 Q9.5 8 7.5 7 Q10 9 13.5 11.5" {...s} strokeWidth="1.2" />
          <path d="M18.5 11.5 Q22.5 8 24.5 7 Q22 9 18.5 11.5" {...s} strokeWidth="1.2" />
          <path d="M13.5 16.5 Q9.5 20 7.5 21 Q10 19 13.5 16.5" {...s} strokeWidth="1.2" />
          <path d="M18.5 16.5 Q22.5 20 24.5 21 Q22 19 18.5 16.5" {...s} strokeWidth="1.2" />
          <line x1="16" y1="25" x2="16" y2="30" {...s} strokeWidth="1.4" />
        </>
      );

    case 'lingashtakam':
      // Shiva Lingam on yoni base
      return (
        <>
          <path d="M11 22 Q11 6 16 4 Q21 6 21 22" {...s} strokeWidth="1.8" />
          <ellipse cx="16" cy="22" rx="10" ry="3" {...s} strokeWidth="1.6" />
          <path d="M6 25 Q6 28 16 28 Q26 28 26 25" {...s} strokeWidth="1.4" />
          <path d="M16 4 Q17 2.5 16 1.5" {...s} strokeWidth="1" />
        </>
      );

    case 'madhurashtakam':
      // Krishna's bansuri (flute) with peacock feather
      return (
        <>
          <line x1="5" y1="18" x2="27" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="10" cy="17.1" r="1" stroke="none" fill="currentColor" opacity="0.5" />
          <circle cx="14" cy="16.4" r="1" stroke="none" fill="currentColor" opacity="0.5" />
          <circle cx="18" cy="15.6" r="1" stroke="none" fill="currentColor" opacity="0.5" />
          <circle cx="22" cy="14.9" r="1" stroke="none" fill="currentColor" opacity="0.5" />
          <path d="M24 13 Q22 7 20 4" {...s} strokeWidth="1.2" />
          <ellipse cx="20.5" cy="6" rx="2" ry="3" {...s} strokeWidth="1" transform="rotate(-15 20.5 6)" />
          <circle cx="20.5" cy="6" r="1" stroke="none" fill="currentColor" />
        </>
      );

    default:
      return <circle cx="16" cy="16" r="8" {...s} strokeWidth="1.5" />;
  }
}

export default function StotraCard({ stotra, index, onClick }: StotraCardProps) {
  return (
    <motion.button
      className="relative w-full text-left rounded-2xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-saffron"
      style={{
        backgroundColor: 'var(--color-bg-card)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: sacredEase as unknown as number[],
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 6px 24px rgba(0,0,0,0.1)',
      }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      aria-label={`Read ${stotra.title}`}
    >
      <div className="p-5 sm:p-6">
        {/* Icon */}
        <div
          className="w-12 h-12 mb-3 flex items-center justify-center rounded-full"
          style={{ backgroundColor: 'rgba(255,153,51,0.1)' }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 32 32"
            fill="none"
            style={{ color: 'var(--color-accent-gold)' }}
          >
            <StotraIcon stotraId={stotra.id} />
          </svg>
        </div>

        {/* Title */}
        <h3
          className="font-display font-bold text-lg mb-1 group-hover:text-saffron transition-colors duration-200"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {stotra.title}
        </h3>

        {/* Deity & duration */}
        <p
          className="font-hind text-sm mb-2"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {stotra.deity} &middot; ~{stotra.estimatedMinutes} min
        </p>

        {/* Verse count badge */}
        <span
          className="inline-block font-hind text-xs px-2.5 py-0.5 rounded-full"
          style={{
            backgroundColor: 'rgba(255,153,51,0.12)',
            color: 'var(--color-accent-primary)',
          }}
        >
          {stotra.verses.length} verses
        </span>
      </div>

      {/* Bottom saffron gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(255,153,51,0.06), transparent)',
        }}
      />
    </motion.button>
  );
}
