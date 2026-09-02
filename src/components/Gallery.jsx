import { useState } from 'react';
import { asset } from '../utils';
import PhotoSlot from './PhotoSlot';

const SLOTS = [
  { file: 'gallery-1.jpg', alt: 'BBQ chicken hot off the grill' },
  { file: 'gallery-2.jpg', alt: 'BBQ chicken plate with mac and rice' },
  {
    file: 'gallery-3.webp',
    alt: 'BBQ plate with mac, pasta salad, and coleslaw',
  },
  { file: 'gallery-4.jpg', alt: 'Janice with guests at the truck window' },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const active = openIndex === null ? null : SLOTS[openIndex];

  return (
    <section
      className="section-pad"
      style={{ background: 'var(--cream)', paddingTop: 0 }}
    >
      <div className="wrap">
        <h2
          style={{
            textAlign: 'center',
            fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            marginBottom: 32,
          }}
        >
          Smoke. Sauce.{' '}
          <span
            style={{
              fontStyle: 'italic',
              color: 'var(--flame)',
              textTransform: 'none',
            }}
          >
            vibes and community.
          </span>
        </h2>

        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 10,
          }}
        >
          {SLOTS.map((slot, i) => (
            <button
              key={slot.file}
              onClick={() => setOpenIndex(i)}
              aria-label={`View larger: ${slot.alt}`}
              style={{
                border: 'none',
                padding: 0,
                background: 'none',
                cursor: 'pointer',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
              }}
            >
              <PhotoSlot
                src={asset(`/images/${slot.file}`)}
                alt={slot.alt}
                aspect="1 / 1"
                fallback={null}
              />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setOpenIndex(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(36,28,21,0.88)',
            display: 'grid',
            placeItems: 'center',
            padding: 'clamp(20px, 5vw, 56px)',
          }}
        >
          <button
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 20,
              right: 24,
              background: 'none',
              border: 'none',
              color: 'var(--cream)',
              fontSize: '2rem',
              lineHeight: 1,
              cursor: 'pointer',
            }}
          >
            ×
          </button>
          <img
            src={asset(`/images/${active.file}`)}
            alt={active.alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 'min(90vw, 900px)',
              maxHeight: '85vh',
              borderRadius: 'var(--radius)',
              display: 'block',
            }}
          />
        </div>
      )}

      <style>{`
        @media (max-width: 780px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
