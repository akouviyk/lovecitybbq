import { STORY } from '../data/content'
import PhotoSlot from './PhotoSlot'
import { BuildingIllustration } from './Illustrations'

export default function Story() {
  return (
    <section id="story" className="section-pad" style={{ background: 'var(--cream)' }}>
      <div className="wrap story-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'clamp(32px, 6vw, 72px)', alignItems: 'center' }}>
        <PhotoSlot
          src="/images/storefront.jpg"
          alt="Love City BBQ's yellow building in Cruz Bay"
          fallback={<BuildingIllustration />}
        />

        <div>
          <p className="eyebrow" style={{ color: 'var(--flame)', marginBottom: 14 }}>Not the plan, but here we are</p>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)', marginBottom: 20 }}>
            Run by <span style={{ fontStyle: 'italic', color: 'var(--flame)' }}>{STORY.owner}</span>,
            fueled by real wood.
          </h2>
          {STORY.paragraphs.map((p, i) => (
            <p key={i} style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#4a3f30', marginBottom: 16, maxWidth: 540 }}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .story-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
