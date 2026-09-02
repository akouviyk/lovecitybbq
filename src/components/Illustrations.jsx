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

// ---------------------------------------------------------------------
// Side-dish icon set. AI-generated food photography wasn't available in
// this environment, so these are hand-drawn in the same flat, brand-toned
// illustration style as the rest of the page (see BuildingIllustration
// above) rather than leaving each side with no visual at all. Swap any of
// these for a real photo later by dropping the file in /public/images and
// wiring it through PhotoSlot the way Story/Gallery already do.
// ---------------------------------------------------------------------

function Bowl({ children, rim = 'var(--yellow-deep)' }) {
  return (
    <>
      <ellipse cx="30" cy="46" rx="27" ry="9" fill="var(--ink)" opacity="0.08" />
      <path d="M6,26 a24,20 0 0 0 48,0 Z" fill="var(--cream-dim)" stroke={rim} strokeWidth="2" />
      {children}
      <path d="M6,26 a24,7 0 0 0 48,0" fill="none" stroke={rim} strokeWidth="2" opacity="0.6" />
    </>
  )
}

function SideIconFrame({ label, children }) {
  return (
    <svg viewBox="0 0 60 52" style={{ width: '100%', height: '100%' }} role="img" aria-label={label}>
      {children}
    </svg>
  )
}

export function PastaSaladIcon() {
  return (
    <SideIconFrame label="Illustration of pasta salad">
      <Bowl>
        <circle cx="20" cy="20" r="3.2" fill="var(--cream)" stroke="var(--yellow-deep)" strokeWidth="1.4" />
        <circle cx="30" cy="16" r="3.2" fill="var(--cream)" stroke="var(--yellow-deep)" strokeWidth="1.4" />
        <circle cx="40" cy="21" r="3.2" fill="var(--cream)" stroke="var(--yellow-deep)" strokeWidth="1.4" />
        <circle cx="26" cy="24" r="2.6" fill="var(--flame)" opacity="0.8" />
        <circle cx="35" cy="25" r="2.2" fill="var(--teal)" opacity="0.75" />
      </Bowl>
    </SideIconFrame>
  )
}

export function PotatoSaladIcon() {
  return (
    <SideIconFrame label="Illustration of potato salad">
      <Bowl>
        <ellipse cx="22" cy="19" rx="5" ry="4" fill="var(--cream)" stroke="var(--yellow-deep)" strokeWidth="1.2" />
        <ellipse cx="33" cy="23" rx="6" ry="4.6" fill="var(--cream)" stroke="var(--yellow-deep)" strokeWidth="1.2" />
        <ellipse cx="41" cy="18" rx="4.4" ry="3.6" fill="var(--cream)" stroke="var(--yellow-deep)" strokeWidth="1.2" />
        <circle cx="22" cy="19" r="0.9" fill="var(--flame)" />
        <circle cx="33" cy="22" r="0.9" fill="var(--flame)" />
        <circle cx="40" cy="18" r="0.9" fill="var(--flame)" />
      </Bowl>
    </SideIconFrame>
  )
}

export function RiceIcon() {
  return (
    <SideIconFrame label="Illustration of a bowl of rice">
      <Bowl rim="var(--teal)">
        <ellipse cx="30" cy="20" rx="19" ry="9" fill="var(--cream)" />
        {[16, 21, 26, 31, 36, 41].map((x, i) => (
          <line key={x} x1={x} y1={22 - (i % 2)} x2={x + 3} y2={18 - (i % 2)} stroke="var(--yellow-deep)" strokeWidth="1.1" strokeLinecap="round" />
        ))}
      </Bowl>
    </SideIconFrame>
  )
}

export function MacPieIcon() {
  return (
    <SideIconFrame label="Illustration of macaroni pie">
      <rect x="9" y="20" width="42" height="18" rx="3" fill="var(--yellow)" stroke="var(--yellow-deep)" strokeWidth="2" />
      <rect x="9" y="20" width="42" height="6" rx="3" fill="var(--flame)" opacity="0.85" />
      {[15, 23, 31, 39, 45].map((x) => (
        <circle key={x} cx={x} cy="30" r="1.6" fill="var(--cream)" />
      ))}
    </SideIconFrame>
  )
}

export function GardenSaladIcon() {
  return (
    <SideIconFrame label="Illustration of a garden salad">
      <Bowl rim="var(--teal)">
        <path d="M14,22 q4,-8 10,-2 q4,-9 10,1 q5,-8 10,0" fill="none" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="22" cy="25" r="2" fill="var(--flame)" />
        <circle cx="36" cy="26" r="2" fill="var(--flame)" />
      </Bowl>
    </SideIconFrame>
  )
}

export function CornIcon() {
  return (
    <SideIconFrame label="Illustration of grilled corn">
      <rect x="27" y="8" width="6" height="34" rx="3" fill="var(--yellow)" stroke="var(--yellow-deep)" strokeWidth="1.6" />
      {[12, 18, 24, 30, 36].map((y) => (
        <line key={y} x1="24" y1={y} x2="36" y2={y} stroke="var(--yellow-deep)" strokeWidth="1" opacity="0.6" />
      ))}
      <path d="M22,40 q8,10 16,0" fill="var(--teal)" opacity="0.85" />
    </SideIconFrame>
  )
}

export function GarlicBreadIcon() {
  return (
    <SideIconFrame label="Illustration of garlic bread">
      <path d="M10,34 Q10,14 30,14 Q50,14 50,34 Z" fill="var(--yellow)" stroke="var(--yellow-deep)" strokeWidth="2" />
      {[20, 30, 40].map((x) => (
        <line key={x} x1={x} y1="18" x2={x} y2="33" stroke="var(--flame)" strokeWidth="1.4" opacity="0.7" />
      ))}
    </SideIconFrame>
  )
}

export const SIDE_ICONS = {
  pasta: PastaSaladIcon,
  potato: PotatoSaladIcon,
  rice: RiceIcon,
  macpie: MacPieIcon,
  garden: GardenSaladIcon,
  corn: CornIcon,
  bread: GarlicBreadIcon,
}
