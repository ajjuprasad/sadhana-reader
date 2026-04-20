import { motion } from 'framer-motion';
import type { Story } from '../data/stories';

interface StoryCardProps {
  story: Story;
  index: number;
  onClick: () => void;
}

const sacredEase = [0.76, 0, 0.24, 1] as const;

export default function StoryCard({ story, index, onClick }: StoryCardProps) {
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
      aria-label={`Read ${story.title}`}
    >
      <div className="p-5 sm:p-6 flex flex-col h-full">
        {/* Book icon */}
        <div
          className="w-12 h-12 mb-3 flex-shrink-0 flex items-center justify-center rounded-full"
          style={{ backgroundColor: 'rgba(255,153,51,0.1)' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--color-accent-gold)' }}
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </div>

        {/* Title */}
        <h3
          className="font-display font-bold text-base sm:text-lg mb-1 group-hover:text-saffron transition-colors duration-200 leading-snug"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {story.title}
        </h3>

        {/* Source & reading time */}
        <p
          className="font-label font-medium uppercase mb-2"
          style={{ fontSize: '0.6rem', color: 'var(--color-text-secondary)', letterSpacing: '0.12em' }}
        >
          {story.source} &middot; {story.readingTime} min
        </p>

        <div className="flex-1" />

        {/* Moral preview */}
        <p
          className="font-body text-xs leading-relaxed line-clamp-2"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {story.subtitle}
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(255,153,51,0.06), transparent)',
        }}
      />
    </motion.button>
  );
}
