import { CONTACT } from '../data/content';
import { asset } from '../utils';
import PhotoSlot from './PhotoSlot';
import { BuildingIllustration } from './Illustrations';

export default function Hero() {
  return (
    <section id="top" style={{ position: 'relative', color: 'var(--cream)' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <PhotoSlot
          src={asset('/images/hero.webp')}
          alt="Guests toasting with drinks at Love City BBQ"
          aspect="auto"
          radius="0"
          fallback={
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                placeItems: 'center',
                background: 'var(--charcoal)',
              }}
            >
              <BuildingIllustration />
            </div>
          }
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(36,28,21,0.32) 0%, rgba(36,28,21,0.5) 55%, rgba(36,28,21,0.78) 100%)',
          }}
        />
      </div>

      <div
        className="wrap"
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: 'clamp(420px, 62vh, 620px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '80px clamp(20px, 5vw, 56px)',
        }}
      >
        <p
          className="eyebrow"
          style={{
            color: 'var(--yellow)',
            marginBottom: 18,
            letterSpacing: '0.2em',
          }}
        >
          Cruz Bay, St. John — Two Minutes From The Ferry
        </p>

        <h1
          style={{
            fontSize: 'clamp(2.6rem, 7vw, 4.6rem)',
            color: 'var(--cream)',
            textTransform: 'uppercase',
            letterSpacing: '0.01em',
          }}
        >
          Love City BBQ
        </h1>

        <p
          style={{
            marginTop: 20,
            fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
            color: 'var(--cream)',
            maxWidth: 520,
            lineHeight: 1.6,
            opacity: 0.92,
          }}
        >
          Ribs, jerk chicken, and sides that start arguments. No reservations,
          no dress code — just find the yellow building.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            marginTop: 34,
            justifyContent: 'center',
          }}
        >
          <a href="#menu" className="btn btn-flame">
            View The Menu
          </a>
          <a
            href={CONTACT.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Get Directions →
          </a>
        </div>

        <p
          style={{ marginTop: 24, fontSize: '0.88rem', color: 'var(--smoke)' }}
        >
          {CONTACT.landmark} · {CONTACT.phone}
        </p>
      </div>
    </section>
  );
}
