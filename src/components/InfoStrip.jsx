const ITEMS = [
  { label: 'Walk-up from the ferry', icon: '⚓' },
  { label: 'No reservations needed', icon: '✋' },
  { label: 'Open-air bar seating', icon: '🍹' },
  { label: 'Cash & card', icon: '💳' },
  { label: 'Closed Mondays', icon: '🌙' },
]

export default function InfoStrip() {
  return (
    <div style={{ background: 'var(--charcoal-soft)', borderTop: '1px solid rgba(244,179,44,0.12)' }}>
      <div
        className="wrap"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(14px, 3vw, 30px)',
          justifyContent: 'center',
          padding: '18px clamp(20px, 5vw, 56px)',
        }}
      >
        {ITEMS.map((item) => (
          <span
            key={item.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.85rem',
              fontWeight: 500,
              color: 'var(--muted)',
            }}
          >
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
