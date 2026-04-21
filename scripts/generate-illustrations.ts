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

const MODELS_TO_TRY = (process.env.GEMINI_MODEL || 'gemini-2.0-flash-preview-image-generation,gemini-2.5-flash-image').split(',').map(s => s.trim());

function apiUrl(model: string) {
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
}

interface ScenePrompt {
  filename: string;
  prompt: string;
}

const ISKCON_STYLE = [
  'ISKCON BBT devotional painting style.',
  'Rich, luminous, realistic painting with divine golden atmosphere.',
  'Vivid saturated colors with warm golden divine light and soft celestial glow.',
  'Highly detailed, inspired by Bhaktivedanta Book Trust illustrations.',
  'No text, words, numbers, or letters anywhere in the image.',
  'Square composition, centered subject.',
].join(' ');

const BAL_KRISHNA = [
  'Baby Lord Krishna as a divine chubby toddler with beautiful blue-tinted skin,',
  'large lotus-shaped eyes full of mischief and divine love,',
  'curly black hair adorned with a single peacock feather,',
  'wearing a small yellow silk dhoti (pitambara),',
  'gold anklets with tiny bells, gold bracelets, and a gold waist chain,',
  'a subtle divine golden aura radiating around him.',
].join(' ');

const YASHODA = [
  'Mother Yashoda, a beautiful Indian woman with warm brown complexion,',
  'wearing a rich saffron-orange silk sari with gold border,',
  'gold jewelry including earrings and bangles,',
  'dark hair in a bun decorated with jasmine flowers,',
  'loving maternal expression.',
].join(' ');

const FRUIT_SELLER = [
  'A kind middle-aged Indian woman fruit seller with warm brown complexion,',
  'wearing a simple white cotton sari with a red border,',
  'hair tied back in a bun,',
  'large wicker basket of colorful fruits,',
  'gentle motherly expression, barefoot.',
].join(' ');

const STORIES: Record<string, ScenePrompt[]> = {
  'krishna-and-fruit-seller': [
    {
      filename: 'scene-1.png',
      prompt: `${ISKCON_STYLE} ${FRUIT_SELLER} She walks gracefully through a beautiful morning street in the ancient village of Vrindavan, carrying a large basket of colorful ripe fruits balanced on her head. The street has simple clay houses with tulsi plants, lush green trees, cows resting nearby. Warm golden morning sunlight bathes the scene. She calls out to sell her fruits. A serene Vrindavan village atmosphere.`,
    },
    {
      filename: 'scene-2.png',
      prompt: `${ISKCON_STYLE} ${BAL_KRISHNA} He tugs excitedly at the sari of ${YASHODA} They are inside their home in Vrindavan. Little Krishna points eagerly toward the door, having heard the fruit seller's voice outside. Yashoda looks down at him with an amused, loving smile. Warm interior with earthen walls, oil lamps, and saffron-gold light. Traditional Vrindavan home setting.`,
    },
    {
      filename: 'scene-3.png',
      prompt: `${ISKCON_STYLE} ${YASHODA} She kneels lovingly and places a handful of rice grains into the tiny cupped hands of ${BAL_KRISHNA} He looks up at her with big eager lotus eyes, excited to go trade for fruits. A warm indoor scene in their Vrindavan home with earthen walls, brass pots, and soft golden light from a window.`,
    },
    {
      filename: 'scene-4.png',
      prompt: `${ISKCON_STYLE} ${BAL_KRISHNA} He runs eagerly through a sunny lane of Vrindavan toward the fruit seller in the distance. His tiny hands are almost open and rice grains are spilling and falling through his small fingers as he runs. His gold anklet bells jingle. Sunlight streams through the scene. Vrindavan village lane with clay houses and greenery. A joyful, playful moment.`,
    },
    {
      filename: 'scene-5.png',
      prompt: `${ISKCON_STYLE} ${BAL_KRISHNA} He stands before ${FRUIT_SELLER} looking up at her with his big beautiful divine lotus eyes, an innocent sweet expression. He holds out his small open blue-tinted palm with just a few tiny grains of rice. The fruit seller kneels down to his level and looks at him with a melting warm smile, her heart moved by his innocence. Her basket of ripe mangoes, bananas and berries sits beside her. Warm golden light, Vrindavan village marketplace.`,
    },
    {
      filename: 'scene-6.png',
      prompt: `${ISKCON_STYLE} ${FRUIT_SELLER} She generously fills the arms of ${BAL_KRISHNA} with the best colorful fruits from her basket: ripe golden mangoes, yellow bananas, and red berries. She has a warm joyful smile, happy to give. Krishna's eyes are wide with delight as he receives the overflowing fruits. Golden divine light radiates from Krishna. A beautiful moment of selfless giving. Vrindavan marketplace setting.`,
    },
    {
      filename: 'scene-7.png',
      prompt: `${ISKCON_STYLE} ${BAL_KRISHNA} He runs joyfully back through the sunny village lane of Vrindavan, his small arms overflowing with colorful mangoes, bananas, and berries. He is laughing with pure childlike divine delight, his peacock feather bobbing, his anklet bells ringing. Golden sunlight streaming through the scene. Vibrant fruits in warm oranges, yellows and reds. A feeling of pure divine joy and childhood happiness.`,
    },
    {
      filename: 'scene-8.png',
      prompt: `${ISKCON_STYLE} ${FRUIT_SELLER} She stands in her simple home, looking down into her wicker basket with an expression of pure wonder, amazement, and tears of joy. The basket overflows with sparkling jewels, rubies, emeralds, gold coins, and precious gemstones where fruits used to be. Brilliant magical warm golden light radiates upward from the basket, illuminating her face with divine radiance. Rich saffron and gold tones throughout. A miracle of divine grace.`,
    },
    {
      filename: 'scene-9.png',
      prompt: `${ISKCON_STYLE} ${FRUIT_SELLER} She stands outside at golden hour, looking up at a warm glowing sunset sky with folded hands in prayer and a serene, grateful smile of divine understanding on her face. Soft saffron and gold light fills the entire scene. Vrindavan village in the background with temples. A sense of divine grace, gratitude, and deep spiritual contentment. The sky glows magnificently with warm oranges and golds. Subtle divine light all around.`,
    },
    {
      filename: 'scene-10.png',
      prompt: `${ISKCON_STYLE} A beautiful panoramic view of Vrindavan village at golden sunset. In the center, a gentle divine vision of ${BAL_KRISHNA} playing his small flute, surrounded by a brilliant golden celestial aura, floating above the village like a blessing. Below, the peaceful village with temples, the Yamuna river, cows, and green trees. The entire scene radiates divine love and warmth. A feeling that giving with love brings divine blessings. Luminous, transcendent atmosphere.`,
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

const MAX_RETRIES = 3;
const RETRY_DELAYS = [5000, 15000, 30000];

interface ImageResult {
  data: Buffer;
  mimeType: string;
}

async function generateImageWithModel(prompt: string, model: string): Promise<ImageResult> {
  const response = await fetch(apiUrl(model), {
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
    const err = new Error(`Gemini ${response.status}: ${body.slice(0, 400)}`);
    (err as Error & { status: number }).status = response.status;
    throw err;
  }

  const data = await response.json();
  const parts = data?.candidates?.[0]?.content?.parts;
  if (!parts) throw new Error('No content in response');

  const imagePart = parts.find((p: { inlineData?: { data: string; mimeType?: string } }) => p.inlineData?.data);
  if (!imagePart) {
    const textPart = parts.find((p: { text?: string }) => p.text);
    throw new Error(`No image returned. Model said: ${textPart?.text?.slice(0, 200) || 'nothing'}`);
  }

  return {
    data: Buffer.from(imagePart.inlineData.data, 'base64'),
    mimeType: imagePart.inlineData.mimeType || 'image/png',
  };
}

async function generateImage(prompt: string): Promise<ImageResult> {
  for (const model of MODELS_TO_TRY) {
    console.log(`  trying model: ${model}`);
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        return await generateImageWithModel(prompt, model);
      } catch (err) {
        const status = (err as Error & { status?: number }).status;
        const isRetryable = status === 429 || status === 503 || status === 500;

        if (isRetryable && attempt < MAX_RETRIES) {
          const delay = RETRY_DELAYS[attempt];
          console.log(`  ${status} error, retrying in ${delay / 1000}s (attempt ${attempt + 1}/${MAX_RETRIES})...`);
          await new Promise((r) => setTimeout(r, delay));
          continue;
        }

        if (status === 429 || status === 404) {
          console.log(`  ${model} failed with ${status}, trying next model...`);
          break;
        }

        throw err;
      }
    }
  }

  throw new Error(`All models failed: ${MODELS_TO_TRY.join(', ')}`);
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
  console.log(`Models: ${MODELS_TO_TRY.join(' → ')}`);
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

      console.log(`  ${scene.filename}...`);
      try {
        const result = await generateImage(scene.prompt);
        await fs.writeFile(outPath, result.data);
        console.log(`  done (${(result.data.length / 1024).toFixed(0)} KB, ${result.mimeType})`);
      } catch (err) {
        console.log(`  failed: ${err instanceof Error ? err.message : err}`);
        throw err;
      }

      await new Promise((r) => setTimeout(r, 2000));
    }
  }

  console.log('\nDone. Illustrations written to public/illustrations/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
