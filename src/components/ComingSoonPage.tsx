import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { comingSoonStotras } from '../data/stotras';
import ComingSoonCard from './ComingSoonCard';

export default function ComingSoonPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pb-8">
      <Helmet>
        <title>Coming Soon | Sadhana Reader</title>
        <meta name="description" content="Upcoming stotras being added to Sadhana Reader." />
      </Helmet>

      <div className="sticky top-0 z-30" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="flex items-center justify-between px-4 py-3">
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
          <h1 className="font-display font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>
            Coming Soon ({comingSoonStotras.length})
          </h1>
          <div style={{ width: 42 }} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-6">
        <motion.p
          className="text-center font-body text-sm mb-6"
          style={{ color: 'var(--color-text-secondary)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          These sacred texts are being prepared with care and will be available soon.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {comingSoonStotras.map((stotra, index) => (
            <motion.div
              key={stotra.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
            >
              <ComingSoonCard stotra={stotra} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
