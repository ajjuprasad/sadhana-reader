/**
 * Decorative SVG motif for the Stotra of the Day tile.
 *
 * Yantra-inspired composition:
 *   - outer dotted bead ring + dashed guide
 *   - cardinal corner ornaments (paisley-style)
 *   - 16-petal outer lotus (flame-tip petals)
 *   - thin guide ring
 *   - 8-petal middle lotus (broad lotus petals)
 *   - nested interlocking triangle pairs (yantra core)
 *   - central bindu with a per-deity focal glyph
 *
 * The geometry uses real petal/teardrop SVG paths instead of plain ellipses
 * so the silhouette reads as lotus petals rather than ovals.
 */
interface Props {
  deity?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

type Focal = 'om' | 'chakra' | 'lotus' | 'trishul' | 'conch' | 'star';

const PRIMARY = '#E65100'; // deep saffron
const SECONDARY = '#FF9933'; // saffron
const BG_TINT = '#FFF8E1'; // app cream

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
          y="4"
          textAnchor="middle"
          fontFamily="'Tiro Devanagari Sanskrit', serif"
          fontSize="14"
          fill={PRIMARY}
        >
          ॐ
        </text>
      );
    case 'chakra':
      return (
        <g fill="none" stroke={PRIMARY} strokeWidth="0.7">
          <circle cx="0" cy="0" r="6" />
          <circle cx="0" cy="0" r="1.6" fill={PRIMARY} />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            return <line key={i} x1={Math.cos(a) * 2} y1={Math.sin(a) * 2} x2={Math.cos(a) * 6} y2={Math.sin(a) * 6} />;
          })}
        </g>
      );
    case 'lotus':
      return (
        <g fill={PRIMARY}>
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            const cx = Math.cos(a) * 3.5;
            const cy = Math.sin(a) * 3.5;
            return (
              <ellipse
                key={i}
                cx={cx}
                cy={cy}
                rx="1.3"
                ry="3.2"
                transform={`rotate(${(a * 180) / Math.PI} ${cx} ${cy})`}
              />
            );
          })}
          <circle cx="0" cy="0" r="1.4" />
        </g>
      );
    case 'trishul':
      return (
        <g stroke={PRIMARY} strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="0" y1="-7" x2="0" y2="7" />
          <path d="M-4 -3 L-4 -7 M0 -5 L0 -8 M4 -3 L4 -7" />
          <path d="M-4 -3 Q-2 -1 0 -3 Q2 -1 4 -3" />
          <line x1="-1.5" y1="7" x2="1.5" y2="7" />
        </g>
      );
    case 'conch':
      return (
        <g fill={PRIMARY}>
          <path d="M-5 5 Q-7 -1 -1 -6 Q6 -7 7 -1 Q7 4 2 6 Q-2 7 -5 5 Z" />
          <path d="M-1 -1 Q1 -3 3 -1 Q3 2 0 2 Q-2 2 -1 -1 Z" fill={BG_TINT} />
        </g>
      );
    case 'star':
      return (
        <g stroke={PRIMARY} strokeWidth="0.8" fill="none">
          <path d="M0 -7 L6 4 L-6 4 Z" />
          <path d="M0 7 L6 -4 L-6 -4 Z" />
          <circle cx="0" cy="0" r="1.5" fill={PRIMARY} />
        </g>
      );
  }
}

// A pointed flame/lotus petal centered on the origin, tip pointing up (-Y).
function FlamePetal({ rx = 5, ry = 14, fill = 'none', stroke = PRIMARY, strokeWidth = 0.55 }: {
  rx?: number; ry?: number; fill?: string; stroke?: string; strokeWidth?: number;
}) {
  const d = `M 0 ${-ry} C ${rx} ${-ry * 0.55} ${rx} ${ry * 0.2} 0 ${ry * 0.35} C ${-rx} ${ry * 0.2} ${-rx} ${-ry * 0.55} 0 ${-ry} Z`;
  return <path d={d} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />;
}

// A broader, more rounded lotus petal.
function LotusPetal({ rx = 7, ry = 12, fill = 'none', stroke = PRIMARY, strokeWidth = 0.6 }: {
  rx?: number; ry?: number; fill?: string; stroke?: string; strokeWidth?: number;
}) {
  const d = `M 0 ${-ry} C ${rx * 1.1} ${-ry * 0.4} ${rx * 0.7} ${ry * 0.55} 0 ${ry * 0.55} C ${-rx * 0.7} ${ry * 0.55} ${-rx * 1.1} ${-ry * 0.4} 0 ${-ry} Z`;
  return <path d={d} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />;
}

// A paisley/buti-style cardinal ornament, drawn with tip pointing up (-Y).
function Paisley({ size = 10 }: { size?: number }) {
  const s = size;
  // teardrop with an inner curl
  const outer = `M 0 ${-s} C ${s * 0.7} ${-s * 0.6} ${s * 0.55} ${s * 0.5} 0 ${s * 0.5} C ${-s * 0.55} ${s * 0.5} ${-s * 0.7} ${-s * 0.6} 0 ${-s} Z`;
  const inner = `M 0 ${-s * 0.55} C ${s * 0.35} ${-s * 0.3} ${s * 0.25} ${s * 0.2} 0 ${s * 0.2}`;
  return (
    <g fill="none" stroke={PRIMARY} strokeWidth="0.55">
      <path d={outer} />
      <path d={inner} />
      <circle cx="0" cy={-s * 0.7} r={s * 0.07} fill={PRIMARY} />
    </g>
  );
}

export default function DeityMandala({ deity, size = 180, className, style }: Props) {
  const focal = focalForDeity(deity);

  const beads = 64;

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
          <stop offset="0%" stopColor={SECONDARY} stopOpacity="0.18" />
          <stop offset="65%" stopColor={SECONDARY} stopOpacity="0.05" />
          <stop offset="100%" stopColor={SECONDARY} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft halo */}
      <circle cx="0" cy="0" r="95" fill="url(#mandala-fade)" />

      {/* outer dashed guide */}
      <circle cx="0" cy="0" r="93" stroke={SECONDARY} strokeWidth="0.3" fill="none" strokeDasharray="1 2" opacity="0.7" />

      {/* outer bead ring */}
      <g fill={PRIMARY} opacity="0.7">
        {Array.from({ length: beads }).map((_, i) => {
          const a = (i * 2 * Math.PI) / beads;
          const r = i % 4 === 0 ? 1.0 : 0.6;
          return <circle key={i} cx={Math.cos(a) * 88} cy={Math.sin(a) * 88} r={r} />;
        })}
      </g>

      {/* twin thin rings */}
      <circle cx="0" cy="0" r="84" stroke={SECONDARY} strokeWidth="0.45" fill="none" opacity="0.6" />
      <circle cx="0" cy="0" r="82" stroke={SECONDARY} strokeWidth="0.3" fill="none" opacity="0.4" />

      {/* cardinal paisley ornaments */}
      <g opacity="0.85">
        {[0, 90, 180, 270].map((deg) => (
          <g key={deg} transform={`rotate(${deg}) translate(0 -75)`}>
            <Paisley size={9} />
          </g>
        ))}
      </g>

      {/* connector arcs between cardinals (subtle inter-cardinal flourishes) */}
      <g fill="none" stroke={SECONDARY} strokeWidth="0.4" opacity="0.55">
        {[45, 135, 225, 315].map((deg) => (
          <g key={deg} transform={`rotate(${deg})`}>
            <path d="M -10 -76 Q 0 -82 10 -76" />
            <circle cx="0" cy="-78" r="0.9" fill={PRIMARY} />
          </g>
        ))}
      </g>

      {/* 16-petal outer lotus — flame petals */}
      <g opacity="0.75">
        {Array.from({ length: 16 }).map((_, i) => {
          const deg = (i * 360) / 16;
          return (
            <g key={i} transform={`rotate(${deg}) translate(0 -56)`}>
              <FlamePetal rx={4.5} ry={12} stroke={PRIMARY} strokeWidth={0.55} />
            </g>
          );
        })}
      </g>

      {/* thin ring under outer lotus */}
      <circle cx="0" cy="0" r="44" stroke={PRIMARY} strokeWidth="0.5" fill="none" opacity="0.6" />
      <circle cx="0" cy="0" r="42" stroke={SECONDARY} strokeWidth="0.3" fill="none" opacity="0.4" />

      {/* 8-petal middle lotus — lotus petals */}
      <g opacity="0.85">
        {Array.from({ length: 8 }).map((_, i) => {
          const deg = (i * 360) / 8;
          return (
            <g key={i} transform={`rotate(${deg}) translate(0 -28)`}>
              <LotusPetal rx={6.5} ry={12} fill={SECONDARY} stroke={PRIMARY} strokeWidth={0.5} />
            </g>
          );
        })}
      </g>

      {/* thin ring framing the yantra */}
      <circle cx="0" cy="0" r="22" stroke={PRIMARY} strokeWidth="0.55" fill="none" opacity="0.7" />
      <circle cx="0" cy="0" r="20.5" stroke={SECONDARY} strokeWidth="0.3" fill="none" opacity="0.45" />

      {/* yantra core — interlocking triangles, nested */}
      <g fill="none" stroke={PRIMARY} opacity="0.75">
        {/* large hexagram */}
        <path d="M 0 -19 L 16.45 9.5 L -16.45 9.5 Z" strokeWidth="0.6" />
        <path d="M 0 19 L 16.45 -9.5 L -16.45 -9.5 Z" strokeWidth="0.6" />
        {/* medium downward triangle (Shakti dominant in Sri Yantra) */}
        <path d="M 0 13 L 11 -5.5 L -11 -5.5 Z" strokeWidth="0.55" />
        {/* medium upward */}
        <path d="M 0 -13 L 11 5.5 L -11 5.5 Z" strokeWidth="0.55" />
        {/* small downward */}
        <path d="M 0 8 L 7 -3.5 L -7 -3.5 Z" strokeWidth="0.5" />
        {/* small upward */}
        <path d="M 0 -8 L 7 3.5 L -7 3.5 Z" strokeWidth="0.5" />
      </g>

      {/* bindu well — cream disc to lift focal glyph */}
      <circle cx="0" cy="0" r="6.5" fill={BG_TINT} stroke={PRIMARY} strokeWidth="0.5" opacity="0.95" />

      {/* central focal */}
      <FocalGlyph kind={focal} />
    </svg>
  );
}
