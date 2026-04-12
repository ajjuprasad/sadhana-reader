interface MalaBeadProps {
  totalVerses: number;
  currentVerse: number;
}

export default function MalaBead({ totalVerses, currentVerse }: MalaBeadProps) {
  const maxBeads = 21;

  // Map verse indices to bead indices proportionally if more than maxBeads
  let beadCount: number;
  let currentBead: number;

  if (totalVerses <= maxBeads) {
    beadCount = totalVerses;
    currentBead = currentVerse;
  } else {
    beadCount = maxBeads;
    currentBead = Math.round((currentVerse / (totalVerses - 1)) * (maxBeads - 1));
  }

  return (
    <div className="flex flex-col items-center gap-2 py-3 px-4">
      <div className="relative flex items-center justify-center w-full max-w-sm">
        {/* Mala string */}
        <div
          className="absolute top-1/2 left-4 right-4 h-px -translate-y-1/2"
          style={{ backgroundColor: 'var(--color-accent-secondary)', opacity: 0.2 }}
        />

        {/* Beads */}
        <div className="relative flex items-center justify-between w-full px-4">
          {Array.from({ length: beadCount }, (_, i) => {
            const isCompleted = i < currentBead;
            const isCurrent = i === currentBead;
            const isFuture = i > currentBead;

            return (
              <div
                key={i}
                className={`rounded-full flex-shrink-0 transition-all duration-300 ${
                  isCurrent ? 'bead-current' : ''
                }`}
                style={{
                  width: isCurrent ? 12 : 8,
                  height: isCurrent ? 12 : 8,
                  backgroundColor: isCompleted || isCurrent
                    ? 'var(--color-accent-primary)'
                    : 'transparent',
                  border: isFuture
                    ? '1.5px solid var(--color-accent-secondary)'
                    : 'none',
                  boxShadow:
                    isCompleted
                      ? '0 0 6px var(--color-accent-primary)'
                      : isCurrent
                      ? '0 0 8px var(--color-accent-primary)'
                      : 'none',
                  opacity: isFuture ? 0.5 : 1,
                }}
              />
            );
          })}
        </div>
      </div>

      <span
        className="text-xs font-hind"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {currentVerse + 1} of {totalVerses}
      </span>
    </div>
  );
}
