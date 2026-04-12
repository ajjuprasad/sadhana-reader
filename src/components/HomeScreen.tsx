import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { stotras } from '../data/stotras';
import StotraCard from './StotraCard';

const sacredEase = [0.76, 0, 0.24, 1] as const;

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen px-4 py-8 sm:py-12">
      {/* Header */}
      <motion.header
        className="text-center mb-10 sm:mb-14"
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
          Sadhana Reader
        </h1>
        <p
          className="font-sanskrit text-lg"
          lang="sa"
          style={{ color: 'var(--color-text-secondary)', opacity: 0.8 }}
        >
          साधना पाठक
        </p>
        <p
          className="font-body text-sm mt-2 italic"
          style={{ color: 'var(--color-text-muted)' }}
        >
          A digital sanctum for contemplation
        </p>
      </motion.header>

      {/* Grid */}
      <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        {stotras.map((stotra, index) => (
          <StotraCard
            key={stotra.id}
            stotra={stotra}
            index={index}
            onClick={() => navigate(`/read/${stotra.id}`)}
          />
        ))}
      </div>

      {/* Footer */}
      <motion.footer
        className="text-center mt-12 sm:mt-16 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p
          className="font-hind text-xs"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Crafted with devotion
        </p>
      </motion.footer>
    </div>
  );
}
