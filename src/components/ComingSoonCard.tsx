import { motion } from 'framer-motion';
import StotraIcon from './StotraIcon';

interface ComingSoonCardProps {
  title: string;
  deity: string;
  stotraId: string;
  index: number;
}

const sacredEase = [0.76, 0, 0.24, 1] as const;

export default function ComingSoonCard({ title, deity, stotraId, index }: ComingSoonCardProps) {
  return (
    <motion.div
      className="relative w-full h-full text-left rounded-2xl overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg-card)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        opacity: 0.55,
      }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 0.55, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: sacredEase as unknown as number[],
      }}
    >
      <div className="p-5 sm:p-6 flex flex-col h-full">
        {/* Icon */}
        <div
          className="w-12 h-12 mb-3 flex-shrink-0 flex items-center justify-center rounded-full"
          style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 32 32"
            fill="none"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <StotraIcon stotraId={stotraId} />
          </svg>
        </div>

        {/* Title */}
        <h3
          className="font-display font-bold text-lg mb-1 leading-snug"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {title.split(' ').length >= 2 ? (
            <>
              {title.split(' ')[0]}
              <br />
              {title.split(' ').slice(1).join(' ')}
            </>
          ) : (
            title
          )}
        </h3>

        {/* Deity */}
        <p
          className="font-hind text-sm mb-2"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {deity}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Coming Soon badge */}
        <span
          className="inline-block font-hind text-xs px-2.5 py-0.5 rounded-full self-start"
          style={{
            backgroundColor: 'rgba(0,0,0,0.06)',
            color: 'var(--color-text-muted)',
          }}
        >
          Coming soon
        </span>
      </div>
    </motion.div>
  );
}
