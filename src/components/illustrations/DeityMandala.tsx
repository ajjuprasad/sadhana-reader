/**
 * Decorative SVG motif rendered behind/beside content on the Stotra of the Day
 * tile. The base form is a yantra-inspired 12-petal lotus with concentric
 * geometry; per-deity hints add a small focal glyph (lotus, chakra, conch,
 * trishul, etc.) without changing the overall feel.
 */
interface Props {
  deity?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

type Focal = 'om' | 'chakra' | 'lotus' | 'trishul' | 'conch' | 'star';

function focalForDeity(deity: string | undefined): Focal {
  if (!deity) return 'om';
  const d = deity.toLowerCase();
  if (/(shiva|kalabhairava|rudra|nataraj)/.test(d)) return 'trishul';
  if (/(vishnu|krishna|govinda|venkat|narayan|narasimha|rama)/.test(d)) return 'chakra';
  if (/(lakshmi|saraswati|durga|parvati|kamakshi|meenakshi|kali|annapurna|matangi|lalita|rajarajeshwari|ashtalakshmi)/.test(d)) return 'lotus';
  if (/(hanuman|subramanya|murugan|skanda|kartikeya|ganesha)/.test(d)) return 'star';
  if (/(ganga|yamuna|surya|navagraha|guru)/.test(d)) return 'conch';
  return 'om';
}

function Focal({ kind }: { kind: Focal }) {
  // All focals are sized within a 36×36 box centered at 0,0
  switch (kind) {
    case 'om':
      return (
        <text
          x="0"
          y="6"
          textAnchor="middle"
          fontFamily="'Tiro Devanagari Sanskrit', serif"
          fontSize="28"
          fill="#E65100"
          opacity="0.9"
        >
          ॐ
        </text>
      );
    case 'chakra':
      return (
        <g stroke="#E65100" strokeWidth="1.4" fill="none" opacity="0.9">
          <circle cx="0" cy="0" r="11" />
          <circle cx="0" cy="0" r="3" fill="#E65100" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            return <line key={i} x1={Math.cos(a) * 4} y1={Math.sin(a) * 4} x2={Math.cos(a) * 11} y2={Math.sin(a) * 11} />;
          })}
        </g>
      );
    case 'lotus':
      return (
        <g fill="#E65100" opacity="0.85">
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            const cx = Math.cos(a) * 6;
            const cy = Math.sin(a) * 6;
            return (
              <ellipse
                key={i}
                cx={cx}
                cy={cy}
                rx="2.4"
                ry="6"
                transform={`rotate(${(a * 180) / Math.PI} ${cx} ${cy})`}
              />
            );
          })}
          <circle cx="0" cy="0" r="2.8" />
        </g>
      );
    case 'trishul':
      return (
        <g stroke="#E65100" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
          <line x1="0" y1="-12" x2="0" y2="12" />
          <path d="M-8 -6 L-8 -12 M0 -8 L0 -14 M8 -6 L8 -12" />
          <path d="M-8 -6 Q-4 -2 0 -6 Q4 -2 8 -6" />
          <line x1="-3" y1="12" x2="3" y2="12" />
        </g>
      );
    case 'conch':
      return (
        <g fill="#E65100" opacity="0.88">
          <path d="M-9 8 Q-12 -2 -2 -10 Q9 -12 11 -2 Q12 7 4 11 Q-3 12 -9 8 Z" />
          <path d="M-3 -2 Q1 -6 5 -2 Q5 3 0 4 Q-4 3 -3 -2 Z" fill="#FFF8E1" />
        </g>
      );
    case 'star':
      return (
        <g stroke="#E65100" strokeWidth="1.4" fill="none" opacity="0.9">
          {/* hexagram (Shanmukha / six-pointed star) */}
          <path d="M0 -12 L10.4 6 L-10.4 6 Z" />
          <path d="M0 12 L10.4 -6 L-10.4 -6 Z" />
          <circle cx="0" cy="0" r="3" fill="#E65100" />
        </g>
      );
  }
}

export default function DeityMandala({ deity, size = 200, className, style }: Props) {
  const focal = focalForDeity(deity);
  return (
    <svg
      width={size}
      height={size}
      viewBox="-100 -100 200 200"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mandala-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF9933" stopOpacity="0.18" />
          <stop offset="70%" stopColor="#FF9933" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft halo */}
      <circle cx="0" cy="0" r="92" fill="url(#mandala-fade)" />

      {/* outer 12-petal lotus */}
      <g stroke="#FF9933" strokeWidth="1.1" fill="none" opacity="0.55">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6;
          const x = Math.cos(a) * 70;
          const y = Math.sin(a) * 70;
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="9"
              ry="22"
              transform={`rotate(${(a * 180) / Math.PI + 90} ${x} ${y})`}
            />
          );
        })}
      </g>

      {/* outer rings */}
      <circle cx="0" cy="0" r="80" stroke="#FF9933" strokeWidth="0.8" fill="none" opacity="0.45" />
      <circle cx="0" cy="0" r="62" stroke="#E65100" strokeWidth="0.9" fill="none" opacity="0.5" />

      {/* inner 8-petal lotus */}
      <g stroke="#E65100" strokeWidth="1" fill="none" opacity="0.6">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          const x = Math.cos(a) * 38;
          const y = Math.sin(a) * 38;
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="7"
              ry="16"
              transform={`rotate(${(a * 180) / Math.PI + 90} ${x} ${y})`}
            />
          );
        })}
      </g>

      <circle cx="0" cy="0" r="28" stroke="#E65100" strokeWidth="0.9" fill="none" opacity="0.6" />

      {/* central focal */}
      <Focal kind={focal} />
    </svg>
  );
}
