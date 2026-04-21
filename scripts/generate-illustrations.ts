/* eslint-disable no-console */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT, 'public', 'illustrations');

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error('Error: GEMINI_API_KEY environment variable is required.');
  console.error('Get one from https://aistudio.google.com/apikey and run:');
  console.error('  GEMINI_API_KEY=your_key npx tsx scripts/generate-illustrations.ts');
  process.exit(1);
}

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash-image';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

interface ScenePrompt {
  filename: string;
  prompt: string;
}

const STYLE = [
  'Warm watercolor children\'s book illustration.',
  'Indian village setting with traditional clothing.',
  'Soft brushstrokes, gentle colors in saffron orange, terracotta red, warm gold, and cream tones.',
  'Characters have warm brown skin and expressive, kind faces.',
  'No text, words, numbers, or letters anywhere in the image.',
  'Square composition, centered subject.',
].join(' ');

const STORIES: Record<string, ScenePrompt[]> = {
  'krishna-and-fruit-seller': [
    {
      filename: 'scene-1.webp',
      prompt: `${STYLE} A colorful morning street in an Indian village. A woman fruit seller walks gracefully with a large basket of colorful fruits balanced on her head. A little dark-skinned toddler boy with curly black hair peeks from behind his mother who wears a traditional sari, curious about the fruits. Warm golden morning sunlight. Vrindavan village with simple clay houses and greenery.`,
    },
    {
      filename: 'scene-2.webp',
      prompt: `${STYLE} A loving Indian mother in an orange sari kneeling and placing rice grains into a toddler boy's cupped hands. The boy has dark skin, curly hair, and big excited eyes. In the next moment he runs eagerly toward the door, tiny rice grains spilling through his small fingers. Warm indoor scene with earthen walls and saffron light.`,
    },
    {
      filename: 'scene-3.webp',
      prompt: `${STYLE} A tiny dark-skinned boy with curly hair stands before a kind fruit seller woman, looking up at her with big beautiful innocent eyes. He holds out his small open palm with just a few grains of rice. The fruit seller looks down at him with a melting warm smile, her basket full of ripe mangoes, bananas and berries beside her. Warm golden light, Indian village marketplace.`,
    },
    {
      filename: 'scene-4.webp',
      prompt: `${STYLE} A joyful little dark-skinned boy with curly hair runs through a sunny Indian village lane, arms overflowing with colorful mangoes, bananas, and berries. He is laughing with pure delight. Golden sunlight streaming through the scene. Vibrant fruits in warm oranges, yellows and reds. A feeling of pure childhood happiness.`,
    },
    {
      filename: 'scene-5.webp',
      prompt: `${STYLE} A woman in a sari stands in her simple home, looking into her wicker basket with an expression of wonder and amazement. The basket overflows with sparkling jewels, gold coins, and gemstones where fruits used to be. Magical warm golden light radiates upward from the basket, illuminating her face. Rich saffron and gold tones throughout.`,
    },
    {
      filename: 'scene-6.webp',
      prompt: `${STYLE} A peaceful Indian woman standing in a golden landscape, looking up at a warm sunset sky with a serene, grateful smile. Soft saffron and gold light fills the entire scene. A sense of divine grace, gratitude, and deep contentment. Gentle watercolor washes in warm tones. The sky glows with warm oranges and golds.`,
    },
  ],
};

async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function generateImage(prompt: string): Promise<Buffer> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `Generate an image: ${prompt}` }] }],
      generationConfig: {
        responseModalities: ['IMAGE'],
        imageConfig: { aspectRatio: '1:1' },
      },
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Gemini ${response.status}: ${body.slice(0, 300)}`);
  }

  const data = await response.json();
  const parts = data?.candidates?.[0]?.content?.parts;
  if (!parts) throw new Error('No content in response');

  const imagePart = parts.find((p: { inlineData?: { data: string } }) => p.inlineData?.data);
  if (!imagePart) {
    const textPart = parts.find((p: { text?: string }) => p.text);
    throw new Error(`No image returned. Model said: ${textPart?.text?.slice(0, 200) || 'nothing'}`);
  }

  return Buffer.from(imagePart.inlineData.data, 'base64');
}

async function main() {
  const filter = process.argv[2];
  const storyIds = filter ? [filter] : Object.keys(STORIES);

  if (filter && !STORIES[filter]) {
    console.error(`No scene prompts found for story "${filter}"`);
    console.error(`Available: ${Object.keys(STORIES).join(', ')}`);
    process.exit(1);
  }

  console.log(`Generating illustrations for ${storyIds.length} stor${storyIds.length === 1 ? 'y' : 'ies'}`);
  console.log(`Model: ${MODEL}`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log('');

  for (const storyId of storyIds) {
    const scenes = STORIES[storyId];
    const storyDir = path.join(OUTPUT_DIR, storyId);
    await fs.mkdir(storyDir, { recursive: true });

    console.log(`\n${storyId} (${scenes.length} scenes)`);

    for (const scene of scenes) {
      const outPath = path.join(storyDir, scene.filename);

      if (await fileExists(outPath)) {
        console.log(`  ${scene.filename} - already exists, skipping`);
        continue;
      }

      process.stdout.write(`  ${scene.filename}... `);
      try {
        const imageData = await generateImage(scene.prompt);
        await fs.writeFile(outPath, imageData);
        console.log(`done (${(imageData.length / 1024).toFixed(0)} KB)`);
      } catch (err) {
        console.log(`failed: ${err instanceof Error ? err.message : err}`);
        throw err;
      }

      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  console.log('\nDone. Illustrations written to public/illustrations/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
