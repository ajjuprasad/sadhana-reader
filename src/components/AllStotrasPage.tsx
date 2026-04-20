import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { stotras } from '../data/stotras';
import StotraCard from './StotraCard';

export default function AllStotrasPage() {
  const navigate = useNavigate();
  const sorted = useMemo(() => [...stotras].sort((a, b) => a.title.localeCompare(b.title)), []);

  return (
    <div className="relative min-h-screen pb-8">
      <Helmet>
        <title>All Stotras | Sadhana Reader</title>
        <meta name="description" content="Browse all Hindu stotras available on Sadhana Reader." />
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
            All Stotras ({sorted.length})
          </h1>
          <div style={{ width: 42 }} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-4">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {sorted.map((stotra, index) => (
            <StotraCard
              key={stotra.id}
              stotra={stotra}
              index={index}
              onClick={() => navigate(`/stotra/${stotra.id}`)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
