# Lance Apostol | Developer Portfolio

A personal developer portfolio showcasing my software projects, technical skills, and journey into AI engineering.

I'm **Lance Jezreel B. Apostol**, a Computer Science student at **Holy Angel University** interested in machine learning, full-stack development, and building software that solves practical problems.

**[Live Portfolio](https://apostol-portfolio-ashy.vercel.app/)** · [GitHub Pages Mirror](https://technix19.github.io/apostol-portfolio/) · [GitHub Profile](https://github.com/Technix19)

## About this site

This responsive, interactive portfolio presents my background, featured projects, technical skills, and contact information. It is built on a customized open-source template with GSAP-powered animations and scroll interactions.

## Featured projects

| Project | Description | Links |
| --- | --- | --- |
| **SourceMind — Evidence-First Document AI** | Document research application with retrieval, page-level citations, user-scoped storage, and optional grounded AI answers. | [Live Site](https://sourcemind-eight.vercel.app/) · [Code](https://github.com/Technix19/sourcemind) |
| **Codely — Adaptive Coding Practice** | Undergraduate thesis platform using a Random Forest classifier and programming-performance metrics to recommend question difficulty. | [Code](https://github.com/francoiseee/Coding-Simulator) |
| **EasyBooks — Bookkeeping Dashboard** | Flutter web application for tracking sales, expenses, gross profit, and reports, with Supabase authentication and data storage. | [Code](https://github.com/Technix19/repo_easybooks) |
| **Barkada League** | Full-stack competition manager with public/private leagues, players, seasons, match recording, standings, and match history. | [Live App](https://barkada-league.vercel.app/) · [Code](https://github.com/Technix19/Barkada_League) |
| **REST API Development** | Academic Node.js/Express backend project featuring CRUD operations, PostgreSQL integration, and in-memory rate limiting. | Featured in portfolio |
| **Personal Portfolio** | This customized Next.js website. | [Live Site](https://apostol-portfolio-ashy.vercel.app/) · [Code](https://github.com/Technix19/apostol-portfolio) |

The project cards and skills shown on the site are managed in `src/data/portfolio.ts`.

## Built with

- **Framework:** Next.js 15, React 19, TypeScript
- **UI:** Tailwind CSS 4, Lucide icons
- **Animation:** GSAP and ScrollTrigger
- **Deployment:** Vercel (primary) and GitHub Pages (static mirror)
- **Tooling:** Node.js, npm, ESLint

## Run locally

You'll need Node.js and npm.

```bash
git clone https://github.com/Technix19/apostol-portfolio.git
cd apostol-portfolio
npm ci
npm run dev
```

Visit **http://localhost:3000**.

### Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Check code with ESLint |
| `npm run build` | Build the Next.js application (Vercel) |
| `npm run start` | Serve the production Next.js build locally |
| `npm run build:pages` | Create the GitHub Pages static export |

## Deploy

### Vercel

Import this repository into Vercel, select **Next.js**, and deploy the `main` branch with the default build settings.

Configure this public production environment variable to use your actual site URL in canonical links and SEO metadata:

```env
NEXT_PUBLIC_SITE_URL=https://apostol-portfolio-ashy.vercel.app
```

This is public configuration, not a secret. Update it if the site moves to a custom domain. **Do not set `GITHUB_PAGES=true` on Vercel.**

### GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` automatically publishes a static export from `main`.

- URL: https://technix19.github.io/apostol-portfolio/
- Build: `npm run build:pages`
- Base path: `/apostol-portfolio` (only for GitHub Pages)

## Where to make changes

| Content | File |
| --- | --- |
| Name, biography metadata, projects, skills, social links | `src/data/portfolio.ts` |
| Hero | `src/components/portfolio/Hero.tsx` |
| Project showcase | `src/components/portfolio/Projects.tsx` |
| Skills | `src/components/portfolio/Skills.tsx` |
| Contact section | `src/components/portfolio/Contact.tsx` |
| Search/SEO metadata | `src/app/layout.tsx` |
| Project screenshots and other assets | `public/` |

### Contact form delivery

The contact form uses [Formspree](https://formspree.io/) to deliver enquiries to a verified email address. The provider handles email notifications and the browser can submit from either Vercel or the static GitHub Pages mirror.

1. Create a free [Formspree account](https://formspree.io/register) using the mailbox where you want to receive portfolio messages. Create a new form (e.g. **Portfolio Contact**) and copy the ID from its endpoint, `https://formspree.io/f/FORM_ID`.
2. Under **Vercel → Project → Settings → Environment Variables**, add `NEXT_PUBLIC_FORMSPREE_FORM_ID` with the form ID, for **Production**, using **Config** (not Secret), then redeploy the portfolio. This is a *public form identifier*, not a password or API token.
3. Under **GitHub → Repository Settings → Secrets and variables → Actions → Variables**, add the repository variable `FORMSPREE_FORM_ID` with the same ID. Rerun **Deploy to GitHub Pages** to update the static mirror.
4. Send one genuine test from the deployed portfolio and verify that Formspree reports the submission and the message arrives in your inbox (check spam if necessary).

**Fallback:** If no form ID is configured, the contact form opens a pre-filled draft in the visitor's email application rather than falsely claiming a message was sent. Failed online submissions keep all entered information and offer a direct-email draft link.

The prior FormSubmit AJAX integration was removed after a controlled diagnostic request returned HTTP 403. A successful build does not prove email delivery; confirm it with a real test using your Formspree account.

The `/cv` page is currently a placeholder while an updated résumé is prepared.

## Get in touch

I’m interested in opportunities to learn, collaborate, and contribute to meaningful AI or software projects.

- [GitHub: @Technix19](https://github.com/Technix19)
- [Email: lanceapostol04@gmail.com](mailto:lanceapostol04@gmail.com)
- [Portfolio](https://apostol-portfolio-ashy.vercel.app/)

## Credits and license

This portfolio is adapted from [Sazzad Ali's open-source developer portfolio](https://github.com/ali-sazzad/sazzadali-portfolio). The original author is credited for the template design and animation architecture.

The original template was published under the **MIT License**. Its copyright and license notice are retained in [LICENSE](LICENSE). The personal content and project materials are customizations for this portfolio.
