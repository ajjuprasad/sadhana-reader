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

const MODELS_TO_TRY = (
  process.env.GEMINI_MODEL ||
  'gemini-2.0-flash-preview-image-generation,gemini-2.5-flash-image'
).split(',').map(s => s.trim());

function apiUrl(model: string) {
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
}

interface ScenePrompt {
  filename: string;
  prompt: string;
}

// ─── Master Style Block (appended to every prompt) ───
const STYLE = [
  'In the style of Bhaktivedanta Book Trust (BBT) classical realism.',
  'Luminous, transcendental oil painting with soft Renaissance-style chiaroscuro lighting.',
  'Vibrant, saturated colors: deep ultramarine, saffron, and emerald.',
  'Characters have idealized, serene features and soft skin textures.',
  'Extremely ornate, highly detailed gold jewelry and flowing, translucent silk garments with intricate gold borders.',
  'The atmosphere is ethereal, divine, and immersive.',
  'No text, words, numbers, letters, or watermarks anywhere in the image.',
  'Square composition.',
].join(' ');

// ─── Character Identity Specs (25-word anchors, used verbatim every time) ───
const KRISHNA =
  'Baby Lord Krishna: deep blue-black skin, peacock feather crown in curly black hair, yellow silk dhoti, large lotus almond eyes, mischievous divine smile, gold anklets bracelets waist-chain, celestial golden aura.';

const YASHODA =
  'Mother Yashoda: warm brown complexion, ornate saffron silk sari with gold border, gold nose ring earrings bangles, jasmine flowers in dark hair bun, loving maternal gaze.';

const FRUIT_SELLER =
  'The Fruit Seller: middle-aged Indian woman, simple white cotton sari with red border, warm brown skin, kind weathered face, large wicker fruit basket on head, barefoot, gentle smile.';

// ─── Story Scene Prompts ───
const STORIES: Record<string, ScenePrompt[]> = {
  'krishna-and-fruit-seller': [
    {
      filename: 'scene-0-title.png',
      prompt: `${KRISHNA} ${FRUIT_SELLER} A majestic title composition. Baby Krishna stands in a sunlit Vrindavan marketplace, one tiny blue-black hand reaching up toward a ripe golden mango held by the kneeling fruit seller. Their eyes meet — his full of divine mischief, hers full of tender love. Behind them, the ancient village of Vrindavan glows in golden morning light: sandstone temples with ornate spires, sacred Tulsi plants, a glimpse of the Yamuna river, peacocks perched on rooftops. Scattered rose petals on the ground. A single beam of divine golden light falls on Krishna from above. ${STYLE}`,
    },
    {
      filename: 'scene-1.png',
      prompt: `${FRUIT_SELLER} She walks gracefully through a beautiful morning street in the ancient village of Vrindavan, a large wicker basket of colorful ripe fruits balanced perfectly on her head — golden mangoes, yellow bananas, red berries, green guavas. She calls out warmly. The lane has clay and sandstone houses with carved wooden doors, Tulsi plants in courtyards, cows resting under banyan trees, morning dew on flowers. Warm golden sunlight streams through the scene, casting long soft shadows. A serene, inviting Vrindavan morning. ${STYLE}`,
    },
    {
      filename: 'scene-2.png',
      prompt: `${KRISHNA} ${YASHODA} Inside their home in Vrindavan. Little Krishna tugs excitedly at the edge of Yashoda's saffron sari, pointing eagerly toward the open doorway with his other tiny blue-black hand. His lotus eyes are wide with desire, hearing the fruit seller's distant call from outside. Yashoda looks down at him with an amused, tender smile. The interior has warm earthen walls, brass oil lamps flickering, copper pots, a butter churn, flower garlands on the threshold. Soft saffron-gold light from the doorway. ${STYLE}`,
    },
    {
      filename: 'scene-3.png',
      prompt: `${YASHODA} ${KRISHNA} Yashoda kneels lovingly on the floor and carefully places a handful of white rice grains into the tiny cupped blue-black hands of baby Krishna. His large lotus eyes look up at her with eager anticipation, barely able to contain his excitement. A clay rice pot sits nearby. The warm interior of their Vrindavan home: earthen walls, a window with golden light streaming in, brass vessels, a garland of marigolds above the door. An intimate, tender moment between mother and child. ${STYLE}`,
    },
    {
      filename: 'scene-4.png',
      prompt: `${KRISHNA} He runs eagerly out through the sunlit lane of Vrindavan, his tiny blue-black feet pattering on the dusty path, gold anklet bells jingling. His small cupped hands are coming apart and white rice grains are visibly spilling and scattering through his tiny fingers as he runs. His peacock feather bobs in the breeze. He looks ahead with determined, joyful urgency. The Vrindavan lane stretches ahead with clay houses and dappled tree shadows. Warm, dynamic golden light. ${STYLE}`,
    },
    {
      filename: 'scene-5.png',
      prompt: `${KRISHNA} ${FRUIT_SELLER} The fruit seller has knelt down to Krishna's level in the Vrindavan marketplace. She gazes at him with her heart visibly melting — eyes glistening, a tender awed smile. Krishna stands before her looking up with his enormous divine lotus eyes, an innocent sweet expression on his blue-black face. He holds out his small open blue-black palm with just three or four tiny white grains of rice. Her basket of ripe mangoes, bananas and berries sits on the ground beside her. Warm golden afternoon light. ${STYLE}`,
    },
    {
      filename: 'scene-6.png',
      prompt: `${FRUIT_SELLER} ${KRISHNA} The fruit seller generously and joyfully fills the small arms of baby Krishna with the finest fruits from her basket: plump golden mangoes, ripe yellow bananas, and glistening red berries. She leans forward with a broad, selfless smile. Krishna's divine lotus eyes are wide with pure delight as colorful fruits overflow his tiny blue-black arms. A subtle divine golden radiance emanates from Krishna, bathing the fruit seller in warm light. A sacred moment of selfless giving. Vrindavan marketplace. ${STYLE}`,
    },
    {
      filename: 'scene-7.png',
      prompt: `${KRISHNA} He runs joyfully back through the sunny Vrindavan village lane toward home, his small blue-black arms overflowing with colorful golden mangoes, yellow bananas, and red berries. He is laughing with pure divine childlike delight, mouth open in joy. His peacock feather bounces, his yellow dhoti flutters, his gold anklet bells ring. Golden sunlight streams dramatically through the trees behind him. The colors are vivid and warm: oranges, yellows, reds, and gold. Pure divine joy radiating from the scene. ${STYLE}`,
    },
    {
      filename: 'scene-8.png',
      prompt: `${FRUIT_SELLER} She stands in her simple home, both hands on the rim of her wicker basket, looking down into it with an expression of utter astonishment — mouth open, eyes wide, overwhelmed with wonder and tears of joy. The basket overflows with brilliant sparkling jewels: rubies, emeralds, sapphires, diamonds, gold coins, and precious gemstones, where her fruits used to be. Brilliant miraculous golden-white light radiates powerfully upward from the basket of jewels, illuminating her face and the entire room with divine radiance. ${STYLE}`,
    },
    {
      filename: 'scene-9.png',
      prompt: `${FRUIT_SELLER} She stands outside her home at golden hour, hands folded in prayer (namaste), looking up at a magnificent warm sunset sky with a serene, grateful smile of deep spiritual understanding on her face. Tears of gratitude on her cheeks. The sky blazes with divine saffron, gold, amber, and rose. Behind her, the silhouette of Vrindavan temples and the Yamuna river. A subtle celestial glow surrounds her. A feeling of profound divine grace, surrender, and spiritual fulfillment. ${STYLE}`,
    },
    {
      filename: 'scene-10.png',
      prompt: `${KRISHNA} ${FRUIT_SELLER} A transcendent closing composition. In the foreground, the fruit seller sits peacefully with her empty basket, a serene knowing smile, her face glowing with inner divine light. In the luminous background above, a celestial vision of baby Krishna playing a small flute, seated on a lotus flower, surrounded by a magnificent golden celestial aura and soft divine clouds. The entire scene is bathed in warm golden-rose light. Vrindavan village below with temples along the Yamuna. The message: giving with love brings the greatest blessing. Deeply spiritual and immersive atmosphere. ${STYLE}`,
    },
  ],
};

// ─── Generation Logic ───

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

  const imagePart = parts.find(
    (p: { inlineData?: { data: string; mimeType?: string } }) => p.inlineData?.data
  );
  if (!imagePart) {
    const textPart = parts.find((p: { text?: string }) => p.text);
    throw new Error(
      `No image returned. Model said: ${textPart?.text?.slice(0, 200) || 'nothing'}`
    );
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
          console.log(
            `  ${status} error, retrying in ${delay / 1000}s (attempt ${attempt + 1}/${MAX_RETRIES})...`
          );
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

  console.log(
    `Generating illustrations for ${storyIds.length} stor${storyIds.length === 1 ? 'y' : 'ies'}`
  );
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
