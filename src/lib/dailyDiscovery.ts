import { stotras, type Stotra } from '../data/stotras';
import { stories, type Story } from '../data/stories';
import { reflections, type Reflection } from '../data/reflections';
import { allCalendarEvents2026, hinduMonths2026, type CalendarEvent, type HinduMonth } from '../data/calendar2026';
import type { PanchangaSystem } from '../hooks/useSettings';

// The hinduMonths2026 table uses Purnimanta boundaries (each entry ends at
// that month's Purnima). In Amanta convention, the month name shifts back
// by one during the Krishna paksha portion of a Purnimanta entry — which
// is approximately the first 15 days of the entry's date range.
export function resolveHinduMonth(
  date: Date,
  system: PanchangaSystem = 'purnimanta',
): HinduMonth | null {
  const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const idx = hinduMonths2026.findIndex((m) => key >= m.startDate && key <= m.endDate);
  if (idx === -1) return null;
  if (system === 'amanta' && idx > 0) {
    const start = new Date(hinduMonths2026[idx].startDate + 'T00:00:00');
    const dayInMonth = Math.floor((date.getTime() - start.getTime()) / 86_400_000) + 1;
    if (dayInMonth <= 15) return hinduMonths2026[idx - 1];
  }
  return hinduMonths2026[idx];
}

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
  return allCalendarEvents2026.find((e) => e.date === key);
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

export function getPanchangaSnapshot(
  date: Date,
  system: PanchangaSystem = 'purnimanta',
): PanchangaSnapshot {
  const key = todayKey(date);

  const hinduMonth = resolveHinduMonth(date, system);
  const todayEvent = getTodayEvent(date);

  const upcoming: Array<CalendarEvent & { daysUntil: number }> = [];
  for (const event of allCalendarEvents2026) {
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
