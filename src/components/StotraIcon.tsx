const s = { stroke: 'currentColor', fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export default function StotraIcon({ stotraId }: { stotraId: string }) {
  switch (stotraId) {
    case 'hanuman-chalisa':
      // Gada (mace) — Hanuman's iconic weapon
      return (
        <>
          <circle cx="16" cy="7" r="4.5" {...s} strokeWidth="1.6" />
          <path d="M12.5 4.5 L19.5 9.5 M19.5 4.5 L12.5 9.5" {...s} strokeWidth="1" />
          <line x1="16" y1="11.5" x2="16" y2="29" {...s} strokeWidth="2.2" />
          <path d="M13.5 26 L18.5 26" {...s} strokeWidth="1.4" />
        </>
      );

    case 'ganesha-pancharatnam':
      // Ganesha — refined face with ornamental ears, crown, curved trunk
      return (
        <>
          <path d="M9 16 Q9 4 16 3 Q23 4 23 16" {...s} strokeWidth="1.6" />
          <path d="M9 10 Q4 6 4 12 Q4 16 9 15" {...s} strokeWidth="1.5" />
          <path d="M23 10 Q28 6 28 12 Q28 16 23 15" {...s} strokeWidth="1.5" />
          <path d="M12 4 L14 1.5 L16 3.5 L18 1.5 L20 4" {...s} strokeWidth="1.1" />
          <path d="M12 10 Q13.5 9 15 10" {...s} strokeWidth="1" />
          <path d="M17 10 Q18.5 9 20 10" {...s} strokeWidth="1" />
          <path d="M16 16 C16 19 13 22 11 25 C10 27 9 28 8 29" {...s} strokeWidth="1.8" />
          <path d="M19 15 C20 17 21 19 22 20" {...s} strokeWidth="1.3" />
        </>
      );

    case 'shiva-panchakshara':
      // Trishul (trident) — Shiva's weapon
      return (
        <>
          <line x1="16" y1="3" x2="16" y2="29" {...s} strokeWidth="2" />
          <path d="M16 10 Q10 8 8 3" {...s} strokeWidth="1.8" />
          <path d="M16 10 Q22 8 24 3" {...s} strokeWidth="1.8" />
          <path d="M14.5 5 L16 2 L17.5 5" {...s} strokeWidth="1.2" />
          <path d="M12 13 L20 13" {...s} strokeWidth="1.4" />
        </>
      );

    case 'mahalakshmi-ashtakam':
      // Lotus (padma) — side-view blooming lotus
      return (
        <>
          <path d="M16 16 C14 10 14 6 16 2 C18 6 18 10 16 16" {...s} strokeWidth="1.4" />
          <path d="M16 16 C12 12 8 10 4 10 C8 14 12 15 16 16" {...s} strokeWidth="1.3" />
          <path d="M16 16 C13 11 10 7 7 5 C9 9 12 13 16 16" {...s} strokeWidth="1.2" />
          <path d="M16 16 C20 12 24 10 28 10 C24 14 20 15 16 16" {...s} strokeWidth="1.3" />
          <path d="M16 16 C19 11 22 7 25 5 C23 9 20 13 16 16" {...s} strokeWidth="1.2" />
          <path d="M6 18 C9 16 13 16 16 17 C19 16 23 16 26 18" {...s} strokeWidth="1.2" />
          <path d="M16 17 C16 21 15 25 14 29" {...s} strokeWidth="1.4" />
        </>
      );

    case 'kanakadhara-stotram':
      // Golden coins — Kanakadhara (shower of gold)
      return (
        <>
          <ellipse cx="16" cy="22" rx="8" ry="3" {...s} strokeWidth="1.5" />
          <ellipse cx="16" cy="19" rx="8" ry="3" {...s} strokeWidth="1.3" />
          <path d="M8 19 L8 22 M24 19 L24 22" {...s} strokeWidth="1.3" />
          <circle cx="10" cy="10" r="2.5" {...s} strokeWidth="1.2" />
          <circle cx="16" cy="7" r="2.5" {...s} strokeWidth="1.2" />
          <circle cx="22" cy="11" r="2.5" {...s} strokeWidth="1.2" />
          <path d="M10 13 L12 16 M16 10 L16 16 M22 14 L20 16" {...s} strokeWidth="1" />
        </>
      );

    case 'lingashtakam':
      // Shiva Lingam on yoni base
      return (
        <>
          <path d="M11 22 Q11 6 16 4 Q21 6 21 22" {...s} strokeWidth="1.8" />
          <ellipse cx="16" cy="22" rx="10" ry="3" {...s} strokeWidth="1.6" />
          <path d="M6 25 Q6 28 16 28 Q26 28 26 25" {...s} strokeWidth="1.4" />
          <path d="M16 4 Q17 2.5 16 1.5" {...s} strokeWidth="1" />
        </>
      );

    case 'madhurashtakam':
      // Krishna's bansuri (flute) with peacock feather
      return (
        <>
          <line x1="5" y1="18" x2="27" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="10" cy="17.1" r="1" stroke="none" fill="currentColor" opacity="0.5" />
          <circle cx="14" cy="16.4" r="1" stroke="none" fill="currentColor" opacity="0.5" />
          <circle cx="18" cy="15.6" r="1" stroke="none" fill="currentColor" opacity="0.5" />
          <circle cx="22" cy="14.9" r="1" stroke="none" fill="currentColor" opacity="0.5" />
          <path d="M24 13 Q22 7 20 4" {...s} strokeWidth="1.2" />
          <ellipse cx="20.5" cy="6" rx="2" ry="3" {...s} strokeWidth="1" transform="rotate(-15 20.5 6)" />
          <circle cx="20.5" cy="6" r="1" stroke="none" fill="currentColor" />
        </>
      );

    case 'vishnu-sahasranamam':
      // Vishnu's Sudarshana Chakra (discus)
      return (
        <>
          <circle cx="16" cy="16" r="10" {...s} strokeWidth="1.6" />
          <circle cx="16" cy="16" r="6" {...s} strokeWidth="1.2" />
          <circle cx="16" cy="16" r="2" stroke="none" fill="currentColor" />
          {/* Spokes */}
          <line x1="16" y1="6" x2="16" y2="10" {...s} strokeWidth="1.2" />
          <line x1="16" y1="22" x2="16" y2="26" {...s} strokeWidth="1.2" />
          <line x1="6" y1="16" x2="10" y2="16" {...s} strokeWidth="1.2" />
          <line x1="22" y1="16" x2="26" y2="16" {...s} strokeWidth="1.2" />
          <line x1="8.9" y1="8.9" x2="11.8" y2="11.8" {...s} strokeWidth="1.1" />
          <line x1="20.2" y1="20.2" x2="23.1" y2="23.1" {...s} strokeWidth="1.1" />
          <line x1="23.1" y1="8.9" x2="20.2" y2="11.8" {...s} strokeWidth="1.1" />
          <line x1="8.9" y1="23.1" x2="11.8" y2="20.2" {...s} strokeWidth="1.1" />
        </>
      );

    case 'venkateswara-suprabhatam':
      // Rising sun — the auspicious dawn that opens the suprabhatam
      return (
        <>
          {/* Sun disc */}
          <circle cx="16" cy="17" r="5" {...s} strokeWidth="1.6" />
          {/* Eight rays radiating outward */}
          <line x1="16" y1="5" x2="16" y2="8.5" {...s} strokeWidth="1.4" />
          <line x1="4" y1="17" x2="7.5" y2="17" {...s} strokeWidth="1.4" />
          <line x1="24.5" y1="17" x2="28" y2="17" {...s} strokeWidth="1.4" />
          <line x1="7.5" y1="8.5" x2="10" y2="11" {...s} strokeWidth="1.2" />
          <line x1="22" y1="11" x2="24.5" y2="8.5" {...s} strokeWidth="1.2" />
          <line x1="7.5" y1="25.5" x2="10" y2="23" {...s} strokeWidth="1.2" />
          <line x1="22" y1="23" x2="24.5" y2="25.5" {...s} strokeWidth="1.2" />
          {/* Horizon line */}
          <line x1="3" y1="28" x2="29" y2="28" {...s} strokeWidth="1.6" />
        </>
      );

    case 'aditya-hridaya-stotram':
      // Radiant sun — Surya with twelve rays for the twelve Adityas
      return (
        <>
          <circle cx="16" cy="16" r="5.5" {...s} strokeWidth="1.8" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 16 + 8 * Math.cos(angle);
            const y1 = 16 - 8 * Math.sin(angle);
            const x2 = 16 + 12 * Math.cos(angle);
            const y2 = 16 - 12 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} {...s} strokeWidth="1.3" />;
          })}
        </>
      );

    case 'bhaja-govindam':
      // Shankha (conch) — symbol of Govinda / Vishnu
      return (
        <>
          <path d="M18 4 Q24 6 24 14 Q24 20 20 24 Q18 26 16 28" {...s} strokeWidth="1.6" />
          <path d="M18 4 Q12 6 10 12 Q9 18 12 22 Q14 25 16 28" {...s} strokeWidth="1.6" />
          <path d="M11 14 Q13 12 15 14" {...s} strokeWidth="1" />
          <path d="M15 14 Q17 12 19 14" {...s} strokeWidth="1" />
          <path d="M11 18 Q14 16 17 18" {...s} strokeWidth="1" />
          <ellipse cx="17" cy="4" rx="2" ry="1.5" {...s} strokeWidth="1.2" />
        </>
      );

    case 'subrahmanya-bhujangam':
      // Vel (divine lance) — Lord Murugan's iconic weapon
      return (
        <>
          <path d="M16 3 L12 10 L16 8 L20 10 Z" {...s} strokeWidth="1.5" fill="currentColor" opacity="0.3" />
          <path d="M16 3 L12 10 L16 8 L20 10 Z" {...s} strokeWidth="1.5" />
          <line x1="16" y1="8" x2="16" y2="29" {...s} strokeWidth="2" />
          <path d="M14.5 27 L17.5 27" {...s} strokeWidth="1.4" />
        </>
      );

    case 'shiva-ashtottara':
      // Damaru (Shiva's drum)
      return (
        <>
          <path d="M8 5 L24 5 L16 16 Z" {...s} strokeWidth="1.5" />
          <path d="M8 27 L24 27 L16 16 Z" {...s} strokeWidth="1.5" />
          <ellipse cx="16" cy="16" rx="3" ry="1.5" {...s} strokeWidth="1.2" />
          <line x1="8" y1="5" x2="24" y2="5" {...s} strokeWidth="1.8" />
          <line x1="8" y1="27" x2="24" y2="27" {...s} strokeWidth="1.8" />
        </>
      );

    case 'saraswati-stotram':
      // Veena — Saraswati's iconic instrument
      return (
        <>
          <ellipse cx="9" cy="24" rx="5" ry="4" {...s} strokeWidth="1.5" />
          <ellipse cx="23" cy="8" rx="3.5" ry="2.5" {...s} strokeWidth="1.3" />
          <line x1="13.5" y1="21.5" x2="26" y2="6.5" {...s} strokeWidth="2" />
          <line x1="11" y1="20" x2="24" y2="5" {...s} strokeWidth="1" />
          <path d="M14 18 L15 16 M17 15 L18 13 M20 12 L21 10" {...s} strokeWidth="1" />
        </>
      );

    case 'ram-raksha-stotra':
      // Kodanda (bow) — Rama's iconic weapon
      return (
        <>
          <path d="M8 27 Q4 16 8 5" {...s} strokeWidth="2" />
          <line x1="8" y1="5" x2="8" y2="27" {...s} strokeWidth="1" />
          <line x1="8" y1="16" x2="26" y2="6" {...s} strokeWidth="1.4" />
          <path d="M24 6 L27 5 L25 8" {...s} strokeWidth="1.2" />
        </>
      );

    case 'mahishasura-mardini-stotram':
      // Trishul with crescent — Durga's weapon
      return (
        <>
          <line x1="16" y1="5" x2="16" y2="29" {...s} strokeWidth="2" />
          <path d="M16 12 Q9 9 7 4" {...s} strokeWidth="1.7" />
          <path d="M16 12 Q23 9 25 4" {...s} strokeWidth="1.7" />
          <path d="M14.5 7 L16 3.5 L17.5 7" {...s} strokeWidth="1.2" />
          <path d="M11 14 Q13.5 16 16 14 Q18.5 16 21 14" {...s} strokeWidth="1.2" />
        </>
      );

    default:
      return <circle cx="16" cy="16" r="8" {...s} strokeWidth="1.5" />;
  }
}
