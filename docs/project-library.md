# Project library — content guide

The portfolio homepage keeps the existing GSAP project-card animations. Each card now has a
**Read case study** link, and the project heading has a **View all projects** link.

Routes:

- `/projects` — searchable-by-category project archive with alternating image layouts.
- `/projects/<slug>` — a static case study per project.

All routes are statically generated, including for GitHub Pages. Next.js `Link` handles
`basePath` for routes; screenshot paths are prefixed with `asset()`.

## Editing content

- `src/data/portfolio.ts` — card titles, stable slugs, short descriptions,
  screenshot paths, tech stacks, GitHub URLs, and demo URLs.
- `src/data/projectDetails.ts` — category, context, problem, approach,
  implementation highlights, main features, and engineering considerations.
- `src/components/projects/ProjectLibrary.tsx` — filters and project archive layout.
- `src/app/projects/[slug]/page.tsx` — case study design.

Every project in `projects` requires a matching `projectDetails[slug]` entry.
For new projects, assign a permanent lowercase kebab-case slug. The static export
uses those slugs to generate the `/projects/<slug>` pages.

Be precise about personal contributions on team projects: the current copy
describes verifiable project-level functionality rather than assuming one
person built every subsystem. Add personal ownership, performance results,
screenshots, and challenges only once reviewed and corroborated.

## Validation

1. `npm ci`
2. `npm run lint`
3. `npm run build:pages`
4. Inspect `out/projects/index.html` and `out/projects/codely/index.html`.
5. Check desktop and mobile layouts, filter buttons, back links, demo links,
   and keyboard focus states.
6. Merge the PR after checks pass; the existing GitHub Pages workflow
   publishes the static export on `main`.

Do not add unsupported `Link` routes for private projects without a public demo.
The case-study page remains useful even without a live or GitHub link.
