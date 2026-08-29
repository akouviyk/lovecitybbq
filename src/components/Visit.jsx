import { CONTACT, HOURS } from '../data/content'
import { getStatus } from '../data/status'
import { useState, useEffect } from 'react'

export default function Visit() {
  const [status, setStatus] = useState(() => getStatus())
  const [today] = useState(() => new Date().toLocaleDateString('en-US', { weekday: 'long' }))

  useEffect(() => {
    const t = setInterval(() => setStatus(getStatus()), 60_000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="visit" className="section-pad" style={{ background: 'var(--cream)' }}>
      <div className="wrap visit-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(32px, 6vw, 64px)' }}>
        <div>
          <p className="eyebrow" style={{ color: 'var(--flame)', marginBottom: 14 }}>Find The Yellow Building</p>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)', marginBottom: 22 }}>Hours &amp; Location</h2>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.85rem',
              fontWeight: 600,
              padding: '8px 14px',
              borderRadius: 999,
              background: status.open ? 'rgba(22,125,119,0.12)' : 'rgba(232,73,29,0.1)',
              color: status.open ? '#0f6a64' : 'var(--flame)',
              marginBottom: 26,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: status.open ? '#0f6a64' : 'var(--flame)' }} />
            {status.label} · {status.detail}
          </div>

          <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0 }}>
            {HOURS.map((h) => (
              <li
                key={h.day}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(36,28,21,0.08)',
                  fontWeight: h.day === today ? 700 : 500,
                  color: h.open ? 'var(--ink)' : '#a99e8c',
                }}
              >
                <span>{h.day}</span>
                <span>{h.open || 'Closed'}</span>
              </li>
            ))}
          </ul>

          <div style={{ display: 'grid', gap: 6, marginBottom: 28, fontSize: '1rem', lineHeight: 1.6 }}>
            <strong>{CONTACT.address}</strong>
            <span style={{ color: '#6b5f4c' }}>{CONTACT.landmark}</span>
            <a href={CONTACT.phoneHref} style={{ color: 'var(--flame)', fontWeight: 600, textDecoration: 'none' }}>
              {CONTACT.phone}
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href={CONTACT.mapsHref} target="_blank" rel="noreferrer" className="btn btn-flame">
              Get Directions →
            </a>
            <a href={CONTACT.facebook} target="_blank" rel="noreferrer" className="btn btn-dark-outline">
              Facebook Page
            </a>
          </div>
        </div>

        <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', minHeight: 340, border: '1px solid rgba(36,28,21,0.1)' }}>
          <iframe
            title="Map to Love City BBQ & Grill, Cruz Bay, St. John"
            src={CONTACT.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 340 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .visit-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
