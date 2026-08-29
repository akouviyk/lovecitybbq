// Signature element: a hand-drawn "smoke drift" edge instead of a hard
// straight line between sections — every seam in the page curls like
// smoke off the grill.
export default function SmokeDivider({ from, to, flip = false }) {
  return (
    <div
      aria-hidden="true"
      style={{
        lineHeight: 0,
        transform: flip ? 'scaleY(-1)' : undefined,
        background: from,
      }}
    >
      <svg
        viewBox="0 0 1200 84"
        preserveAspectRatio="none"
        width="100%"
        height="84"
        style={{ display: 'block' }}
      >
        <path
          d="M0,32 C60,60 120,4 190,26 C260,48 300,70 380,50 C460,30 500,4 580,22
             C660,40 700,66 780,48 C860,30 900,6 980,24 C1050,40 1110,58 1200,30
             L1200,84 L0,84 Z"
          fill={to}
        />
      </svg>
    </div>
  )
}
