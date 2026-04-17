import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-card': 'var(--color-bg-card)',
        saffron: 'var(--color-accent-primary)',
        terracotta: 'var(--color-accent-secondary)',
        gold: 'var(--color-accent-gold)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'deepam-bg': 'var(--color-deepam-bg)',
        'deepam-amber': 'var(--color-deepam-amber)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Lora', 'serif'],
        devanagari: ['"Tiro Devanagari Sanskrit"', '"Tiro Devanagari Hindi"', 'serif'],
        hind: ['Hind', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        sacred: 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
