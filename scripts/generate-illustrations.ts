/* eslint-disable no-console */
// 8 stories: krishna-fruit-seller, ganesha, squirrel, prahlada, dhruva, hanuman, krishna-govardhan, monkey-crocodile
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
  process.env.GEMINI_MODEL || 'gemini-2.5-flash-image'
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

  'ganesha-race-around-world': (() => {
    const GANESHA = 'Lord Ganesha: elephant-headed deity, plump round body with soft grey skin, large gentle intelligent eyes, small golden crown, four arms, yellow silk dhoti, ornate gold necklaces armlets anklets, a broken tusk, holding a modak sweet in one hand.';
    const KARTIKEYA = 'Lord Kartikeya: handsome youthful warrior god, golden-brown skin, lean muscular build, red silk dhoti with gold border, ornate gold armor and jewelry, tall golden spear, riding a magnificent peacock with iridescent plumage.';
    const SHIVA = 'Lord Shiva: ash-smeared blue-white skin, matted brown dreadlocks piled high with crescent moon and Ganga, third eye on forehead, tiger skin lower garment, rudraksha beads, serene powerful expression, trident nearby.';
    const PARVATI = 'Goddess Parvati: radiant golden-brown skin, deep green silk sari with gold border, ornate gold crown tiara earrings necklaces, gentle lotus eyes, benevolent loving maternal smile, divine glow.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${GANESHA} ${KARTIKEYA} ${SHIVA} ${PARVATI} A majestic title composition on Mount Kailash. Ganesha and Kartikeya stand on either side of their parents Shiva and Parvati, who sit on a silver throne. Between them, a luminous golden mango floats, glowing with divine light. The snowy peaks of Mount Kailash shimmer behind them. Celestial clouds and divine golden light fill the sky. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${SHIVA} ${PARVATI} A great sage with a long white beard and saffron robes approaches Lord Shiva and Goddess Parvati on the snow-capped Mount Kailash. He holds out a magnificent glowing golden mango on a silver plate. The mango radiates divine light. The sage bows reverently. Kailash palace with silver pillars, snowy peaks behind, celestial clouds. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${GANESHA} ${KARTIKEYA} The two brothers argue over the golden mango. Ganesha gestures with his trunk raised, eyes determined. Kartikeya stands tall with his spear, chin lifted proudly. The golden mango sits on a pedestal between them, glowing. ${SHIVA} ${PARVATI} watch from their throne in the background with amused expressions. Kailash palace interior with silver pillars. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${SHIVA} He raises one hand with a wise smile, announcing the race. ${PARVATI} sits beside him, watching. ${GANESHA} and ${KARTIKEYA} listen attentively. Shiva points toward the horizon, indicating the whole world. The golden mango glows on a pedestal nearby. Mount Kailash throne room with sweeping views of earth below through celestial clouds. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${KARTIKEYA} He soars through the sky on his magnificent peacock with iridescent feathers spread wide, racing at tremendous speed. Below him, a sweeping aerial view of earth: snow-capped mountains, vast blue oceans, golden deserts, and green forests. Wind rushes past him, his red dhoti streaming behind. Dynamic, exhilarating flight. Dramatic sunset sky with blazing colors. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${GANESHA} He sits quietly on Mount Kailash, his small mouse vehicle beside him. He rests his chin thoughtfully on one hand, his intelligent eyes looking upward with a spark of inspiration forming. The golden mango is visible in the background. A contemplative, quiet moment of deep thinking. Soft golden light surrounds him. Snowy Kailash landscape. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${GANESHA} He walks lovingly around ${SHIVA} and ${PARVATI} who sit together on their silver throne. Ganesha has his hands folded in reverence as he circumambulates them, his trunk curled respectfully. His small mouse follows behind him. Soft divine light trails behind Ganesha as he walks. ${PARVATI} looks surprised and curious. Kailash throne room. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${PARVATI} She leans forward from the throne, her lotus eyes wide with surprise and curiosity, one hand raised in a questioning gesture. She looks at ${GANESHA} who has just completed walking around them. ${SHIVA} watches with a knowing half-smile. Soft golden light bathes the scene. Mount Kailash throne room interior. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${GANESHA} He stands before his parents with his trunk raised joyfully, all four arms in expressive gestures, speaking with conviction and love. A radiant smile on his face. Behind him, a glowing ethereal vision shows ${SHIVA} and ${PARVATI} as the entire world — the earth, sun, moon, and stars orbiting around them. The concept of parents as the whole world visualized. Divine golden light everywhere. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${SHIVA} ${PARVATI} Their faces beam with pure love and pride, tears of joy in Parvati's eyes. ${GANESHA} sits happily eating the golden mango with great relish, trunk curled around it. In the background, ${KARTIKEYA} has just arrived back on his peacock, dusty and exhausted, looking shocked to see Ganesha already eating the mango. Kailash throne room, golden light. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${KARTIKEYA} He stands with arms spread in disbelief, looking exasperated. ${SHIVA} places a gentle hand on Kartikeya's shoulder, explaining with a wise, kind expression. ${GANESHA} watches from nearby, still holding the half-eaten golden mango, expression full of love for his brother. Mount Kailash setting, warm divine golden light. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `${GANESHA} A transcendent closing composition. Ganesha sits serenely on a golden lotus throne, bathed in magnificent divine light. One hand holds a modak sweet, another raised in blessing. Below him, a vision of people from across the world praying before beginning new tasks — students, artists, travelers — all with folded hands. The message: wisdom and love are greater than speed. Celestial clouds, stars, divine golden radiance. Deeply spiritual. ${STYLE}`,
      },
    ];
  })(),

  'squirrel-and-lord-rama': (() => {
    const RAMA = 'Lord Rama: divine prince with deep blue skin, serene handsome face, tall and regal, golden crown with jewels, yellow silk dhoti and upper cloth, ornate gold jewelry, divine bow in one hand, gentle compassionate eyes, celestial golden aura.';
    const SQUIRREL = 'A tiny brown Indian palm squirrel with big round dark eyes, small furry body, bushy tail, three faint light stripes on her back, expressive and determined.';
    const MONKEYS = 'An army of large powerful vanara monkeys with brown and golden fur, muscular builds, wearing simple loincloths, carrying massive boulders and rocks.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${RAMA} ${SQUIRREL} A majestic title composition. Lord Rama stands tall on the shore, the vast blue ocean stretching behind him. He gently cradles the tiny squirrel in his large blue palm near his chest, looking down at her with infinite tenderness. The massive stone bridge stretches across the ocean into the distance. Golden sunset light, dramatic clouds. Monkeys working on the bridge visible below. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${RAMA} He stands on a rocky coastline gazing across the vast turbulent ocean toward the distant island of Lanka, silhouetted in dark storm clouds. His expression is determined and resolute. Beside him, Hanuman — a powerful white-furred monkey with a golden crown — stands loyally. The ocean is immense and intimidating. Dramatic sky with both golden light and dark clouds. The challenge ahead is visible. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${MONKEYS} Thousands of mighty vanara monkeys and bears work together carrying enormous boulders and rocks to the ocean's edge. They heave massive stones into the churning blue-green sea. Crash! Splash! The beginning of a great stone bridge forms across the water. Dynamic, powerful scene of collective effort. Dramatic lighting, spray of ocean water, golden afternoon sun. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${SQUIRREL} She sits on a branch of a tree overlooking the construction site below. Her big dark eyes watch the monkeys carrying giant boulders. She looks tiny compared to everything around her. Her expression shows longing — she wants to help but feels small. The massive bridge construction is visible below. Soft dappled sunlight through leaves. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${SQUIRREL} She rolls energetically in golden beach sand, her tiny furry body covered in grains of sand. Then she runs determinedly toward the bridge, her little legs moving fast, tail streaming behind. Sand grains cling to her fur. The beach, ocean, and bridge construction are visible. Warm golden light. A tiny hero in action. Dynamic, spirited movement. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${SQUIRREL} She stands at the edge of the massive stone bridge, shaking sand from her tiny body into the gaps between enormous boulders. Grains of sand fall from her fur into the cracks. She is impossibly small next to the giant rocks. The contrast between her tiny size and the massive bridge is dramatic. Ocean spray, warm golden light, determination in her eyes. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${MONKEYS} Several large, muscular monkeys point and laugh at ${SQUIRREL} who stands below them looking small and hurt. The monkeys are towering over her, some slapping their knees, mouths open in laughter. The squirrel's ears droop, her eyes look sad but still determined. The bridge construction continues behind. Afternoon light. The cruelty of mockery contrasted with innocent determination. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${SQUIRREL} She sits alone looking downcast, ears drooped, eyes glistening with sadness. But behind her, ${RAMA} approaches, walking toward her with graceful powerful strides, his divine blue skin glowing. His compassionate eyes are fixed on the tiny squirrel. A beam of divine golden light surrounds Rama. The monkeys in the background look up in surprise at Rama's approach. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${RAMA} He stands tall and majestic, one hand raised commanding silence, looking at the monkeys with gentle authority. His expression is kind but firm. He gestures toward ${SQUIRREL} at his feet. The monkeys look ashamed, heads bowed. Rama's divine aura illuminates the scene. The massive bridge and ocean behind. A moment of justice and compassion. Golden divine light. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${RAMA} Close-up of his large, beautiful blue hands gently cradling ${SQUIRREL} in his palm. He strokes her tiny back softly with three fingers — and where his fingers touch, three luminous golden stripes appear on her fur, glowing with divine light. The squirrel looks up at him with pure adoration. Rama smiles tenderly. Intense divine golden radiance emanates from the touch. An intimate, sacred moment. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `A transcendent closing composition. The completed magnificent stone bridge stretches gloriously across the vast blue ocean under a blazing golden sunset. ${RAMA} stands triumphantly at one end. ${SQUIRREL} sits proudly on a stone, her three golden stripes glowing. The monkeys bow in respect around her. In the golden sky above, a celestial vision of the rescued Sita smiling. The message: even the smallest act of love makes a big difference. Deeply spiritual and immersive. ${STYLE}`,
      },
    ];
  })(),

  'prahlada-and-holika': (() => {
    const PRAHLADA = 'Young prince Prahlada: a small gentle boy of about seven, warm brown skin, large innocent devoted eyes, simple white dhoti, a thin tulsi-bead necklace, serene peaceful expression even in danger, subtle divine glow around him.';
    const HIRANYAKASHIPU = 'Demon king Hiranyakashipu: massive towering muscular figure, fierce golden-brown complexion, wild mane of black hair, furious bulging red eyes, ornate demonic gold crown with horns, heavy gold armor and jewelry, fanged snarl, terrifying presence.';
    const HOLIKA = 'Demoness Holika: tall imposing woman with sharp angular features, dark reddish-brown skin, black flowing hair, wearing a magical shimmering fire-proof cloak that glows faintly, dark red and black garments, cunning calculating eyes.';
    const VISHNU = 'Lord Vishnu: magnificent four-armed deity with luminous deep blue skin, serene omniscient expression, golden crown with jewels, yellow silk pitambara, Sudarshana chakra, conch shell, lotus, and mace in four hands, standing on a lotus, blinding divine radiance.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${PRAHLADA} ${HIRANYAKASHIPU} A dramatic title composition. Young Prahlada sits calmly in meditation with folded hands amid towering orange flames, completely unharmed, his face serene and glowing with divine protection. Behind the flames, Hiranyakashipu's furious face looms large in shadow. Above Prahlada, a faint protective vision of ${VISHNU} appears in golden celestial light. The contrast between the boy's peace and the surrounding fury. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${HIRANYAKASHIPU} He sits on a massive golden demonic throne in a dark grand palace, radiating terrifying power. Armies of demons kneel before him in fear. His muscular arms grip the throne, his red eyes blaze. Dark storm clouds swirl outside. Even celestial beings cower in the shadows above. A scene of absolute tyrannical power. Dark dramatic lighting with golden torchlight. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${PRAHLADA} He sits peacefully in a quiet garden corner of the palace, eyes closed in devotion, hands folded, lips gently whispering "Om Namo Narayanaya." A soft divine golden light glows around him. Tulsi plants and flowers surround him. Birds perch nearby, drawn to his peace. In sharp contrast, the dark imposing palace walls loom behind. Serene, spiritual atmosphere. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${HIRANYAKASHIPU} He towers over ${PRAHLADA} furiously, one massive fist raised, face contorted in rage, shouting. Prahlada stands small but completely calm before his father, hands folded, a gentle smile on his face, looking up without fear. The contrast between the giant raging demon and the tiny peaceful boy. Dark throne room with torches. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${PRAHLADA} A dynamic montage scene: venomous cobras with raised hoods surround Prahlada but bow down gently before him instead of striking. In another part, Prahlada falls from a cliff but is caught by soft divine hands of light. In each trial, Prahlada remains calm with hands folded. ${HIRANYAKASHIPU} watches in frustrated disbelief from above. Dramatic supernatural lighting. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${HIRANYAKASHIPU} ${HOLIKA} They conspire together in a dark chamber of the palace. Hiranyakashipu leans close to Holika, whispering his evil plan. Holika grins wickedly, touching her magical fire-proof cloak. Between them, the flames of a nearby torch cast sinister shadows. Dark, foreboding atmosphere. Deep shadows and firelight. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${HOLIKA} ${PRAHLADA} A massive bonfire is built in the center of a town square. Holika sits in the flames wearing her magical shimmering cloak, pulling little Prahlada onto her lap. The townspeople watch in horror from the edges. The flames begin to rise around them. Prahlada's eyes are closed in peaceful prayer. The fire towers high. Dramatic orange and gold firelight against a dark sky. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${PRAHLADA} Close-up of his face amid roaring orange flames all around him. His eyes are closed, his lips move in silent prayer: "Om Namo Narayanaya." His expression is utterly serene and peaceful. A subtle divine golden shield of light forms around him, the flames parting gently. His tulsi beads glow. Despite the inferno, not a hair is singed. Pure faith and surrender. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `A dramatic supernatural moment: a powerful divine wind swirls through the fire, tearing the magical shimmering cloak from ${HOLIKA} and wrapping it protectively around ${PRAHLADA}. Holika screams in shock as flames engulf her. Prahlada sits calmly, now protected by the cloak, divine light around him. The wind is visible as golden streaks. Townspeople gasp. Intense dramatic firelight. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${PRAHLADA} He walks calmly out of the dying bonfire, completely unharmed, not a scratch or burn on him. The townspeople erupt in joyful celebration — cheering, throwing flowers, tears of relief and wonder. Prahlada's hands are still folded in gratitude. Golden divine light surrounds him like a halo. The embers glow behind him. A miraculous, triumphant moment. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `A transcendent closing composition. A great Holi bonfire burns ceremonially in the center, with people joyfully gathered around it, throwing colored powder in celebration. Above the fire, a celestial vision of ${PRAHLADA} praying peacefully and ${VISHNU} protecting him with an outstretched hand. The sky is filled with colors of Holi: pink, yellow, green, blue. The message: good always wins over evil. Joy, color, and divine grace. ${STYLE}`,
      },
    ];
  })(),

  'dhruva-and-the-star': (() => {
    const DHRUVA = 'Prince Dhruva: a very small five-year-old boy with warm brown skin, large determined innocent eyes, simple white dhoti, bare-chested, a single gold chain, short black hair, expression of fierce determination beyond his years.';
    const SUNITI = 'Queen Suniti: a gentle beautiful Indian woman with warm brown complexion, simple elegant white sari with silver border, minimal jewelry, kind sorrowful doe eyes, long dark hair partly loose, a loving devoted mother.';
    const SURUCHI = 'Queen Suruchi: a haughty beautiful woman with sharp features, elaborate ornate red silk sari with heavy gold embroidery, heavy gold jewelry and tall jeweled crown, cold arrogant expression, dismissive posture.';
    const KING = 'King Uttanapada: a middle-aged king with warm brown skin, ornate golden crown, rich blue silk garments, gold jewelry, seated on a grand throne, conflicted guilty expression.';
    const VISHNU_D = 'Lord Vishnu: magnificent four-armed deity with luminous deep blue skin, serene compassionate smile, golden crown, yellow silk pitambara, Sudarshana chakra conch lotus and mace, standing on a golden lotus, brilliant blinding divine radiance filling the sky.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${DHRUVA} A majestic title composition. Little Dhruva sits in deep meditation in a dark dense forest, cross-legged on a rock. Above him in the night sky, the brilliant Pole Star blazes with extraordinary golden-white light, connected to him by a beam of divine radiance. The forest around him glows with supernatural light. Stars fill the sky. The contrast between the tiny boy and the cosmic star. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${DHRUVA} ${SUNITI} They live in a modest chamber of the royal palace, far from the main halls. Suniti sits on a simple bed, little Dhruva on her lap. Their room is humble but clean, with a single oil lamp. Through a window, the grand main palace glows with lights and festivities they are excluded from. A poignant scene of love amid neglect. Warm intimate lamplight. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${DHRUVA} Little Dhruva runs eagerly with open arms toward the grand golden throne where ${KING} sits with Dhruva's stepbrother on his lap. The throne room is magnificent with tall pillars, rich tapestries. Dhruva's face is full of innocent hope and love. His small bare feet patter on the marble floor. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${SURUCHI} She stands blocking little ${DHRUVA} with one hand raised, looking down at him with cold disdain and a cruel smirk. Dhruva looks up at her, small and hurt, his eyes filling with pain. ${KING} watches from the throne behind, looking away with guilt. The grand palace throne room with towering golden pillars. Harsh contrasting light. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${DHRUVA} ${SUNITI} Dhruva runs to his mother crying, burying his face in her lap. Suniti embraces him tightly, her own eyes glistening with tears, stroking his hair. She speaks to him gently, pointing upward toward the sky through their window where stars are visible. Their humble chamber, warm lamplight, a deeply emotional intimate scene of a mother comforting her child. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${DHRUVA} The tiny five-year-old boy walks alone into a deep dark forest. He looks back one last time at the palace on the distant hill, then faces forward into the towering ancient trees with determination. His small figure is dwarfed by the massive forest. Moonlight filters through the canopy. A brave, powerful moment — a tiny child choosing an impossible path. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${DHRUVA} He sits cross-legged on a flat rock in the deep forest, eyes closed, hands folded, deep in intense meditation. Time passes: vines have grown around the rock, his hair has grown longer, leaves have piled around him. Animals — deer, rabbits, birds — sit peacefully around him, drawn to his spiritual power. Ethereal golden light emanates from him. Ancient forest, shafts of light. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `A cosmic scene: the earth trembles and shakes from the immense spiritual power of ${DHRUVA}'s meditation. Celestial gods in golden chariots peer down through parting clouds, astonished. Waves of golden spiritual energy pulse outward from the tiny boy meditating in the forest below. The sky cracks with divine light. The gods exchange amazed glances. Dramatic supernatural scene. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${VISHNU_D} He appears in magnificent glory before ${DHRUVA} in the forest. The entire forest is bathed in blinding divine golden-white radiance. Vishnu stands on a golden lotus, all four arms visible, smiling with infinite compassion. Dhruva opens his eyes and sees the divine form — his expression transforms from determination to pure overwhelming awe and love. Tears stream down his face. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${DHRUVA} He kneels before ${VISHNU_D} with folded hands, tears of joy on his face, looking up with absolute devotion. He speaks humbly, his expression showing that he has found something far greater than what he originally sought. Vishnu reaches down with one gentle blue hand toward the boy's head in blessing. Intense divine golden light surrounds them both. Forest clearing. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `A cosmic transformation scene: ${VISHNU_D} raises both hands and ${DHRUVA} begins to float upward, surrounded by brilliant starlight. His small body glows and transforms into a blazing bright star — the Pole Star. He ascends through the night sky past other stars and constellations, becoming the brightest, most steadfast light in the heavens. Magnificent cosmic night sky. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `A transcendent closing composition. A beautiful clear night sky filled with thousands of stars. In the center, the Pole Star — Dhruva's star — blazes brightest of all with a warm golden-white glow. Below, a peaceful Indian village at night with families pointing up at the star. A faint divine vision of little ${DHRUVA} meditating within the star's glow. The message: determination and devotion can achieve the impossible. Deeply spiritual cosmic atmosphere. ${STYLE}`,
      },
    ];
  })(),

  'hanuman-and-the-sun': (() => {
    const BABY_HANUMAN = 'Baby Hanuman: a tiny adorable monkey infant with soft golden-orange fur, chubby round face, big bright curious brown eyes, a small curly tail, wearing only a tiny red loincloth, impossibly strong and fearless for his size.';
    const ANJANA = 'Mother Anjana: a beautiful celestial apsara-like woman with warm golden-brown skin, white flowing sari with gold border, gentle serene face, long dark hair, cradling or watching her baby with tender love.';
    const SURYA = 'Surya the Sun God: a magnificent radiant deity with blazing golden skin, riding a golden chariot pulled by seven white horses, ornate golden crown and armor, hands raised in warning, the sun\'s disk blazing behind him.';
    const INDRA = 'Lord Indra: king of the gods, regal muscular figure with pale golden skin, elaborate golden crown and armor, riding a magnificent white elephant Airavata, wielding the thunderbolt Vajra weapon crackling with blue-white lightning.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${BABY_HANUMAN} A majestic title composition. Baby Hanuman leaps through the sky with arms outstretched toward the blazing golden sun, which fills the upper half of the image with magnificent radiance. His tiny golden-furred body is silhouetted against the sun's brilliance. Below, green mountains and clouds stretch to the horizon. His expression is pure fearless joy. Wind rushes past. A scene of incredible courage and innocence. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${BABY_HANUMAN} ${ANJANA} On a beautiful lush green mountain top, mother Anjana cradles newborn baby Hanuman. The tiny golden-furred baby is already strong, playfully trying to climb out of her arms. The mountain is surrounded by misty clouds, ancient trees, and waterfalls. The Wind God Vayu — depicted as a gentle swirling breeze with a faint divine form — watches over them. Dawn light, celestial atmosphere. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${BABY_HANUMAN} He sits on a mountain ledge, tummy rumbling with hunger, looking around for food. His eyes suddenly lock onto the sky where the magnificent golden sun rises over the mountains — big, round, glowing orange-gold. His eyes go wide with wonder and desire. He licks his lips. The sun looks like a giant ripe fruit from his perspective. Beautiful dawn landscape, mist, golden-rose sky. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${BABY_HANUMAN} Close-up of his adorable chubby face looking up at the sun with pure innocent greedy delight, mouth open in a big smile, reaching up with one tiny golden paw. His eyes sparkle with mischief. The sun fills the sky above like a giant golden mango. Thought bubbles or visual suggestion of him imagining the sun as a delicious fruit. Golden-orange warm light on his face. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${BABY_HANUMAN} He launches himself into the sky with incredible power — WHOOOOSH! His tiny body rockets upward through the clouds, arms stretched out toward the sun above. A cool breeze (his father Vayu, the Wind God, shown as silvery swirling wind with a faint smiling divine face) accompanies him. Clouds rush past below. The sun grows larger above. Dynamic upward motion, exhilarating speed, blue sky and golden light. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${SURYA} The Sun God in his blazing golden chariot looks down in complete astonishment at ${BABY_HANUMAN} who is flying rapidly toward him. Surya raises both hands in a warning gesture, his face showing shock and concern. The tiny baby monkey is closing in with arms outstretched. The sun's disk blazes behind Surya. Seven white horses pull the golden chariot. Intense golden-white radiance. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${BABY_HANUMAN} He flies closer and closer to the blazing sun, his tiny arms stretched wide open, fingers reaching, mouth open in joyful anticipation, completely unafraid of the intense heat and light. He looks like he's about to grab a giant mango. The sun fills the entire background. Golden-white blazing light. His golden fur glows. Pure fearless innocent determination. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `Rahu — a fearsome dark shadowy demon with a severed serpentine head — approaches the sun for an eclipse, but sees ${BABY_HANUMAN} already reaching for it. Rahu recoils in terror, his eyes wide with fear, turning to flee. In the distance, ${INDRA} rides toward the scene on his white elephant Airavata, thunderbolt Vajra crackling in his hand. Dramatic cosmic sky, dark and golden contrasts. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${INDRA} He hurls the thunderbolt Vajra — a blinding crackling bolt of blue-white lightning — which strikes ${BABY_HANUMAN} on his chin. The baby monkey falls backward through the sky, his little body tumbling downward through clouds. The thunderbolt's flash illuminates everything. A dramatic, shocking, powerful moment. ${BABY_HANUMAN}'s expression shifts to surprise. Intense lightning and dramatic sky. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `The Wind God Vayu — depicted as a powerful swirling silver-white divine figure — holds ${BABY_HANUMAN} protectively in his arms, fury on his face. All wind has stopped — trees are perfectly still, birds frozen mid-flight, people below gasping for breath. The gods panic in the sky above, approaching with apologetic gestures. An eerie, still atmosphere. No movement anywhere except Vayu's anger. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `A magnificent gathering of gods surrounds ${BABY_HANUMAN} who sits in Vayu's arms. Each god reaches out to bless the baby: golden divine light streams from their hands into the infant. The baby monkey glows with accumulated divine power, growing visibly stronger. Brahma, Shiva, Indra, and other gods are present, all with apologetic and generous expressions. Cosmic celestial setting, golden divine light everywhere. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `A transcendent closing composition. ${BABY_HANUMAN} grown slightly, sits proudly on a mountain peak, chin slightly crooked from the thunderbolt, flexing his tiny arms showing incredible divine strength. Golden divine power radiates from him. Behind him, the sun he tried to eat glows in a brilliant sky. Below, the vast world stretches out. A faint celestial vision of the adult Hanuman — mighty, powerful, devotional — appears in the golden clouds above. The message: courage and curiosity lead to greatness. ${STYLE}`,
      },
    ];
  })(),

  'krishna-lifts-govardhan': (() => {
    const KRISHNA_G = 'Baby Lord Krishna: deep blue-black skin, peacock feather crown in curly black hair, yellow silk dhoti, large lotus almond eyes, mischievous divine smile, gold anklets bracelets waist-chain, celestial golden aura.';
    const INDRA_G = 'Lord Indra: king of the gods, muscular golden-skinned deity, elaborate golden crown and armor, riding magnificent white elephant Airavata, wielding thunderbolt Vajra, proud imperious expression, storm clouds swirling around him.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${KRISHNA_G} A majestic title composition. Baby Krishna stands fearlessly, lifting the enormous green Govardhan Hill high above his head on just one little finger of his left hand. Beneath the mountain, grateful villagers, cows, and peacocks shelter from a raging storm. Dark thunderclouds and torrential rain surround the hill, but underneath is warm golden light and safety. Krishna's face shows calm divine power and a gentle smile. The contrast between the tiny blue-black boy and the massive mountain is dramatic and awe-inspiring. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `A festive scene in the ancient village of Vrindavan. Villagers busily prepare a grand celebration to honor Indra, the rain god. Women carry brass platters piled with fruits, sweets, and flowers. Men build a decorated altar. Clay lamps line the streets. Colorful rangoli patterns on the ground. Banners and garlands of marigolds. Children run excitedly. Vrindavan with sandstone houses, sacred Tulsi plants, cows resting under banyan trees. Warm golden afternoon light. A joyful community atmosphere. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${KRISHNA_G} Little Krishna stands among village elders in a Vrindavan courtyard, looking up at them with curious questioning eyes, one tiny blue-black hand raised in inquiry. The elders — men in white dhotis and women in colorful saris — gesture toward the sky, explaining about Indra. Behind them, preparations for the Indra puja continue. Warm golden light. Krishna's expression is thoughtfully skeptical. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${KRISHNA_G} Krishna stands on a small mound, speaking passionately to gathered villagers, his tiny blue-black hand pointing toward the lush green Govardhan Hill visible in the background. The hill is beautiful — green with streams, grazing cows, shade trees, and wildflowers. The villagers listen with growing interest. Bright, hopeful golden light illuminates the scene. Krishna's expression is wise and animated beyond his years. Vrindavan landscape. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${KRISHNA_G} A joyful celebration at the base of Govardhan Hill. Villagers of Vrindavan cook delicious food in large pots, sing and dance, offer flowers and fruits to the hill. Krishna dances joyfully among them. Colorful rangoli, garlands draped on rocks, brass lamps lit along the hill's base. Cows decorated with paint and flowers. Music, drums, and flutes. The green hill rises majestically behind them. Warm saffron sunset light. Pure festive joy. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${INDRA_G} High above in the celestial realm among dark thunderclouds, Lord Indra sits atop his white elephant Airavata, his face contorted with furious rage. He raises the thunderbolt Vajra and commands massive, menacing dark storm clouds to gather. The clouds have angry faces within them. Below, the tiny village of Vrindavan is visible far below. Lightning crackles. A dramatic, foreboding atmosphere of divine wrath. Dark sky with blue-purple storm energy. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `A catastrophic storm over Vrindavan. The sky is pitch black. Torrential rain pours in sheets. Lightning splits the sky. The Yamuna river floods its banks, water rushing through village streets. Villagers huddle together in terror — mothers clutching children, old men struggling against wind, cows bellowing in fear. Uprooted trees. Crumbling mud walls. A terrifying scene of nature's fury. Dark tones with flashes of blue-white lightning. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${KRISHNA_G} Desperate villagers — drenched, frightened, shivering — crowd around little Krishna in the pouring rain, hands folded, begging for help. Women hold babies above the rising floodwaters. Old men lean on sticks. Children cry. Krishna stands calmly at the center, his celestial golden aura glowing warmly despite the dark storm. His expression is serene and reassuring. Dramatic contrast between chaos and divine calm. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${KRISHNA_G} THE ICONIC MOMENT. Baby Krishna bends down and lifts the entire enormous green Govardhan Hill high into the air on just the little finger of his left hand. His expression is calm, effortless, with a gentle divine smile. The mountain is massive — trees, waterfalls, rocks, animals visible on it. His tiny blue-black body glows with immense divine golden power. The villagers gasp in astonishment. Rain pours from the dark sky. A breathtaking display of divine power. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${KRISHNA_G} View from underneath the lifted Govardhan Hill. Krishna holds the mountain up effortlessly on one finger. Below the sheltering hill, villagers stream in with their cows, goats, dogs, and belongings. It is warm and dry underneath — golden lamplight, relieved smiling faces. Outside the mountain's shelter, rain pours in dark curtains. The contrast between the warm dry sanctuary and the raging storm outside. A feeling of divine protection. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${KRISHNA_G} Seven days have passed. Krishna stands absolutely still, the colossal Govardhan Hill balanced on his one little finger, unwavering. His expression is serene and tireless. Under the hill, village life continues — families eat, children play, cows rest, oil lamps glow. Outside, the relentless storm still rages. Krishna's golden aura is steady and warm. Atmospheric contrast: warm gold inside, cold dark blue-grey outside. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `${INDRA_G} ${KRISHNA_G} The storm has cleared. Lord Indra descends from the sky, stepping off his white elephant Airavata. He kneels humbly before little Krishna, his crown lowered, hands folded in reverent namaste, his face full of remorse and awe. Krishna looks down at him with gentle, forgiving eyes. Golden sunlight breaks through parting clouds. Vrindavan villagers watch in wonder. A moment of divine humility. ${STYLE}`,
      },
      {
        filename: 'scene-12.png',
        prompt: `A transcendent closing composition. ${KRISHNA_G} gently places the enormous Govardhan Hill back down. Brilliant golden sunlight floods the scene. A rainbow arcs across the clear blue sky. Vrindavan villagers cheer, dance, and throw flowers in celebration. Cows graze peacefully. Peacocks dance. The lush green Govardhan Hill settles into its place. Krishna stands at center, golden aura blazing, divine smile. The message: a true leader protects everyone. Joy, relief, and divine grace. ${STYLE}`,
      },
    ];
  })(),

  'monkey-and-crocodile': (() => {
    const MONKEY_MC = 'A clever young monkey with golden-brown fur, bright intelligent expressive eyes, lean agile build, long curling tail, animated lively face, sitting in a large jamun tree laden with purple fruits by a sparkling river.';
    const CROCODILE_MC = 'A large river crocodile with dark green scaly skin, long broad snout, short stubby legs, yellow-green eyes, sometimes looking guilty and conflicted, massive powerful tail, half-submerged in the river.';
    const CROC_WIFE = 'The crocodile wife: a slightly smaller crocodile with darker olive-green scales, sharper narrower snout, cunning sly eyes, manipulative expression, resting on a muddy riverbank.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${MONKEY_MC} ${CROCODILE_MC} A majestic title composition. The monkey sits high in a magnificent spreading jamun tree laden with ripe purple fruits, one paw offering a fruit downward. Below, the crocodile floats in the sparkling blue river, looking up with a friendly smile. Lush tropical riverbank with green ferns, lotus flowers on the water, golden afternoon sunlight filtering through the tree canopy. A feeling of friendship and trust. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${MONKEY_MC} He sits happily on a thick branch of a magnificent large jamun tree by a wide sparkling river. The tree is heavy with clusters of ripe purple jamun fruits. The monkey eats contentedly, juice staining his paws. Lush green riverbank with ferns and wildflowers. Butterflies flutter. Birds sing nearby. Golden morning light sparkles on the water. A scene of perfect contentment and abundance. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${MONKEY_MC} ${CROCODILE_MC} The crocodile rests in the shade of the jamun tree by the river's edge. The monkey hangs from a branch above, cheerfully tossing down ripe purple jamun fruits to the crocodile. The crocodile looks up with mouth open, catching a fruit. Splashes of purple juice. The river sparkles in warm sunlight. A friendly first meeting between two unlikely friends. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${MONKEY_MC} ${CROCODILE_MC} The monkey sits on a low branch hanging over the water while the crocodile floats nearby. Between them, a pile of purple jamun fruits. They appear to be talking and laughing together like old friends. Warm, relaxed, intimate — two unlikely friends enjoying each other's company. Golden afternoon light, sparkling river, lush greenery. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${CROC_WIFE} ${CROCODILE_MC} On a muddy riverbank at their den, the crocodile's wife speaks to the crocodile with a wicked scheming expression, leaning close. Her sharp eyes glint with cunning. The crocodile looks shocked and horrified, recoiling. Between them, some jamun fruits the crocodile brought home. The mood is dark and sinister. Shadows, darker lighting, the river in the background. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${CROCODILE_MC} He floats alone in the river at dusk, his expression deeply conflicted and sad. His yellow-green eyes show guilt and sorrow. Above him, the jamun tree is visible on the distant bank with the tiny silhouette of the monkey. The sky is streaked with melancholic orange and purple. The water reflects the troubled sky. A crocodile torn between loyalty to a friend and pressure from his wife. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${MONKEY_MC} ${CROCODILE_MC} The crocodile floats beside the riverbank with a forced smile, inviting the monkey for a ride. The monkey cheerfully and trustingly leaps onto the crocodile's broad scaly back, tail high with excitement. The river stretches wide ahead. Warm golden light. The monkey's complete trust contrasts with the crocodile's hidden guilt. A moment of innocent friendship about to be betrayed. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${MONKEY_MC} ${CROCODILE_MC} In the middle of the wide deep river, the crocodile starts to sink beneath the water. The monkey clings to the crocodile's back, eyes wide with alarm, water rising around him. The riverbanks are far away on either side. Dark blue-green water, deeper and more threatening. The monkey's fur is getting wet. A moment of sudden danger and dawning realization. Dramatic lighting. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${MONKEY_MC} ${CROCODILE_MC} Close-up emotional scene in the middle of the vast river. The crocodile confesses, his yellow-green eyes full of guilt and shame. The monkey sits on his back, face showing terror and shock, eyes wide, mouth open. Water laps around them. Deep blue tones. An emotional, dramatic moment of betrayal revealed. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${MONKEY_MC} ${CROCODILE_MC} The monkey's expression shifts from fear to clever cunning. He sits calmly on the crocodile's back, one paw raised casually, his eyes bright with a shrewd idea. He speaks smoothly. The crocodile listens with wide, gullible eyes. In the background, the jamun tree is visible on the distant bank. A dramatic shift — the clever trickster at work. Golden light on the water. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${MONKEY_MC} ${CROCODILE_MC} The crocodile has swum back to the tree. The monkey leaps explosively off the crocodile's back — a dynamic mid-air jump — and grabs the highest branch of the jamun tree. His tail streams behind him, his expression is triumphant relief. The crocodile looks up from the water in stunned realization. Splash of water. Dynamic action scene. Bright golden light. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `${MONKEY_MC} He sits safely on the highest branch of the jamun tree, looking down with a mix of sadness and wisdom. ${CROCODILE_MC} floats below in the water, looking up with deep regret, his eyes sorrowful. The distance between them symbolizes the broken friendship. Purple jamun fruits hang between them untouched. Golden sunset light. A bittersweet, poignant moment. ${STYLE}`,
      },
      {
        filename: 'scene-12.png',
        prompt: `A transcendent closing composition. ${CROCODILE_MC} floats away alone down the wide river into the sunset, his silhouette growing small against the golden-orange water. Behind, the magnificent jamun tree stands tall on the bank with ${MONKEY_MC} sitting in it, now a distant figure. The sky blazes with sunset colors — saffron, rose, and gold. The message: a real friend is worth more than anything. Lonely, reflective, deeply atmospheric. ${STYLE}`,
      },
    ];
  })(),

  'sudama-gift-of-rice': (() => {
    const KRISHNA_KING = 'Lord Krishna as King of Dwaraka: majestic young man with deep blue-black skin, ornate golden crown with peacock feather, rich yellow silk pitambara robes, elaborate gold jewelry, warm compassionate eyes, gentle knowing smile, radiant divine golden aura.';
    const SUDAMA = 'Sudama: a thin humble Brahmin man, warm brown skin, gentle kind face, wearing a simple worn white dhoti slightly tattered, thin sacred thread across chest, bare feet, carrying a small cloth bundle, shy modest expression.';
    const SUDAMA_WIFE = 'Sudama wife: a gentle Indian woman in a faded simple sari, kind worried eyes, warm smile, thin from poverty but dignified, long dark hair in a bun.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${KRISHNA_KING} ${SUDAMA} A majestic title composition. Krishna, resplendent as king, embraces his old friend Sudama at the grand golden gates of Dwaraka palace. Krishna is barefoot, running toward Sudama with arms open wide, tears of joy in his eyes. Sudama stands in his tattered white dhoti, overwhelmed, clutching his small cloth bundle of poha. Behind them, the magnificent golden spires and gem-studded walls of Dwaraka city gleam in golden light. The contrast between the glorious king and the humble poor man. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `Two young boys — one with blue-black skin (young Krishna) and one with brown skin (young Sudama) — sit side by side under a large tree at a forest gurukul school. They share a single leaf plate of food, laughing together. Other student boys study nearby. A bearded guru in saffron robes teaches in the background. Ancient forest school setting with thatched roof, books on bark, sacred fire. Warm golden dappled sunlight. Pure innocent childhood friendship. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `A dramatic split composition. On the left: ${KRISHNA_KING} sits on a magnificent golden throne in the dazzling palace of Dwaraka, surrounded by wealth, jewels, and attendants. On the right: ${SUDAMA} sits in a tiny crumbling mud hut, his thin children beside him, an empty cooking pot. The contrast between opulence and poverty. The two halves connected by a faint golden thread of memory. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${SUDAMA} ${SUDAMA_WIFE} Inside their tiny humble hut. Sudama's wife speaks earnestly to him, one hand on his shoulder, gesturing toward the distance with the other. Sudama sits cross-legged, looking reluctant and shy, hands in his lap. Their thin children peek from behind. A single clay lamp provides warm light. The hut has cracked walls, a leaking roof, bare necessities. Intimate, emotional, warm despite poverty. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${SUDAMA_WIFE} She carefully ties a small handful of flattened rice — poha — in a torn cloth, making a tiny bundle. Her eyes are full of love and hope. ${SUDAMA} watches, looking worried and embarrassed about the humble gift. The tiny bundle of poha sits between them, pathetically small yet precious. Their humble hut interior, warm lamplight. A touching scene of love making the best of nothing. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${SUDAMA} He walks along a dusty road toward the magnificent city of Dwaraka visible in the distance — golden spires, gem-studded walls, flags flying. Sudama is small and humble on the road, his tattered white dhoti dusty, bare feet sore, clutching his tiny cloth bundle. His expression shows awe and intimidation. Other well-dressed travelers pass him. The golden city towers ahead. Dramatic perspective showing his smallness against the grand city. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${KRISHNA_KING} ${SUDAMA} THE ICONIC MOMENT. Krishna has run barefoot from his golden throne all the way to the palace gate where Sudama stands. Krishna embraces Sudama tightly, tears of pure joy streaming down his blue-black cheeks. Sudama is overwhelmed, eyes wide, the tiny poha bundle still clutched in his hand. Palace guards and servants watch in astonishment. The grand golden gates of Dwaraka. Brilliant warm golden light. Pure love between friends reunited. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${KRISHNA_KING} ${SUDAMA} Inside the magnificent Dwaraka palace. Krishna kneels on the marble floor and lovingly washes Sudama's tired, dusty feet with water from a golden pitcher. Sudama sits on Krishna's own golden throne, looking deeply embarrassed and moved. Royal servants stand frozen in shock — the great king serving a poor man. Opulent palace interior with golden pillars, silk drapes, gem-studded walls. Warm divine golden light. A profound act of humility and love. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${KRISHNA_KING} ${SUDAMA} Krishna notices the small torn cloth bundle that Sudama is trying to hide behind his back. Krishna reaches for it with curious delight. Sudama's face flushes with deep embarrassment, trying to keep it away. His eyes show shame about the humble gift. Krishna's eyes sparkle with genuine excitement. The opulent palace setting makes the tiny bundle look even more humble. Warm golden interior light. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${KRISHNA_KING} ${SUDAMA} Close-up of Krishna eating a big handful of flattened rice (poha) from the torn cloth, his blue-black face beaming with the most radiant, genuine smile of pure delight. His eyes are closed in bliss. Sudama watches in amazement, a smile breaking through his tears. Grains of poha scattered on the golden floor. The humble food in the magnificent setting. The most joyful moment. Warm golden light radiates from the scene. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${SUDAMA} He walks away from the magnificent city of Dwaraka along a dusty road at sunset, looking back one last time. His expression shows peace and happiness from the reunion, but also a quiet sadness — he was too shy to ask for anything. The golden city of Dwaraka glows in the sunset behind him. The road ahead leads into rolling countryside. Warm melancholic sunset light — saffron, orange, rose. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `${SUDAMA} He arrives at his village and stops in stunned disbelief, mouth agape, eyes wide. Where his tiny crumbling hut stood, there is now a beautiful large house with a garden. His wife and children run out in new colorful clothes, smiling radiantly. Fresh food and flowers everywhere. The transformation is miraculous. Golden divine light suffuses the scene. Sudama's hand goes to his heart in overwhelming gratitude. ${STYLE}`,
      },
      {
        filename: 'scene-12.png',
        prompt: `A transcendent closing composition. ${SUDAMA} stands before his new beautiful home, looking up at a magnificent golden sky with tears of gratitude, hands folded in prayer. Above in the celestial clouds, a radiant vision of ${KRISHNA_KING} smiling warmly with hands in a blessing gesture. Below, Sudama's happy family gathers around him. The message: true friends give without being asked. Divine golden light, warm colors, deeply spiritual and emotional atmosphere. ${STYLE}`,
      },
    ];
  })(),

  'shabari-berries': (() => {
    const SHABARI = 'Shabari: a very old wrinkled Indian woman with white hair in a simple bun, dark brown weathered skin, gentle devoted eyes, wearing a simple faded white cotton sari, bare feet, thin frail body but radiant inner spiritual light.';
    const RAMA_SH = 'Lord Rama: divine prince with deep blue skin, serene handsome face, tall and regal, golden crown with jewels, yellow silk dhoti and upper cloth, ornate gold jewelry, divine bow in hand, gentle compassionate eyes, celestial golden aura.';
    const LAKSHMANA_SH = 'Prince Lakshmana: handsome young warrior with fair golden-brown skin, green silk dhoti with gold border, gold jewelry, bow and quiver of arrows, loyal protective expression, standing beside Rama.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${SHABARI} ${RAMA_SH} A majestic title composition. Old Shabari kneels before Lord Rama, offering him a clay bowl of forest berries with both trembling hands, tears of joy streaming down her wrinkled cheeks. Rama accepts the berries with a warm, tender smile, one hand reaching for the bowl. Her tiny forest ashram is behind them, surrounded by ancient trees and wildflowers. A beam of divine golden light connects them. The contrast between the humble old woman and the divine prince. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${SHABARI} She sits alone outside her tiny thatched forest hut. The hut is simple — clay walls, leaf roof, a broom leaning outside, a water pot. The deep forest surrounds her with ancient trees, vines, and filtered green light. She has no possessions except a clay bowl and a broom. Her expression is peaceful and content despite her poverty. Birds and small animals gather near her. Quiet, meditative forest atmosphere. Soft dappled green-gold light. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${SHABARI} She sits at the feet of her guru — an ancient sage with a long white beard and saffron robes — in a forest ashram. The guru points toward the horizon with a knowing smile, speaking of Rama's coming. Shabari's younger face (still brown-skinned but less wrinkled) looks up with shining eyes of hope and faith. Sacred fire burns between them. Ancient forest, twilight, ethereal spiritual atmosphere. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${SHABARI} Early morning in the forest. Shabari sweeps the ground outside her tiny hut with a handmade broom, her white sari catching the first golden rays of dawn. She has already placed fresh flowers at a small shrine. Then she walks into the forest with a clay bowl, carefully picking berries from bushes. Dew sparkles on leaves. Birds sing in the trees. A peaceful, devoted morning ritual. Warm golden dawn light. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${SHABARI} Close-up of her weathered brown hands. She carefully bites into a forest berry, tasting it. Her expression concentrates — is it sweet or sour? She places a sweet one in her clay bowl and tosses a sour one away. The bowl is slowly filling with only the sweetest berries, each with a small bite mark. Forest berry bushes surround her. Warm dappled sunlight. The care and devotion in her selection process is visible. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `A time-passing composition. ${SHABARI} is shown in three overlapping stages: younger (cleaning her hut), middle-aged (collecting berries), and very old (sitting by her door watching the forest path). The forest changes subtly with seasons — green leaves, autumn gold, bare branches, spring blossoms. Through it all, she waits. Her faith never wavers. The years are visible in her aging face. Ethereal, poignant, golden-amber atmospheric light. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${SHABARI} ${RAMA_SH} ${LAKSHMANA_SH} Two magnificent figures — Rama with his blue skin and golden aura, and Lakshmana beside him — emerge from the forest path toward Shabari's tiny hut. Shabari, sweeping her doorstep, looks up. Her old eyes go wide. Her broom falls from her trembling hands. Her hand goes to her heart. She recognizes Rama instantly. Golden divine light radiates from the two princes. The forest parts around them. A moment of destiny fulfilled. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${SHABARI} ${RAMA_SH} Shabari falls at Rama's feet, overwhelmed with joy, tears pouring down her wrinkled cheeks. Her frail body trembles. She rises and runs to bring her clay bowl of carefully selected berries, hands shaking with excitement. Rama watches her with infinite tenderness and patience. The tiny humble ashram, the ancient forest, golden divine light pouring through the canopy. An old woman's lifelong dream coming true. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${LAKSHMANA_SH} Close-up of Lakshmana looking at the clay bowl of berries that Shabari is offering. He notices the bite marks on each berry and his expression shows concern and slight discomfort — raised eyebrows, a subtle grimace. He whispers to the side. The berries are clearly bitten into. ${RAMA_SH} is visible in the background, already reaching for a berry with a knowing smile. Forest ashram setting. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${RAMA_SH} ${SHABARI} Rama sits on a simple mat in the ashram, eating the bitten berries from the clay bowl with the most beautiful, genuine expression of delight. His blue-black face radiates warmth and appreciation. He holds a berry up admiringly. Shabari watches him eat with her hands clasped together, tears of pure joy on her wrinkled face, her whole being glowing with happiness. Golden divine light fills the humble setting. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${RAMA_SH} ${SHABARI} Rama speaks to Shabari with deep reverence, one hand over his heart. His expression is profoundly moved and sincere. Shabari listens with clasped hands, overwhelmed. The empty clay bowl of berries sits between them. The forest ashram glows with supernatural golden-amber light. Every tree, flower, and leaf seems to lean in to listen. A sacred moment of divine recognition of pure devotion. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `A transcendent closing composition. ${SHABARI} sits peacefully outside her tiny ashram, her face radiant with inner spiritual light, eyes closed in blissful meditation. Above her, a celestial vision of ${RAMA_SH} smiling with hands raised in blessing, golden light streaming down. The forest around her blooms with supernatural beauty — flowers opening, golden light pouring through every leaf. The message: pure love brings God to your door. Deeply spiritual, warm, ethereal atmosphere. ${STYLE}`,
      },
    ];
  })(),

  'ganesha-and-the-moon': (() => {
    const GANESHA_M = 'Lord Ganesha: elephant-headed deity, plump round body with soft grey skin, large gentle intelligent eyes, small golden crown, four arms, yellow silk dhoti, ornate gold necklaces armlets anklets, a broken tusk, holding a modak sweet in one hand.';
    const MOON_M = 'The Moon: a luminous silver-white celestial face in the night sky, handsome sharp features, arrogant mocking expression, radiating cool silver-blue moonlight, surrounded by stars.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${GANESHA_M} ${MOON_M} A dramatic title composition. Ganesha stands defiantly, one hand raised in a commanding gesture, looking up at the laughing Moon in the night sky. The Moon's face is huge and mocking. Ganesha's expression shifts between hurt and righteous anger. Scattered modak sweets on the ground around him. His little mouse sits beside him. Mount Kailash in the background under a starry sky. The tension between the two — divine confrontation. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${GANESHA_M} A magnificent birthday celebration on Mount Kailash. Gods and goddesses in brilliant silks and gold crowd the celestial hall. Mountains of golden-brown modak sweet dumplings are piled on silver platters everywhere. Garlands of flowers, glowing oil lamps, celestial musicians playing. Ganesha sits at the center of honor, beaming with joy. His parents Shiva and Parvati watch fondly from their throne. Festive, joyful, divine atmosphere. Golden warm light. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${GANESHA_M} Close-up of Ganesha eating modaks with absolute bliss. His trunk curls around one modak, another hand holds two more, his fourth hand reaches for the platter. His round grey tummy grows rounder with each sweet. His eyes are half-closed in pure ecstasy. Crumbs of modak on his chin. Platters of golden-brown modaks surround him. An expression of pure, innocent, childlike gluttony and joy. Warm golden festive light. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${GANESHA_M} A comedic scene. Ganesha tries to climb onto his tiny mouse mount, but his tummy is SO round and full that he topples backward — PLOP! He tumbles and rolls on the ground of Mount Kailash, modaks flying out of his pockets in all directions. His mouse looks startled. His four arms flail comically. Despite the fall, it is an endearing, lovable moment. Moonlit night on Mount Kailash. Stars and silver light. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${MOON_M} The Moon's face fills the upper sky, mouth wide open in cruel, mocking laughter. Silver moonlight pours down cruelly onto ${GANESHA_M} who sits on the ground below, looking up at the Moon. The Moon's expression is exaggerated — mean-spirited, pointing, tears of laughter. Below, Ganesha is sprawled with scattered modaks. The cruelty of the mockery is palpable. Night sky, Mount Kailash, cold silver-blue light from the Moon. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${GANESHA_M} Close-up of Ganesha's face showing deep hurt. His large gentle elephant eyes glisten with tears. His trunk droops sadly. The laughter of the Moon echoes as silver light streams down. A deeply emotional, sympathetic moment — the pain of being mocked. Dark night background, Ganesha lit by cold moonlight. The vulnerability of even a god when words hurt. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${GANESHA_M} Ganesha stands tall, his hurt transforming into righteous anger. His four arms are raised in a powerful cursing gesture. Divine golden energy crackles from his hands. His eyes blaze with authority. He points at ${MOON_M} in the sky. The Moon's expression shifts from laughter to sudden terror. A powerful wave of golden divine energy shoots upward toward the Moon. Dramatic, supernatural, intense lighting — gold versus silver. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `A dramatic dark scene. The night sky is completely black — no Moon at all. The world below is in total darkness. People stumble around unable to see. Owls hoot in confusion. The ocean has no reflection. Travelers are lost. Animals are disoriented. The absence of the Moon has plunged everything into chaos. Deep blues and blacks dominate. A few scattered stars provide minimal light. An eerie, unsettling atmosphere. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${GANESHA_M} Multiple gods and goddesses kneel before Ganesha, hands folded, begging him to restore the Moon. Above them, a faint translucent ${MOON_M} appears dimly, his face full of genuine remorse and apology, tears flowing. Ganesha sits with his arms crossed, still upset but his kind heart beginning to soften. The scene balances between the plea of the gods and the apology of the Moon. Mount Kailash. Dim starlight. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${GANESHA_M} He raises one hand in a merciful gesture, his expression now wise and compassionate. Above, the Moon begins to reappear — but only as a thin crescent, not fully bright. The crescent Moon glows softly with humbled, grateful silver light. Ganesha's golden aura mingles with the returning moonlight. A lesson taught with mercy. Mount Kailash, stars returning, the first crescent moonlight touching the landscape. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `A transcendent closing composition. A beautiful night sky showing the phases of the Moon in a graceful arc — thin crescent growing to half moon, full moon, then shrinking back. Below, ${GANESHA_M} sits serenely on a lotus, one hand raised in blessing, his modak in another hand, a gentle forgiving smile. Children below point up at the moon phases in wonder. The message: words can hurt, always be kind. Silver moonlight and golden divine glow blend harmoniously. ${STYLE}`,
      },
    ];
  })(),

  'churning-of-the-ocean': (() => {
    const VISHNU_CO = 'Lord Vishnu: magnificent four-armed deity with luminous deep blue skin, serene omniscient expression, golden crown with jewels, yellow silk pitambara, Sudarshana chakra conch lotus and mace in four hands, standing on a lotus, divine radiance.';
    const SHIVA_CO = 'Lord Shiva: ash-smeared blue-white skin, matted brown dreadlocks piled high with crescent moon and Ganga, third eye on forehead, tiger skin garment, rudraksha beads, serene powerful expression, trident nearby.';
    const DEVAS = 'The Devas: radiant celestial gods with golden-glowing skin, ornate crowns and silk garments of various colors, divine weapons and jewelry, noble handsome faces.';
    const ASURAS = 'The Asuras: powerful muscular demons with dark reddish-brown skin, fierce expressions, heavy dark armor, horned helmets, fanged snarls, intimidating builds.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `A majestic title composition of the cosmic churning. The massive Mount Mandara rises from the churning milky ocean, wrapped by the enormous serpent Vasuki. ${DEVAS} pull one end of the serpent on the left, ${ASURAS} pull the other end on the right. Below, ${VISHNU_CO} in turtle form supports the mountain. The ocean churns with supernatural energy — golden, white, and cosmic blue. Above, celestial objects emerge from the foam. Epic, cosmic, monumental scale. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${DEVAS} The gods sit defeated and weak in their celestial realm. Their golden armor is tarnished, their divine glow is dimmed. Some sit with heads bowed, others look at their faded weapons. Their celestial palaces crumble in the background. Dark clouds gather. Below, ${ASURAS} celebrate their victories with raised weapons and arrogant laughter. The contrast between the defeated gods above and triumphant demons below. Dark, somber, dramatic light. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${VISHNU_CO} He appears in magnificent glory before the assembled ${DEVAS} who look up at him with desperate hope. Vishnu stands on a golden lotus, all four arms visible, speaking with calm authority, one hand gesturing toward the vast cosmic ocean visible in the distance. The ocean stretches endlessly, mysterious and deep. A beam of golden divine light illuminates the path to the ocean. Celestial realm, dramatic light. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${DEVAS} ${ASURAS} A tense meeting scene. The gods and demons face each other across a great hall, negotiating their uneasy alliance. The Devas look reluctant but determined. The Asuras look suspicious but greedy for the Amrit. Between them, a vision of the golden pot of Amrit glows enticingly. Celestial architecture with tall pillars. Dramatic lighting — golden on the Devas side, reddish on the Asuras side. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `THE EPIC CHURNING SCENE. The colossal Mount Mandara stands in the center of the vast milky ocean. The enormous serpent Vasuki is wrapped around it as a rope. ${DEVAS} pull Vasuki's tail on one side, ${ASURAS} pull his head on the other side. The mountain spins, churning the ocean into massive waves and cosmic foam. The scale is immense — tiny figures pulling against a mountain-sized churning rod. Epic, cosmic, dynamic. Ocean spray, golden and silver light. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${VISHNU_CO} A cosmic transformation. The mountain begins to sink into the ocean. Below the waves, Vishnu has taken the form of Kurma — a colossal divine turtle with luminous blue skin and golden shell. The turtle rises from the depths, supporting Mount Mandara on his massive back. The mountain stabilizes. Underwater cosmic scene with supernatural blue-green light, divine golden radiance from the turtle, the mountain above. Awe-inspiring. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${SHIVA_CO} A dramatic, intense scene. From the churning ocean rises the terrible Halahala poison — a thick purple-black deadly cloud that wilts everything it touches. Everyone flees in terror. Shiva steps forward calmly and scoops up ALL the poison in his cupped hands. He drinks it. His throat turns a deep, vivid blue as Goddess Parvati presses her hands against his throat to stop the poison. His face is serene despite the agony. Purple-black poison contrasts with blue throat. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `A magnificent emergence scene. From the churning milky ocean rise wonderful treasures one after another: a luminous white magical cow (Kamadhenu), a magnificent white horse (Ucchaishravas), a blazing jewel (Kaustubha), and the radiant Goddess Lakshmi standing on a pink lotus in golden silk. Finally, Dhanvantari rises holding the golden pot of Amrit which glows with supernatural golden light. The ocean churns with white and gold. Multiple divine treasures in one grand composition. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${VISHNU_CO} disguised as Mohini — the most beautiful, enchanting woman imaginable with luminous golden-brown skin, flowing black hair, dazzling silk garments, captivating eyes. She holds the golden pot of Amrit gracefully. The ${ASURAS} are mesmerized, mouths agape, weapons dropped, completely enchanted. Meanwhile she subtly passes the Amrit to the ${DEVAS} who drink from it, golden light flowing into them. A scene of divine trickery. Warm golden light. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `A transcendent closing composition. The ${DEVAS} stand triumphant, their divine glow fully restored, golden and radiant, weapons shining. They raise their hands in victory. Above them, ${VISHNU_CO} in his true form blesses the scene. In the background, the milky ocean settles peacefully, Mount Mandara resting. A rainbow arcs across the sky. The message: great things happen when people work together. Cosmic, triumphant, golden divine light. ${STYLE}`,
      },
    ];
  })(),

  'nachiketa-and-yama': (() => {
    const NACHIKETA = 'Young Nachiketa: a brave boy of about ten, warm brown skin, bright intelligent questioning eyes, simple white dhoti, sacred thread across chest, short black hair, expression of fearless curiosity and determination.';
    const VAJASHRAVA = 'Vajashrava: a middle-aged Brahmin priest with warm brown skin, white dhoti and upper cloth, sacred thread, grey-streaked hair in a topknot, conflicted guilty expression.';
    const YAMA = 'Yama the Lord of Death: a dark majestic figure with deep green-black skin, riding a black buffalo, wearing dark royal robes with gold trim, tall golden crown, holding a noose pasha, stern but ultimately wise and fair face, imposing regal presence.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${NACHIKETA} ${YAMA} A majestic title composition. Young Nachiketa sits calmly at the grand dark gates of Yama's palace, cross-legged and patient. Before him, the imposing figure of Yama the Lord of Death stands with his noose, looking down at the brave boy with growing respect. The palace is dark and grand — black marble, silver torches, eternal flames. The contrast between the small brave boy and the mighty Lord of Death. Dramatic dark and golden light. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${VAJASHRAVA} A grand Vedic ceremony in an open-air sacrificial arena. Vajashrava sits before a sacred fire performing rituals. Around him, Brahmin priests chant. But the cows being given away are visibly old, thin, and sick — ribs showing, barely able to walk. ${NACHIKETA} watches from nearby with sharp, observant eyes, his brow furrowed with concern. Rich ceremonial setting with fire altars, flower garlands, but the gift cows are clearly inferior. Warm firelight. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${NACHIKETA} ${VAJASHRAVA} Nachiketa stands before his father, speaking boldly with one hand raised, his young face earnest and brave. He points at the sick cows. Vajashrava looks annoyed and uncomfortable, turning away. The ceremonial fire burns between them. Other priests watch the confrontation awkwardly. A brave child challenging an adult's hypocrisy. Warm flickering firelight, outdoor ceremonial setting. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${VAJASHRAVA} He snaps angrily, face red with frustration, one hand pointing dramatically. ${NACHIKETA} stands before him, small but unflinching, absorbing his father's angry words. The words "I give you to Yama!" hang in the air. Other priests gasp in shock. The sacred fire flares. A dramatic, tense moment of a father's rash words. Harsh firelight casts sharp shadows. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${NACHIKETA} The boy walks alone down a long, dark, mystical path toward Yama's grand palace in the distance. The path is lined with ethereal blue-white flames. The palace is enormous and imposing — dark black marble with silver gates, eternal torches, skulls carved in the architecture. Nachiketa is tiny against the massive dark landscape, but his stride is determined. A brave child walking toward Death itself. Eerie blue and silver moonlight. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${YAMA} He arrives at his palace on his black buffalo to find ${NACHIKETA} sitting patiently at the gate, thin and tired after three days without food or water. Yama's stern face softens with guilt and compassion. He dismounts and approaches the boy with hands open in a welcoming gesture. The dark grand palace behind them. Ethereal silver-blue and warm golden light mixing as Death meets the brave boy. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${YAMA} ${NACHIKETA} Yama sits on his dark throne, one finger raised, granting the first wish. A celestial vision appears showing Vajashrava smiling peacefully, no longer angry, welcoming his son home. Nachiketa looks at the vision with relief and love for his father. The dark throne room with silver pillars and eternal flames. Warm golden light in the vision contrasts with the cool dark palace. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${YAMA} ${NACHIKETA} Yama teaches Nachiketa about the sacred fire ceremony. A magnificent celestial sacrificial fire burns between them with supernatural blue-gold flames that form sacred geometric patterns. Yama gestures at the fire with scholarly enthusiasm. Nachiketa watches with rapt attention, absorbing every detail. The fire illuminates both their faces. Mystical, educational atmosphere. Dark palace with warm firelight. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${NACHIKETA} Close-up of the boy's face as he asks the ultimate question. His eyes burn with intense curiosity and courage. He leans forward earnestly. Behind him, ethereal visions of life and death swirl — flowers blooming and wilting, sun rising and setting, stars being born and dying. ${YAMA}'s face in the background shows surprise and wariness. The weight of the greatest question ever asked. Dramatic light. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${YAMA} He tries to tempt Nachiketa with distractions. Yama conjures magnificent visions: mountains of gold coins, a glittering jeweled kingdom, herds of celestial horses, beautiful palaces, a vision of living a thousand years. The treasures swirl around ${NACHIKETA} enticingly. But the boy sits unmoved, arms crossed, shaking his head with calm determination. The temptations glow and sparkle but cannot sway him. Dark palace, golden temptations. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${NACHIKETA} He sits firm and resolute, palms open in a gesture of sincere seeking, speaking with quiet conviction. The golden temptations around him fade and dissolve into nothing. His simple white dhoti and sacred thread glow with spiritual purity. ${YAMA} watches from his throne, his stern face breaking into a smile of deep respect and admiration. A boy choosing wisdom over wealth. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `${YAMA} ${NACHIKETA} A profound mystical teaching scene. Yama leans forward from his throne, speaking with great reverence, hands gesturing at a cosmic vision between them. The vision shows the eternal Atman — a luminous golden flame that cannot be extinguished, surrounded by cycles of birth and death, galaxies, and cosmic time. Nachiketa's eyes are wide with understanding, tears of revelation on his cheeks. Deep cosmic blues and eternal golden light. ${STYLE}`,
      },
      {
        filename: 'scene-12.png',
        prompt: `A transcendent closing composition. ${NACHIKETA} walks back along the mystical path, now bathed in warm golden dawn light instead of the earlier eerie darkness. He carries the light of wisdom within him — a golden glow emanates from his heart. Behind him, ${YAMA} watches from his palace gate with hands folded in respect. Above, a cosmic vision of the eternal flame (Atman) blazes in the sky. The message: curiosity and courage lead to the greatest knowledge. Deeply spiritual. ${STYLE}`,
      },
    ];
  })(),

  'gajendra-moksha': (() => {
    const GAJENDRA = 'Gajendra the elephant king: a magnificent massive grey elephant with large expressive emotional eyes, ornate golden crown and jewelry on head and tusks, powerful regal build, majestic bearing.';
    const CROC_G = 'A fearsome enormous crocodile lurking beneath lake water, dark green scales, powerful jaws clamped on the elephant leg, glowing menacing yellow eyes, massive tail.';
    const VISHNU_G = 'Lord Vishnu: magnificent four-armed deity with luminous deep blue skin, serene compassionate expression, golden crown, yellow silk pitambara, riding the great golden eagle Garuda, Sudarshana chakra spinning in one hand, divine radiance.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${GAJENDRA} ${VISHNU_G} A majestic title composition. Gajendra stands in a lake, his trunk raised high holding a pink lotus flower toward the sky. His eyes plead upward with desperate faith. Above, Lord Vishnu swoops down on the magnificent golden eagle Garuda, the Sudarshana chakra spinning blazingly in his hand. A divine beam of golden light connects them. The lake is surrounded by lush forest. The dramatic rescue from above. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${GAJENDRA} He leads a majestic herd of elephants through a beautiful lush forest. Gajendra is the largest and most magnificent, walking at the front with regal confidence. His golden crown gleams. Smaller elephants, babies, and females follow behind. The forest is verdant with ancient trees, colorful flowers, parrots, and deer. Golden afternoon sunlight filters through the canopy. A scene of strength, leadership, and natural beauty. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${GAJENDRA} He wades joyfully into a beautiful cool lake, spraying water from his trunk in great arcs. Other elephants splash and play around him. The lake is pristine — crystal clear blue-green water, pink and white lotus flowers floating, lily pads, dragonflies. Lush green forest surrounds the lake. Golden afternoon sunlight sparkles on the water droplets. Pure joy and carefree happiness. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${GAJENDRA} ${CROC_G} A sudden shocking moment. Beneath the lake water, the enormous crocodile has clamped its massive jaws onto Gajendra's right hind leg. Gajendra trumpets in shock and pain, eyes wide, trunk raised. The water churns violently. The crocodile's glowing yellow eyes are visible beneath the roiling water. Other elephants scatter in alarm. A dramatic split between the serene surface and the danger below. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${GAJENDRA} ${CROC_G} Gajendra strains with all his enormous strength, pulling his leg from the water. His massive muscles bulge, his face contorts with effort. The crocodile holds on relentlessly beneath the churning water. The tug of war is titanic — water explodes around them. Gajendra's golden jewelry shakes. His eyes show determination and disbelief that anything could overpower him. Dramatic, dynamic, intense. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${GAJENDRA} Other elephants from his herd line up on the lake bank, trunks wrapped around Gajendra, pulling desperately to help free him. But one by one, they exhaust themselves and release their grip, turning away with sad, defeated expressions. The last elephant lets go and walks away with bowed head. Gajendra watches them leave with growing despair. The lake, the struggle continuing. Somber, emotional golden-amber light. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${GAJENDRA} ${CROC_G} Time has passed. Gajendra stands exhausted in the lake, his once-proud body visibly weakened, legs trembling, head drooping. His golden jewelry is tarnished. The crocodile still holds on, relentless. The lake is empty — no other elephants remain. The surrounding forest looks dim. A once-mighty king brought to his lowest point. Despairing, lonely, fading golden light of dusk. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${GAJENDRA} A pivotal moment of spiritual awakening. With his last strength, Gajendra raises his trunk high out of the water and plucks a beautiful pink lotus flower. He holds it up toward the sky. His large eyes, once proud, now overflow with humility and sincere desperation. The lotus glows with a faint divine light in his trunk tip. The lake is still. A profound moment of surrender and faith. Warm golden-rose light. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${GAJENDRA} Close-up of the elephant's face as he cries out to the heavens. His trunk holds the lotus high. Tears stream from his enormous eyes. His mouth is open in a trumpet of pure heartfelt prayer. The sound seems to ripple through the sky itself. Above, the clouds begin to part, letting through a beam of brilliant golden divine light. The most sincere prayer ever uttered. Deeply emotional, spiritual. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${VISHNU_G} THE DIVINE RESCUE. Vishnu descends from the sky at incredible speed on the magnificent golden eagle Garuda, his yellow silk robes streaming. He raises the spinning Sudarshana Chakra — a blazing golden discus of pure divine energy — and hurls it at the crocodile. The chakra cuts through the water, freeing ${GAJENDRA}'s leg instantly. An explosion of golden divine light. The lake erupts. Garuda's wings spread wide. Dramatic, dynamic, triumphant. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${VISHNU_G} ${GAJENDRA} Vishnu stands in the shallow lake water, one gentle blue hand resting on Gajendra's bowed head in blessing. The elephant kneels before the deity, trunk touching Vishnu's feet in reverence. Vishnu's expression is infinitely compassionate. The lotus flower Gajendra offered now floats between them, glowing. The lake is calm and beautiful again. Warm divine golden light envelops both. A tender, sacred moment of grace. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `A transcendent closing composition. ${GAJENDRA} stands majestically in the now-peaceful lake at golden sunset, his trunk raised in grateful salute. Above, ${VISHNU_G} ascends back to the heavens on Garuda, one hand raised in blessing. The lake reflects both figures. Lotus flowers bloom everywhere. The surrounding forest glows with golden-rose light. The message: it is brave to ask for help. Deeply spiritual, triumphant, serene. ${STYLE}`,
      },
    ];
  })(),

  'krishna-tames-kaliya': (() => {
    const KRISHNA_K = 'Young Lord Krishna: deep blue-black skin, peacock feather crown in curly black hair, yellow silk dhoti, large lotus almond eyes, fearless divine smile, gold anklets bracelets waist-chain, celestial golden aura, slightly older than baby — about eight years old.';
    const KALIYA = 'Kaliya the serpent: an enormous terrifying multi-hooded cobra with dark black-green scales, five or more raised hoods each with glowing red eyes, dripping deadly purple-black venom, massive coils thick as tree trunks, rising from dark poisoned water.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${KRISHNA_K} ${KALIYA} A majestic title composition. Krishna dances triumphantly atop Kaliya's multiple spread hoods in the middle of the Yamuna river. Krishna's feet move in divine rhythm, one leg raised gracefully, arms in classical dance pose. Kaliya's hoods droop under him, the serpent weakening. The river churns with supernatural energy. On the banks, villagers watch in awe. Golden divine light radiates from Krishna against the dark poisoned water. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `A beautiful idyllic scene of the Yamuna river near Vrindavan. Crystal clear blue-green water flows gently. Children splash and play on the sandy banks. Cows drink peacefully. Peacocks with full iridescent plumage dance on the shore. Women fill brass water pots. Lotus flowers dot the water. Lush green trees line both banks. Golden afternoon sunlight sparkles on the water. A perfect, peaceful Indian village riverside scene. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${KALIYA} A dramatic transformation. The once-beautiful Yamuna river has turned dark and poisonous. Kaliya's massive coils churn the now-black boiling water. Dead fish float on the surface. Birds fall from the sky above the river. Trees along the banks wilt and blacken. Purple-black venom seeps through the water. The multiple hoods of Kaliya rise menacingly from the dark depths. A scene of environmental destruction and terror. Dark, ominous lighting. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `Vrindavan villagers gathered on the distant bank of the now-poisoned Yamuna, faces full of fear and distress. Thirsty cows stand at the water's edge but refuse to drink the black water. Children hide behind their mothers. The river is dark and steaming. An old man gestures helplessly. ${KRISHNA_K} stands among the crowd, his expression calm and determined while everyone else panics. His blue-black skin and golden aura contrast with the frightened villagers. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${KRISHNA_K} A dramatic action scene. Krishna climbs a tall kadamba tree overhanging the poisoned dark Yamuna river. At the top, he ties his yellow dhoti tight, takes a deep breath, and leaps fearlessly into the black water — SPLASH! His golden aura blazes as he dives. The villagers below scream and reach out in horror. A moment of breathtaking courage. Dynamic mid-air pose, dark water below, golden light around Krishna. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `Vrindavan villagers crowd the riverbank in terror. Yashoda (Krishna's mother in saffron sari) is restrained by other women as she screams toward the river. Men reach out helplessly. Children cry. The dark poisoned river roils where Krishna disappeared. Ripples and bubbles on the black surface. The collective fear of an entire village for their beloved child. Emotional, intense, dark tones with warm faces lit by fear. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${KALIYA} ${KRISHNA_K} Beneath the dark water, the massive serpent Kaliya rises with all hoods spread in fury, wrapping his enormous coils around Krishna's small body, trying to crush him. Krishna is enveloped in the thick dark coils. Kaliya's red eyes blaze with rage. Underwater scene — dark poisoned water, the serpent's immense size dwarfing the boy. Dramatic, dangerous, the coils tightening. Faint golden glow from Krishna within the coils. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${KRISHNA_K} ${KALIYA} A supernatural moment. Krishna begins to glow with immense divine power, growing larger within Kaliya's coils. His golden aura expands explosively. The coils snap apart like breaking ropes. Krishna bursts free, now radiating blinding divine light. Kaliya recoils in shock, his red eyes wide. The river water churns and glows with golden energy. A dramatic power reveal — the tiny boy was the Supreme Lord all along. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${KRISHNA_K} ${KALIYA} THE ICONIC DANCE. Krishna leaps onto Kaliya's multiple raised hoods and begins a powerful, rhythmic divine dance — the Kaliya Nartana. His feet stamp in divine rhythm, one leg raised high, arms in classical Bharatanatyam pose. Each stamp sends golden shockwaves through Kaliya's body. The serpent's hoods droop lower and lower, weakening. The river glows golden around them. On the banks, villagers watch in amazement. Dynamic, triumphant, powerful. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${KALIYA} The serpent's wives — beautiful nagini women with human upper bodies and serpent lower bodies, wearing simple jewelry — approach ${KRISHNA_K} with folded hands, tears streaming, begging for mercy. Kaliya himself lies flat, all hoods bowed low to the ground in complete submission, eyes showing genuine remorse. Krishna stands atop the subdued serpent, his expression shifting from fierce to compassionate. The river calms. Golden-warm light returns. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${KRISHNA_K} ${KALIYA} Krishna stands on the riverbank, one hand raised in a commanding but merciful gesture, pointing toward the distant ocean. Kaliya and his family of serpents swim away down the Yamuna toward the sea, hoods lowered, a long procession of dark serpents leaving the river. The water behind them clears — turning from black to blue-green where they have passed. Golden afternoon light. A scene of justice and mercy. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `A transcendent closing composition. The Yamuna river is beautiful and pristine again — crystal clear blue-green water, lotus flowers blooming, fish leaping. Children splash joyfully. Cows drink peacefully. Peacocks dance on the banks. ${KRISHNA_K} stands in the shallow water, playing his flute, golden aura blazing. The restored paradise of Vrindavan. The message: stand up to bullies to protect the ones you love. Golden sunset light, joy, and divine peace. ${STYLE}`,
      },
    ];
  })(),

  'eklavya-the-archer': (() => {
    const EKLAVYA = 'Eklavya: a determined tribal boy with dark brown skin, lean muscular build, simple animal-hide clothing, a handmade bow and quiver, wild black hair tied back, intense focused eyes, barefoot, forest tribal ornaments of beads and feathers.';
    const DRONA = 'Guru Dronacharya: an elderly but strong Brahmin warrior-teacher with grey beard, white dhoti and upper cloth, sacred thread, stern dignified face, carrying a magnificent ornate bow, standing in a royal training ground.';
    const ARJUNA_E = 'Prince Arjuna: a handsome young prince with fair golden-brown skin, ornate blue silk garments, gold jewelry, an exquisite royal bow, confident proud bearing, the best student.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${EKLAVYA} A majestic title composition. Eklavya stands in a forest clearing, drawing his handmade bow with perfect form, eyes blazing with fierce concentration. Before him, a clay statue of Dronacharya sits on a mound decorated with wildflowers. Arrows are embedded in impossible targets all around — a leaf pinned mid-fall, a distant fruit split perfectly. The forest is his training ground. Golden morning light streams through the trees. Raw talent meets absolute dedication. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${EKLAVYA} as a young boy in a small tribal village at the edge of a great forest. Simple thatched huts, cooking fires, tribal elders. Young Eklavya sits apart, fashioning a tiny bow from a bent stick and vine string. His eyes are fixed on a distant bird with intense focus. Other tribal children play nearby. The vast forest stretches behind the village. Warm golden afternoon light. A dreamer with a single-minded goal. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${EKLAVYA} ${DRONA} Eklavya has traveled to the royal gurukul. He kneels humbly before Dronacharya in the grand training ground. Behind Drona, princes in silk garments practice archery with fine bows. Eklavya is dusty from his journey, wearing simple tribal clothes, his handmade bow beside him. He looks up with desperate hope and respect. The contrast between the tribal boy and the royal setting is stark. Warm golden training ground light. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${DRONA} He shakes his head with a stern expression, one hand raised in refusal. ${EKLAVYA} stands before him, face crumbling with hurt and disappointment. Behind them, the princes glance over dismissively. Eklavya's handmade bow looks crude next to the royal weapons. His shoulders slump. But in his eyes, beneath the pain, a spark of determination remains. The royal training ground with its grandeur contrasts with his humble appearance. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${EKLAVYA} In a forest clearing, he has built a clay statue of Dronacharya — carefully shaped, decorated with forest flowers and leaves. Eklavya kneels before it in deep reverence, hands folded, head bowed. Then he stands and draws his bow, aiming at a leaf target. The clay statue watches over his practice like a silent teacher. Morning mist in the forest, dappled golden light, a sacred self-made training ground. Devotion and self-reliance. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${EKLAVYA} A dynamic montage of his relentless practice. He shoots arrows at sounds with eyes blindfolded. He practices in pouring rain, water streaming down his focused face. He shoots at falling leaves, hitting each one. He fires at tiny targets far in the distance. His arms grow strong, his aim perfect. Time passes — seasons change around him. The clay statue of Drona stands constant in the background. Years of solitary, obsessive dedication. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${EKLAVYA} A stunning display of skill. A royal hunting dog barks loudly in the forest. In a lightning-fast blur, Eklavya fires seven arrows in rapid succession — they fill the dog's open mouth perfectly, silencing it without drawing a single drop of blood. The dog stands frozen, mouth bristling with arrow shafts, completely unharmed. The precision is superhuman. Forest clearing, dramatic golden light on the incredible feat. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${ARJUNA_E} and several other richly dressed princes stand in the forest, jaws dropped in utter disbelief, staring at the silenced dog. Arjuna's face shows a mix of awe and jealous shock — he knows he cannot match this feat. The other princes whisper to each other in amazement. The dog walks back with arrows in its mouth. The forest around them. Dramatic lighting highlighting their stunned expressions. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${DRONA} ${EKLAVYA} Dronacharya stands in the forest clearing, face showing genuine amazement as he watches Eklavya demonstrate his skill. Eklavya draws his bow with perfect form. The clay statue of Drona is visible behind him. Dronacharya's eyes widen — this tribal boy has surpassed even his best royal students. His stern face cracks with reluctant admiration. Forest clearing, warm golden light. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${EKLAVYA} ${DRONA} Eklavya leads Dronacharya to the clay statue and bows before it. "You taught me, master." His expression is one of pure, genuine devotion and gratitude. Dronacharya stares at the clay statue of himself — decorated with flowers, surrounded by years of practice arrows embedded in targets. The realization dawns on his face. The clay statue in the forest clearing, golden light, a profound moment. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${EKLAVYA} A montage of his legend spreading. People from different villages gather to watch him shoot — merchants, farmers, nobles, children. They point and marvel. His arrows fly impossibly far and accurate. His fame radiates outward like ripples. The forest boy has become a legend. In the center, Eklavya stands humble and focused, unchanged by fame. Golden warm light, crowds, admiration. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `A transcendent closing composition. ${EKLAVYA} stands in his forest clearing at golden sunrise, bow in hand, silhouetted against magnificent golden-orange light. Behind him, the clay statue of Drona is now weathered with age but still standing. Arrows embedded in impossible targets radiate outward in a pattern. The forest glows with supernatural golden light. The message: dedication is the greatest teacher. Deeply inspirational, warm, powerful atmosphere. ${STYLE}`,
      },
    ];
  })(),

  'sita-swayamvara': (() => {
    const RAMA_SW = 'Young Lord Rama: divine prince with deep blue skin, serene handsome face, calm gentle eyes, peaceful confident smile, yellow silk dhoti and upper cloth, ornate gold jewelry, golden crown, divine bow, slender yet radiating immense inner power, celestial golden aura.';
    const SITA = 'Princess Sita: the most beautiful and graceful Indian princess, luminous golden-brown skin, deep compassionate dark eyes, ornate red and gold silk sari, elaborate gold jewelry — necklaces tiara earrings bangles, jasmine flowers in her long dark hair, a flower garland in her hands, radiant divine glow.';
    const JANAKA = 'King Janaka: a dignified middle-aged king with warm brown skin, ornate golden crown, rich white and gold royal garments, kind wise face with a grey-streaked beard, seated on a grand throne, looking worried then overjoyed.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${RAMA_SW} ${SITA} A majestic title composition. Rama stands tall holding the enormous broken bow of Lord Shiva in his hands, the two halves cracking apart with divine energy. Sita stands before him holding a flower garland, her eyes shining with love and admiration. The grand royal court of Mithila surrounds them — tall marble pillars, silk drapes, hundreds of astonished princes. Golden divine light blazes from Rama. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${SITA} ${JANAKA} In the magnificent palace of Mithila. Princess Sita sits beside her father King Janaka on a grand throne decorated with flowers and silk. Sita is the picture of grace and beauty. Janaka looks at her with deep fatherly love and pride. The palace is opulent — marble floors, carved pillars, golden chandeliers, flower garlands everywhere. Soft warm golden light. A loving father and his precious daughter. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `The ancient bow of Lord Shiva sits on an enormous iron cart in the center of a grand royal hall. The bow is MASSIVE — dark, ancient, covered in sacred engravings, radiating an aura of divine power. Three hundred strong men strain to push the iron cart into position, sweating and grunting. The bow dwarfs everything around it. The sheer impossible scale of the challenge. Grand palace interior, dramatic lighting on the legendary weapon. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${JANAKA} He stands on a high balcony, making a royal proclamation to a vast crowd. Below, princes from many kingdoms have arrived — in colorful armor, different styles of dress, on elephants and horses. Banners from dozens of kingdoms flutter. The atmosphere is competitive and grand. The bow of Shiva is visible in the arena behind Janaka. A grand tournament gathering. Bright festive light. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `A sequence of muscular princes attempting to lift the bow and failing. One massive prince strains with veins bulging, unable to move it. Another pushes with all his might, face red, and falls backward. A third has hurt his back and is helped away by attendants. The enormous bow sits unmoved on its iron cart. The crowd watches with diminishing hope. Comic yet dramatic — mighty men humbled. Grand arena, warm light. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `Angry princes shout and gesture furiously in the arena. Some throw their arms up in frustration. ${JANAKA} sits on his throne, his face creased with deep worry, one hand on his forehead. ${SITA} watches from behind a screen with anxious eyes. The bow sits immovable. The mood has turned tense and hostile. Will no one be worthy? Dramatic tense lighting in the grand court. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${RAMA_SW} He steps forward from the crowd of princes. He is not the largest — he is young, calm, and quiet. His deep blue skin glows softly. His gentle eyes survey the bow with peaceful confidence. The other muscular princes turn to look at him with skepticism. A subtle divine golden aura surrounds him. The arena falls quiet. A moment of calm before the miracle. Grand court, soft focused light on Rama. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `Several muscular princes laugh and point at ${RAMA_SW} who walks calmly toward the bow. Their expressions are mocking — arms crossed, heads tilted back in dismissive laughter. Some elbow each other. Rama remains completely unbothered, his expression serene, eyes focused ahead on the bow. The contrast between their bluster and his quiet confidence. Grand arena, dramatic lighting. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${RAMA_SW} THE ICONIC MOMENT. Rama stands before the massive bow, eyes closed in brief prayer. Then with one graceful blue hand he reaches down and lifts the enormous ancient bow as easily as picking up a flower. His face is serene, effortless. Divine golden light explodes from the bow and from Rama. The entire court gasps — mouths open, eyes wide, some falling to their knees. The impossible made effortless. Brilliant golden-white divine light. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${RAMA_SW} He strings the great bow and draws it back with magnificent power. The bowstring stretches to its limit — and CRACK! The bow snaps in two with a thunderous sound. Shockwaves ripple through the arena. The sky above splits with golden lightning. Pieces of the divine bow glow with supernatural light. The entire court is stunned into silence. Rama stands calm amid the cosmic energy. Dramatic, explosive, triumphant. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${RAMA_SW} ${SITA} The most beautiful, tender moment. Sita walks gracefully toward Rama with a joyful, loving smile, carrying a garland of white and orange flowers. She raises it and places it gently around Rama's neck. Rama bows his head slightly to receive it, a warm gentle smile on his blue face. Their eyes meet with deep recognition and love. The court erupts in celebration behind them. Flower petals rain down. Golden divine light. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `A transcendent closing composition. ${RAMA_SW} and ${SITA} stand together, hands joined, garlands exchanged, bathed in brilliant divine golden light. Behind them, ${JANAKA} beams with tears of joy. The court celebrates with flowers, music, and cheering. Above, celestial beings shower blessings from golden clouds. The broken bow rests at their feet, glowing with divine energy. The message: true strength comes from a pure heart. Deeply spiritual, joyful, radiant. ${STYLE}`,
      },
    ];
  })(),

  'jatayu-brave-eagle': (() => {
    const JATAYU = 'Jatayu: a very old, enormous eagle — king of birds. Grey and white weathered feathers, massive wingspan, sharp golden beak and talons, wise old eyes with fierce determination, a crown-like crest of feathers, battle-scarred but noble, radiating ancient dignity.';
    const RAVANA = 'Ravana the demon king: terrifying figure with ten heads each with sharp features and fierce expressions, twenty muscular arms wielding weapons and shields, dark reddish-brown skin, elaborate demonic gold crown on each head, heavy dark armor, riding a magnificent golden flying chariot — the Pushpaka Vimana.';
    const SITA_J = 'Princess Sita: beautiful Indian woman with luminous golden-brown skin, ornate red and gold sari now disheveled, dark eyes streaming with tears, jewelry scattered, reaching out desperately for help from the chariot.';
    const RAMA_J = 'Lord Rama: divine prince with deep blue skin, golden crown, yellow silk dhoti, divine bow, gentle compassionate eyes now filled with grief, holding the dying eagle tenderly, tears on his blue cheeks.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${JATAYU} ${RAVANA} A majestic dramatic title composition. Old Jatayu attacks Ravana's golden flying chariot in mid-air, talons tearing at the chariot, wings spread enormously. Ravana turns with his ten furious heads to face the eagle. ${SITA_J} reaches out from the chariot toward Jatayu. The sky is dramatic — golden sunset against dark storm clouds. An old eagle versus the mightiest demon. Heroic, tragic, breathtaking aerial battle. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${JATAYU} He perches on a great ancient tree in the forest, looking wise and weathered. His feathers are grey with age, his wings massive but showing their years. His golden beak and talons are still sharp. Below, a serene forest cottage is visible where Rama and Sita live. Jatayu watches over them protectively. Ancient trees, peaceful forest, golden afternoon light filtering through leaves. An old guardian keeping watch. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${RAVANA} His magnificent golden flying chariot — the Pushpaka Vimana — swoops down from dark storm clouds toward the forest cottage. Ravana's ten heads snarl with cruel triumph. His twenty arms reach out to grab ${SITA_J} who screams in terror. The cottage below is small and vulnerable. Dark storm clouds roll in. The golden chariot gleams menacingly. A terrifying kidnapping from above. Dramatic dark and gold lighting. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${SITA_J} She is held in Ravana's golden chariot flying through the sky. She throws her jewelry down — gold bangles, necklaces, earrings — scattering them on the forest canopy below as clues. Her face is streaked with tears, her sari billowing in the wind. She screams for help. The forest stretches far below. Jewelry glints as it falls through the air. A desperate, heartbreaking moment. Dramatic sky. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${JATAYU} He hears Sita's cries and looks up. His old eyes lock onto the golden chariot flying overhead with Ravana's ten-headed silhouette. The eagle's expression shifts from peaceful repose to fierce determination. He sees the impossible odds — he is old, Ravana is the mightiest demon. But his eyes harden with resolve. A moment of courageous decision. Dramatic upward angle, golden light behind the chariot, determination in the eagle's ancient eyes. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${JATAYU} Close-up of the old eagle's face, eyes blazing with righteous fury and resolve. His thought is clear: "Sita needs help. I must try." He spreads his enormous old wings — massive wingspan, feathers stretched wide. Muscles strain beneath grey feathers. He launches himself upward from his perch with a mighty screech. Wind rushes past. A breathtaking moment of courage. Dynamic upward motion, golden sky. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${JATAYU} ${RAVANA} AERIAL BATTLE. Jatayu attacks the golden flying chariot with savage fury. His massive talons tear the chariot's canopy to shreds. His beak strikes at the chariot structure. He blocks the chariot's path with his enormous body. Ravana's ten heads turn in shock and rage. ${SITA_J} watches with desperate hope from inside. Wood splinters, fabric tears, golden pieces of chariot fly. Dynamic, violent, heroic aerial combat. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${JATAYU} ${RAVANA} The eagle fights ferociously. He has broken Ravana's bow — it falls in pieces. He has knocked down the charioteer. Several of Ravana's arms bleed from talon strikes. For one glorious moment, the old eagle seems to be WINNING against the ten-headed demon. Jatayu's eyes blaze with the fire of justice. The chariot tilts and drops. An incredible, triumphant moment of the underdog prevailing. Dynamic sky battle. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${RAVANA} He draws a terrible gleaming sword and slashes downward at ${JATAYU}. The blade cuts through the eagle's mighty wings. Feathers explode into the air — grey feathers scattering against the golden sky. Jatayu's expression shifts to shock and pain. He begins to fall, wings broken and useless. A heartbreaking, devastating moment. The hero falls. Dramatic dark and golden sky, feathers floating, the eagle tumbling earthward. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${RAMA_J} ${JATAYU} The most emotional scene. Rama has found the fallen eagle in the forest. He cradles the enormous dying bird tenderly in his arms, Jatayu's great head resting against Rama's chest. Jatayu whispers his last words — Ravana's direction, south. His old eyes look up at Rama with love and loyalty. Rama's blue face is streaked with tears. Broken feathers scattered around them. Soft golden light through the trees. Deeply moving. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${RAMA_J} Rama weeps openly, holding ${JATAYU}. His divine face shows profound grief and deep respect. He speaks to the dying eagle with reverence. Other forest creatures — deer, monkeys, birds — gather silently around them in mourning. The forest itself seems to weep — dew drops on every leaf. The golden light is soft and sorrowful. A god mourning a mortal hero. Deeply poignant. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `A transcendent closing composition. ${RAMA_J} performs the sacred funeral rites for Jatayu with his own hands — building and lighting a ceremonial pyre. Sacred fire rises with golden-white flames. Above, the spirit of ${JATAYU} ascends majestically into the golden sky, wings restored and magnificent, young and powerful again, soaring upward toward celestial light. Below, Rama watches with folded hands and tears. The message: a true hero fights even knowing they cannot win. ${STYLE}`,
      },
    ];
  })(),

  'arjuna-and-the-bird': (() => {
    const DRONA_A = 'Guru Dronacharya: elderly but strong Brahmin warrior-teacher, grey beard, white dhoti, sacred thread, stern dignified face, carrying a magnificent bow.';
    const ARJUNA_A = 'Young Prince Arjuna: handsome youth with fair golden-brown skin, ornate blue silk garments, gold jewelry, intense focused eyes, drawing a royal bow with perfect form.';
    const YUDHI = 'Prince Yudhishthira: eldest Pandava, fair complexion, white royal garments, gold crown, earnest honest face, holding a bow uncertainly.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${ARJUNA_A} ${DRONA_A} A majestic title composition. Arjuna draws his bow with absolute focus, eyes locked on a tiny wooden bird high in a distant tree. His gaze is laser-sharp. Behind him, Dronacharya watches with a proud knowing smile. Other princes stand in the background, looking impressed. A forest training ground with ancient trees. Golden light illuminates the arrow's path. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${DRONA_A} A grand forest training ground. Dronacharya stands before rows of young princes — the five Pandavas and Kaurava cousins — all holding bows. Some practice archery at targets. The training ground has wooden dummies, target posts, and a weapons rack. Ancient forest surrounds them. Dronacharya raises one hand, announcing a special test. Golden morning light through the trees. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${DRONA_A} He points up at a tall tree where a small wooden bird sits on a high branch. The bird is tiny against the vast canopy. All the young princes look up, squinting. The challenge is clear — hit the bird's eye. The tree is ancient and tall with thick branches. Dappled forest light. A test of supreme focus. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${YUDHI} ${DRONA_A} Yudhishthira stands with his bow drawn, aiming upward uncertainly. His eyes dart around — he sees the tree, the sky, the leaves, the bird. His expression shows he is trying but distracted by everything around him. Dronacharya stands beside him with arms crossed, listening to his answer. Other princes watch from behind. Forest training ground. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `A sequence of different princes attempting the test and failing. A muscular Kaurava prince looks around distractedly while aiming. Another prince glances at the audience. Each one sees too much — trees, sky, wind, people. Dronacharya shakes his head and waves each one back. The wooden bird sits undisturbed on its high branch. Growing frustration among the princes. Forest setting, warm light. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${ARJUNA_A} ${DRONA_A} Arjuna steps forward from the crowd of princes. He is calm and composed. He draws his bow slowly, his body perfectly still. His eyes narrow with intense concentration — the world around him seems to blur and fade. Only the distant bird remains sharp. Dronacharya watches him intently, a hint of anticipation in his eyes. The forest, other princes — everything fades into soft focus. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${ARJUNA_A} Extreme close-up of Arjuna's face and the drawn bow. His eyes are absolutely steady, locked onto a single point. Everything around him is blurred into soft golden light — no trees, no sky, no people visible. Only the bird's eye exists in his vision. His expression is one of total, unwavering concentration. The bowstring is pulled taut. A powerful visualization of complete focus. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${ARJUNA_A} The dramatic release. Arjuna's arrow flies in a golden streak straight through the wooden bird's eye! The bird spins off the branch. The arrow trail blazes with golden light. All the princes erupt in cheering — jumping, waving arms, mouths open in amazement. ${DRONA_A} smiles broadly with deep pride. Dynamic action moment, golden light, triumphant energy. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `A transcendent closing composition. ${ARJUNA_A} stands with his bow lowered, calm amid the cheering crowd. ${DRONA_A} places a hand on his shoulder with fatherly pride. Above, a celestial vision shows an eye with an arrow through it — the symbol of perfect focus. Golden divine light streams down. The message: total focus is the secret of success. Forest clearing, triumphant, deeply inspiring atmosphere. ${STYLE}`,
      },
    ];
  })(),

  'krishna-steals-butter': (() => {
    const KRISHNA_B = 'Baby Lord Krishna: deep blue-black skin, peacock feather crown in curly black hair, yellow silk dhoti, large mischievous lotus eyes, cheeky divine smile, butter smeared on his face and hands, gold anklets bracelets, celestial golden aura.';
    const YASHODA_B = 'Mother Yashoda: warm brown complexion, ornate saffron silk sari with gold border, gold nose ring earrings bangles, jasmine flowers in dark hair bun, expression alternating between mock-stern and trying not to laugh.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${KRISHNA_B} A majestic title composition. Baby Krishna sits atop a tower of his friends' shoulders, reaching into a clay pot of butter hung from the ceiling on a rope. Butter drips from his tiny blue-black fingers. His face is pure mischievous glee. His friends below giggle. A monkey reaches for falling butter. ${YASHODA_B} peeks through a doorway with mock outrage. Warm golden Vrindavan interior light. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${KRISHNA_B} He sits in a Vrindavan courtyard surrounded by admiring villagers. His reputation as the naughtiest boy is evident — villagers point and laugh affectionately. A trail of tiny butter footprints leads to where he sits. His expression is pure innocent charm, big eyes wide. Vrindavan village with clay houses, cows, and Tulsi plants. Warm golden afternoon light. Charming, playful atmosphere. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${YASHODA_B} Inside her Vrindavan home, she churns butter from yogurt — a wooden churning rod in a large clay pot, rope pulled rhythmically. Thick creamy white butter forms on top. She carefully scoops it into clay pots and hangs them from the ceiling on rope shelves, high up where little hands cannot reach. Warm interior, brass lamps, earthen walls. A loving mother's morning routine. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${KRISHNA_B} He peeks around a doorway, checking that Yashoda has left. Then he whispers "Psst!" to his cowherd friends — three or four little boys with brown skin in simple dhotis. They huddle together conspiratorially, Krishna pointing up at the hanging butter pots. Mischievous grins on every face. The interior of a Vrindavan home, butter pots dangling from the ceiling. Secretive, playful golden light. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${KRISHNA_B} The boys form a human tower — one standing on another's shoulders, three high! Krishna climbs nimbly to the very top, reaching for the butter pot with eager blue-black hands. The tower wobbles comically. One boy's face is squished under another's foot. Krishna stretches triumphantly toward the pot. Warm golden interior light. Playful, dynamic, joyful composition. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${KRISHNA_B} Krishna and his friends sit in a circle on the floor, eating handfuls of stolen butter with absolute bliss. Butter drips down their chins. They giggle uncontrollably. Krishna feeds a handful to a small brown monkey sitting beside him. Broken pieces of the clay pot lie nearby. A joyful feast of stolen butter. Warm, golden, intimate light. Pure childlike happiness and mischief. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${YASHODA_B} Village women (gopis) in colorful saris crowd around Yashoda in her courtyard, complaining animatedly. One points at her empty butter pot. Another shows tiny butter footprints on her floor. A third gestures toward a monkey licking butter off its paws. Yashoda listens with her hand on her forehead, trying to look serious. Vrindavan courtyard, warm afternoon light. Comic, lively scene. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${YASHODA_B} ${KRISHNA_B} Yashoda confronts Krishna, hands on her hips. Krishna looks up at her with impossibly big, wide, innocent eyes — butter clearly visible on his blue-black face, lips, and fingers. He shakes his head in denial, one hand behind his back. Yashoda is trying desperately not to smile. The comedy of the obvious lie. Their Vrindavan home, warm lamplight. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${KRISHNA_B} Close-up of his adorable face — big innocent lotus eyes looking up, a smear of white butter glistening on his blue-black cheeks, nose, and chin. His little mouth forms the word "moonlight!" with a cheeky irresistible grin. His peacock feather tilts. No one could possibly be angry at this face. Warm golden light on his divine features. Pure charm and mischief. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${YASHODA_B} ${KRISHNA_B} A comedic chase scene! Yashoda runs after Krishna through the Vrindavan house with a small stick, her sari flowing, but she is laughing so hard she can barely run. Krishna dashes ahead, giggling, butter flying everywhere. Pots wobble, a cat scatters, garlands swing. Pure joyful domestic chaos. Dynamic movement, warm golden light, laughter visible in every detail. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${YASHODA_B} ${KRISHNA_B} Yashoda has caught Krishna. But instead of scolding, she hugs him tight, kissing his buttery cheeks. Krishna melts into her embrace, his little arms around her neck. Both are laughing. Butter smears transfer from his face to her sari. An intimate, tender, loving moment between mother and child. Warm golden light, their Vrindavan home. Pure love. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `${KRISHNA_B} ${YASHODA_B} She holds him on her lap, wiping butter from his face with the edge of her sari, smiling. Krishna looks up at her with pure adoring love. Around them, the messy evidence of his butter theft — broken pots, footprints, a satisfied monkey. But none of it matters. Warm intimate golden light. ${STYLE}`,
      },
      {
        filename: 'scene-12.png',
        prompt: `A transcendent closing composition. ${KRISHNA_B} sits surrounded by adoring villagers, gopis, his friends, and animals. Everyone smiles at him with unconditional love. Butter pots hang above. A faint divine golden aura surrounds the entire scene. In the celestial glow above, a vision of adult Krishna playing the flute. The message: Krishna stole not butter but everyone's hearts. Love shared with laughter is the sweetest thing. Deeply warm, joyful, divine. ${STYLE}`,
      },
    ];
  })(),

  'lion-and-the-rabbit': (() => {
    const LION = 'Bhasuraka the Lion: massive golden-maned lion with fierce amber eyes, powerful build, sharp fangs, arrogant regal bearing, sitting on a rock throne in the forest.';
    const RABBIT = 'The Clever Rabbit: tiny brown rabbit with large bright intelligent eyes, soft fur, long ears, small but radiating cleverness and calm courage.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${RABBIT} ${LION} A majestic title composition. The tiny clever rabbit stands at the edge of an old deep well, looking down at the water with a knowing smile. Behind him, the fierce lion charges toward the well in a rage. The forest is lush and golden. The contrast between the tiny rabbit and the massive lion is dramatic. Dappled golden sunlight through ancient trees. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${LION} A dense, lush Indian forest. The fierce lion Bhasuraka hunts aggressively — he has cornered several terrified deer, rabbits, and birds. Multiple animals lie fallen. The lion roars triumphantly, blood on his paws. The forest animals cower in fear behind trees and bushes. Dark dramatic lighting with shafts of golden light. A reign of terror in the jungle. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `A gathering of forest animals in a moonlit clearing. Deer, rabbits, foxes, birds, monkeys, and turtles sit in a circle. An old wise deer stands at the center, speaking urgently. Expressions of fear and worry on every face. Some animals weep. The mood is somber and desperate. Ancient banyan tree overhead, silver moonlight filtering through leaves. A council of the frightened. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${LION} The forest animals approach the lion's cave as a delegation. The old deer speaks while other animals tremble behind him. The lion lounges on his rock throne, listening with an amused, arrogant expression. He considers the deal — one animal per day in exchange for stopping his rampage. The cave is dark and imposing. Golden afternoon light at the cave mouth. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `A sad procession scene. One lone animal — a small deer — walks slowly toward the lion's dark cave while the other animals watch from the forest edge with tears. The path is worn from daily use. Dark, melancholic atmosphere. Some days a bird, some days a fox, each walks alone. A heavy sense of sacrifice and sorrow. Muted golden light, emotional and somber. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${RABBIT} The tiny rabbit walks extremely slowly along a forest path, deliberately taking his time. The sun is setting — shadows grow long. His expression is thoughtful and calculating, not scared. He looks at the setting sun, timing his arrival. Other animals watch from the bushes, some crying for him, others whispering "he is so brave." Golden evening light streaking through trees. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${LION} ${RABBIT} Inside the lion's cave, Bhasuraka is FURIOUS. He towers over the tiny rabbit, roaring with rage, his mane bristling, fangs bared. The rabbit bows calmly, tiny before the enormous lion. The contrast in size is extreme. The cave trembles with the roar. The rabbit's eyes show no fear — only clever calculation. Dramatic firelight and shadow in the cave. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${RABBIT} ${LION} The rabbit tells his story, gesturing dramatically. A thought bubble or ethereal vision shows another imaginary lion — even bigger, even fiercer — grabbing a large rabbit. The real lion's eyes go wide with rage and jealousy. The rabbit acts frightened but is secretly smiling. Dramatic cave interior with golden torchlight. A brilliant deception unfolding. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${RABBIT} ${LION} The rabbit leads the furious lion through the forest to an old, deep stone well. The lion charges ahead in rage. The rabbit points at the well with one tiny paw — "He is in there, Your Majesty!" The well is ancient, covered in moss, surrounded by wild flowers. Late evening golden light. Tension and anticipation in the scene. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${LION} The lion leans over the deep well and sees his own reflection in the dark water below — a fierce lion staring back. His eyes go wide with fury. He roars at the reflection. The echo of his roar visually ripples the water. The moment before he jumps — pure dramatic tension. Dark well, dramatic lighting from above. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${LION} The lion leaps into the deep well with a mighty splash! Water erupts upward. His claws are extended, attacking his own reflection. The well is deep and dark. This is the end of the bully. Dramatic downward perspective, water splashing, the lion falling. ${RABBIT} peeks over the well's edge with a calm, satisfied expression. Dramatic golden light. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `A joyful celebration scene. ${RABBIT} hops back to the forest clearing where ALL the animals are gathered. They cheer wildly — deer leap, birds fly in circles, monkeys dance, foxes howl with joy. The tiny rabbit is lifted on the shoulders of larger animals like a hero. Flowers and leaves rain down. Bright golden morning light. The smallest creature saved everyone. Triumphant, joyful atmosphere. ${STYLE}`,
      },
      {
        filename: 'scene-12.png',
        prompt: `A transcendent closing composition. ${RABBIT} sits peacefully in the center of the forest, surrounded by happy animals living in harmony. Above, a celestial vision shows a brain glowing brighter than muscles — symbolizing wisdom over strength. Golden divine light streams through the trees. The message: a clever mind can solve problems that strength alone cannot. Warm, triumphant, deeply inspiring atmosphere. ${STYLE}`,
      },
    ];
  })(),

  'matsya-the-great-fish': (() => {
    const MANU = 'King Manu: wise ancient Indian king, aged but strong, grey-white beard, simple saffron robes of a sage-king, kind intelligent eyes, golden crown set aside, humble and compassionate bearing.';
    const FISH_SMALL = 'Matsya as tiny fish: a shimmering golden fish small enough to fit in cupped hands, with one glowing divine eye, luminous golden scales.';
    const FISH_GIANT = 'Matsya as colossal fish: an enormous golden fish bigger than a mountain, with a magnificent glowing golden horn on its head, divine light radiating from its body, Lord Vishnu in fish form.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${FISH_GIANT} ${MANU} A majestic title composition. The colossal golden Matsya fish with its glowing horn surges through a stormy ocean, pulling a massive wooden boat by a rope made from a giant serpent. Manu stands at the bow, holding on bravely. Massive waves crash around them. Lightning splits the dark sky. Golden divine light emanates from the fish. Epic, awe-inspiring scale. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${MANU} A serene riverbank at dawn. King Manu kneels by a gentle flowing river, washing his hands in the crystal water. The river is surrounded by lush forest. As he scoops water, a tiny golden fish appears in his cupped palms, shimmering and helpless. His expression is one of gentle surprise. Peaceful golden morning light reflecting off the water. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${FISH_SMALL} ${MANU} Close-up of Manu's gentle weathered hands cupping the tiny golden fish. The fish looks up at him with one pleading divine eye. Water droplets glisten. The fish seems to speak — a tiny golden aura surrounds it. Manu's face shows compassion and wonder. Soft golden riverbank light. An intimate, tender moment of mercy. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${MANU} A progression sequence. Manu carries the tiny fish home in a small clay pot. Inside his humble ashram, the fish has grown — it barely fits the pot! Water overflows. Manu looks astonished. The growing golden fish glows softly. Simple sage's dwelling with oil lamps and sacred texts. Warm amber interior light. Wonder and bewilderment. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${MANU} A comedic growing sequence. The golden fish outgrows pot after pot — shown in progression: small pot, big pot, bucket, tub, pond. In each stage the fish barely fits, water splashing everywhere. Manu runs back and forth carrying the fish. The fish keeps growing bigger and bigger, always too large for its container. Bright, warm, humorous golden light. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${MANU} Manu releases the now-enormous golden fish into the ocean. The fish is already massive — as big as a whale. Manu stands on the shore, looking up in awe. The fish turns in the surf, its golden scales catching the sunlight. Ocean waves crash around its massive form. It looks back at Manu with deep knowing eyes. Dramatic ocean sunset, vast scale. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `The giant golden fish rises from the ocean, speaking to Manu who stands on the shore. A prophetic vision appears in the sky above — dark storm clouds, raging floods, the world being submerged. The fish's golden horn glows as it delivers the warning. Manu's face shows shock and determination. Dramatic ocean scene, divine golden and dark storm lighting. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${MANU} Manu works frantically building an enormous wooden boat. He hammers, saws, and lifts. Around him, pairs of animals line up — two elephants, two deer, two birds, two snakes. Seven glowing sages in white carry bundles of sacred texts. Workers load sacks of seeds. The boat is massive. The sky darkens ominously in the background. Urgent, industrious golden-amber light. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `Apocalyptic flood scene. The sky is black with rain. Torrential rain pours in sheets. The ocean rises, swallowing forests, mountains, and villages. Manu's great boat rises on the raging waters. Animals huddle inside. The seven sages pray. Manu looks out at the devastation with grief but resolve. Massive waves, lightning, overwhelming dark and dramatic atmosphere. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${FISH_GIANT} The colossal golden Matsya — Lord Vishnu in fish form — erupts from the churning ocean! It is bigger than a mountain, its golden horn blazing with divine light. Manu and everyone on the boat gasp in awe. The fish is magnificent, divine, cosmic in scale. Stormy ocean, but golden light breaks through the darkness around the divine fish. Breathtaking, divine revelation. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${FISH_GIANT} ${MANU} Manu ties the great boat to Matsya's glowing golden horn using a giant serpent as rope. The serpent coils around the horn. The enormous fish pulls the boat through monstrous waves. Rain and spray fly everywhere. The boat rides the cosmic ocean like a chariot behind the divine fish. Epic movement, divine golden light cutting through the storm. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `A new dawn. The flood recedes, revealing fresh green earth. ${MANU} steps off the boat onto solid ground. Animals stream out in pairs. The seven sages scatter seeds that instantly sprout into forests. Birds take flight. Rivers flow clean and fresh. A rainbow arcs across the sky. In the distant ocean, the golden fish raises its horn one last time in farewell. Golden morning rebirth light. ${STYLE}`,
      },
      {
        filename: 'scene-12.png',
        prompt: `A transcendent closing composition. ${MANU} kneels in gratitude on the new earth, hands folded in prayer. Above him, a celestial vision shows Lord Vishnu in his full divine form — four arms, holding conch, discus, mace, and lotus — emerging from the golden fish. The message: kindness to even the smallest creature can save the world. Lush new earth below, divine golden cosmos above. ${STYLE}`,
      },
    ];
  })(),

  'shravan-kumar': (() => {
    const SHRAVAN = 'Shravan Kumar: young Indian boy about 14, thin but strong, simple white dhoti and shawl, bare feet calloused from walking, gentle loving face, carrying a bamboo pole with two large wicker baskets across his shoulders.';
    const PARENTS = 'Shravan\'s parents: elderly blind Indian couple, both frail with white hair, milky sightless eyes, simple saffron clothes, sitting in wicker baskets, expressions of trust and gentle contentment.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${SHRAVAN} ${PARENTS} A majestic title composition. Shravan Kumar carries his blind elderly parents in baskets on a bamboo pole across his shoulders. He walks along a mountain path with determination and love. His parents sit peacefully in the baskets, hands folded. Behind them, a golden sunrise illuminates rolling green hills, temples in the distance. A heroic image of filial love. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${SHRAVAN} ${PARENTS} A humble village home interior. Shravan sits between his two blind parents, holding their hands. They are old and frail but smiling. The room is simple — clay walls, oil lamp, straw mats. Shravan feeds his mother from a bowl. His face radiates pure devotion. Warm golden lamplight. A portrait of unconditional love and care. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${SHRAVAN} Inside the humble home, Shravan works tirelessly — cooking over a clay stove, sweeping with a grass broom, washing clothes by hand in a pot. His blind parents sit nearby, listening to him sing while he works. He never looks tired or unhappy. Simple but loving domestic scene. Warm golden interior light through a small window. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${PARENTS} The two blind parents sit together, holding hands, speaking wistfully. Their milky eyes gaze at nothing but their faces are full of longing. A vision appears above them — holy temples, sacred rivers, pilgrimage sites glowing with golden light. They dream of visiting these places one last time. Emotional, tender. Warm amber lamplight. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${SHRAVAN} Shravan builds the special carrier — a strong bamboo pole with two large wicker baskets hanging from each end, padded with cloth for comfort. He tests it, lifts it, adjusts the balance. His face shows ingenious determination. Simple workshop area outside the village home. Tools and bamboo scattered around. Golden afternoon light. Inventive, heartwarming. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${SHRAVAN} ${PARENTS} The iconic image — Shravan places his parents in the baskets and lifts the pole onto his shoulders. His mother sits in one basket, his father in the other. They look nervous but trusting. Shravan takes his first steps on the journey. Villagers gather to watch, some wiping tears. The village road stretches ahead. Golden morning light, emotional departure. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${SHRAVAN} ${PARENTS} Shravan carries his parents through difficult terrain — steep rocky hills, his feet bleeding, sweat on his brow, the sun beating mercilessly. His parents ask if he is tired. He turns back with a bright loving smile, saying "Not at all!" even as his shoulders ache. Beautiful but harsh landscape. Dramatic golden afternoon light. Heroic endurance and love. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${SHRAVAN} ${PARENTS} Shravan describes the scenery to his blind parents. He stands at a riverbank — the river sparkles like diamonds in the sunlight. He points and describes everything with joy. His mother's face lights up imagining the scene. His father smiles and reaches out. A white temple gleams in the distance. Idyllic, warm, tender. Sparkling golden river light. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${SHRAVAN} ${PARENTS} Villagers along the road gather to watch Shravan pass. Their faces show amazement and deep respect. Women offer food and water. Children point in wonder. An old man bows. Shravan accepts the kindness gratefully while his parents smile from their baskets. A village road lined with trees and simple homes. Warm community scene, golden afternoon light. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${SHRAVAN} ${PARENTS} The story spreads across the land. A royal court scene where a king sits on his throne hearing about Shravan from a messenger. The king's eyes are wide with admiration. Above, a celestial vision shows Shravan carrying his parents across mountains, forests, and rivers — an epic journey of love. Grand golden royal hall and cosmic vision. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `A transcendent closing composition. ${SHRAVAN} stands tall with his parents in their baskets, silhouetted against a magnificent golden sunset. The path behind them shows the long journey — mountains, rivers, temples visited. Above, divine light forms the shape of two gentle hands cradling the whole scene. The message: the greatest strength is love for those who raised you. Deeply warm, golden, inspiring. ${STYLE}`,
      },
    ];
  })(),

  'durga-and-mahishasura': (() => {
    const DURGA = 'Goddess Durga: radiant divine woman with golden-bronze skin, ten arms each holding a different weapon, ornate red and gold silk sari, magnificent gold crown and jewelry, fierce compassionate eyes, riding a majestic golden lion, blazing divine aura.';
    const MAHISH = 'Mahishasura: shape-shifting demon in buffalo form — enormous black water buffalo with red demonic eyes, golden armor plates, smoke and fire around hooves, dark malevolent aura, terrifying and powerful.';
    const DEVAS = 'The Devas (gods): celestial beings in white and gold robes, glowing divine auras, various divine weapons, looking defeated and desperate.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${DURGA} A majestic title composition. Goddess Durga in all her glory — ten arms wielding weapons, riding her magnificent golden lion. She charges into battle against the massive dark buffalo demon Mahishasura. Divine golden light radiates from her. Dark storm clouds behind the demon. The epic clash of good vs evil. Flowers rain from the sky. Supremely powerful and beautiful. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${MAHISH} The terrifying demon Mahishasura in his various forms — shown shifting between buffalo, lion, man, and elephant. He rampages across the heavens, dark power emanating from him. Gods flee before him. The sky cracks and burns. His arrogant laugh echoes. Dark, ominous, powerful atmosphere with red and black tones. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${MAHISH} Mahishasura sits on a stolen celestial throne in the heavens, laughing triumphantly. The palace of the gods is damaged and burning around him. Demon soldiers celebrate. The sky is dark and smoky. The demon is at the height of his arrogance. Dark dramatic lighting with hellish red glow. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${DEVAS} The gods huddle together in exile, defeated and desperate. Vishnu, Shiva, Brahma and other gods sit in a dark forest, their divine glow dimmed. They look broken and hopeless. Some hold their heads in their hands. A dark, somber atmosphere. But one ray of golden light begins to appear — the spark of an idea. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${DEVAS} The gods realize the loophole — no MAN or GOD can defeat Mahishasura, but a Goddess can! Their eyes light up with hope. They stand in a circle, raising their hands to the sky. Beams of divine energy shoot from each god — gold, blue, red, white — converging at a central point. The atmosphere shifts from dark to brilliantly golden. A pivotal moment of divine inspiration. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${DURGA} The birth of Goddess Durga! From the combined divine light of all the gods, she materializes — dazzling, radiant, with ten arms. Each god presents a weapon: Shiva's trident, Vishnu's discus, the Wind God's arrows, the Sun's bright rays. She accepts each with grace. A magnificent golden lion appears as her mount. Brilliant golden-white divine light, awe-inspiring moment of creation. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${DURGA} ${MAHISH} The nine-day battle! Durga charges on her lion into the demon army. Multiple action moments: she fights with sword, trident, bow, and discus simultaneously. Mahishasura shifts forms — buffalo, lion, elephant, warrior — but Durga matches every transformation. Dramatic battle chaos, divine golden light clashing with dark demonic energy. Epic, intense, dynamic. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${DURGA} ${MAHISH} The climactic tenth day! Durga leaps from her lion onto the massive buffalo demon. She pins Mahishasura with her foot, the demon struggling beneath her. She raises her trident high, divine light blazing. The demon's dark aura shatters. The decisive moment of victory. Supremely powerful composition. Golden divine light defeating darkness. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${DURGA} Celebration in the heavens! Flowers rain from the sky in a cascade of colors. The gods return to their celestial homes and bow before Durga with folded hands. Angels play music. The lion roars triumphantly. Durga stands serene and graceful amid the celebration, her ten arms at peace. Brilliant golden celebratory light. Joy and divine triumph. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `A transcendent closing composition. A Navratri celebration scene — a beautiful pandal (decorated tent) with a magnificent idol of Durga defeating Mahishasura. Devotees of all ages dance and celebrate for nine nights. Diyas (oil lamps) and flowers everywhere. Above, the real Goddess Durga watches with a gentle smile. The message: strength, courage, and power come in every form. Golden festive light. ${STYLE}`,
      },
    ];
  })(),

  'sage-and-the-mouse': (() => {
    const SAGE = 'The Kind Sage: elderly Indian holy man with long white beard, saffron robes, prayer beads, gentle wise eyes, sitting cross-legged in a forest ashram, warm compassionate aura.';
    const MOUSE = 'The Frightened Mouse: tiny brown mouse with huge terrified eyes, trembling whiskers, curled tail, constantly looking around in fear.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${SAGE} A majestic title composition. The sage sits in his forest ashram, surrounded by a progression of animals — a tiny mouse, a cat, a dog, and a magnificent tiger — all with the same frightened eyes. The sage looks at them with gentle wisdom. Magical golden transformation sparkles connect each animal. The message: changing your outside doesn't change your inside. Forest ashram, golden divine light. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${SAGE} ${MOUSE} A peaceful forest ashram — thatched hut, sacred fire, flowering trees. A crow flies overhead and drops something. A tiny trembling mouse falls at the sage's feet. The sage cups the frightened mouse gently in his weathered hands, looking down with compassion. The mouse shivers, its tiny eyes wide with terror. Soft golden forest light. Tender rescue scene. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${SAGE} The sage holds the mouse, which cries out in fear as a cat lurks nearby. Golden magical light swirls around the sage's hands. TRANSFORMATION — the tiny mouse becomes a cat! The new cat sits where the mouse was, but its eyes still have the same frightened look. Magical golden sparkles and light beams. The sage watches with hope. Forest ashram setting. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${SAGE} Two quick transformations. A frightened cat cowers as a dog approaches — golden magic flash — it becomes a dog! But the dog trembles as a tiger's shadow falls — golden magic flash — it becomes a dog! The sage performs each transformation with a wave of his hand. Each new animal has the same terrified eyes. Magical golden sparkles. Progression of forms, same fear. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${SAGE} A magnificent Royal Bengal tiger with beautiful orange and black stripes sits in the ashram — but it cowers and trembles! Its huge body is crouched low, ears flat, tail between its legs. It has massive claws and fangs but flinches at a falling leaf. The contrast between its powerful body and its terrified expression is striking. Forest ashram, golden light. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `The tiger (same frightened eyes as the original mouse) hides behind a bush, peeking out in terror at the sound of a distant hunter's horn. Its massive body quakes. Shadows and rustling bushes seem like threats. Every sound makes it jump. A powerful beast paralyzed by fear. Dark forest shadows contrast with patches of golden light. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${SAGE} The sage sits facing the cowering tiger, shaking his head sadly. He gestures from the tiger's body to its heart. A glowing ethereal image shows the progression: mouse → cat → dog → tiger, with the same tiny frightened heart visible inside each form. The sage speaks gently. Deep wisdom in his eyes. Golden lamplight in the ashram. A profound teaching moment. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${SAGE} The sage speaks gently to the tiger. Above them, a celestial vision shows two contrasting images: a brave tiny mouse standing tall with confidence, and a cowering tiger hiding in fear. The message: courage comes from within, not from size. The sage gestures upward to the vision. Golden divine light illuminates the teaching. Forest ashram setting. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${SAGE} Golden magical light swirls — the tiger transforms BACK into the tiny brown mouse. But this time, the sage teaches the mouse. The mouse practices being brave: dodging around a sleeping cat, finding clever hiding spots, making friends with other mice who cheer it on. Montage of the mouse gaining real confidence. Warm golden forest light. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${MOUSE} The mouse is now happy and confident — it stands tall (for a mouse!), chest out, bright eyes, with a group of mouse friends around it. They explore the forest together, find food, play. The mouse no longer trembles. It is small but proud and brave. Flowers and butterflies surround the happy scene. Bright, warm, joyful golden sunlight. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `A transcendent closing composition. ${SAGE} sits in meditation, a gentle smile on his face. Around him, animals of all sizes live in harmony — a brave mouse, a calm cat, a friendly dog, a peaceful tiger. Above, a celestial vision shows a glowing heart — the same size inside every creature. The message: real confidence comes from accepting who you are. Golden divine forest light. ${STYLE}`,
      },
    ];
  })(),

  'krishna-shows-universe': (() => {
    const KRISHNA_U = 'Baby Lord Krishna: deep blue-black skin, peacock feather in curly black hair, yellow silk dhoti, enormous innocent lotus eyes, mischievous divine smile, mud and dirt on his face and hands, gold anklets, celestial golden aura.';
    const YASHODA_U = 'Mother Yashoda: warm brown complexion, green silk sari with gold border, gold jewelry and nose ring, jasmine flowers in hair, alternating between stern motherly authority and awestruck wonder.';
    const BALARAMA = 'Young Balarama: fair-skinned boy, blue clothes, Krishna\'s older brother, pointing accusingly with a mischievous tattling expression.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${KRISHNA_U} A majestic title composition. Baby Krishna opens his tiny mouth wide, and from within, the ENTIRE UNIVERSE is visible — swirling galaxies, blazing suns, spinning planets, oceans and mountains. His mother peers in, her face frozen in absolute awe. The contrast between the tiny child and the infinite cosmos inside him. Divine golden light pours from his mouth. Transcendent, cosmic, mind-bending. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${KRISHNA_U} ${BALARAMA} A beautiful Vrindavan garden. Krishna and Balarama play together — rolling in mud, chasing colorful butterflies, climbing a tree. Both boys are laughing and carefree. The garden is lush with flowers, Tulsi plants, and mango trees. Cows graze nearby. Pure childhood joy. Bright warm golden afternoon sunlight. Idyllic and charming. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${BALARAMA} ${YASHODA_U} Balarama runs into the house to tattle, pointing back toward the garden with an urgent expression. "Krishna is eating dirt!" Yashoda looks up from her cooking with alarm. Kitchen setting with clay pots, a grinding stone, spices. Balarama's face is a mix of concern and the glee of telling on his brother. Warm domestic interior light. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${YASHODA_U} ${KRISHNA_U} Yashoda rushes into the garden and confronts Krishna. She towers over the tiny boy, hands on her hips, scolding. Krishna looks up at her with impossibly wide innocent eyes, shaking his head in denial. Dirt is visible on his face. He gestures "no no!" with tiny blue-black hands. A classic mother-child confrontation. Garden setting, warm golden light. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${KRISHNA_U} Close-up of Krishna's face — big innocent eyes looking up, shaking his head. His expression says "Who, ME?" Dirt on his cheeks and lips. Behind him, ${BALARAMA} peeks from behind a tree, arms crossed. ${YASHODA_U} points at Krishna's mouth firmly — "Open your mouth. Show me." A standoff between mother and child. Garden, warm golden light. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${KRISHNA_U} ${YASHODA_U} Krishna slowly opens his tiny mouth. Yashoda leans in close to look inside. Her face begins to change from stern to confused. A faint golden glow begins emanating from Krishna's open mouth. The moment just before the revelation. Intimate close-up of mother peering into child's mouth. The mundane about to become infinite. Warm golden light intensifying. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${YASHODA_U} COSMIC REVELATION. Yashoda sees the ENTIRE UNIVERSE inside Krishna's mouth — swirling galaxies, blazing suns and moons, spinning planets, vast oceans, towering mountains, rivers flowing, every animal, every tree, every flower. All of creation in infinite detail. Her face is frozen in absolute awe and terror. Divine golden cosmic light floods the scene. Mind-bending, transcendent, infinite. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${YASHODA_U} Deeper into the cosmic vision — she sees herself looking into Krishna's mouth. Recursive infinite mirrors of reality. Millions of galaxies swirl and dance. Time flows like a river — past, present, future all at once. The scale is incomprehensible — from atoms to universes. Yashoda floats in this cosmic ocean, tiny against infinity. Overwhelming divine golden-cosmic light. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${YASHODA_U} Yashoda's face in extreme close-up — her eyes are enormous, tears streaming, mouth open, overwhelmed. "Who... who are you?" she whispers. The reflection of the cosmos shimmers in her wide eyes. A profound moment of divine recognition. The mortal confronting the infinite. Cosmic golden light reflecting in her tears. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${KRISHNA_U} Krishna closes his mouth and simply smiles — his sweet, innocent, buttery divine smile. The cosmic vision vanishes instantly. The garden returns to normal — birds chirp, flowers sway, butterflies flutter. Just a muddy little boy smiling at his mother. Divine maya (illusion) restored. Warm, gentle, golden afternoon garden light. Peace after infinity. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${YASHODA_U} ${KRISHNA_U} Yashoda scoops Krishna into her arms and hugs him tightly, laughing through confused happy tears. "Just don't eat dirt, okay?" Krishna snuggles into her embrace, his peacock feather tickling her nose. A mother and her naughty boy — nothing more, nothing less. Pure love after cosmic wonder. Warm intimate golden garden light. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `A transcendent closing composition. ${KRISHNA_U} sits in the garden playing in the mud, carefree and giggling. But his shadow cast on the ground shows the form of Lord Vishnu — four-armed, cosmic, infinite. A butterfly lands on his finger. Above, the entire cosmos swirls faintly in the golden sky. The beautiful mystery: the whole universe lives inside a little boy who just wants to play. Golden divine twilight. ${STYLE}`,
      },
    ];
  })(),

  'draupadi-saree': (() => {
    const DRAUPADI = 'Queen Draupadi: beautiful Indian queen with deep brown skin, thick black hair now disheveled, ornate but torn silk saree in royal blue and gold, gold jewelry, fierce proud eyes filled with tears, dignified even in distress.';
    const DUSHASANA = 'Dushasana: muscular Kaurava prince, dark menacing face, gold armor, cruel sneering expression, pulling with both hands at cloth.';
    const KRISHNA_D = 'Lord Krishna: divine blue-black skin, golden crown, yellow silk garments, four-armed cosmic form appearing in ethereal golden vision, sending endless divine cloth.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${DRAUPADI} A majestic title composition. Draupadi stands dignified in the royal court, her hands raised in prayer, eyes closed. Around her, an ENDLESS cascade of beautiful silk saree cloth flows and flows — yards and yards of shimmering fabric in blue, gold, red, and saffron. ${DUSHASANA} collapses exhausted on the floor amid piles of cloth. A divine golden light from above sends the cloth. Miraculous, powerful, divine. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${DRAUPADI} A grand royal court — the Pandavas and Draupadi in their glory. Five noble Pandava princes and beautiful Queen Draupadi sit on ornate thrones. The court is magnificent with marble pillars, silk banners, and gold. Draupadi wears a stunning royal saree and crown. Everyone is happy and prosperous. Warm golden royal splendor. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `A dramatic dice game scene. The Pandava prince Yudhishthira sits at a game board, losing badly. Across from him, a sneering Kaurava prince manipulates loaded dice. Behind the winner, Kauravas celebrate maliciously. Behind Yudhishthira, the other Pandavas and Draupadi watch in horror as everything is wagered and lost. Dark, tense atmosphere with dramatic torchlight. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${DRAUPADI} ${DUSHASANA} The terrible moment. Dushasana grabs Draupadi by her hair and drags her across the marble floor of the royal court. Her face shows shock, pain, and righteous fury. Courtiers gasp. The Pandavas sit bound and helpless, anguish on their faces. Elders look away in shame. A dark, anguished, dramatic scene. Harsh torchlight and deep shadows. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${DRAUPADI} She stands in the center of the vast royal court, looking desperately around for help. The five Pandavas sit motionless, bound by their oath, tears in their eyes. The court elders — Bhishma, Drona — look away with shame. Rows of silent courtiers do nothing. No one stands up. Draupadi is alone. Dark, isolating composition. Dramatic shadow and torchlight. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${DRAUPADI} In her darkest moment, Draupadi closes her eyes and raises both hands to the sky. Tears stream down her face. Her lips form the words "Krishna! My friend! Please help me!" A single beam of golden divine light breaks through the dark court ceiling and touches her raised hands. The moment of absolute faith. Dark surroundings, golden divine light on her. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${DRAUPADI} ${DUSHASANA} THE MIRACLE. Dushasana pulls and pulls at Draupadi's saree, but the cloth NEVER ENDS! Yards and yards of shimmering silk cascade endlessly — blue, gold, saffron, red — piling up in mountains around the court. Dushasana strains with all his might, sweat pouring. Draupadi stands still, hands raised in prayer, fully covered and dignified. Divine golden light fills the court. Gasps from every face. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${KRISHNA_D} Far away in his palace, Lord Krishna sits with eyes closed and a gentle knowing smile. Golden divine energy streams from his raised hand toward the horizon. He sends the endless cloth across the distance. Above him, a celestial vision shows the cloth flowing miraculously to Draupadi. Divine, transcendent, powerful. Golden cosmic light. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${DUSHASANA} collapses in exhaustion on the court floor, surrounded by enormous piles of silk cloth. The entire court is stunned into silence — mouths open, eyes wide. ${DRAUPADI} stands triumphant, fully dignified and covered, her eyes blazing with righteous fire. The silence is deafening. Even the wicked ones know they witnessed the divine. Dark court, golden miraculous light. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${DRAUPADI} She stands tall and speaks to the entire court, her voice strong and clear, one hand raised. "Remember this day." Her expression is fierce and prophetic. The court listens in shamed silence. Behind her, a celestial golden aura glows. The Pandavas watch with renewed hope. This is the turning point. Dramatic court scene, powerful golden light on Draupadi. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `A transcendent closing composition. ${DRAUPADI} stands in prayer, surrounded by the miraculous flowing cloth. Above, ${KRISHNA_D} in his cosmic four-armed form sends golden divine light. Below, the court watches in awe. The message: when the world turns against you, one sincere call from the heart can move the heavens. Divine golden light, deeply moving and powerful. ${STYLE}`,
      },
    ];
  })(),

  'savitri-and-satyavan': (() => {
    const SAVITRI = 'Princess Savitri: stunningly beautiful Indian princess with deep brown skin, ornate red silk saree with heavy gold embroidery, gold crown and jewelry, but most striking are her fierce determined intelligent eyes — a woman who will not be stopped by anything.';
    const SATYAVAN = 'Prince Satyavan: handsome young Indian prince living as a forest-dweller, simple white dhoti, muscular from woodcutting, kind gentle face, an axe over his shoulder.';
    const YAMA_S = 'Yama the Lord of Death: towering dark-skinned deity, black and gold robes, riding a massive black buffalo, stern majestic face, carrying a glowing rope to bind souls, dark purple aura of death.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${SAVITRI} ${YAMA_S} A majestic title composition. Princess Savitri walks fearlessly behind the towering Lord of Death through a surreal misty landscape between life and death. Yama rides his black buffalo, carrying Satyavan's glowing soul on his rope. Savitri's face shows absolute determination — she will follow Death itself to save her love. Dark misty path with golden light following Savitri. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${SAVITRI} ${SATYAVAN} Princess Savitri travels through the land in a royal chariot, searching for a husband. She arrives at a forest hermitage and sees Satyavan chopping wood — his gentle smile, his kind eyes. Their eyes meet. Flowers seem to bloom around them. Love at first sight in a beautiful forest clearing. Golden romantic sunlight through ancient trees. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${SAVITRI} In a royal court, a wise old sage (Narada) delivers the terrible prophecy — he points at a celestial calendar showing one year. "Satyavan will die in exactly one year." Savitri's father looks horrified. Courtiers gasp. But Savitri's face shows not despair but iron determination. She has already decided. Dramatic court scene, dark foreboding atmosphere with golden torchlight. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${SAVITRI} ${SATYAVAN} Their forest wedding — simple but beautiful. Savitri has exchanged her royal silks for simpler forest garments. They exchange garlands under a sacred tree. A fire ceremony glows between them. Forest animals watch. Despite the prophecy, both smile with pure love and joy. Beautiful forest ashram with golden wedding fire light. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${SAVITRI} ${SATYAVAN} Happy forest life — but a calendar or seasons passing shows time running out. Savitri and Satyavan laugh together, but Savitri secretly counts the days. Her eyes sometimes show deep worry when he's not looking. As the final days approach, she prays intensely by a sacred fire, fasting. Dual mood: joy and dread. Forest, shifting golden to amber light. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${SATYAVAN} ${SAVITRI} ${YAMA_S} The dreaded day. Satyavan chops wood, then suddenly collapses. Savitri catches him in her arms. Behind them, the terrifying figure of Yama materializes — towering, dark, riding his black buffalo. He carries a glowing rope. He gently pulls a luminous soul from Satyavan's body. Savitri's face shows not grief but fierce resolve. Dark forest, deathly purple light. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${YAMA_S} ${SAVITRI} Yama walks south through a surreal misty landscape between worlds. Dead trees, swirling mist, a dark path. He carries Satyavan's glowing soul. Behind him, Savitri follows with determined steps. Yama turns back, surprised. "Go back, Savitri. No mortal can follow me." But she keeps walking. Dark, ethereal death-realm with Savitri's golden aura persisting. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${YAMA_S} ${SAVITRI} Yama stops, impressed despite himself. He offers her boons — celestial visions appear showing her wishes being granted: a kingdom restored (a golden palace appears), sons for her father (boys playing). Savitri speaks cleverly, accepting each boon but never stopping her pursuit. The dark path, Savitri's golden determination against Death's purple realm. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${SAVITRI} ${YAMA_S} The clever final wish. Savitri smiles — a brilliant, victorious smile. "I wish for many sons of my own." Yama grants it, then his eyes widen as he realizes the trap — she cannot have sons without her husband alive! A moment of divine chess. Savitri's intelligence outshines even Death. Her golden aura blazes. Yama's stern face breaks into admiring laughter. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${YAMA_S} Yama laughs with genuine admiration and respect. He releases Satyavan's glowing soul from his rope. The luminous soul floats back along the dark path toward life. Yama bows slightly to Savitri. "You are the bravest and cleverest I have ever met." The dark realm begins to lighten with golden dawn. A victory over Death itself. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${SAVITRI} ${SATYAVAN} In the forest, Satyavan wakes up as if from a deep sleep. Savitri holds him, tears of joy streaming. "What happened?" he asks. The forest bursts into golden morning light. Flowers bloom, birds sing, life returns. A joyful reunion. The darkness of death completely replaced by the golden light of love and life. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `A transcendent closing composition. ${SAVITRI} stands radiant, Satyavan beside her. Above, Yama watches from the celestial realm with respect. A vision shows their long, happy life — children, a restored kingdom, love that endures. Below, women celebrate Vat Savitri day, tying threads around a banyan tree. The message: love, courage, and a sharp mind can conquer anything, even death. Golden divine light. ${STYLE}`,
      },
    ];
  })(),

  'blind-men-and-elephant': (() => {
    const ELEPHANT = 'A magnificent royal Indian elephant: huge grey body, long trunk, large flapping ears, white tusks, decorated with a colorful cloth on its back, calm and patient.';
    const KING = 'The wise King: regal Indian king in white and gold silk robes, gold crown, kind amused face, watching the scene with gentle wisdom.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${ELEPHANT} ${KING} A majestic title composition. Six blind men stand around a huge elephant, each touching a different part — side, tusk, trunk, leg, ear, tail. Each man has a completely different expression of certainty. The elephant stands patiently. The King watches with an amused knowing smile. A golden metaphor for perspective. Bright Indian village setting, warm golden light. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `${KING} ${ELEPHANT} An Indian village scene. The King arrives on the elephant through the village gate. Six blind men — each in different colored simple robes, each with clouded sightless eyes but expressive faces — stand excitedly. Villagers point and chatter. The elephant is huge and impressive. The King gestures invitingly. Warm golden morning light. Anticipation and excitement. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${ELEPHANT} The six blind men rush forward eagerly with outstretched hands, each reaching a different part of the elephant. They spread out around the massive animal. The elephant stands still and patient. Each man's hands find a different section. Their faces show intense concentration as they try to understand through touch alone. Warm golden village light. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${ELEPHANT} The first blind man presses both palms against the elephant's massive flat side. His expression is one of absolute certainty. "A WALL!" A thought bubble shows a solid stone wall. His hands spread wide on the grey, warm, rough surface. Close-up composition showing the man dwarfed by the elephant's vast side. Warm golden light. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${ELEPHANT} The second blind man grips the smooth hard tusk with both hands. "A SPEAR!" His thought bubble shows a sharp spear. Nearby, the third man wraps his arms around the wriggling trunk. "A SNAKE!" His thought bubble shows a giant snake. Both men are absolutely certain. The elephant is patient. Split composition showing both discoveries. Golden light. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${ELEPHANT} The fourth man hugs the thick pillar-like leg. "A TREE TRUNK!" His thought bubble shows a great tree. The fifth man waves the huge floppy ear back and forth. "A FAN!" His thought bubble shows a palm-leaf fan. Both are delighted with their discoveries. The elephant flicks its ear gently. Warm golden village light. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${ELEPHANT} The sixth man holds the thin swishy tail. "A ROPE!" His thought bubble shows a rope. He tugs it gently. The elephant's tail swishes. The man looks satisfied and certain. Behind him, the five other men are already turning toward each other, ready to share what they've discovered. Village setting, warm golden afternoon light. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `The six blind men face each other in a heated argument. Each gestures wildly and shouts. "WALL!" "SPEAR!" "SNAKE!" "TREE!" "FAN!" "ROPE!" Their thought bubbles clash overhead. Faces are red and angry. Each is absolutely certain he is right. The elephant stands behind them, looking bewildered. A chaotic, colorful, energetic argument scene. Warm golden light. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${KING} The King steps forward with a kind, wise smile, hands raised to calm the arguing men. He gestures to the whole elephant. "You are ALL right — and all wrong!" Above, a celestial vision assembles the pieces: wall + spear + snake + tree + fan + rope = one complete elephant. The men's angry faces soften with realization. Golden wisdom light. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `The six blind men now work together — they walk around the elephant as a group, each sharing what they felt, helping each other understand the whole. Their expressions have changed from angry certainty to humble curiosity. They smile and nod as they piece together the truth. The elephant seems to smile. Cooperative, warm, harmonious atmosphere. Golden afternoon light. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `A transcendent closing composition. The six men sit together peacefully around the elephant, now friends. Above, a celestial vision shows six puzzle pieces joining to form one complete picture. The message: everyone sees the world differently, and the wisest person listens to all before deciding. ${KING} watches with a satisfied smile. Golden divine light, warm and harmonious. ${STYLE}`,
      },
    ];
  })(),

  'shiva-neelakantha': (() => {
    const SHIVA = 'Lord Shiva: powerful ascetic deity, ash-smeared pale skin, matted brown hair with crescent moon and Ganga river, tiger skin around waist, rudraksha beads, third eye on forehead, serene calm expression, trident nearby.';
    const PARVATI_S = 'Goddess Parvati: beautiful divine woman, golden skin, red silk sari with gold, gentle loving face now terrified, pressing her hands against Shiva\'s throat.';
    const HALAHALA = 'Halahala poison: thick bubbling purple-black toxic liquid, deadly fumes rising as dark clouds, everything it touches withers and dies, terrifying and lethal.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${SHIVA} A majestic title composition. Lord Shiva drinks the deadly purple-black Halahala poison from his cupped hands. His throat glows deep blue where the poison is trapped. ${PARVATI_S} presses her hands against his throat. Above, gods and demons watch in awe. The poison's dark fumes dissolve into Shiva's calm divine aura. Heroic, sacrificial, divine. Dramatic golden and purple light. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `The great churning of the cosmic ocean. Gods on one side, demons on the other, pulling a giant serpent wrapped around Mount Mandara as a churning rod. Wonderful treasures emerge from the milky ocean — a glowing jewel, a white cow, a beautiful goddess. Everyone watches with excitement and greed. Vast cosmic ocean scene, golden and blue ethereal light. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${HALAHALA} HORROR. From the churning ocean, the terrible Halahala poison erupts upward like a volcanic geyser of purple-black death. Its fumes spread as dark clouds. Trees instantly wilt and die. The water boils. The ground cracks. Gods and demons scramble backward in terror. The poison threatens to destroy the entire world. Apocalyptic dark purple and black atmosphere. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${HALAHALA} The poison spreads like a dark plague across the land. Trees turn black and crumble. Rivers boil. The sky darkens. Gods and demons run in pure panic — Vishnu, Brahma, Indra, all fleeing. "Who will save us?!" Everyone looks at each other in terror. No one is brave enough. Total despair. Dark apocalyptic scene with purple-black poison fog. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${SHIVA} In the midst of chaos and panic, Lord Shiva steps forward CALMLY. He walks toward the deadly poison while everyone else runs away. His expression is completely serene. His trident glows. His third eye is half-open. He says simply: "I will." A lone figure of courage against the apocalyptic dark. Golden aura around Shiva cutting through the purple darkness. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${SHIVA} ${PARVATI_S} Parvati grabs Shiva's arm, terrified. "If you drink that, it could destroy even you!" Her face shows pure fear and love. Shiva turns to her with a gentle, loving smile. "If I don't, it will destroy everyone else." An intimate moment of love and sacrifice. Around them, chaos. Between them, calm. Contrasting golden and dark purple light. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${SHIVA} ${HALAHALA} The supreme act of sacrifice. Shiva cups his hands and scoops up ALL the deadly purple-black poison. Every last drop. He raises it to his lips. Gods and demons watch from a distance, frozen in awe and terror. The poison bubbles and hisses in his hands. Shiva is calm. The entire universe holds its breath. Ultra-dramatic golden and purple lighting. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${SHIVA} ${PARVATI_S} Shiva drinks the poison in one mighty gulp. His throat immediately turns DEEP DARK BLUE — a beautiful, otherworldly blue. Parvati LUNGES forward and presses both hands tightly against his throat, trapping the poison there. Her face shows desperate love. The blue glow pulses beneath her fingers. The world watches in breathless silence. Dramatic golden and blue light. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${SHIVA} Shiva sits in perfect meditation, completely peaceful despite the trapped poison. His throat glows a beautiful deep blue. He does not cry. He does not complain. Around him, the world heals — trees regrow, rivers flow clear, the sky brightens. Gods and demons kneel in gratitude. Shiva absorbs the pain silently. Serene, powerful, golden healing light. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `A transcendent closing composition. ${SHIVA} sits in eternal meditation, his beautiful blue throat (Neelakantha) glowing softly. ${PARVATI_S} sits beside him lovingly. Above, a celestial vision shows all the life he saved — every creature, every river, every forest, thriving. The message: the greatest act of love is taking pain upon yourself so others don't have to. Golden divine light, deeply sacred and moving. ${STYLE}`,
      },
    ];
  })(),

  'thirsty-crow': (() => {
    const CROW = 'The Clever Crow: a glossy black crow with bright intelligent eyes, sharp beak, slightly ruffled feathers from exhaustion, determined and resourceful expression.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${CROW} A majestic title composition. The clever crow perches on the rim of a tall clay pot, dropping a pebble from his beak into the water below. A pile of pebbles sits nearby. The water level is rising. Sunlight catches the splashing droplet. A parched, sun-scorched Indian landscape behind. The moment of triumph through patience and intelligence. Golden hot summer light. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `A scorching Indian summer landscape. Cracked dry earth, wilted trees, shimmering heat haze. The sun beats down mercilessly. ${CROW} flies wearily across the barren sky, wings heavy, beak open in thirst. Below, dry riverbeds and withered crops. Everything is parched and desperate. Intense hot golden-white sunlight. The desperation of drought. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${CROW} The exhausted crow flies lower and lower. His wings barely flap. His throat is dry. He croaks weakly. Below, the land is dry and cracked. He has searched everywhere. He is about to give up — his eyes are half-closed, wings drooping. The heat haze shimmers. Hot, harsh, desperate golden-white light. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${CROW} Hope! The crow spots a tall clay water pot on the ground near a simple Indian house. He swoops down and lands on its rim. He peers inside — there IS water at the bottom! His eyes widen with relief and excitement. The pot is tall and narrow, reddish-brown clay. A hint of sparkling water visible deep inside. Hot golden light, a moment of hope. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `${CROW} The problem. The crow pushes his beak into the narrow pot, stretching desperately, but the water is too far down! He tries tilting the heavy pot — it won't budge. He tries pecking at it — too hard. Each failed attempt shown in sequence. Frustration and determination on his face. The water glimmers mockingly at the bottom. Hot golden afternoon light. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${CROW} The crow sits on the rim of the pot, THINKING. His head is tilted, one eye focused intently. You can almost see the gears turning. Around him, the hot landscape. His gaze falls on small pebbles scattered on the dry ground nearby. A light bulb moment — his eyes brighten, his head snaps up. The eureka moment. Hot golden light with a spark of insight. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${CROW} The crow picks up a small pebble in his beak and drops it into the pot. PLOP! A splash. Then another pebble. PLOP! Then another. PLOP! PLOP! PLOP! Each pebble sends a tiny splash. The water level starts to rise just barely. Determined, methodical work. Close-up of beak dropping pebble, water splashing. Hot golden afternoon light. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${CROW} A montage of hard work. The crow flies back and forth — picking up pebbles from the ground, flying to the pot, dropping them in. One by one. The pile of pebbles inside the pot grows. The water slowly, slowly rises. It is exhausting, repetitive work. But the crow never stops. Sweat and determination. Hot golden light, rhythmic labor. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `Small sparrows sit on a nearby fence, watching and laughing at the crow. "What a silly crow! That will take forever!" Their expressions are mocking and amused. But the crow ignores them completely, focused only on his task. He picks up another pebble. And another. Unwavering determination against mockery. Hot golden afternoon light. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${CROW} TRIUMPH! The water has risen all the way to the top of the pot! The crow dips his beak in and drinks the cool, sweet water. His expression is pure bliss — eyes closed, head tilted back, savoring every drop. "Ahhhh!" Water droplets glisten on his beak. The sparrows on the fence stare in amazed silence, their mockery silenced. Golden sunset light, victorious. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `A transcendent closing composition. ${CROW} perches proudly on the pot, refreshed and strong. Around the pot, a pile of pebbles and splashed water. The sparrows now look up at him with admiration. Above, a celestial vision shows the message: patience and a clever idea can solve the impossible. Golden divine sunset light, warm and triumphant. ${STYLE}`,
      },
    ];
  })(),

  'hanuman-brings-mountain': (() => {
    const HANUMAN_M = 'Lord Hanuman: mighty monkey deity with golden-orange fur, muscular powerful build, tail curling upward, devotional expression, wearing simple loincloth and gold arm bands, red tilak on forehead, radiating golden divine strength.';
    const RAMA_M = 'Lord Rama: blue-skinned prince, green silk garments, gold crown and jewelry, noble handsome face now stricken with grief, holding his brother\'s lifeless body, tears on his divine face.';
    const LAKSH = 'Prince Lakshmana: younger prince, unconscious, pale, lying on the battlefield, barely breathing, an ethereal dark wound from a magical weapon visible on his chest.';
    return [
      {
        filename: 'scene-0-title.png',
        prompt: `${HANUMAN_M} A majestic title composition. Hanuman flies through the starlit night sky carrying an ENTIRE MOUNTAIN on his palm above his head! The mountain is massive — covered with glowing herbs, trees, waterfalls. Hanuman's expression is fierce devotion. Below, the battlefields of Lanka. Stars and moon around him. The ultimate act of love and devotion. Dramatic night sky with golden divine light. ${STYLE}`,
      },
      {
        filename: 'scene-1.png',
        prompt: `An epic battlefield scene in Lanka. Rama's army of monkeys and bears fights demon warriors. Chaos of battle — swords clashing, arrows flying, dust and smoke. The monkey warriors are brave but battered. Demon warriors in dark armor press the attack. The great battle of the Ramayana in full fury. Dramatic sunset battlefield light, fire and smoke. ${STYLE}`,
      },
      {
        filename: 'scene-2.png',
        prompt: `${LAKSH} ${RAMA_M} The devastating moment. Lakshmana is struck by a terrible magical weapon — a dark energy bolt hits his chest. He falls to the ground, eyes rolling back. Warriors around him gasp. The magical weapon leaves an ethereal dark wound. Time seems to freeze. Dramatic battlefield, the moment of catastrophe. Dark dramatic lighting. ${STYLE}`,
      },
      {
        filename: 'scene-3.png',
        prompt: `${RAMA_M} ${LAKSH} Rama rushes to his fallen brother and cradles him in his arms. Tears stream down Rama's blue face. "Lakshmana! Wake up! Please!" The entire army goes silent — monkeys, bears, everyone frozen in grief. Lakshmana is pale and barely breathing. A devastating scene of brotherly love. Dark, emotional battlefield lighting with golden divine tears. ${STYLE}`,
      },
      {
        filename: 'scene-4.png',
        prompt: `An elderly monkey doctor (Sushena) examines Lakshmana with grave concern. He looks up at Rama and speaks urgently — above his head, a vision appears of a distant snow-capped Himalayan mountain with glowing herbs. "The Sanjeevani herb — before sunrise — or it will be too late." A clock or setting moon shows time running out. Urgent, desperate, dark dramatic atmosphere. ${STYLE}`,
      },
      {
        filename: 'scene-5.png',
        prompt: `${HANUMAN_M} Hanuman steps forward from the crowd, his face showing absolute devotion and determination. "I will go." His eyes blaze with divine fire. He closes his eyes, says "Jai Sri Ram!" His body begins to grow — larger and LARGER — muscles expanding, golden aura blazing. He crouches to leap. Everyone watches in awe. Dramatic golden divine power building. ${STYLE}`,
      },
      {
        filename: 'scene-6.png',
        prompt: `${HANUMAN_M} LAUNCH! Hanuman leaps into the sky like a golden rocket! A shockwave ripples outward. He flies over the ocean, over forests, over plains, over rivers — all a blur below him. Faster than the wind. His golden trail blazes across the night sky like a comet. The distant Himalayas appear on the horizon. Epic cosmic flight scene, dramatic night sky, golden divine speed. ${STYLE}`,
      },
      {
        filename: 'scene-7.png',
        prompt: `${HANUMAN_M} Hanuman lands on the great Dronagiri mountain. But THOUSANDS of herbs glow all across the mountainside — green, blue, white, gold — all looking similar! Hanuman searches frantically, picking up herbs, comparing them, confused. Time is running out — the moon sinks lower. He cannot identify the Sanjeevani. Frustration and urgency on his face. Glowing mountain at night. ${STYLE}`,
      },
      {
        filename: 'scene-8.png',
        prompt: `${HANUMAN_M} THE INCREDIBLE MOMENT. Hanuman's eyes blaze with divine determination. "I cannot waste time!" He digs his massive hands under the ENTIRE MOUNTAIN, roots cracking, earth splitting. With a mighty roar, he LIFTS the whole mountain onto his palm! Rocks tumble, waterfalls pour, trees sway. An impossible feat of devotion. Ultra-dramatic golden divine power, cosmic scale. ${STYLE}`,
      },
      {
        filename: 'scene-9.png',
        prompt: `${HANUMAN_M} Hanuman flies back through the starlit sky carrying the entire mountain over his head. Below, villages and cities pass. People look up in disbelief — "A mountain is flying through the sky!" Stars surround him. The mountain's glowing herbs light up the night like a flying garden of lights. Just before sunrise — the eastern horizon pinkens. Epic, breathtaking night flight. ${STYLE}`,
      },
      {
        filename: 'scene-10.png',
        prompt: `${HANUMAN_M} Hanuman lands with the mountain just as the first rays of sunrise appear. The doctor Sushena rushes to the mountain and finds the Sanjeevani herb — a special golden glowing plant. He crushes it and gives it to the unconscious ${LAKSH}. Everyone watches breathlessly. The herb touches Lakshmana's lips. Dawn light, golden hope. ${STYLE}`,
      },
      {
        filename: 'scene-11.png',
        prompt: `${LAKSH} ${RAMA_M} ${HANUMAN_M} Lakshmana's eyes flutter open! "What happened?" he mumbles. Rama sobs with joy and hugs his brother. Then Rama hugs Hanuman, tears of gratitude on his blue face. The entire army erupts in cheers — monkeys dance, bears roar with joy. Morning golden light floods the battlefield. Pure joy and relief. ${STYLE}`,
      },
      {
        filename: 'scene-12.png',
        prompt: `A transcendent closing composition. ${HANUMAN_M} stands heroically with the mountain still on his palm, silhouetted against a magnificent sunrise. ${RAMA_M} and ${LAKSH} (now healthy) stand below, hands folded in gratitude. Above, celestial beings shower flowers. The message: when someone you love needs help, don't worry about doing it perfectly — bring the whole mountain. Golden divine sunrise, epic and deeply inspiring. ${STYLE}`,
      },
    ];
  })(),
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
  const candidate = data?.candidates?.[0];
  const finishReason = candidate?.finishReason;
  const parts = candidate?.content?.parts;

  if (!parts || parts.length === 0) {
    const safetyRatings = JSON.stringify(candidate?.safetyRatings || data?.promptFeedback || 'unknown');
    const err = new Error(
      `No content in response (finishReason: ${finishReason || 'none'}, safety: ${safetyRatings.slice(0, 300)})`
    );
    (err as Error & { retryable: boolean }).retryable = true;
    throw err;
  }

  const imagePart = parts.find(
    (p: { inlineData?: { data: string; mimeType?: string } }) => p.inlineData?.data
  );
  if (!imagePart) {
    const textPart = parts.find((p: { text?: string }) => p.text);
    const err = new Error(
      `No image in parts. Model said: ${textPart?.text?.slice(0, 200) || 'nothing'}`
    );
    (err as Error & { retryable: boolean }).retryable = true;
    throw err;
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
        const retryable = (err as Error & { retryable?: boolean }).retryable;
        const isRetryable = retryable || status === 429 || status === 503 || status === 500;

        if (isRetryable && attempt < MAX_RETRIES) {
          const delay = RETRY_DELAYS[attempt];
          console.log(
            `  ${status || 'content'} error, retrying in ${delay / 1000}s (attempt ${attempt + 1}/${MAX_RETRIES})...`
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
