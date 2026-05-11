// Minimal highlight events used by the daily notification function. Kept
// short and date-keyed so the function bundle stays lean. Add entries as
// new festivals warrant a personalised push.
export interface Highlight {
  date: string;
  title: string;
  body: string;
  url?: string;
}

export const highlights2026: Highlight[] = [
  { date: "2026-03-04", title: "Maha Shivaratri", body: "Read the Shiva Mahimna Stotram today.", url: "/stotra/shiva-mahimna-stotram" },
  { date: "2026-03-29", title: "Rama Navami", body: "Today celebrates Lord Rama's appearance — open Sādhanā Reader.", url: "/" },
  { date: "2026-08-04", title: "Krishna Janmashtami", body: "Krishna's appearance day — read a Krishna stotra today.", url: "/" },
  { date: "2026-10-19", title: "Diwali / Lakshmi Puja", body: "Begin the day with Kanakadhara or Sri Suktam.", url: "/" },
  { date: "2026-11-21", title: "Prabodhini Ekadashi", body: "The day Lord Vishnu wakes from Yoga-nidra. A sacred Ekādaśī.", url: "/panchanga/today" },
];
