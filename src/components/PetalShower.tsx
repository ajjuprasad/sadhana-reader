import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * PetalShower — a gentle drift of flower petals evoking pushpāñjali,
 * the traditional offering of flowers at the close of a stotra.
 *
 * Plays once on mount; disables itself under prefers-reduced-motion.
 */

// Warm marigold / saffron / rose palette inspired by temple flowers.
const PETAL_COLORS = [
  'var(--color-accent-primary)',
  '#FFC76B',
  '#E67E22',
  '#F4A574',
  '#FFD68A',
];

interface PetalConfig {
  id: number;
  leftPct: number;
  sway: number;
  rotateStart: number;
  rotateEnd: number;
  duration: number;
  delay: number;
  size: number;
  color: string;
  opacity: number;
}

function generatePetals(count: number): PetalConfig[] {
  return Array.from({ length: count }, (_, i) => {
    const duration = 5.5 + Math.random() * 3;
    return {
      id: i,
      leftPct: Math.random() * 100,
      sway: (Math.random() - 0.5) * 80,
      rotateStart: Math.random() * 360,
      rotateEnd: Math.random() * 360 + 360,
      duration,
      delay: Math.random() * 2.5,
      size: 14 + Math.random() * 12,
      color: PETAL_COLORS[i % PETAL_COLORS.length],
      opacity: 0.55 + Math.random() * 0.35,
    };
  });
}

interface PetalShowerProps {
  count?: number;
}

export default function PetalShower({ count = 22 }: PetalShowerProps) {
  const prefersReducedMotion = useReducedMotion();
  const petals = useMemo(() => generatePetals(count), [count]);

  if (prefersReducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 5 }}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <motion.svg
          key={p.id}
          width={p.size}
          height={p.size * 1.4}
          viewBox="0 0 20 28"
          className="absolute"
          style={{
            left: `${p.leftPct}%`,
            top: 0,
            color: p.color,
            willChange: 'transform, opacity',
          }}
          initial={{ y: -40, x: 0, rotate: p.rotateStart, opacity: 0 }}
          animate={{
            y: '110vh',
            x: [0, p.sway * 0.4, p.sway * -0.3, p.sway * 0.2, 0],
            rotate: p.rotateEnd,
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            y: { duration: p.duration, delay: p.delay, ease: [0.42, 0, 0.58, 1] },
            x: { duration: p.duration, delay: p.delay, ease: 'easeInOut' },
            rotate: { duration: p.duration, delay: p.delay, ease: 'linear' },
            opacity: {
              duration: p.duration,
              delay: p.delay,
              times: [0, 0.15, 0.75, 1],
              ease: 'easeOut',
            },
          }}
        >
          {/* Soft teardrop petal shape */}
          <path
            d="M10 0 C 15 7, 18 16, 10 28 C 2 16, 5 7, 10 0 Z"
            fill="currentColor"
          />
          {/* Inner highlight for a subtle sense of depth */}
          <path
            d="M10 3 C 13 9, 15 16, 10 24 C 5 16, 7 9, 10 3 Z"
            fill="currentColor"
            opacity="0.35"
          />
        </motion.svg>
      ))}
    </div>
  );
}
