---
title: CertificationsSection now uses varied card styles (feat
slug: certificationssection-now-uses-varied-card-styles-feat
tags: 
scope: project
updated_at: 2026-07-21T15:21:43.503Z
source: live
hook: CertificationsSection now uses varied card styles (featured, wide, tall, compact, default)
---

- CertificationsSection now uses varied card styles (featured, wide, tall, compact, default) instead of uniform grid cells
- First card is always styled as "featured" for visual hierarchy
- Last card becomes "tall" when total count is odd to prevent orphaned single-column layout
- Grid maintains structural columns (sm:2, lg:4) but applies col-span/row-span for organic spacing
- Card styles differ in padding, icon size, title prominence, and decorative elements to avoid visual repetition
- Layout uses flexible grid with natural-height cards rather than forced equal dimensions
- No rigid alignment or identical sizing constraints across cards
- Fixed garbled JSX in `src/components/CertificationsSection.tsx` by rewriting the return statement cleanly
- Corrected `tailwind.config.js` issues:
- Removed duplicate `accent:` key in `colors`
- Moved `fontFamily` to correct level under `extend` instead of nested in `colors`
- Removed duplicate `pulseGlow` keyframes, kept teal version, added missing `fadeIn` keyframe
- Verified build passes with zero diagnostics using `tsc -b && vite build`
- Project uses Tailwind CSS with custom teal accent palette and additional utility classes in `index.css`
- Framer Motion is used for animations and interactive elements
- CertificationsSection implements 5 card styles: featured, wide, tall, compact, and default
- Gmail button fails due to being wrapped in `motion.div` instead of direct `motion.a`, breaking native anchor behavior
- ContactSection uses `rgba(57,255,20,0.15)` for green shadow instead of teal
- Memory confirms CertificationsSection now uses varied card styles as a feature
- CertificationsSection redesigned with a uniform grid layout: `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- All certification cards now have consistent sizing and spacing (`p-5`, `text-sm font-semibold`)
- Visual distinction achieved via color-coded issuer badges and top accent bars
- Hover effects include spring-scale lift (`1.03`), glow border, and accent bar expansion
- Typography and icon sizing standardized across all cards
- Index counters (`01`–`14`) added in bottom-right corner for catalog-like presentation
- No diagnostics or errors in workspace after changes
