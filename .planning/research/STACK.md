# Stack Research: Modern Next.js Portfolio (2025)

## Primary Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| **Core Framework** | Next.js 15+ (App Router) | Server-first rendering, simplified data fetching, and superior SEO/Performance. |
| **Language** | TypeScript | Essential for type safety across complex Framer Motion props and MongoDB schemas. |
| **Styling** | Tailwind CSS v4 | CSS-first configuration via `@theme`, significantly faster build times, and zero-runtime overhead. |
| **Animations** | Framer Motion | Declarative, powerful animation engine. Industry standard for a "premium" feel. |
| **Database** | MongoDB Atlas | Flexible document storage for projects and contact logs. High availability and free tier. |

## Specialized Libraries

- **Lucide React**: For consistent, premium outline icons.
- **Framer Motion**: For the "Orbiting Skills" and scroll reveals.
- **clsx / tailwind-merge**: To handle dynamic Tailwind class management.

## Integration Patterns

1. **Client/Server Boundary**: Parent pages stay as Server Components for SEO, while animated sections are split into "use client" wrappers.
2. **MongoDB Singleton**: Prevents multiple connection instances during development HMR.
3. **Tailwind v4 `@theme`**: All design tokens (brand colors, fonts) defined in CSS for a cohesive design system.

---
*Last updated: 2026-04-12*
