/* eslint-disable no-console */
// 6 stories: krishna, ganesha, squirrel, prahlada, dhruva, hanuman
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
