interface Props {
  size?: number;
  className?: string;
}

export default function SunriseIcon({ size = 40, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sunrise-sun" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#FFD9A0" />
          <stop offset="60%" stopColor="#FF9933" />
          <stop offset="100%" stopColor="#E65100" />
        </radialGradient>
        <linearGradient id="sunrise-glow" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFB66D" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#FFB66D" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      {/* glow */}
      <ellipse cx="24" cy="32" rx="22" ry="14" fill="url(#sunrise-glow)" />
      {/* rays */}
      <g stroke="#E65100" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
        <line x1="24" y1="6" x2="24" y2="10" />
        <line x1="10.5" y1="11.5" x2="13.5" y2="14.5" />
        <line x1="37.5" y1="11.5" x2="34.5" y2="14.5" />
        <line x1="5" y1="22" x2="9" y2="22" />
        <line x1="43" y1="22" x2="39" y2="22" />
      </g>
      {/* sun */}
      <path d="M8 32 A16 16 0 0 1 40 32 Z" fill="url(#sunrise-sun)" />
      {/* horizon */}
      <line x1="3" y1="34" x2="45" y2="34" stroke="#E65100" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* up arrow */}
      <path
        d="M24 41 L24 37 M21 39 L24 36 L27 39"
        stroke="#E65100"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
