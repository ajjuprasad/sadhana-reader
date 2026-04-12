# Sadhana Reader

A digital sanctum for reading and contemplating major Hindu stotras, built with React, TypeScript, and Tailwind CSS.

## Stotras Included

- **Hanuman Chalisa** — 43 verses (2 Dohas + 40 Chaupais + closing Doha)
- **Ganesha Pancharatnam** — 5 verses by Adi Shankaracharya
- **Shiva Panchakshara Stotram** — 5 verses (Na-Ma-Shi-Va-Ya)
- **Mahalakshmi Ashtakam** — 9 verses (8 + Phala Shruti)
- **Lingashtakam** — 8 verses
- **Madhurashtakam** — 8 verses by Vallabhacharya

## Features

- Verse-by-verse card reader with swipe navigation
- Devanagari script, Roman transliteration, and English meanings
- Deepam Mode (warm dark theme with diya flame animation)
- Contemplation Mode (Sanskrit + meaning only)
- Adjustable font size
- Japa Mala bead progress indicator
- Mandala watermark background
- Fully offline — no API calls

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
npm run preview   # preview locally
```

Deployed automatically to GitHub Pages via GitHub Actions on push to `main`.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- GitHub Pages
