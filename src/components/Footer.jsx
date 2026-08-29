import { CONTACT } from '../data/content'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal)', color: 'var(--muted)', borderTop: '2.5px solid var(--yellow)' }}>
      <div className="wrap" style={{ padding: '40px clamp(20px, 5vw, 56px)', display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--display)', fontSize: '1.1rem', color: 'var(--ink)' }}>
          Love City <span style={{ fontStyle: 'italic', color: 'var(--flame)' }}>BBQ</span>
        </span>
        <p style={{ fontSize: '0.85rem', textAlign: 'center' }}>
          {CONTACT.address} · {CONTACT.phone}
        </p>
        <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Closed Mondays. See you Tuesday.</p>
      </div>
    </footer>
  )
}
