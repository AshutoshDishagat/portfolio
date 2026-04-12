# Pitfalls Research: Portfolio Design & Deployment

## Technical Gotchas

- **Framer Motion Bundle Size**: Including `framer-motion` adds significant weight to the JS bundle. Use the `domMax` or `domAnimation` features of the `m` component (Lazy Motion) if performance targets are missed.
- **Hydration Mismatches**: Using `Math.random()` or time-based logic in the Orbit animation can lead to hydration errors (Server value vs Client value). Use `useEffect` to trigger specific random initial positions only on the client.
- **Connect Pooling**: Next.js HMR in development can swamp MongoDB with too many connections. **MUST** use the singleton `global` check pattern.
- **Z-Index Wars**: Orbiting animations can often overlap fixed elements like Navbars or Modals if not carefully scoped. Use explicit `relative` positioning and `z-index` layering.

## Design Mistakes

- **Accessibility (a11y)**: Rotating text/icons can be hard for screen readers and users with motion sensitivity. Provide a **prefers-reduced-motion** toggle or static alternative.
- **Broken SEO**: Over-relying on Client Components can prevent Google from indexing the content. Keep important text (Project titles, About Me) in Server Components.
- **Mobile Clutter**: The "Orbiting Skills" might be too large for small screens. Plan a fallback to a clean grid layout for mobile users.

---
*Last updated: 2026-04-12*
