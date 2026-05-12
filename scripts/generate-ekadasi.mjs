// Generates the 2026 Ekadasi dataset by scanning each day, computing the
// tithi at sunrise, and tagging matches with their canonical Vaishnava
// names. Handles:
//   - normal Ekadasis (tithi 10 = Shukla, tithi 25 = Krishna at sunrise)
//   - kshaya (lost) Ekadasi — tithi jumps 9→11 or 24→26 between sunrises;
//     observed on the day Dvadashi begins (ISKCON convention)
//   - Adhika (intercalary) Masa — lunar month with no Sankranti gets the
//     special Padmini (Shukla) and Parama (Krishna) Ekadasis
//
// Method: drik-siddhānta, same as ISKCON's GCal. Sunrise is computed at
// Bangalore (12.9716, 77.5946) as the reference location. Dates can
// shift ±1 day for other cities.
//
// Run: node scripts/generate-ekadasi.mjs > src/data/ekadasi2026.ts
import * as A from 'astronomy-engine';

const YEAR = 2026;
const LAT = 12.9716;
const LNG = 77.5946;

function lahiri(date) {
  const year = date.getFullYear() + (date.getMonth() + 1) / 12;
  return 23.85 + (year - 2000) * 0.01396;
}

function normalize(deg) {
  return ((deg % 360) + 360) % 360;
}

function tithiAt(t) {
  const elong = normalize(A.EclipticGeoMoon(t).lon - A.SunPosition(t).elon);
  return Math.floor(elong / 12);
}

function sunRashi(t) {
  const sun = normalize(A.SunPosition(t).elon - lahiri(t));
  return Math.floor(sun / 30);
}

// Sun-in-rashi → Amanta lunar month name (Sankranti-containment rule).
const RASHI_TO_MONTH = [
  'Chaitra',      // Mesha
  'Vaishakha',    // Vrishabha
  'Jyeshtha',     // Mithuna
  'Ashadha',      // Karka
  'Shravana',     // Simha
  'Bhadrapada',   // Kanya
  'Ashwin',       // Tula
  'Kartik',       // Vrischika
  'Margashirsha', // Dhanu
  'Pausha',       // Makara
  'Magha',        // Kumbha
  'Phalguna',     // Meena
];

const EKADASI_NAMES = {
  'Pausha-Shukla':       { name: 'Putrada',     sanskrit: 'पुत्रदा' },
  'Pausha-Krishna':      { name: 'Saphala',     sanskrit: 'सफला' },
  'Magha-Shukla':        { name: 'Jaya',        sanskrit: 'जया' },
  'Magha-Krishna':       { name: 'Shattila',    sanskrit: 'षट्तिला' },
  'Phalguna-Shukla':     { name: 'Amalaki',     sanskrit: 'आमलकी' },
  'Phalguna-Krishna':    { name: 'Vijaya',      sanskrit: 'विजया' },
  'Chaitra-Shukla':      { name: 'Kamada',      sanskrit: 'कामदा' },
  'Chaitra-Krishna':     { name: 'Papamochani', sanskrit: 'पापमोचनी' },
  'Vaishakha-Shukla':    { name: 'Mohini',      sanskrit: 'मोहिनी' },
  'Vaishakha-Krishna':   { name: 'Varuthini',   sanskrit: 'वरूथिनी' },
  'Jyeshtha-Shukla':     { name: 'Nirjala',     sanskrit: 'निर्जला' },
  'Jyeshtha-Krishna':    { name: 'Apara',       sanskrit: 'अपरा' },
  'Ashadha-Shukla':      { name: 'Devshayani',  sanskrit: 'देवशयनी' },
  'Ashadha-Krishna':     { name: 'Yogini',      sanskrit: 'योगिनी' },
  'Shravana-Shukla':     { name: 'Putrada',     sanskrit: 'पुत्रदा' },
  'Shravana-Krishna':    { name: 'Kamika',      sanskrit: 'कामिका' },
  'Bhadrapada-Shukla':   { name: 'Parsva',      sanskrit: 'पार्श्व' },
  'Bhadrapada-Krishna':  { name: 'Aja',         sanskrit: 'अजा' },
  'Ashwin-Shukla':       { name: 'Papankusha',  sanskrit: 'पापांकुशा' },
  'Ashwin-Krishna':      { name: 'Indira',      sanskrit: 'इन्दिरा' },
  'Kartik-Shukla':       { name: 'Prabodhini',  sanskrit: 'प्रबोधिनी' },
  'Kartik-Krishna':      { name: 'Rama',        sanskrit: 'रमा' },
  'Margashirsha-Shukla': { name: 'Mokshada',    sanskrit: 'मोक्षदा' },
  'Margashirsha-Krishna':{ name: 'Utpanna',     sanskrit: 'उत्पन्ना' },
  // Adhika Masa special Ekadasis (Vaishnava convention)
  'Adhika-Shukla':       { name: 'Padmini',     sanskrit: 'पद्मिनी' },
  'Adhika-Krishna':      { name: 'Parama',      sanskrit: 'परमा' },
};

const observer = new A.Observer(LAT, LNG, 0);

// Pre-pass: build a per-day sunrise + tithi + sun-rashi sequence spanning
// the year plus a buffer on either side (so we can resolve previous /
// next Amavasyas for boundary Ekadasis).
function buildDayTable(startYear, endYear) {
  const days = [];
  let d = new Date(Date.UTC(startYear, 0, 1));
  const end = new Date(Date.UTC(endYear, 11, 31));
  while (d <= end) {
    const ev = A.SearchRiseSet(A.Body.Sun, observer, +1, d, 1);
    if (ev) {
      const t = ev.date;
      days.push({
        sunrise: t,
        iso: new Date(t.getTime() + 5.5 * 3600 * 1000).toISOString().slice(0, 10),
        tithi: tithiAt(t),
        rashi: sunRashi(t),
      });
    }
    d = new Date(d.getTime() + 24 * 3600 * 1000);
  }
  return days;
}

// Lunar month = span between consecutive Amavasyas (tithi 29). Each
// month gets: { startIdx, endIdx, name } where name is determined by the
// Sun's rashi at end Amavasya; if the rashi at start == rashi at end
// AND no Sankranti happened during the month, it's an Adhika month.
function buildLunarMonths(days) {
  // Amavasya indices: first sunrise of each lunar month where tithi was 29
  // (or where it just turned over, captured by tithi=29 at sunrise).
  const amavasyas = [];
  for (let i = 0; i < days.length; i += 1) {
    if (days[i].tithi === 29) amavasyas.push(i);
  }
  const months = [];
  for (let k = 0; k < amavasyas.length - 1; k += 1) {
    const startIdx = amavasyas[k] + 1; // day after this amavasya
    const endIdx = amavasyas[k + 1];   // amavasya day ends the month
    if (startIdx > endIdx) continue;
    const startRashi = days[amavasyas[k]].rashi;
    const endRashi = days[endIdx].rashi;
    // Adhika check: a month is adhika if no rashi change happened — i.e.
    // both bounding amavasyas have the Sun in the same rashi.
    const adhika = startRashi === endRashi;
    const name = adhika ? 'Adhika' : RASHI_TO_MONTH[endRashi];
    months.push({ startIdx, endIdx, name, adhika });
  }
  return months;
}

const days = buildDayTable(YEAR - 1, YEAR + 1);
const months = buildLunarMonths(days);

const results = [];

// For each lunar month, find its Shukla Ekadasi day and Krishna Ekadasi day
// within the year. Handles kshaya by falling back to the "Dvadashi-begins"
// rule when no sunrise within the month shows tithi 10 or 25.
for (const m of months) {
  for (const pakshaTarget of ['Shukla', 'Krishna']) {
    const ekadasiTithi = pakshaTarget === 'Shukla' ? 10 : 25;
    let ekadasiIdx = -1;
    // Look for an exact match first.
    for (let i = m.startIdx; i <= m.endIdx; i += 1) {
      if (days[i].tithi === ekadasiTithi) {
        ekadasiIdx = i;
      }
    }
    // If multiple, the LAST one in the month (vridhi handling) is preferred
    // by Vaishnava tradition — the loop above already keeps the last.
    if (ekadasiIdx === -1) {
      // Kshaya: tithi was skipped between two consecutive sunrises. Find
      // the day where tithi == ekadasiTithi+1 (Dvadashi) and previous
      // day's tithi was ekadasiTithi-1 (Dashami).
      for (let i = m.startIdx + 1; i <= m.endIdx; i += 1) {
        if (days[i].tithi === ekadasiTithi + 1 && days[i - 1].tithi === ekadasiTithi - 1) {
          ekadasiIdx = i; // Vaishnava day of observance for kshaya Ekadasi
          break;
        }
      }
    }
    if (ekadasiIdx === -1) continue;
    const day = days[ekadasiIdx];
    // Filter to year 2026 only.
    if (!day.iso.startsWith(String(YEAR))) continue;
    const monthKey = m.adhika ? 'Adhika' : m.name;
    const key = `${monthKey}-${pakshaTarget}`;
    const meta = EKADASI_NAMES[key];
    if (!meta) continue;
    results.push({
      date: day.iso,
      name: meta.name,
      sanskrit: meta.sanskrit,
      month: m.name + (m.adhika ? ' (Adhika)' : ''),
      paksha: pakshaTarget,
    });
  }
}

// Sort by date.
results.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

const header = `// Generated by scripts/generate-ekadasi.mjs — do not edit by hand.
// Source: drik-siddhānta computation (same method as ISKCON GCal) with
// Lahiri ayanamsa and sunrise reference at Bangalore (12.9716, 77.5946).
// Handles kshaya / vridhi Ekadasi and Adhika Masa (Padmini & Parama).

export interface EkadasiEntry {
  date: string;
  name: string;
  sanskrit: string;
  month: string;
  paksha: 'Shukla' | 'Krishna';
}

export const ekadasi2026: EkadasiEntry[] = ${JSON.stringify(results, null, 2)};
`;
process.stdout.write(header);
