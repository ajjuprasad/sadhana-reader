import {
  SHUKLA_TITHIS,
  KRISHNA_TITHIS,
  NAKSHATRAS,
  YOGAS,
  VARAS,
  RAHU_KALA_SLOTS,
  YAMAGANDA_SLOTS,
  GULIKA_SLOTS,
  getKaranaForIndex,
  type TithiInfo,
  type NakshatraInfo,
  type YogaInfo,
  type KaranaInfo,
  type VaraInfo,
} from './panchangaConstants';

type AstronomyModule = typeof import('astronomy-engine');
let astro: AstronomyModule | null = null;

async function getAstronomy(): Promise<AstronomyModule> {
  if (!astro) {
    astro = await import('astronomy-engine');
  }
  return astro;
}

function getLahiriAyanamsa(date: Date): number {
  const year = date.getFullYear() + (date.getMonth() + 1) / 12;
  return 23.85 + (year - 2000) * 0.01396;
}

function normalizeDegrees(deg: number): number {
  return ((deg % 360) + 360) % 360;
}

export interface DailyPanchanga {
  date: Date;
  tithi: { info: TithiInfo; paksha: 'Shukla' | 'Krishna'; tithiIndex: number };
  nakshatra: { info: NakshatraInfo; index: number };
  yoga: { info: YogaInfo; index: number };
  karana: { info: KaranaInfo; index: number };
  vara: VaraInfo;
  sunrise: Date;
  sunset: Date;
  rahuKala: { start: Date; end: Date };
  yamaGanda: { start: Date; end: Date };
  gulikaKala: { start: Date; end: Date };
  abhijitMuhurta: { start: Date; end: Date };
  moonPhaseAngle: number;
}

function computeMuhurtaPeriod(
  sunrise: Date,
  sunset: Date,
  slot: number,
): { start: Date; end: Date } {
  const dayDuration = sunset.getTime() - sunrise.getTime();
  const muhurtaDuration = dayDuration / 8;
  const start = new Date(sunrise.getTime() + (slot - 1) * muhurtaDuration);
  const end = new Date(start.getTime() + muhurtaDuration);
  return { start, end };
}

export async function computeDailyPanchanga(
  date: Date,
  lat: number,
  lng: number,
): Promise<DailyPanchanga> {
  const A = await getAstronomy();

  const observer = new A.Observer(lat, lng, 0);

  // Find sunrise and sunset for the given date
  const dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
  const sunriseTime = A.SearchRiseSet(A.Body.Sun, observer, +1, dateStart, 1);
  const sunsetTime = A.SearchRiseSet(A.Body.Sun, observer, -1, dateStart, 1);

  if (!sunriseTime || !sunsetTime) {
    throw new Error('Could not compute sunrise/sunset for this date and location');
  }

  const sunrise = sunriseTime.date;
  const sunset = sunsetTime.date;

  // Compute Sun and Moon positions at sunrise (standard Panchanga convention)
  const sunPos = A.SunPosition(sunrise);
  const moonPos = A.EclipticGeoMoon(sunrise);

  const sunLong = sunPos.elon;
  const moonLong = moonPos.lon;

  const ayanamsa = getLahiriAyanamsa(date);
  const siderealSun = normalizeDegrees(sunLong - ayanamsa);
  const siderealMoon = normalizeDegrees(moonLong - ayanamsa);

  // Tithi: based on elongation (moon - sun)
  const elongation = normalizeDegrees(moonLong - sunLong);
  const tithiIndex = Math.floor(elongation / 12);
  const paksha: 'Shukla' | 'Krishna' = tithiIndex < 15 ? 'Shukla' : 'Krishna';
  const tithiInfo = tithiIndex < 15 ? SHUKLA_TITHIS[tithiIndex] : KRISHNA_TITHIS[tithiIndex - 15];

  // Nakshatra: based on sidereal moon longitude
  const nakshatraIndex = Math.floor(siderealMoon / (360 / 27));

  // Yoga: based on sum of sidereal sun and moon longitudes
  const yogaSum = normalizeDegrees(siderealSun + siderealMoon);
  const yogaIndex = Math.floor(yogaSum / (360 / 27));

  // Karana: half-tithi, 60 in a lunar month
  const karanaIndex = Math.floor(elongation / 6);

  // Vara
  const vara = VARAS[date.getDay()];

  // Moon phase angle
  const moonPhaseAngle = A.MoonPhase(sunrise);

  // Inauspicious periods
  const dayOfWeek = date.getDay();
  const rahuKala = computeMuhurtaPeriod(sunrise, sunset, RAHU_KALA_SLOTS[dayOfWeek]);
  const yamaGanda = computeMuhurtaPeriod(sunrise, sunset, YAMAGANDA_SLOTS[dayOfWeek]);
  const gulikaKala = computeMuhurtaPeriod(sunrise, sunset, GULIKA_SLOTS[dayOfWeek]);

  // Abhijit Muhurta: the midday muhurta (local noon ± half muhurta)
  const midday = new Date((sunrise.getTime() + sunset.getTime()) / 2);
  const dayDuration = sunset.getTime() - sunrise.getTime();
  const muhurtaDuration = dayDuration / 15; // 15 muhurtas in a day
  const abhijitMuhurta = {
    start: new Date(midday.getTime() - muhurtaDuration / 2),
    end: new Date(midday.getTime() + muhurtaDuration / 2),
  };

  return {
    date,
    tithi: { info: tithiInfo, paksha, tithiIndex },
    nakshatra: { info: NAKSHATRAS[nakshatraIndex], index: nakshatraIndex },
    yoga: { info: YOGAS[yogaIndex], index: yogaIndex },
    karana: { info: getKaranaForIndex(karanaIndex), index: karanaIndex },
    vara,
    sunrise,
    sunset,
    rahuKala,
    yamaGanda,
    gulikaKala,
    abhijitMuhurta,
    moonPhaseAngle,
  };
}
