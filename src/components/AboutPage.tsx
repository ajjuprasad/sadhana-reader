import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pb-8">
      <Helmet>
        <title>About | Sadhana Reader</title>
        <meta name="description" content="About Sadhana Reader — a community-driven, open source digital companion for Hindu spiritual practice and cultural learning." />
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
            Sādhanā Reader exists to keep Hindu spiritual traditions alive and accessible in the modern world — for this generation and the next. In a world of noisy apps and cluttered websites, we believe sacred wisdom deserves a home that honors its spirit.
          </p>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            Whether you're chanting the Hanuman Chalisa on your morning commute, reading a story from the Puranas to your child at bedtime, or checking the Hindu calendar for an upcoming festival — Sādhanā Reader is your quiet, ad-free companion for all of it.
          </p>
          <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Sacred stotras with Sanskrit, transliteration, and meaning. Stories for kids that carry timeless morals with natural narration. A Hindu calendar that connects you to the rhythm of tradition. No paywalls, no ads — just the practice and you.
          </p>
        </section>

        {/* Open Source */}
        <section className="mb-10">
          <h2 className="font-display font-bold text-lg text-center mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Open Source & Community
          </h2>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            Sādhanā Reader is fully open source. The code, the stotra data, and the design are all available on GitHub for anyone to study, improve, or adapt. We believe sacred knowledge should be freely accessible — and that extends to the tools that deliver it.
          </p>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            Contributions are welcome — whether you want to add a new stotra, contribute a story, correct a transliteration, improve translations, add a new language, or enhance the app experience. This is a community effort in the truest sense.
          </p>
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
        </section>

        {/* About the Creator */}
        <section className="mb-10">
          <h2 className="font-display font-bold text-lg text-center mb-4" style={{ color: 'var(--color-text-primary)' }}>
            About the Creator
          </h2>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            Hi, I'm Ajay Prasad. I built Sādhanā Reader as a personal project born from my own daily practice and a desire to pass these traditions on to my children. I wanted a clean, respectful app that felt like opening a sacred book rather than scrolling a cluttered website.
          </p>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            This entire app has been built using Claude Code — Anthropic's AI coding assistant. From the first line of code to the stotra data to the design decisions, it's been a collaboration between human intention and AI capability. It's a testament to what's possible when you pair a clear vision with modern tools.
          </p>
          <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            If you'd like to contribute, have feedback, or just want to say hello — I'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
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
