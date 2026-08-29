import { useState } from 'react'

// Drop a real photo (from your Google Business listing, or any photo you
// have rights to use) into /public/images with the matching filename and
// it renders automatically. Until then, a branded illustration fills the
// space instead of a broken image or a gray box — see /public/images/README.md.
export default function PhotoSlot({ src, alt, fallback, aspect = '4 / 3', radius = 'var(--radius)' }) {
  const [failed, setFailed] = useState(false)
  const fill = aspect === 'auto'

  return (
    <div
      style={{
        position: 'relative',
        ...(fill ? { width: '100%', height: '100%' } : { aspectRatio: aspect }),
        borderRadius: radius,
        overflow: 'hidden',
        background: 'var(--charcoal-soft)',
      }}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
        />
      )}
      {failed && (
        <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
          {fallback}
        </div>
      )}
    </div>
  )
}
