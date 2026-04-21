/* eslint-disable no-console */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { stories, type Story } from '../src/data/stories.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT, 'public', 'narration');

const API_KEY = process.env.SARVAM_API_KEY;
if (!API_KEY) {
  console.error('Error: SARVAM_API_KEY environment variable is required.');
  console.error('Get one from https://dashboard.sarvam.ai and run:');
  console.error('  SARVAM_API_KEY=your_key npm run generate-narration');
  process.exit(1);
}

// Sarvam voices trained on Indian English (bulbul:v2 model)
const VOICES = {
  female: 'anushka',
  male: 'abhilash',
} as const;

const MODEL = 'bulbul:v2';
const TARGET_LANG = 'en-IN';
const SAMPLE_RATE = 22050;

// Max characters per Sarvam request (safely under their limit)
const CHAR_LIMIT = 1500;

interface Segment {
  filename: string;
  text: string;
}

function buildSegments(story: Story): Segment[] {
  const greeting = `Hello! Let me tell you a wonderful story called ${story.title}. Are you ready? Here we go!`;
  const closing = `And that's the end of our story! Remember: ${story.moral}`;

  return [
    { filename: '0-greeting.mp3', text: greeting },
    ...story.paragraphs.map((p, i) => ({ filename: `${i + 1}.mp3`, text: p })),
    { filename: 'closing.mp3', text: closing },
  ];
}

async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function synthesize(text: string, speaker: string): Promise<Buffer> {
  if (text.length > CHAR_LIMIT) {
    throw new Error(`Text exceeds ${CHAR_LIMIT} char limit: ${text.slice(0, 80)}...`);
  }

  const response = await fetch('https://api.sarvam.ai/text-to-speech', {
    method: 'POST',
    headers: {
      'API-Subscription-Key': API_KEY!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: [text],
      target_language_code: TARGET_LANG,
      speaker,
      model: MODEL,
      speech_sample_rate: SAMPLE_RATE,
      enable_preprocessing: true,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Sarvam ${response.status}: ${body}`);
  }

  const data = (await response.json()) as { audios?: string[] };
  if (!data.audios || !data.audios[0]) {
    throw new Error('No audio returned');
  }
  return Buffer.from(data.audios[0], 'base64');
}

async function generateStory(story: Story, gender: 'female' | 'male', voice: string) {
  const storyDir = path.join(OUTPUT_DIR, story.id, gender);
  await fs.mkdir(storyDir, { recursive: true });

  const segments = buildSegments(story);

  for (const segment of segments) {
    const outPath = path.join(storyDir, segment.filename);

    if (await fileExists(outPath)) {
      continue;
    }

    process.stdout.write(`  ${gender}/${segment.filename}... `);
    try {
      const audio = await synthesize(segment.text, voice);
      await fs.writeFile(outPath, audio);
      console.log(`✓ (${(audio.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.log(`✗ ${err instanceof Error ? err.message : err}`);
      throw err;
    }

    // Gentle rate-limit
    await new Promise((r) => setTimeout(r, 250));
  }
}

async function main() {
  const filter = process.argv[2]; // optional: generate just one story

  const targets = filter ? stories.filter((s) => s.id === filter) : stories;
  if (filter && targets.length === 0) {
    console.error(`No story found with id "${filter}"`);
    process.exit(1);
  }

  console.log(`Generating narration for ${targets.length} stor${targets.length === 1 ? 'y' : 'ies'} × 2 voices`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log('');

  let totalChars = 0;
  for (const story of targets) {
    const segs = buildSegments(story);
    totalChars += segs.reduce((sum, s) => sum + s.text.length, 0) * 2;
  }
  const estimatedCost = (totalChars * 30) / 10000;
  console.log(`Estimated total: ~${totalChars.toLocaleString()} characters → ~₹${estimatedCost.toFixed(0)}`);
  console.log('');

  for (const story of targets) {
    console.log(`📖 ${story.title} (${story.id})`);
    for (const [gender, voice] of Object.entries(VOICES) as Array<['female' | 'male', string]>) {
      await generateStory(story, gender, voice);
    }
  }

  console.log('');
  console.log('Done. MP3 files written to public/narration/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
