import { motion } from 'framer-motion';
import type { Stotra } from '../data/stotras';
import StotraIcon from './StotraIcon';

interface StotraCardProps {
  stotra: Stotra;
  index: number;
  onClick: () => void;
}

const sacredEase = [0.76, 0, 0.24, 1] as const;

export default function StotraCard({ stotra, index, onClick }: StotraCardProps) {
  return (
    <motion.button
      className="relative w-full h-full text-left rounded-2xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-saffron"
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
      <div className="p-5 sm:p-6 flex flex-col h-full">
        {/* Icon — anchored to top */}
        <div
          className="w-12 h-12 mb-3 flex-shrink-0 flex items-center justify-center rounded-full"
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

        {/* Title — split onto two lines */}
        <h3
          className="font-display font-bold text-lg mb-1 group-hover:text-saffron transition-colors duration-200 leading-snug"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {stotra.title.split(' ').length >= 2 ? (
            <>
              {stotra.title.split(' ')[0]}
              <br />
              {stotra.title.split(' ').slice(1).join(' ')}
            </>
          ) : (
            stotra.title
          )}
        </h3>

        {/* Deity & duration */}
        <p
          className="font-hind text-sm mb-2"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {stotra.deity} &middot; {stotra.estimatedMinutes} min
        </p>

        {/* Spacer pushes badge to bottom */}
        <div className="flex-1" />

        {/* Verse count badge — pinned to bottom */}
        <span
          className="inline-block font-hind text-xs px-2.5 py-0.5 rounded-full self-start"
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
