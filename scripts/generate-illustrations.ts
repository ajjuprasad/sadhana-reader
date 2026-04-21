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
