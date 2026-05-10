/**
 * Decorative SVG motif rendered behind/beside content on the Stotra of the Day
 * tile. Yantra-inspired: dotted outer ring, 16-petal outer lotus, fine
 * concentric rings, 8-petal middle lotus, interlaced triangles (Sri-Yantra
 * inspired), and a per-deity focal glyph (Om, chakra, lotus, trishul,
 * conch, or hexagram).
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

function FocalGlyph({ kind }: { kind: Focal }) {
  switch (kind) {
    case 'om':
      return (
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fontFamily="'Tiro Devanagari Sanskrit', serif"
          fontSize="22"
          fill="#E65100"
          opacity="0.95"
        >
          ॐ
        </text>
      );
    case 'chakra':
      return (
        <g stroke="#E65100" strokeWidth="1" fill="none" opacity="0.9">
          <circle cx="0" cy="0" r="9" />
          <circle cx="0" cy="0" r="2.4" fill="#E65100" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            return <line key={i} x1={Math.cos(a) * 3} y1={Math.sin(a) * 3} x2={Math.cos(a) * 9} y2={Math.sin(a) * 9} />;
          })}
        </g>
      );
    case 'lotus':
      return (
        <g fill="#E65100" opacity="0.85">
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            const cx = Math.cos(a) * 5;
            const cy = Math.sin(a) * 5;
            return (
              <ellipse
                key={i}
                cx={cx}
                cy={cy}
                rx="2"
                ry="5"
                transform={`rotate(${(a * 180) / Math.PI} ${cx} ${cy})`}
              />
            );
          })}
          <circle cx="0" cy="0" r="2.2" />
        </g>
      );
    case 'trishul':
      return (
        <g stroke="#E65100" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
          <line x1="0" y1="-10" x2="0" y2="10" />
          <path d="M-6 -5 L-6 -10 M0 -7 L0 -12 M6 -5 L6 -10" />
          <path d="M-6 -5 Q-3 -2 0 -5 Q3 -2 6 -5" />
          <line x1="-2" y1="10" x2="2" y2="10" />
        </g>
      );
    case 'conch':
      return (
        <g fill="#E65100" opacity="0.9">
          <path d="M-7 7 Q-10 -2 -2 -8 Q8 -10 10 -2 Q10 6 3 9 Q-3 10 -7 7 Z" />
          <path d="M-2 -1 Q1 -5 4 -1 Q4 3 0 3 Q-3 3 -2 -1 Z" fill="#FFF8E1" />
        </g>
      );
    case 'star':
      return (
        <g stroke="#E65100" strokeWidth="1" fill="none" opacity="0.95">
          <path d="M0 -10 L8.7 5 L-8.7 5 Z" />
          <path d="M0 10 L8.7 -5 L-8.7 -5 Z" />
          <circle cx="0" cy="0" r="2.4" fill="#E65100" />
        </g>
      );
  }
}

export default function DeityMandala({ deity, size = 180, className, style }: Props) {
  const focal = focalForDeity(deity);

  // Generators
  const petals16 = Array.from({ length: 16 });
  const petals12 = Array.from({ length: 12 });
  const petals8 = Array.from({ length: 8 });
  const dots = Array.from({ length: 48 });

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
          <stop offset="0%" stopColor="#FF9933" stopOpacity="0.16" />
          <stop offset="65%" stopColor="#FF9933" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft halo */}
      <circle cx="0" cy="0" r="95" fill="url(#mandala-fade)" />

      {/* outer dotted ring */}
      <g fill="#E65100" opacity="0.55">
        {dots.map((_, i) => {
          const a = (i * 2 * Math.PI) / dots.length;
          return <circle key={i} cx={Math.cos(a) * 92} cy={Math.sin(a) * 92} r="0.9" />;
        })}
      </g>

      {/* outer rings */}
      <circle cx="0" cy="0" r="85" stroke="#FF9933" strokeWidth="0.55" fill="none" opacity="0.5" />
      <circle cx="0" cy="0" r="82" stroke="#FF9933" strokeWidth="0.4" fill="none" opacity="0.35" />

      {/* outer 16-petal lotus (thin) */}
      <g stroke="#FF9933" strokeWidth="0.7" fill="none" opacity="0.55">
        {petals16.map((_, i) => {
          const a = (i * 2 * Math.PI) / petals16.length;
          const x = Math.cos(a) * 70;
          const y = Math.sin(a) * 70;
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="6"
              ry="14"
              transform={`rotate(${(a * 180) / Math.PI + 90} ${x} ${y})`}
            />
          );
        })}
      </g>

      {/* ring between layers */}
      <circle cx="0" cy="0" r="56" stroke="#E65100" strokeWidth="0.6" fill="none" opacity="0.5" />

      {/* 12-petal middle layer (curved arcs) */}
      <g stroke="#E65100" strokeWidth="0.55" fill="none" opacity="0.55">
        {petals12.map((_, i) => {
          const a = (i * 2 * Math.PI) / petals12.length;
          const x = Math.cos(a) * 46;
          const y = Math.sin(a) * 46;
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="4"
              ry="10"
              transform={`rotate(${(a * 180) / Math.PI + 90} ${x} ${y})`}
            />
          );
        })}
      </g>

      <circle cx="0" cy="0" r="34" stroke="#E65100" strokeWidth="0.55" fill="none" opacity="0.55" />

      {/* 8-petal inner lotus (filled-ish) */}
      <g stroke="#E65100" strokeWidth="0.7" fill="#FF9933" fillOpacity="0.08" opacity="0.85">
        {petals8.map((_, i) => {
          const a = (i * 2 * Math.PI) / petals8.length;
          const x = Math.cos(a) * 26;
          const y = Math.sin(a) * 26;
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="3.5"
              ry="8"
              transform={`rotate(${(a * 180) / Math.PI + 90} ${x} ${y})`}
            />
          );
        })}
      </g>

      {/* interlaced triangles — yantra core */}
      <g stroke="#E65100" strokeWidth="0.7" fill="none" opacity="0.6">
        <path d="M0 -20 L17.3 10 L-17.3 10 Z" />
        <path d="M0 20 L17.3 -10 L-17.3 -10 Z" />
      </g>

      {/* innermost ring */}
      <circle cx="0" cy="0" r="13" stroke="#E65100" strokeWidth="0.6" fill="#FFF8E1" fillOpacity="0.5" opacity="0.85" />

      {/* central focal */}
      <FocalGlyph kind={focal} />
    </svg>
  );
}
