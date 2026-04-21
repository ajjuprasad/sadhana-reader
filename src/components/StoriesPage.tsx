import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { stories } from '../data/stories';
import StoryCard from './StoryCard';

export default function StoriesPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pb-8">
      <Helmet>
        <title>Stories for Kids | Sadhana Reader</title>
        <meta name="description" content="Beautiful stories from Hindu mythology for children — tales of courage, kindness, and wisdom from the Ramayana, Bhagavata Purana, and Panchatantra." />
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
            Stories for Kids
          </h1>
          <button
            onClick={() => {
              const url = `${window.location.origin}/stories`;
              const text = 'Stories for Kids on Sādhanā Reader. Beautiful tales of courage, kindness and wisdom for children, with narration.';
              if (navigator.share) {
                navigator.share({ title: 'Stories for Kids', text, url }).catch(() => {});
              } else {
                window.open(`https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`, '_blank');
              }
            }}
            className="p-2 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-text-primary)' }}
            aria-label="Share Stories for Kids"
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

      <div className="max-w-3xl mx-auto px-4 mt-4">
        {/* Intro section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-4xl select-none" style={{ color: 'var(--color-accent-primary)' }}>
            📖
          </span>
          <h2 className="font-display font-bold text-xl mt-3 mb-2" style={{ color: 'var(--color-text-primary)' }}>
            Timeless Tales, Little Listeners
          </h2>
          <p className="font-body text-sm leading-relaxed max-w-md mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Stories of courage, kindness, and wisdom from Hindu mythology —
            written for children aged 5–10, perfect for bedtime reading or storytelling time.
          </p>
        </motion.div>

        {/* Story grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {stories.map((story, index) => (
            <StoryCard
              key={story.id}
              story={story}
              index={index}
              onClick={() => navigate(`/story/${story.id}`)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
