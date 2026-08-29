import PhotoSlot from './PhotoSlot'
import { PlateIllustration, SidesIllustration, BuildingIllustration } from './Illustrations'

const SLOTS = [
  { file: 'gallery-1.jpg', fallback: <PlateIllustration />, alt: 'Plate of BBQ ribs and sides' },
  { file: 'gallery-2.jpg', fallback: <SidesIllustration />, alt: 'Sides at Love City BBQ' },
  { file: 'gallery-3.jpg', fallback: <BuildingIllustration />, alt: 'Love City BBQ building' },
  { file: 'gallery-4.jpg', fallback: <PlateIllustration />, alt: 'BBQ chicken plate' },
  { file: 'gallery-5.jpg', fallback: <SidesIllustration />, alt: 'Bar seating at Love City BBQ' },
]

export default function Gallery() {
  return (
    <section className="section-pad" style={{ background: 'var(--cream)', paddingTop: 0 }}>
      <div className="wrap">
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 32 }}>
          Smoke. Sauce. <span style={{ fontStyle: 'italic', color: 'var(--flame)', textTransform: 'none' }}>Repeat.</span>
        </h2>

        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 10,
          }}
        >
          {SLOTS.map((slot) => (
            <PhotoSlot key={slot.file} src={`/images/${slot.file}`} alt={slot.alt} aspect="1 / 1" fallback={slot.fallback} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 460px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
