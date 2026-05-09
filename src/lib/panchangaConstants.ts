export interface TithiInfo {
  name: string;
  sanskrit: string;
  number: number;
}

export interface NakshatraInfo {
  name: string;
  sanskrit: string;
  deity: string;
}

export interface YogaInfo {
  name: string;
  sanskrit: string;
}

export interface KaranaInfo {
  name: string;
  sanskrit: string;
}

export interface VaraInfo {
  name: string;
  sanskrit: string;
  deity: string;
  planet: string;
}

export const SHUKLA_TITHIS: TithiInfo[] = [
  { name: 'Pratipada', sanskrit: 'प्रतिपदा', number: 1 },
  { name: 'Dvitiya', sanskrit: 'द्वितीया', number: 2 },
  { name: 'Tritiya', sanskrit: 'तृतीया', number: 3 },
  { name: 'Chaturthi', sanskrit: 'चतुर्थी', number: 4 },
  { name: 'Panchami', sanskrit: 'पञ्चमी', number: 5 },
  { name: 'Shashthi', sanskrit: 'षष्ठी', number: 6 },
  { name: 'Saptami', sanskrit: 'सप्तमी', number: 7 },
  { name: 'Ashtami', sanskrit: 'अष्टमी', number: 8 },
  { name: 'Navami', sanskrit: 'नवमी', number: 9 },
  { name: 'Dashami', sanskrit: 'दशमी', number: 10 },
  { name: 'Ekadashi', sanskrit: 'एकादशी', number: 11 },
  { name: 'Dvadashi', sanskrit: 'द्वादशी', number: 12 },
  { name: 'Trayodashi', sanskrit: 'त्रयोदशी', number: 13 },
  { name: 'Chaturdashi', sanskrit: 'चतुर्दशी', number: 14 },
  { name: 'Purnima', sanskrit: 'पूर्णिमा', number: 15 },
];

export const KRISHNA_TITHIS: TithiInfo[] = [
  { name: 'Pratipada', sanskrit: 'प्रतिपदा', number: 1 },
  { name: 'Dvitiya', sanskrit: 'द्वितीया', number: 2 },
  { name: 'Tritiya', sanskrit: 'तृतीया', number: 3 },
  { name: 'Chaturthi', sanskrit: 'चतुर्थी', number: 4 },
  { name: 'Panchami', sanskrit: 'पञ्चमी', number: 5 },
  { name: 'Shashthi', sanskrit: 'षष्ठी', number: 6 },
  { name: 'Saptami', sanskrit: 'सप्तमी', number: 7 },
  { name: 'Ashtami', sanskrit: 'अष्टमी', number: 8 },
  { name: 'Navami', sanskrit: 'नवमी', number: 9 },
  { name: 'Dashami', sanskrit: 'दशमी', number: 10 },
  { name: 'Ekadashi', sanskrit: 'एकादशी', number: 11 },
  { name: 'Dvadashi', sanskrit: 'द्वादशी', number: 12 },
  { name: 'Trayodashi', sanskrit: 'त्रयोदशी', number: 13 },
  { name: 'Chaturdashi', sanskrit: 'चतुर्दशी', number: 14 },
  { name: 'Amavasya', sanskrit: 'अमावस्या', number: 15 },
];

export const NAKSHATRAS: NakshatraInfo[] = [
  { name: 'Ashvini', sanskrit: 'अश्विनी', deity: 'Ashvini Kumaras' },
  { name: 'Bharani', sanskrit: 'भरणी', deity: 'Yama' },
  { name: 'Krittika', sanskrit: 'कृत्तिका', deity: 'Agni' },
  { name: 'Rohini', sanskrit: 'रोहिणी', deity: 'Brahma' },
  { name: 'Mrigashira', sanskrit: 'मृगशिरा', deity: 'Soma' },
  { name: 'Ardra', sanskrit: 'आर्द्रा', deity: 'Rudra' },
  { name: 'Punarvasu', sanskrit: 'पुनर्वसु', deity: 'Aditi' },
  { name: 'Pushya', sanskrit: 'पुष्य', deity: 'Brihaspati' },
  { name: 'Ashlesha', sanskrit: 'आश्लेषा', deity: 'Sarpa' },
  { name: 'Magha', sanskrit: 'मघा', deity: 'Pitrs' },
  { name: 'Purva Phalguni', sanskrit: 'पूर्वफाल्गुनी', deity: 'Bhaga' },
  { name: 'Uttara Phalguni', sanskrit: 'उत्तरफाल्गुनी', deity: 'Aryaman' },
  { name: 'Hasta', sanskrit: 'हस्त', deity: 'Savitar' },
  { name: 'Chitra', sanskrit: 'चित्रा', deity: 'Tvashtar' },
  { name: 'Svati', sanskrit: 'स्वाती', deity: 'Vayu' },
  { name: 'Vishakha', sanskrit: 'विशाखा', deity: 'Indra-Agni' },
  { name: 'Anuradha', sanskrit: 'अनुराधा', deity: 'Mitra' },
  { name: 'Jyeshtha', sanskrit: 'ज्येष्ठा', deity: 'Indra' },
  { name: 'Mula', sanskrit: 'मूल', deity: 'Nirriti' },
  { name: 'Purva Ashadha', sanskrit: 'पूर्वाषाढा', deity: 'Apas' },
  { name: 'Uttara Ashadha', sanskrit: 'उत्तराषाढा', deity: 'Vishve Devas' },
  { name: 'Shravana', sanskrit: 'श्रवण', deity: 'Vishnu' },
  { name: 'Dhanishtha', sanskrit: 'धनिष्ठा', deity: 'Vasus' },
  { name: 'Shatabhisha', sanskrit: 'शतभिषा', deity: 'Varuna' },
  { name: 'Purva Bhadrapada', sanskrit: 'पूर्वभाद्रपदा', deity: 'Aja Ekapada' },
  { name: 'Uttara Bhadrapada', sanskrit: 'उत्तरभाद्रपदा', deity: 'Ahir Budhnya' },
  { name: 'Revati', sanskrit: 'रेवती', deity: 'Pushan' },
];

export const YOGAS: YogaInfo[] = [
  { name: 'Vishkambha', sanskrit: 'विष्कम्भ' },
  { name: 'Priti', sanskrit: 'प्रीति' },
  { name: 'Ayushman', sanskrit: 'आयुष्मान्' },
  { name: 'Saubhagya', sanskrit: 'सौभाग्य' },
  { name: 'Shobhana', sanskrit: 'शोभन' },
  { name: 'Atiganda', sanskrit: 'अतिगण्ड' },
  { name: 'Sukarma', sanskrit: 'सुकर्मा' },
  { name: 'Dhriti', sanskrit: 'धृति' },
  { name: 'Shula', sanskrit: 'शूल' },
  { name: 'Ganda', sanskrit: 'गण्ड' },
  { name: 'Vriddhi', sanskrit: 'वृद्धि' },
  { name: 'Dhruva', sanskrit: 'ध्रुव' },
  { name: 'Vyaghata', sanskrit: 'व्याघात' },
  { name: 'Harshana', sanskrit: 'हर्षण' },
  { name: 'Vajra', sanskrit: 'वज्र' },
  { name: 'Siddhi', sanskrit: 'सिद्धि' },
  { name: 'Vyatipata', sanskrit: 'व्यतीपात' },
  { name: 'Variyan', sanskrit: 'वरीयान्' },
  { name: 'Parigha', sanskrit: 'परिघ' },
  { name: 'Shiva', sanskrit: 'शिव' },
  { name: 'Siddha', sanskrit: 'सिद्ध' },
  { name: 'Sadhya', sanskrit: 'साध्य' },
  { name: 'Shubha', sanskrit: 'शुभ' },
  { name: 'Shukla', sanskrit: 'शुक्ल' },
  { name: 'Brahma', sanskrit: 'ब्रह्म' },
  { name: 'Indra', sanskrit: 'इन्द्र' },
  { name: 'Vaidhriti', sanskrit: 'वैधृति' },
];

export const KARANAS: KaranaInfo[] = [
  { name: 'Kimstughna', sanskrit: 'किंस्तुघ्न' },
  { name: 'Bava', sanskrit: 'बव' },
  { name: 'Balava', sanskrit: 'बालव' },
  { name: 'Kaulava', sanskrit: 'कौलव' },
  { name: 'Taitila', sanskrit: 'तैतिल' },
  { name: 'Gara', sanskrit: 'गर' },
  { name: 'Vanija', sanskrit: 'वणिज' },
  { name: 'Vishti', sanskrit: 'विष्टि' },
  { name: 'Shakuni', sanskrit: 'शकुनि' },
  { name: 'Chatushpada', sanskrit: 'चतुष्पद' },
  { name: 'Nagava', sanskrit: 'नाग' },
];

export const VARAS: VaraInfo[] = [
  { name: 'Ravivara', sanskrit: 'रविवार', deity: 'Surya', planet: 'Sun' },
  { name: 'Somavara', sanskrit: 'सोमवार', deity: 'Chandra', planet: 'Moon' },
  { name: 'Mangalavara', sanskrit: 'मङ्गलवार', deity: 'Mangal', planet: 'Mars' },
  { name: 'Budhavara', sanskrit: 'बुधवार', deity: 'Budha', planet: 'Mercury' },
  { name: 'Guruvara', sanskrit: 'गुरुवार', deity: 'Brihaspati', planet: 'Jupiter' },
  { name: 'Shukravara', sanskrit: 'शुक्रवार', deity: 'Shukra', planet: 'Venus' },
  { name: 'Shanivara', sanskrit: 'शनिवार', deity: 'Shani', planet: 'Saturn' },
];

// Rahu Kala muhurta slot (0-7) indexed by day of week (0=Sun)
export const RAHU_KALA_SLOTS = [8, 2, 7, 5, 6, 4, 3];

// Yamaganda muhurta slot indexed by day of week
export const YAMAGANDA_SLOTS = [5, 4, 3, 7, 2, 1, 6];

// Gulika Kala muhurta slot indexed by day of week
export const GULIKA_SLOTS = [7, 6, 5, 4, 3, 2, 1];

export function getKaranaForIndex(karanaNumber: number): KaranaInfo {
  // 60 karanas in a lunar month. First karana is Kimstughna (index 0).
  // Karanas 2-57 cycle through Bava..Vishti (indices 1-7, repeating 8 times).
  // Last 3 are Shakuni (8), Chatushpada (9), Nagava (10).
  if (karanaNumber === 0) return KARANAS[0]; // Kimstughna
  if (karanaNumber >= 57) return KARANAS[8 + (karanaNumber - 57)]; // Shakuni, Chatushpada, Nagava
  return KARANAS[((karanaNumber - 1) % 7) + 1]; // Bava through Vishti cycling
}
