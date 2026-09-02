import { useState } from 'react'
import { FAQS } from '../data/content'

function FaqRow({ item, open, onToggle }) {
  return (
    <div style={{ borderBottom: '1px dashed rgba(36,28,21,0.16)' }}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          font: 'inherit',
          color: 'var(--ink)',
        }}
      >
        <span style={{ fontFamily: 'var(--display)', fontSize: '1.15rem', fontWeight: 600 }}>
          {item.q}
        </span>
        <span
          aria-hidden="true"
          style={{
            flex: 'none',
            width: 26,
            height: 26,
            borderRadius: '50%',
            border: '2px solid var(--flame)',
            display: 'grid',
            placeItems: 'center',
            color: 'var(--flame)',
            fontSize: '1rem',
            lineHeight: 1,
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'transform 0.15s ease',
          }}
        >
          +
        </span>
      </button>
      {open && (
        <p style={{ margin: 0, paddingBottom: 22, maxWidth: 640, lineHeight: 1.7, color: 'var(--muted)' }}>
          {item.a}
        </p>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-pad" style={{ background: 'var(--charcoal)' }}>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <div style={{ marginBottom: 40 }}>
          <p className="eyebrow" style={{ color: 'var(--flame)', marginBottom: 14 }}>Before You Walk Up</p>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)' }}>Frequently asked questions</h2>
        </div>

        <div>
          {FAQS.map((item, i) => (
            <FaqRow
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
