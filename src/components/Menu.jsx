import { MAINS, SIDES } from '../data/content'
import { SIDE_ICONS } from './Illustrations'

export default function Menu() {
  return (
    <section id="menu" className="section-pad" style={{ background: 'var(--charcoal)', color: 'var(--ink)' }}>
      <div className="wrap">
        <div style={{ maxWidth: 560, marginBottom: 56 }}>
          <p className="eyebrow" style={{ color: 'var(--flame)', marginBottom: 14 }}>The Chalkboard</p>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)' }}>
            What's <span style={{ fontStyle: 'italic', color: 'var(--flame)' }}>smoking</span> today
          </h2>
          <p style={{ marginTop: 16, color: 'var(--muted)', lineHeight: 1.6 }}>
            The board changes with what's fresh — this is the lineup that
            keeps people walking up from the dock.
          </p>
        </div>

        <div className="menu-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(28px, 5vw, 56px)' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 4 }}>
            {MAINS.map((item) => (
              <li
                key={item.name}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: 16,
                  padding: '18px 0',
                  borderBottom: '1px dashed rgba(36,28,21,0.16)',
                }}
              >
                <div>
                  <span style={{ fontFamily: 'var(--display)', fontSize: '1.35rem', fontWeight: 600 }}>
                    {item.name}
                  </span>
                  {item.special && (
                    <span
                      style={{
                        marginLeft: 10,
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: 'var(--ink)',
                        background: 'var(--yellow)',
                        borderRadius: 999,
                        padding: '3px 9px',
                        verticalAlign: 'middle',
                      }}
                    >
                      Ask first
                    </span>
                  )}
                  <div style={{ fontSize: '0.9rem', color: 'var(--muted)', marginTop: 4 }}>{item.note}</div>
                </div>
              </li>
            ))}
          </ul>

          <div>
            <p className="eyebrow" style={{ color: 'var(--teal)', marginBottom: 16 }}>Sides Worth Fighting Over</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 14 }}>
              {SIDES.map((s) => {
                const Icon = SIDE_ICONS[s.icon]
                return (
                  <li key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '1.02rem' }}>
                    <span
                      style={{
                        width: 40,
                        height: 40,
                        flex: 'none',
                        borderRadius: '50%',
                        background: 'var(--charcoal-soft)',
                        display: 'grid',
                        placeItems: 'center',
                      }}
                    >
                      {Icon && <Icon />}
                    </span>
                    {s.name}
                  </li>
                )
              })}
            </ul>

            <div
              style={{
                marginTop: 32,
                padding: '18px 20px',
                borderRadius: 14,
                background: 'var(--charcoal-soft)',
                border: '1px solid rgba(244,179,44,0.4)',
                fontSize: '0.92rem',
                color: 'var(--muted)',
                lineHeight: 1.6,
              }}
            >
              Feeding a crew, a boat, or a wedding on the beach? Love City
              caters. Call ahead and tell them the headcount.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .menu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
