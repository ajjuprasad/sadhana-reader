export default function DiyaFlame({ size = 32 }: { size?: number }) {
  return (
    <div className="flex flex-col items-center" style={{ width: size, height: size * 1.5 }}>
      {/* Flame */}
      <div
        className="diya-flame"
        style={{
          width: size * 0.4,
          height: size * 0.7,
          background:
            'radial-gradient(ellipse at 50% 80%, #FFB300 0%, #FF8F00 40%, #FF6F00 70%, transparent 100%)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          boxShadow: '0 0 12px 4px rgba(255,179,0,0.4)',
        }}
      />
      {/* Lamp base */}
      <div
        style={{
          width: size * 0.7,
          height: size * 0.25,
          background: 'linear-gradient(to bottom, var(--color-accent-gold), var(--color-accent-secondary))',
          borderRadius: '0 0 50% 50%',
          marginTop: -2,
        }}
      />
    </div>
  );
}
