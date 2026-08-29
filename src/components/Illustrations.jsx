export function BuildingIllustration() {
  return (
    <svg viewBox="0 0 300 220" style={{ width: '78%' }} role="img" aria-label="Illustration of the yellow Love City BBQ building">
      <rect x="30" y="90" width="240" height="110" rx="6" fill="var(--yellow)" />
      <rect x="30" y="90" width="240" height="20" fill="#00000014" />
      <polygon points="15,95 150,40 285,95" fill="var(--flame)" />
      <rect x="120" y="140" width="60" height="60" fill="var(--ink)" />
      <rect x="50" y="115" width="40" height="35" fill="var(--ink)" opacity="0.85" />
      <rect x="210" y="115" width="40" height="35" fill="var(--ink)" opacity="0.85" />
      <text x="150" y="72" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontWeight="700" fontSize="17" fill="var(--ink)">
        Love City BBQ
      </text>
    </svg>
  )
}

export function PlateIllustration() {
  return (
    <svg viewBox="0 0 300 220" style={{ width: '70%' }} role="img" aria-label="Illustration of a plate of ribs and sides">
      <ellipse cx="150" cy="130" rx="110" ry="60" fill="var(--cream-dim)" />
      <ellipse cx="150" cy="130" rx="82" ry="42" fill="none" stroke="var(--yellow-deep)" strokeWidth="3" opacity="0.5" />
      <path d="M90,120 q15,-30 35,-5 q15,-28 35,0 q15,-25 33,3" stroke="var(--flame)" strokeWidth="14" strokeLinecap="round" fill="none" />
      <circle cx="110" cy="150" r="16" fill="var(--teal)" opacity="0.85" />
      <circle cx="150" cy="158" r="14" fill="var(--yellow)" opacity="0.9" />
    </svg>
  )
}

export function SidesIllustration() {
  return (
    <svg viewBox="0 0 300 220" style={{ width: '68%' }} role="img" aria-label="Illustration of side dish bowls">
      <circle cx="95" cy="120" r="52" fill="var(--yellow)" opacity="0.9" />
      <circle cx="205" cy="120" r="52" fill="var(--teal)" opacity="0.85" />
      <circle cx="150" cy="70" r="40" fill="var(--flame)" opacity="0.9" />
    </svg>
  )
}
