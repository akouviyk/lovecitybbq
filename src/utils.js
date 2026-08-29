// Resolves an asset path against Vite's configured base, so images in
// /public work correctly both in dev (base "/") and once deployed under
// a GitHub Pages subpath (base "/lovecitybbq/").
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
