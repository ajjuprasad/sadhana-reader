import { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { stories } from '../data/stories';
import { storyScenes } from '../data/scenes';
import FavoriteButton from './FavoriteButton';
import { useNarrationContext } from '../contexts/NarrationContext';
import { useSettings } from '../hooks/useSettings';
import WatchMode from './WatchMode';

export default function StoryDetail() {
  const { storyId } = useParams<{ storyId: string }>();
  const navigate = useNavigate();
  const narration = useNarrationContext();
  const { settings } = useSettings();
  const story = stories.find((s) => s.id === storyId);
  const [watchMode, setWatchMode] = useState(false);

  const hasScenes = storyId ? !!storyScenes[storyId] : false;
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const isNaratingThis = narration.isActive && narration.storyId === storyId;

  useEffect(() => {
    if (isNaratingThis && narration.currentIndex > 0 && narration.currentIndex < narration.totalSegments - 1) {
      const paraIdx = narration.currentIndex - 1;
      const el = paragraphRefs.current[paraIdx];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [narration.currentIndex, isNaratingThis, narration.totalSegments]);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-xl mb-2" style={{ color: 'var(--color-text-primary)' }}>Story not found</p>
          <button onClick={() => navigate('/stories')} className="font-hind text-sm" style={{ color: 'var(--color-accent-primary)' }}>
            Back to Stories
          </button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    const url = window.location.href;
    const text = `Read "${story.title}" on Sādhanā Reader. A beautiful story for kids from ${story.source}`;
    const fullText = `${text}\n${url}`;
    if (navigator.share) {
      navigator.share({ title: story.title, text: fullText }).catch(() => {});
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(fullText)}`, '_blank');
    }
  };

  const handleStartNarration = () => {
    narration.startStory(story.id, story.title, story.paragraphs, story.moral);
  };

  const activeParagraphIndex = isNaratingThis && narration.currentIndex > 0 && narration.currentIndex < narration.totalSegments - 1
    ? narration.currentIndex - 1
    : -1;

  return (
    <div className="relative min-h-screen" style={{ paddingBottom: narration.isActive ? '100px' : '48px' }}>
      <Helmet>
        <title>{story.title} | Stories for Kids | Sadhana Reader</title>
        <meta name="description" content={`${story.subtitle} — A story from ${story.source} for kids aged ${story.ageRange}.`} />
      </Helmet>

      {/* Sticky header */}
      <div className="sticky top-0 z-30" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate('/stories')}
            className="flex items-center gap-1 text-sm font-hind transition-opacity hover:opacity-70"
            style={{ color: 'var(--color-accent-primary)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Stories
          </button>
          <div className="flex items-center">
            <FavoriteButton stotraId={story.id} size={20} />
            <button
              onClick={handleShare}
              className="p-2 hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-text-primary)' }}
              aria-label="Share story"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="max-w-2xl mx-auto px-5 mt-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div
            className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
            style={{ backgroundColor: 'rgba(255,153,51,0.1)' }}
          >
            <svg
              width="30"
              height="30"
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

          <h1
            className="font-display font-bold text-2xl sm:text-3xl leading-tight mb-2"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {story.title}
          </h1>
          <p className="font-body text-sm italic mb-4" style={{ color: 'var(--color-text-muted)' }}>
            {story.subtitle}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            <span
              className="font-label font-medium uppercase px-3 py-1 rounded-full"
              style={{ fontSize: '0.6rem', letterSpacing: '0.08em', backgroundColor: 'rgba(255,153,51,0.12)', color: 'var(--color-accent-primary)' }}
            >
              {story.source}
            </span>
            <span
              className="font-label font-medium uppercase px-3 py-1 rounded-full"
              style={{ fontSize: '0.6rem', letterSpacing: '0.08em', backgroundColor: 'rgba(255,153,51,0.12)', color: 'var(--color-accent-primary)' }}
            >
              {story.readingTime} min read
            </span>
            <span
              className="font-label font-medium uppercase px-3 py-1 rounded-full"
              style={{ fontSize: '0.6rem', letterSpacing: '0.08em', backgroundColor: 'rgba(255,153,51,0.12)', color: 'var(--color-accent-primary)' }}
            >
              Ages {story.ageRange}
            </span>
          </div>
        </div>

        {/* Listen & Watch buttons */}
        {!isNaratingThis && (
          <motion.div
            className="flex gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={handleStartNarration}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl font-hind font-medium text-sm transition-transform active:scale-[0.97]"
              style={{
                backgroundColor: 'var(--color-accent-primary)',
                color: '#fff',
                boxShadow: '0 4px 14px rgba(255,153,51,0.3)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
              Listen
            </button>
            {hasScenes && (
              <button
                onClick={() => setWatchMode(true)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl font-hind font-medium text-sm transition-transform active:scale-[0.97]"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--color-accent-primary)',
                  border: '1.5px solid var(--color-accent-primary)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch
              </button>
            )}
          </motion.div>
        )}

        {/* Characters */}
        <div className="mb-6 text-center">
          <p
            className="font-hind font-medium uppercase mb-1"
            style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', letterSpacing: '0.12em' }}
          >
            Characters
          </p>
          <p className="font-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {story.characters.join(' · ')}
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12" style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.3 }} />
          <span className="text-lg select-none" style={{ color: 'var(--color-accent-primary)', opacity: 0.6 }}>✦</span>
          <div className="h-px w-12" style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.3 }} />
        </div>

        {/* Story content with highlighting */}
        <div className="space-y-4">
          {story.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              ref={(el) => { paragraphRefs.current[i] = el; }}
              className="font-body text-base leading-relaxed rounded-xl transition-all duration-300"
              style={{
                color: 'var(--color-text-primary)',
                backgroundColor: activeParagraphIndex === i ? 'rgba(255,153,51,0.1)' : 'transparent',
                padding: activeParagraphIndex === i ? '12px 16px' : '0 16px',
                borderLeft: activeParagraphIndex === i ? '3px solid var(--color-accent-primary)' : '3px solid transparent',
                opacity: isNaratingThis && activeParagraphIndex >= 0 && activeParagraphIndex !== i ? 0.5 : 1,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Moral */}
        <div
          className="mt-10 p-5 rounded-2xl text-center"
          style={{
            backgroundColor: 'rgba(255,153,51,0.08)',
            border: '1px solid rgba(255,153,51,0.2)',
          }}
        >
          <p
            className="font-hind font-semibold uppercase mb-2"
            style={{ fontSize: '0.65rem', color: 'var(--color-accent-primary)', letterSpacing: '0.14em' }}
          >
            Moral of the Story
          </p>
          <p className="font-display font-bold text-base leading-snug" style={{ color: 'var(--color-text-primary)' }}>
            {story.moral}
          </p>
        </div>

        {/* Next story link */}
        {(() => {
          const currentIndex = stories.findIndex((s) => s.id === story.id);
          const nextStory = stories[(currentIndex + 1) % stories.length];
          return (
            <button
              onClick={() => {
                navigate(`/story/${nextStory.id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full mt-8 flex items-center gap-3 px-5 py-4 rounded-2xl text-left transition-transform active:scale-[0.98]"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <div className="flex-1 min-w-0">
                <p
                  className="font-hind font-medium uppercase"
                  style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}
                >
                  Next story
                </p>
                <p className="font-display font-bold text-sm mt-0.5" style={{ color: 'var(--color-text-primary)' }}>
                  {nextStory.title}
                </p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-primary)', opacity: 0.6 }}>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          );
        })()}
      </motion.div>

      <AnimatePresence>
        {watchMode && story && (
          <WatchMode
            story={story}
            voiceGender={settings.narrationVoice}
            onClose={() => setWatchMode(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
