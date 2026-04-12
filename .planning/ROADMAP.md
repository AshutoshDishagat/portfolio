# Roadmap: Full-Stack Portfolio

## Overview

A phased journey to build a premium, professional developer portfolio using the Next.js 15+ App Router. We start with a high-performance foundation, layer on sophisticated Framer Motion animations (like the orbiting skills), integrate a MongoDB-backed contact system, and finish with elite SEO and performance optimization.

## Phases

- [ ] **Phase 1: Project Foundation** - Scaffolding, Tailwind v4 setup, and core layout.
- [ ] **Phase 2: Identity & Motion** - Hero section and the signature Orbiting Skills animation.
- [ ] **Phase 3: Work Showcase** - Premium project gallery with hover-based micro-interactions.
- [ ] **Phase 4: Data & Interaction** - MongoDB integration and the functional contact form.
- [ ] **Phase 5: Performance & Launch** - SEO mastery, accessibility audit, and production readiness.

## Phase Details

### Phase 1: Project Foundation
**Goal**: Establish a type-safe, high-performance base for the portfolio.
**Depends on**: Nothing
**Requirements**: FNDN-01, FNDN-03, BRAND-03
**Success Criteria**:
  1. Next.js 15 app is initialized with App Router and TypeScript.
  2. Tailwind CSS v4 is configured with a custom black/white theme.
  3. Navbar and Footer are functional with Light/Dark mode transitions.
**Plans**: 2 plans

Plans:
- [ ] 01-01: Initialize Next.js app and global design tokens.
- [ ] 01-02: Build Root Layout, Navbar, and Theme Toggle component.

### Phase 2: Identity & Motion
**Goal**: Launch the "wow factor" with the hero section and skills orbit.
**Depends on**: Phase 1
**Requirements**: BRAND-01, BRAND-02, SKLL-01, SKLL-02, SKLL-03, SKLL-04
**Success Criteria**:
  1. Hero section displays bold typography and a clear Hire Me CTA.
  2. The Orbiting Skills animation rotates correctly and icons stay upright.
  3. Skill icons are interactive (scaling/tooltips on hover).
**Plans**: 2 plans

Plans:
- [ ] 02-01: Implement Hero section with Framer Motion reveals.
- [ ] 02-02: Build the Orbiting Skills component with client-side animation logic.

### Phase 3: Work Showcase
**Goal**: Present professional projects in a premium, engaging gallery.
**Depends on**: Phase 2
**Requirements**: PROJ-01, PROJ-02, PROJ-03, PROJ-04, BRAND-04
**Success Criteria**:
  1. Projects are displayed in a clean grid/bento layout.
  2. Project cards feature tech tags and functional external links.
  3. Cards have smooth hover states and entrance animations.
**Plans**: 2 plans

Plans:
- [ ] 03-01: Create the Project data structure and Card components.
- [ ] 03-02: Build the Projects grid section with layout transitions.

### Phase 4: Data & Interaction
**Goal**: Enable client lead capture via MongoDB and Server Actions.
**Depends on**: Phase 3
**Requirements**: CONT-01, CONT-02, CONT-03
**Success Criteria**:
  1. User can submit the contact form with validation.
  2. Submission is saved to MongoDB Atlas successfully.
  3. Success/Error messages are displayed to the user via Toasts.
**Plans**: 2 plans

Plans:
- [ ] 04-01: Setup MongoDB connection singleton and Server Actions.
- [ ] 04-02: Build and validate the Contact Form component.

### Phase 5: Performance & Launch
**Goal**: Optimize for search engines and verify the "premium" engineering quality.
**Depends on**: Phase 4
**Requirements**: FNDN-02
**Success Criteria**:
  1. Lighthouse scores are 90+ across all metrics.
  2. SEO Metadata and OpenGraph cards are fully functional.
  3. Site passes a full accessibility audit (WCAG 2.1 compliance).
**Plans**: 1 plan

Plans:
- [ ] 05-01: Performance optimization, SEO tags, and final build validation.

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Project Foundation | 0/2 | Not started | - |
| 2. Identity & Motion | 0/2 | Not started | - |
| 3. Work Showcase | 0/2 | Not started | - |
| 4. Data & Interaction | 0/2 | Not started | - |
| 5. Performance & Launch | 0/1 | Not started | - |

---
*Roadmap defined: 2026-04-12*
