import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { reflections } from '../data/reflections';
import { useTranslation } from '../i18n/useTranslation';

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
  const { t } = useTranslation();
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

        {/* Share on WhatsApp (matches StotraDetail style) */}
        <div className="mt-10 flex justify-center">
          <motion.a
            href={shareHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-hind font-medium text-sm px-6 py-2.5 rounded-full"
            style={{
              color: 'var(--color-accent-primary)',
              border: '1px solid var(--color-accent-primary)',
              backgroundColor: 'transparent',
            }}
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,153,51,0.08)' }}
            whileTap={{ scale: 0.96 }}
            aria-label="Share this reflection on WhatsApp"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            {t('common.share')}
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
