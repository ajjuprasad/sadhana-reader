import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { reflections } from '../data/reflections';

function buildShareUrl(args: {
  text: string;
  sanskrit?: string;
  source: string;
  explanation?: string;
  idx: number;
}): string {
  const lines = [`"${args.text}"`];
  if (args.sanskrit) lines.push('', args.sanskrit);
  lines.push('', `— ${args.source}`);
  if (args.explanation) lines.push('', args.explanation);
  lines.push('', `Read more on Sādhanā Reader: https://sadhanareader.org/reflection/${args.idx}`);
  return `https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`;
}

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

  const explanation = (reflection as { explanation?: string }).explanation;
  const shareHref = buildShareUrl({
    text: reflection.text,
    sanskrit: reflection.sanskrit,
    source: reflection.source,
    explanation,
    idx,
  });

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
          <a
            href={shareHref}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-text-primary)' }}
            aria-label="Share this reflection on WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </a>
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

        {explanation ? (
          <p
            className="font-body text-base leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {explanation}
          </p>
        ) : (
          <p
            className="font-body text-base italic leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Explanation coming soon.
          </p>
        )}

        {/* Share CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href={shareHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-hind font-medium text-sm px-5 py-3 rounded-full text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#25D366' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.05 4.91A9.8 9.8 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zm-7.01 15.24h-.01a8.17 8.17 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.06 0 1.21.88 2.38 1 2.55.12.17 1.74 2.66 4.22 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/>
            </svg>
            Share on WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
