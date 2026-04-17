import { motion } from 'framer-motion';
import type { ComingSoonStotra } from '../data/stotras';
import { useTranslation } from '../i18n/useTranslation';

interface ComingSoonCardProps {
  stotra: ComingSoonStotra;
  index: number;
}

const sacredEase = [0.76, 0, 0.24, 1] as const;

export default function ComingSoonCard({
  stotra,
  index,
}: ComingSoonCardProps) {
  const { t } = useTranslation();
  return (
    <motion.div
      className="relative w-full h-full text-left rounded-2xl overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg-card)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        opacity: 0.72,
      }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 0.72, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: sacredEase as unknown as number[],
      }}
      aria-label={`${stotra.title} — ${t('common.comingSoon')}`}
    >
      <div className="p-5 sm:p-6 flex flex-col h-full">
        {/* Lotus-bud icon — closed flower hinting at "yet to bloom" */}
        <div
          className="w-12 h-12 mb-3 flex-shrink-0 flex items-center justify-center rounded-full"
          style={{ backgroundColor: 'rgba(255,153,51,0.08)' }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 32 32"
            fill="none"
            style={{ color: 'var(--color-accent-gold)' }}
          >
            {/* Closed lotus bud: a central petal with two outer petals */}
            <path
              d="M16 6 C 19 12, 19 20, 16 26 C 13 20, 13 12, 16 6 Z"
              fill="currentColor"
              opacity="0.9"
            />
            <path
              d="M16 9 C 21 14, 22 22, 16 26 C 20 22, 20 14, 16 9 Z"
              fill="currentColor"
              opacity="0.55"
            />
            <path
              d="M16 9 C 11 14, 10 22, 16 26 C 12 22, 12 14, 16 9 Z"
              fill="currentColor"
              opacity="0.55"
            />
          </svg>
        </div>

        {/* Title — split onto two lines, mirroring StotraCard */}
        <h3
          className="font-display font-bold text-lg mb-1 leading-snug"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {(() => {
            const words = stotra.title.split(' ');
            if (words.length < 2) return stotra.title;
            const splitIdx = words[0] === 'Sri' && words.length >= 3 ? 2 : 1;
            return (
              <>
                {words.slice(0, splitIdx).join(' ')}
                <br />
                {words.slice(splitIdx).join(' ')}
              </>
            );
          })()}
        </h3>

        {/* Deity */}
        <p
          className="font-label font-medium uppercase mb-2"
          style={{ fontSize: '0.6rem', color: 'var(--color-text-secondary)', letterSpacing: '0.12em' }}
        >
          {stotra.deity}
        </p>

        <div className="flex-1" />
      </div>
    </motion.div>
  );
}
