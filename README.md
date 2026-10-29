# Lance Apostol — Developer Portfolio

A personal portfolio for **Lance Jezreel B. Apostol**, a Computer Science student at Holy Angel University pursuing AI and software development.

Built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **GSAP**.

## About

I'm interested in practical AI, machine learning, and software engineering. My academic work includes **Codely**, an adaptive coding practice platform using a Random Forest classifier. I have also worked on landing pages and API issue resolution at Convertly and Doodliez.

This site highlights my current experience and projects as I develop my AI engineering skills.

## Projects

- **Codely:** Undergraduate thesis project featuring adaptive coding practice and ML-based question difficulty selection.
- **REST API Development:** Node.js/Express coursework covering CRUD operations, PostgreSQL integration, and rate limiting.
- **Personal Portfolio:** This site, customized from an open-source animated portfolio template.

Project screenshots, public repositories, and demo links will be added as they are ready and verified.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For checks:

```bash
npm run lint
npm run build
```

## Personalization

- **Identity, social links, projects and skills:** `src/data/portfolio.ts`
- **Hero:** `src/components/portfolio/Hero.tsx`
- **Desktop and mobile About:** `About.tsx`, `AboutStories.tsx`, `aboutData.tsx`
- **Project gallery:** `src/components/portfolio/Projects.tsx`
- **Skills galaxy:** `src/components/portfolio/Skills.tsx`
- **Contact:** `src/components/portfolio/Contact.tsx`
- **SEO:** `src/app/layout.tsx`

Set `NEXT_PUBLIC_SITE_URL` to the production URL before deploying. The contact form uses FormSubmit and requires activation of the destination email address. The CV button is temporarily removed until a finalized PDF is available.

## Template credits and license

This site is a customized adaptation of [Sazzad Ali's open-source developer portfolio](https://github.com/ali-sazzad/sazzadali-portfolio).

The original source was released under the MIT License. Its copyright and license notice are retained in [LICENSE](LICENSE). The animation architecture and interface originated with the template author; this repository contains personal content and customizations.

Do not reuse the original author's personal project screenshots, CV, or other assets as if they are your own.
