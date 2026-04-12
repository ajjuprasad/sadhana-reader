import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { Verse } from '../data/stotras';

interface VerseCardProps {
  verse: Verse;
  fontSize: number;
  contemplationMode: boolean;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const sacredEase = [0.76, 0, 0.24, 1] as const;

export default function VerseCard({
  verse,
  fontSize,
  contemplationMode,
  onSwipeLeft,
  onSwipeRight,
}: VerseCardProps) {
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-300, 0, 300], [8, 0, -8]);
  const scale = useTransform(x, [-300, 0, 300], [0.94, 1, 0.94]);
  const opacity = useTransform(x, [-300, -100, 0, 100, 300], [0.6, 0.9, 1, 0.9, 0.6]);

  return (
    <motion.div
      className="w-full flex-shrink-0 px-3"
      style={{
        perspective: 1200,
      }}
    >
      <motion.div
        className="relative mx-auto w-full max-w-lg rounded-[20px] p-6 sm:p-8 overflow-hidden cursor-grab active:cursor-grabbing"
        style={{
          x,
          rotateY,
          scale,
          opacity,
          transformStyle: 'preserve-3d',
          backgroundColor: 'var(--color-bg-card)',
          boxShadow:
            'inset 0 0 30px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.06)',
          background:
            'radial-gradient(ellipse at center, var(--color-bg-card) 0%, var(--color-bg) 100%)',
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={(_e, info) => {
          if (info.offset.x < -80) {
            onSwipeLeft();
          } else if (info.offset.x > 80) {
            onSwipeRight();
          }
        }}
      >
        {/* Verse Label */}
        {verse.verseLabel && (
          <p
            className="text-center mb-4 font-hind text-sm tracking-wide uppercase"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {verse.verseLabel}
          </p>
        )}

        {/* Sanskrit text */}
        <div
          className="font-sanskrit text-center mb-4 leading-relaxed"
          lang="sa"
          style={{
            fontSize: `${fontSize * 0.08}rem`,
            lineHeight: 2.2,
            color: 'var(--color-text-primary)',
          }}
        >
          {verse.sanskrit}
        </div>

        {/* Decorative divider 1 */}
        <div className="flex items-center justify-center gap-2 my-4">
          <div
            className="h-px w-12"
            style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.3 }}
          />
          <span
            className="text-sm"
            style={{ color: 'var(--color-accent-primary)', opacity: 0.4 }}
          >
            ॐ
          </span>
          <div
            className="h-px w-12"
            style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.3 }}
          />
        </div>

        {/* Transliteration */}
        {!contemplationMode && (
          <motion.p
            className="font-translit text-center mb-4"
            style={{
              fontSize: `${fontSize * 0.053}rem`,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {verse.transliteration}
          </motion.p>
        )}

        {/* Decorative divider 2 */}
        {!contemplationMode && (
          <div className="flex items-center justify-center gap-1.5 my-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full"
                style={{
                  backgroundColor: 'var(--color-accent-gold)',
                  opacity: 0.4,
                }}
              />
            ))}
          </div>
        )}

        {/* English meaning */}
        <motion.p
          className="font-body text-center italic"
          style={{
            fontSize: `${fontSize * 0.05}rem`,
            color: 'var(--color-text-secondary)',
            lineHeight: 1.8,
            opacity: 0.85,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.4, ease: sacredEase as unknown as number[] }}
        >
          {verse.meaning}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
