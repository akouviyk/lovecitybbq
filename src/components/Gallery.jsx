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
          {SLOTS.map((slot) => (
            <PhotoSlot
              key={slot.file}
              src={asset(`/images/${slot.file}`)}
              alt={slot.alt}
              aspect="1 / 1"
              fallback={null}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
