import { FEATURES } from '../data/content'

export default function InfoStrip() {
  return (
    <div className="section-pad" style={{ background: 'var(--charcoal-soft)' }}>
      <div className="wrap">
        <p
          className="eyebrow"
          style={{ textAlign: 'center', color: 'var(--teal)', marginBottom: 36 }}
        >
          Featuring
        </p>
        <div
          className="features-row"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(24px, 5vw, 56px)',
            justifyContent: 'center',
          }}
        >
          {FEATURES.map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 14,
                width: 130,
                textAlign: 'center',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: '50%',
                  background: 'var(--charcoal)',
                  border: '2px solid var(--yellow)',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '1.6rem',
                }}
              >
                {item.icon}
              </span>
              <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
