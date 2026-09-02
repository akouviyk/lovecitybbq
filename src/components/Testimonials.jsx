import { TESTIMONIALS } from '../data/content'

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 14 }} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="var(--flame)">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-pad" style={{ background: 'var(--charcoal)' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 48px' }}>
          <p className="eyebrow" style={{ color: 'var(--teal)', marginBottom: 14 }}>Word Around The Dock</p>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)' }}>What people say after the first bite</h2>
        </div>

        <div
          className="testimonial-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              style={{
                margin: 0,
                background: 'var(--charcoal-soft)',
                border: '1px solid rgba(36,28,21,0.1)',
                borderRadius: 'var(--radius)',
                padding: 'clamp(22px, 3vw, 30px)',
              }}
            >
              <Stars />
              <blockquote style={{ margin: 0, fontSize: '1rem', lineHeight: 1.7, color: '#4a3f30' }}>
                {t.quote}
              </blockquote>
              <figcaption style={{ marginTop: 18, fontWeight: 600, fontSize: '0.92rem' }}>
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
