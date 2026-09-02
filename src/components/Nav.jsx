import { useEffect, useState } from 'react';
import { CONTACT } from '../data/content';
import { getStatus } from '../data/status';

export default function Nav() {
  const [status, setStatus] = useState(() => getStatus());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setStatus(getStatus()), 60_000);
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => {
      clearInterval(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--charcoal)',
      }}
    >
      <nav
        className="wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px clamp(20px, 5vw, 56px)',
          color: 'var(--ink)',
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 600,
            fontSize: '1.3rem',
            textDecoration: 'none',
            color: 'var(--ink)',
            display: 'flex',
            alignItems: 'baseline',
            gap: 6,
          }}
        >
          Love City
          <span
            style={{
              color: 'var(--flame)',
              fontStyle: 'italic',
              fontWeight: 700,
            }}
          >
            BBQ
          </span>
        </a>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(10px, 3vw, 28px)',
          }}
        >
          <div
            className="nav-links"
            style={{
              display: 'flex',
              gap: 24,
              fontSize: '0.92rem',
              fontWeight: 500,
            }}
          >
            <a
              href="#menu"
              style={{
                textDecoration: 'none',
                color: 'var(--ink)',
                opacity: 0.75,
              }}
            >
              Menu
            </a>
            <a
              href="#story"
              style={{
                textDecoration: 'none',
                color: 'var(--ink)',
                opacity: 0.75,
              }}
            >
              Story
            </a>
            <a
              href="#visit"
              style={{
                textDecoration: 'none',
                color: 'var(--ink)',
                opacity: 0.75,
              }}
            >
              Visit
            </a>
          </div>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: 999,
              background: status.open
                ? 'rgba(22,125,119,0.18)'
                : 'rgba(185,175,160,0.15)',
              color: status.open ? '#0f6a64' : 'var(--muted)',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: status.open ? '#0f6a64' : 'var(--muted)',
              }}
            />
            {status.label}
          </span>

          <a
            href={CONTACT.phoneHref}
            className="btn btn-flame"
            style={{ padding: '10px 18px', fontSize: '0.88rem' }}
          >
            Call
          </a>
        </div>
      </nav>

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </header>
  );
}
