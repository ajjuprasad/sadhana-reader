import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pb-8">
      <Helmet>
        <title>About | Sadhana Reader</title>
        <meta name="description" content="About Sadhana Reader — a free, open source app for daily spiritual practice, timeless stories, and cultural traditions." />
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
            About
          </h1>
          <div style={{ width: 42 }} />
        </div>
      </div>

      <motion.div
        className="max-w-2xl mx-auto px-5 mt-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Mission */}
        <section className="mb-10">
          <div className="text-center mb-6">
            <span className="text-3xl" style={{ color: 'var(--color-accent-primary)' }}>ॐ</span>
          </div>
          <h2 className="font-display font-bold text-lg text-center mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Our Mission
          </h2>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            Sādhanā Reader is a simple, quiet space to help people stay connected to their daily practice. Stotras, stories, traditions. These are things that have been passed down for thousands of years, and they deserve a clean, respectful home in the digital world.
          </p>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            The goal is to make it easy for anyone to keep up with their practice and share this wisdom with the next generation. Chant a stotra on your morning commute. Read a story to your child at bedtime. Know when a festival is coming up. All in one place, with no noise.
          </p>
          <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            No accounts required. No paywalls. No ads. Just the practice and you.
          </p>
        </section>

        {/* Open Source */}
        <section className="mb-10">
          <h2 className="font-display font-bold text-lg text-center mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Open Source & Community
          </h2>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            Sādhanā Reader is fully open source. The code, the content, and the design are all on GitHub for anyone to study, improve, or adapt.
          </p>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            Want to add a stotra, contribute a story, fix a transliteration, or add a new language? You're welcome to. This is a community effort and every contribution helps.
          </p>
          <div className="flex justify-center">
          <a
            href="https://github.com/ajjuprasad/sadhana-reader"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-hind text-xs font-medium px-4 py-2 rounded-full transition-opacity hover:opacity-80"
            style={{
              color: 'var(--color-accent-primary)',
              border: '1px solid var(--color-accent-primary)',
              opacity: 0.85,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
          </div>
        </section>

        {/* About the Creator */}
        <section className="mb-10">
          <h2 className="font-display font-bold text-lg text-center mb-4" style={{ color: 'var(--color-text-primary)' }}>
            About the Creator
          </h2>
          <div className="flex justify-center mb-5">
            <img
              src="https://github.com/ajjuprasad.png"
              alt="Ajay Prasad"
              className="w-24 h-24 rounded-full object-cover"
              style={{ border: '3px solid rgba(255,153,51,0.3)' }}
            />
          </div>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            Hi, I'm Ajay Prasad. I built Sādhanā Reader because I wanted a clean, quiet app for my own daily practice. Something that felt like opening a sacred book, not scrolling a cluttered website.
          </p>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            The stories section started when I wanted a way to share these timeless tales with my daughter at bedtime. That grew into a collection of stories from the Puranas, Panchatantra, and other sources, each with narration so she could listen on her own too.
          </p>
          <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            If you have feedback, want to contribute, or just want to say hello, I'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <a
              href="https://www.linkedin.com/in/ajjuprasad"
              target="_blank"
              rel="noopener noreferrer"
              className="font-hind text-xs font-medium px-4 py-2 rounded-full transition-opacity hover:opacity-80"
              style={{ color: 'var(--color-accent-primary)', border: '1px solid var(--color-accent-primary)', opacity: 0.85 }}
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/919513097770?text=Hi%20Ajay%2C%20I%20have%20feedback%20on%20Sadhana%20Reader%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              className="font-hind text-xs font-medium px-4 py-2 rounded-full transition-opacity hover:opacity-80"
              style={{ color: 'var(--color-accent-primary)', border: '1px solid var(--color-accent-primary)', opacity: 0.85 }}
            >
              WhatsApp
            </a>
            <a
              href="mailto:ajaiprasad@gmail.com?subject=Sadhana%20Reader%20Feedback"
              className="font-hind text-xs font-medium px-4 py-2 rounded-full transition-opacity hover:opacity-80"
              style={{ color: 'var(--color-accent-primary)', border: '1px solid var(--color-accent-primary)', opacity: 0.85 }}
            >
              Email
            </a>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
