export default function PremiumBadge({ price }: { price?: number }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-hind text-[0.6rem] font-semibold uppercase tracking-wider"
      style={{
        backgroundColor: 'rgba(255,153,51,0.12)',
        color: 'var(--color-accent-primary)',
        border: '1px solid rgba(255,153,51,0.25)',
      }}
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
      {price ? `₹${price}` : 'Premium'}
    </span>
  );
}
