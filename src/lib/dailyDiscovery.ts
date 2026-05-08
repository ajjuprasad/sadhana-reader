import { stotras, type Stotra } from '../data/stotras';
import { stories, type Story } from '../data/stories';
import { reflections, type Reflection } from '../data/reflections';
import { calendarEvents2026, hinduMonths2026, type CalendarEvent, type HinduMonth } from '../data/calendar2026';

const VARA_DEITIES: Record<number, string[]> = {
  0: ['Surya'],
  1: ['Shiva', 'Parvati', 'Kalabhairava'],
  2: ['Hanuman', 'Ganesha', 'Subramanya', 'Subrahmanya'],
  3: ['Vishnu', 'Krishna', 'Govinda', 'Venkateswara'],
  4: ['Guru', 'Vishnu', 'Krishna', 'Shankaracharya'],
  5: ['Lakshmi', 'Durga', 'Saraswati', 'Ashtalakshmi', 'Annapurna', 'Rajarajeshwari', 'Lalita Tripurasundari', 'Kamakshi', 'Meenakshi', 'Matangi'],
  6: ['Shani', 'Hanuman', 'Navagraha'],
};

const VARA_NAMES: Record<number, string> = {
  0: 'Ravivāra · Sun day',
  1: 'Somavāra · Moon day',
  2: 'Maṅgalavāra · Mars day',
  3: 'Budhavāra · Mercury day',
  4: 'Guruvāra · Jupiter day',
  5: 'Śukravāra · Venus day',
  6: 'Śanivāra · Saturn day',
};

function dayNumber(date: Date): number {
  return Math.floor(date.getTime() / 86400000);
}

function todayKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getTodayEvent(date: Date): CalendarEvent | undefined {
  const key = todayKey(date);
  return calendarEvents2026.find((e) => e.date === key);
}

export function getStotraOfTheDay(date: Date): Stotra {
  const event = getTodayEvent(date);

  if (event?.deity) {
    const deityMatch = stotras.filter((s) => s.deity === event.deity);
    if (deityMatch.length > 0) {
      return deityMatch[dayNumber(date) % deityMatch.length];
    }
  }

  const varaDeities = VARA_DEITIES[date.getDay()];
  const matching = stotras.filter((s) => varaDeities.includes(s.deity));

  if (matching.length > 0) {
    const weekNum = Math.floor(dayNumber(date) / 7);
    return matching[weekNum % matching.length];
  }

  return stotras[dayNumber(date) % stotras.length];
}

export function getStoryOfTheDay(date: Date): Story {
  const dn = dayNumber(date);
  const weekNum = Math.floor(dn / 7);
  return stories[(dn + weekNum * 3) % stories.length];
}

export function getReflectionOfTheDay(date: Date): Reflection {
  return reflections[dayNumber(date) % reflections.length];
}

export interface PanchangaSnapshot {
  hinduMonth: HinduMonth | null;
  todayEvent: CalendarEvent | undefined;
  upcoming: Array<CalendarEvent & { daysUntil: number }>;
  varaName: string;
}

export function getPanchangaSnapshot(date: Date): PanchangaSnapshot {
  const key = todayKey(date);

  const hinduMonth = hinduMonths2026.find((m) => key >= m.startDate && key <= m.endDate) ?? null;
  const todayEvent = getTodayEvent(date);

  const upcoming: Array<CalendarEvent & { daysUntil: number }> = [];
  for (const event of calendarEvents2026) {
    if (event.date <= key) continue;
    const eventDate = new Date(event.date + 'T00:00:00');
    const diff = Math.ceil((eventDate.getTime() - date.getTime()) / 86400000);
    if (diff > 0 && diff <= 30) {
      upcoming.push({ ...event, daysUntil: diff });
    }
    if (upcoming.length >= 3) break;
  }

  return {
    hinduMonth,
    todayEvent,
    upcoming,
    varaName: VARA_NAMES[date.getDay()],
  };
}

export function getTimeGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Śubha Prabhātam';
  if (hour < 17) return 'Namasté';
  return 'Śubha Sandhyā';
}
