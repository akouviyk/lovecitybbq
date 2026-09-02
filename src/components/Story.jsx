import { STORY_BLOCKS } from '../data/content';
import { asset } from '../utils';
import PhotoSlot from './PhotoSlot';
import { BuildingIllustration } from './Illustrations';

function StoryBlock({ block, index }) {
  const imageFirst = block.imageSide !== 'right';
  const background = index % 2 === 0 ? 'var(--cream)' : 'var(--charcoal)';

  const media = (
    <div style={{ order: imageFirst ? 1 : 2 }}>
      <PhotoSlot
        src={asset(block.image)}
        alt={block.alt}
        fallback={<BuildingIllustration />}
      />
    </div>
  );

  const copy = (
    <div style={{ order: imageFirst ? 2 : 1 }}>
      <p className="eyebrow" style={{ color: 'var(--flame)', marginBottom: 14 }}>
        {block.eyebrow}
      </p>
      <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)', marginBottom: 20 }}>
        {block.heading}
        <span style={{ fontStyle: 'italic', color: 'var(--flame)' }}>{block.emphasis}</span>
        {block.headingEnd}
      </h2>
      {block.paragraphs.map((p, i) => (
        <p
          key={i}
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: '#4a3f30',
            marginBottom: 16,
            maxWidth: 540,
          }}
        >
          {p}
        </p>
      ))}
    </div>
  );

  return (
    <section
      id={index === 0 ? 'story' : undefined}
      className="section-pad"
      style={{ background }}
    >
      <div
        className="story-grid"
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 56px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 6vw, 72px)',
          alignItems: 'center',
        }}
      >
        {media}
        {copy}
      </div>

      <style>{`
        @media (max-width: 780px) {
          .story-grid { grid-template-columns: 1fr !important; }
          .story-grid > div { order: initial !important; }
        }
      `}</style>
    </section>
  );
}

export default function Story() {
  return (
    <>
      {STORY_BLOCKS.map((block, i) => (
        <StoryBlock key={block.eyebrow} block={block} index={i} />
      ))}
    </>
  );
}
