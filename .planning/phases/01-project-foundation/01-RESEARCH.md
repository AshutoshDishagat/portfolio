# Phase 1: Project Foundation - Research

## Tailwind CSS v4 Custom Theme
In Tailwind v4, we use the CSS-first `@theme` block.
- **Monochrome setup**: We will define `--color-bg`, `--color-fg`, and `--color-border` using HSL or semantic names.
- **Micro-interactions**: Use `framer-motion` for the stylized toggle to ensure smooth transitions between states.

## Next.js 15 Layout Patterns
- **Root Layout**: Place `Navbar` and `Footer` here to avoid re-renders. Use `next/font` for Outfit/Inter (as decided).
- **Theme Handling**: Use `next-themes` (or a custom lightweight provider) to handle the light/dark state without flash of unstyled content (FOUC).

## Component Architecture
- `src/components/ThemeToggle.tsx`: A framer-motion based switch.
- `src/components/Navbar.tsx`: Uses `next/link` for prefetching.
