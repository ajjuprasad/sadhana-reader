import { ekadasi2026 } from './ekadasi2026';

export type EventCategory =
  | 'festival'
  | 'ekadasi'
  | 'purnima'
  | 'amavasya'
  | 'sankranti'
  | 'jayanti'
  | 'vrata';

export interface CalendarEvent {
  date: string;
  name: string;
  sanskrit?: string;
  category: EventCategory;
  description: string;
  deity?: string;
}

export interface HinduMonth {
  name: string;
  sanskrit: string;
  startDate: string;
  endDate: string;
  season: string;
}

export const hinduMonths2026: HinduMonth[] = [
  { name: 'Magha', sanskrit: 'माघ', startDate: '2026-01-14', endDate: '2026-02-01', season: 'Shishira (Late Winter)' },
  { name: 'Phalguna', sanskrit: 'फाल्गुन', startDate: '2026-02-02', endDate: '2026-03-03', season: 'Shishira (Late Winter)' },
  { name: 'Chaitra', sanskrit: 'चैत्र', startDate: '2026-03-04', endDate: '2026-04-02', season: 'Vasanta (Spring)' },
  { name: 'Vaishakha', sanskrit: 'वैशाख', startDate: '2026-04-03', endDate: '2026-05-01', season: 'Vasanta (Spring)' },
  { name: 'Jyeshtha', sanskrit: 'ज्येष्ठ', startDate: '2026-05-02', endDate: '2026-05-31', season: 'Grishma (Summer)' },
  { name: 'Ashadha', sanskrit: 'आषाढ', startDate: '2026-06-01', endDate: '2026-06-29', season: 'Grishma (Summer)' },
  { name: 'Shravana', sanskrit: 'श्रावण', startDate: '2026-06-30', endDate: '2026-07-29', season: 'Varsha (Monsoon)' },
  { name: 'Bhadrapada', sanskrit: 'भाद्रपद', startDate: '2026-07-30', endDate: '2026-08-28', season: 'Varsha (Monsoon)' },
  { name: 'Ashwin', sanskrit: 'आश्विन', startDate: '2026-08-29', endDate: '2026-09-26', season: 'Sharad (Autumn)' },
  { name: 'Kartik', sanskrit: 'कार्तिक', startDate: '2026-09-27', endDate: '2026-10-26', season: 'Sharad (Autumn)' },
  { name: 'Margashirsha', sanskrit: 'मार्गशीर्ष', startDate: '2026-10-27', endDate: '2026-11-24', season: 'Hemanta (Winter)' },
  { name: 'Pausha', sanskrit: 'पौष', startDate: '2026-11-25', endDate: '2026-12-24', season: 'Hemanta (Winter)' },
];

export const calendarEvents2026: CalendarEvent[] = [
  // ─── January 2026 ───
  {
    date: '2026-01-13',
    name: 'Lohri',
    category: 'festival',
    description: 'Harvest bonfire festival celebrated predominantly in Punjab, marking the end of winter solstice.',
  },
  {
    date: '2026-01-14',
    name: 'Makar Sankranti / Pongal',
    sanskrit: 'मकर सङ्क्रान्ति',
    category: 'sankranti',
    description: 'The sun enters Makara (Capricorn). Marks the northward journey (Uttarayana). Celebrated as Pongal in the South.',
    deity: 'Surya',
  },
  // ─── February 2026 ───
  {
    date: '2026-02-01',
    name: 'Magha Purnima',
    sanskrit: 'माघ पूर्णिमा',
    category: 'purnima',
    description: 'Full moon of Magha. One of the holiest days for sacred river bathing and charity.',
  },
  {
    date: '2026-02-15',
    name: 'Maha Shivaratri',
    sanskrit: 'महाशिवरात्रि',
    category: 'festival',
    description: 'The great night of Lord Shiva. Devotees observe all-night vigil with fasting, abhisheka, and chanting of Om Namah Shivaya.',
    deity: 'Shiva',
  },
  // ─── March 2026 ───
  {
    date: '2026-03-03',
    name: 'Phalguna Purnima',
    sanskrit: 'फाल्गुन पूर्णिमा',
    category: 'purnima',
    description: 'Full moon of Phalguna. Holika Dahan is performed on this night.',
  },
  {
    date: '2026-03-04',
    name: 'Holi',
    sanskrit: 'होली',
    category: 'festival',
    description: 'The festival of colors celebrating the triumph of good over evil and the arrival of spring.',
    deity: 'Krishna',
  },
  {
    date: '2026-03-19',
    name: 'Ugadi / Gudi Padwa',
    sanskrit: 'युगादि',
    category: 'festival',
    description: 'Hindu New Year (Chaitra Shukla Pratipada). Beginning of a new Samvatsara. Celebrated across South and West India.',
    deity: 'Brahma',
  },
  {
    date: '2026-03-19',
    name: 'Chaitra Navratri Begins',
    sanskrit: 'चैत्र नवरात्रि',
    category: 'festival',
    description: 'Nine nights of worship dedicated to the nine forms of Goddess Durga in the month of Chaitra.',
    deity: 'Durga',
  },
  {
    date: '2026-03-26',
    name: 'Ram Navami',
    sanskrit: 'रामनवमी',
    category: 'jayanti',
    description: 'Celebration of the birth of Lord Rama on Chaitra Shukla Navami. Culmination of Chaitra Navratri.',
    deity: 'Rama',
  },
  // ─── April 2026 ───
  {
    date: '2026-04-02',
    name: 'Chaitra Purnima',
    sanskrit: 'चैत्र पूर्णिमा',
    category: 'purnima',
    description: 'Full moon of Chaitra. Celebrated as Hanuman Jayanti in many traditions.',
  },
  {
    date: '2026-04-02',
    name: 'Hanuman Jayanti',
    sanskrit: 'हनुमान् जयन्ती',
    category: 'jayanti',
    description: 'Birth anniversary of Lord Hanuman. Devotees recite Hanuman Chalisa and Sundara Kanda.',
    deity: 'Hanuman',
  },
  {
    date: '2026-04-14',
    name: 'Mesha Sankranti / Baisakhi',
    sanskrit: 'मेष सङ्क्रान्ति',
    category: 'sankranti',
    description: 'The sun enters Mesha (Aries). Celebrated as Vishu in Kerala, Puthandu in Tamil Nadu, and Baisakhi in Punjab.',
    deity: 'Surya',
  },
  {
    date: '2026-04-19',
    name: 'Akshaya Tritiya',
    sanskrit: 'अक्षय तृतीया',
    category: 'festival',
    description: 'One of the most auspicious days. Any good deed, donation, or spiritual practice done today yields imperishable merit.',
    deity: 'Vishnu',
  },
  // ─── May 2026 ───
  {
    date: '2026-05-01',
    name: 'Vaishakha Purnima',
    sanskrit: 'वैशाख पूर्णिमा',
    category: 'purnima',
    description: 'Full moon of Vaishakha. Also observed as Buddha Purnima and Narasimha Jayanti.',
  },
  // ─── June 2026 ───
  {
    date: '2026-06-29',
    name: 'Jyeshtha Purnima',
    sanskrit: 'ज्येष्ठ पूर्णिमा',
    category: 'purnima',
    description: 'Full moon of Jyeshtha. Observed as Vat Savitri Vrat by married women for the well-being of their husbands.',
  },
  // ─── July 2026 ───
  {
    date: '2026-07-16',
    name: 'Jagannath Rath Yatra',
    sanskrit: 'रथयात्रा',
    category: 'festival',
    description: 'Grand chariot procession of Lord Jagannath, Balabhadra, and Subhadra in Puri on Ashadha Shukla Dwitiya.',
    deity: 'Jagannath',
  },
  {
    date: '2026-07-29',
    name: 'Guru Purnima',
    sanskrit: 'गुरु पूर्णिमा',
    category: 'festival',
    description: 'Sacred day honoring Vyasa and the Guru lineage. Devotees express gratitude to their spiritual teachers.',
    deity: 'Vyasa',
  },
  // ─── August 2026 ───
  {
    date: '2026-08-28',
    name: 'Raksha Bandhan',
    sanskrit: 'रक्षाबन्धन',
    category: 'festival',
    description: 'Sisters tie a sacred thread on brothers\' wrists, symbolizing love and protection. Falls on Shravana Purnima.',
  },
  // ─── September 2026 ───
  {
    date: '2026-09-04',
    name: 'Krishna Janmashtami',
    sanskrit: 'कृष्ण जन्माष्टमी',
    category: 'jayanti',
    description: 'Birth of Lord Krishna at midnight on Bhadrapada Krishna Ashtami. Night-long celebration with bhajans and abhisheka.',
    deity: 'Krishna',
  },
  // ─── October 2026 ───
  {
    date: '2026-10-11',
    name: 'Sharad Navratri Begins',
    sanskrit: 'शारदीय नवरात्रि',
    category: 'festival',
    description: 'The great nine nights of autumn. Worship of the nine forms of Goddess Durga from Ashwin Shukla Pratipada.',
    deity: 'Durga',
  },
  {
    date: '2026-10-19',
    name: 'Durga Ashtami / Maha Navami',
    sanskrit: 'दुर्गाष्टमी',
    category: 'festival',
    description: 'Eighth and ninth days of Navratri. Maha Ashtami and Sandhi Puja — the most powerful days of the nine nights.',
    deity: 'Durga',
  },
  {
    date: '2026-10-20',
    name: 'Vijayadashami / Dussehra',
    sanskrit: 'विजयादशमी',
    category: 'festival',
    description: 'Victory of Rama over Ravana and Durga over Mahishasura. Triumph of dharma over adharma.',
    deity: 'Rama',
  },
  {
    date: '2026-10-26',
    name: 'Sharad Purnima',
    sanskrit: 'शरद पूर्णिमा',
    category: 'purnima',
    description: 'Full moon of Ashwin. The brightest moon of the year. Krishna performed the Maha Raas on this night.',
    deity: 'Krishna',
  },
  {
    date: '2026-10-29',
    name: 'Karwa Chauth',
    sanskrit: 'करवा चौथ',
    category: 'vrata',
    description: 'Married women fast from sunrise to moonrise for the longevity of their husbands on Kartik Krishna Chaturthi.',
  },
  // ─── November 2026 ───
  {
    date: '2026-11-08',
    name: 'Diwali',
    sanskrit: 'दीपावली',
    category: 'festival',
    description: 'The festival of lights. Lakshmi Puja on Amavasya night. Celebrates Rama\'s return to Ayodhya and the triumph of light over darkness.',
    deity: 'Lakshmi',
  },
  {
    date: '2026-11-10',
    name: 'Govardhan Puja',
    sanskrit: 'गोवर्धन पूजा',
    category: 'festival',
    description: 'Annakut celebration honoring Krishna\'s lifting of Govardhan Hill to protect Vrindavan from Indra\'s wrath.',
    deity: 'Krishna',
  },
  {
    date: '2026-11-11',
    name: 'Bhai Dooj',
    sanskrit: 'भाई दूज',
    category: 'festival',
    description: 'Brothers and sisters celebrate their bond. Sisters pray for their brothers\' long life.',
  },
  {
    date: '2026-11-15',
    name: 'Chhath Puja',
    sanskrit: 'छठ पूजा',
    category: 'festival',
    description: 'Ancient Vedic festival dedicated to the Sun God and Chhathi Maiya. Devotees offer arghya to the rising and setting sun.',
    deity: 'Surya',
  },
  {
    date: '2026-11-24',
    name: 'Kartik Purnima',
    sanskrit: 'कार्तिक पूर्णिमा',
    category: 'purnima',
    description: 'Full moon of Kartik. Also Dev Diwali — the Diwali of the gods. Celebrated in Varanasi with countless lamps on the ghats.',
  },
  // ─── December 2026 ───
];

// Computed Ekadasi entries from drik-siddhānta calculation (ISKCON GCal
// method). See scripts/generate-ekadasi.mjs for the source.
const ekadasiEvents: CalendarEvent[] = ekadasi2026.map((e) => ({
  date: e.date,
  name: `${e.name} Ekādaśī`,
  sanskrit: `${e.sanskrit} एकादशी`,
  category: 'ekadasi',
  description: `${e.paksha} pakṣa Ekādaśī of ${e.month} — a sacred fast day for Vaiṣṇavas, devoted to Lord Viṣṇu.`,
}));

export const allCalendarEvents2026: CalendarEvent[] = [
  ...calendarEvents2026,
  ...ekadasiEvents,
].sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
