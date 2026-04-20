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
    case 'sankata-nashana-ganesha-stotram':
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
    case 'subramanya-ashtakam':
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

    case 'indrakshi-stotram':
    case 'mahishasura-mardini-stotram':
    case 'siddha-kunjika-stotram':
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

    case 'ashtalakshmi-stotram':
      // Kalasha (sacred pot) — symbol of abundance and Lakshmi
      return (
        <>
          <path d="M10 14 Q10 24 16 27 Q22 24 22 14" {...s} strokeWidth="1.6" />
          <ellipse cx="16" cy="14" rx="6" ry="2" {...s} strokeWidth="1.4" />
          <path d="M12 14 Q12 10 16 8 Q20 10 20 14" {...s} strokeWidth="1.3" />
          <path d="M16 8 C16 5 14 3 16 2 C18 3 16 5 16 8" {...s} strokeWidth="1" />
          <path d="M13 5 Q16 7 19 5" {...s} strokeWidth="1" />
        </>
      );

    case 'achyutashtakam':
      // Jeweled crown (Ratnamauli) — Krishna's divine ornament
      return (
        <>
          <path d="M8 20 Q8 12 12 8 L16 4 L20 8 Q24 12 24 20" {...s} strokeWidth="1.6" />
          <line x1="8" y1="20" x2="24" y2="20" {...s} strokeWidth="1.8" />
          <path d="M16 4 L14 8 M16 4 L18 8" {...s} strokeWidth="1" />
          <circle cx="16" cy="10" r="1.5" {...s} strokeWidth="1" />
          <circle cx="12" cy="14" r="1" {...s} strokeWidth="0.8" />
          <circle cx="20" cy="14" r="1" {...s} strokeWidth="0.8" />
          <path d="M6 22 Q16 26 26 22" {...s} strokeWidth="1.4" />
        </>
      );

    case 'narasimha-karavalamba-stotram':
      // Pillar splitting — Narasimha emerging from the pillar
      return (
        <>
          <path d="M12 4 L12 28" {...s} strokeWidth="2.2" />
          <path d="M20 4 L20 28" {...s} strokeWidth="2.2" />
          <path d="M12 16 Q14 13 16 16 Q18 13 20 16" {...s} strokeWidth="1.4" />
          <path d="M12 10 L20 10" {...s} strokeWidth="1.2" />
          <path d="M12 22 L20 22" {...s} strokeWidth="1.2" />
          <circle cx="16" cy="16" r="2" {...s} strokeWidth="1.2" />
        </>
      );

    case 'shiva-tandava-stotram':
      return (
        <>
          <path d="M16 4 L16 12" {...s} strokeWidth="1.8" />
          <circle cx="16" cy="16" r="6" {...s} strokeWidth="1.4" />
          <path d="M10 16 Q13 10 16 16 Q19 22 22 16" {...s} strokeWidth="1.2" />
          <path d="M10 10 L10 22" {...s} strokeWidth="1" />
          <path d="M22 10 L22 22" {...s} strokeWidth="1" />
          <path d="M13 26 L19 26" {...s} strokeWidth="1.2" />
        </>
      );

    case 'annapoorna-ashtakam':
      return (
        <>
          <path d="M10 20 Q10 12 16 10 Q22 12 22 20" {...s} strokeWidth="1.4" />
          <path d="M8 20 L24 20" {...s} strokeWidth="1.6" />
          <path d="M16 10 L16 6" {...s} strokeWidth="1.2" />
          <path d="M13 7 Q16 4 19 7" {...s} strokeWidth="1.2" />
          <path d="M12 24 L20 24" {...s} strokeWidth="1.2" />
          <circle cx="16" cy="16" r="1.5" {...s} strokeWidth="1" />
        </>
      );

    case 'kalabhairava-ashtakam':
      return (
        <>
          <circle cx="16" cy="10" r="4" {...s} strokeWidth="1.4" />
          <path d="M12 10 L10 8" {...s} strokeWidth="1" />
          <path d="M20 10 L22 8" {...s} strokeWidth="1" />
          <circle cx="14.5" cy="9.5" r="0.6" {...s} strokeWidth="0.8" />
          <circle cx="17.5" cy="9.5" r="0.6" {...s} strokeWidth="0.8" />
          <path d="M16 14 L16 20" {...s} strokeWidth="1.4" />
          <path d="M12 17 L20 17" {...s} strokeWidth="1" />
          <path d="M14 22 Q16 26 18 22" {...s} strokeWidth="1.2" />
        </>
      );

    case 'nirvana-shatakam':
      return (
        <>
          <circle cx="16" cy="16" r="8" {...s} strokeWidth="1" />
          <circle cx="16" cy="16" r="5.5" {...s} strokeWidth="0.8" />
          <circle cx="16" cy="16" r="3" {...s} strokeWidth="0.8" />
          <circle cx="16" cy="16" r="1" {...s} strokeWidth="1" />
        </>
      );

    case 'sudarshana-ashtakam':
      return (
        <>
          <circle cx="16" cy="16" r="7" {...s} strokeWidth="1.2" />
          <circle cx="16" cy="16" r="3.5" {...s} strokeWidth="1" />
          <circle cx="16" cy="16" r="1.2" stroke="none" fill="currentColor" />
          {/* Flame points */}
          <path d="M16 4 L17.2 8.5 L14.8 8.5Z" fill="currentColor" />
          <path d="M16 28 L17.2 23.5 L14.8 23.5Z" fill="currentColor" />
          <path d="M4 16 L8.5 14.8 L8.5 17.2Z" fill="currentColor" />
          <path d="M28 16 L23.5 14.8 L23.5 17.2Z" fill="currentColor" />
          <path d="M7.5 7.5 L10.8 10 L9.3 11.5Z" fill="currentColor" />
          <path d="M24.5 24.5 L21.2 22 L22.7 20.5Z" fill="currentColor" />
          <path d="M24.5 7.5 L22 10.8 L20.5 9.3Z" fill="currentColor" />
          <path d="M7.5 24.5 L10 21.2 L11.5 22.7Z" fill="currentColor" />
        </>
      );

    case 'bilvashtakam':
      // Bilva (bael) leaf — three-lobed sacred leaf offered to Shiva
      return (
        <>
          <path d="M16 6 C14 10 10 14 10 19 C10 23 12.5 25 16 25 C19.5 25 22 23 22 19 C22 14 18 10 16 6Z" {...s} strokeWidth="1.3" />
          <line x1="16" y1="8" x2="16" y2="25" {...s} strokeWidth="0.9" />
          <path d="M16 13 C13 11 10 13 10 16" {...s} strokeWidth="0.8" />
          <path d="M16 13 C19 11 22 13 22 16" {...s} strokeWidth="0.8" />
          <line x1="16" y1="25" x2="16" y2="29" {...s} strokeWidth="1.1" />
        </>
      );

    case 'argala-stotram':
      // Trishul with shakti flame — Durga's power
      return (
        <>
          <line x1="16" y1="8" x2="16" y2="29" {...s} strokeWidth="1.8" />
          <path d="M16 8 C16 5 13 3 11 5" {...s} strokeWidth="1.3" />
          <path d="M16 8 C16 5 19 3 21 5" {...s} strokeWidth="1.3" />
          <path d="M16 3 L16 8" {...s} strokeWidth="1.3" />
          <path d="M13 26 L19 26" {...s} strokeWidth="1.2" />
          <path d="M16 3 C15 1.5 16 0.5 16.5 1 C17 0 16 -0.5 16 1" {...s} strokeWidth="0.8" fill="currentColor" opacity="0.5" />
        </>
      );

    case 'damodarashtakam':
      return (
        <>
          <circle cx="16" cy="13" r="5" {...s} strokeWidth="1.3" />
          <path d="M11 18 C11 22 13 26 16 28 C19 26 21 22 21 18" {...s} strokeWidth="1.2" />
          <path d="M12 15 C9 16 7 14 8 12" {...s} strokeWidth="1" />
          <path d="M20 15 C23 16 25 14 24 12" {...s} strokeWidth="1" />
          <path d="M13 19 Q16 22 19 19" {...s} strokeWidth="0.9" />
          <path d="M14 6 C14 4 16 3 16 5 C16 3 18 4 18 6" {...s} strokeWidth="0.9" fill="currentColor" opacity="0.4" />
        </>
      );

    case 'guru-ashtakam':
      return (
        <>
          <circle cx="16" cy="10" r="4" {...s} strokeWidth="1.2" />
          <path d="M10 18 L16 15 L22 18" {...s} strokeWidth="1.3" />
          <path d="M10 18 L10 26 L22 26 L22 18" {...s} strokeWidth="1.3" />
          <line x1="16" y1="15" x2="16" y2="26" {...s} strokeWidth="0.9" />
          <path d="M14 7 L16 4 L18 7" {...s} strokeWidth="0.8" fill="currentColor" opacity="0.3" />
        </>
      );

    case 'dasharatha-shani-stotram':
      // Saturn with ring — Lord Shani's planetary symbol
      return (
        <>
          <circle cx="16" cy="14" r="6" {...s} strokeWidth="1.5" />
          <ellipse cx="16" cy="14" rx="10" ry="3" {...s} strokeWidth="1.2" />
          <line x1="16" y1="20" x2="16" y2="28" {...s} strokeWidth="1.5" />
          <line x1="13" y1="25" x2="19" y2="25" {...s} strokeWidth="1.2" />
        </>
      );

    case 'pandurangashtakam':
      // Brick (Vit) — Vitthal's iconic standing-on-brick pose
      return (
        <>
          <rect x="6" y="22" width="20" height="6" rx="1" {...s} strokeWidth="1.5" />
          <line x1="16" y1="22" x2="16" y2="14" {...s} strokeWidth="1.8" />
          <circle cx="16" cy="10.5" r="3.5" {...s} strokeWidth="1.3" />
          <path d="M12 16 L8 18" {...s} strokeWidth="1.2" />
          <path d="M20 16 L24 18" {...s} strokeWidth="1.2" />
        </>
      );

    case 'dakshinamurthy-stotram':
      return (
        <>
          <circle cx="16" cy="9" r="4.5" {...s} strokeWidth="1.2" />
          <path d="M12 14 L16 13 L20 14 L20 22 L12 22Z" {...s} strokeWidth="1.2" />
          <path d="M12 22 L10 28 M20 22 L22 28" {...s} strokeWidth="1.1" />
          <path d="M20 17 L24 15" {...s} strokeWidth="1" />
          <path d="M20 19 L25 19" {...s} strokeWidth="1" />
          <circle cx="8" cy="26" r="1.5" {...s} strokeWidth="0.8" />
          <path d="M16 5 C15.5 3.5 16 2.5 16.5 3.5 C17 2.5 16.5 3.5 16 5" {...s} strokeWidth="0.7" fill="currentColor" opacity="0.4" />
        </>
      );

    default:
      return <circle cx="16" cy="16" r="8" {...s} strokeWidth="1.5" />;
  }
}
