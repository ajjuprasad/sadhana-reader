import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { reflections } from '../data/reflections';

export default function ReflectionDetail() {
  const navigate = useNavigate();
  const { index } = useParams<{ index: string }>();

  const idx = Number(index);
  const reflection = Number.isFinite(idx) && idx >= 0 && idx < reflections.length
    ? reflections[idx]
    : null;

  if (!reflection) {
    return (
      <div className="relative min-h-screen pb-8">
        <Helmet>
          <title>Reflection Not Found | Sadhana Reader</title>
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
              Reflection
            </h1>
            <div style={{ width: 42 }} />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 mt-16 text-center">
          <p className="font-body text-lg mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            This reflection was not found.
          </p>
          <button
            onClick={() => navigate('/')}
            className="font-hind font-medium text-sm px-5 py-2.5 rounded-full transition-opacity hover:opacity-70"
            style={{
              backgroundColor: 'var(--color-accent-primary)',
              color: '#fff',
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pb-8">
      <Helmet>
        <title>Reflection — {reflection.source} | Sadhana Reader</title>
      </Helmet>

      {/* Sticky header bar */}
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
            Reflection
          </h1>
          <div style={{ width: 42 }} />
        </div>
      </div>

      {/* Main content */}
      <motion.div
        className="max-w-3xl mx-auto px-4 mt-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Quote */}
        <p
          className="font-body text-xl sm:text-2xl italic leading-relaxed"
          style={{ color: 'var(--color-text-primary)' }}
        >
          &ldquo;{reflection.text}&rdquo;
        </p>

        {/* Sanskrit */}
        {reflection.sanskrit && (
          <p
            className="font-body text-base mt-4 leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {reflection.sanskrit}
          </p>
        )}

        {/* Source attribution */}
        <p
          className="font-hind text-xs uppercase tracking-wider mt-6"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {reflection.source}
        </p>

        {/* Divider */}
        <div
          className="my-8"
          style={{
            height: 1,
            backgroundColor: 'var(--color-text-muted)',
            opacity: 0.25,
          }}
        />

        {/* Explanation section */}
        <h2
          className="font-display font-bold text-lg mb-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          What This Means
        </h2>

        {(reflection as { explanation?: string }).explanation ? (
          <p
            className="font-body text-base leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {(reflection as { explanation?: string }).explanation}
          </p>
        ) : (
          <p
            className="font-body text-base italic leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Explanation coming soon.
          </p>
        )}
      </motion.div>
    </div>
  );
}
