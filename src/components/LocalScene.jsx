const CONTRASTS = [
  { them: 'Reservation lines', us: 'Walk up, grab a stool' },
  { them: 'Dressed for dinner', us: 'Flip-flops are fine' },
  { them: 'Ocean-view upcharge', us: 'View of the smoker' },
  { them: 'Small plates', us: 'Second helpings' },
]

export default function LocalScene() {
  return (
    <section className="section-pad" style={{ background: 'var(--cream)', paddingTop: 0 }}>
      <div className="wrap">
        <div className="scene-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px, 5vw, 60px)', alignItems: 'center' }}>
          <div>
            <p className="eyebrow" style={{ color: 'var(--teal)', marginBottom: 14 }}>Cruz Bay, After All</p>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)', marginBottom: 18 }}>
              Everyone else needs a reservation.
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--flame)' }}>We just need you hungry.</span>
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: '#4a3f30', maxWidth: 460 }}>
              This town does incredible dinner-and-a-view — book ahead, dress
              up, enjoy it. Love City is the other half of a good Cruz Bay
              night: no wait list, no dress code, just a barstool and a plate
              that doesn't leave room for regret. Come as you are, straight
              off the boat if you have to.
            </p>
          </div>

          <div
            style={{
              background: 'var(--charcoal-soft)',
              border: '1px solid rgba(36,28,21,0.1)',
              borderRadius: 'var(--radius)',
              padding: 'clamp(20px, 4vw, 32px)',
              color: 'var(--ink)',
            }}
          >
            {CONTRASTS.map((row, i) => (
              <div
                key={row.them}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto 1fr',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 0',
                  borderBottom: i < CONTRASTS.length - 1 ? '1px dashed rgba(36,28,21,0.14)' : 'none',
                  fontSize: '0.95rem',
                }}
              >
                <span style={{ color: 'var(--muted)', textAlign: 'right' }}>{row.them}</span>
                <span style={{ color: 'var(--flame)', fontWeight: 700 }}>→</span>
                <span style={{ color: 'var(--flame)', fontWeight: 700 }}>{row.us}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .scene-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
