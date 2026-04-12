export default function MandalaBackground() {
  // 16-petal geometric lotus mandala
  const petals = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * 360) / 16;
    return (
      <g key={i} transform={`rotate(${angle} 300 300)`}>
        <ellipse
          cx="300"
          cy="180"
          rx="28"
          ry="80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <ellipse
          cx="300"
          cy="200"
          rx="16"
          ry="55"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        />
      </g>
    );
  });

  const innerPetals = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 360) / 8 + 22.5;
    return (
      <g key={`inner-${i}`} transform={`rotate(${angle} 300 300)`}>
        <ellipse
          cx="300"
          cy="230"
          rx="14"
          ry="42"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        />
      </g>
    );
  });

  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        className="text-saffron"
        style={{
          opacity: 0.05,
          mixBlendMode: 'multiply',
          maxWidth: '90vw',
          maxHeight: '90vh',
        }}
      >
        {/* Outer circles */}
        <circle
          cx="300"
          cy="300"
          r="280"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle
          cx="300"
          cy="300"
          r="260"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />

        {/* Petals */}
        {petals}
        {innerPetals}

        {/* Center circles */}
        <circle
          cx="300"
          cy="300"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="300"
          cy="300"
          r="20"
          fill="currentColor"
          opacity="0.3"
        />
        <circle
          cx="300"
          cy="300"
          r="8"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
