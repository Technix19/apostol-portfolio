# Lance Apostol | Developer Portfolio

A personal developer portfolio showcasing my software projects, technical skills, and journey into AI engineering.

I'm **Lance Jezreel B. Apostol**, a Computer Science student at **Holy Angel University** interested in machine learning, full-stack development, and building software that solves practical problems.

**[Live Portfolio](https://apostol-portfolio-ashy.vercel.app/)** · [GitHub Pages Mirror](https://technix19.github.io/apostol-portfolio/) · [GitHub Profile](https://github.com/Technix19)

## About this site

This responsive, interactive portfolio presents my background, featured projects, technical skills, and contact information. It is built on a customized open-source template with GSAP-powered animations and scroll interactions.

## Featured projects

| Project | Description | Links |
| --- | --- | --- |
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

The contact form uses [Web3Forms](https://web3forms.com/) to deliver enquiries to the portfolio owner's verified email. It works from the browser on both Vercel and GitHub Pages; no server or database is required.

1. Open [Web3Forms](https://web3forms.com/), enter the destination email address, and complete the email verification to receive an **Access Key**.
2. In the **Vercel project**, add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to **Production** environment variables (type **Config**), paste that Access Key, and redeploy. The `NEXT_PUBLIC_` prefix is intentional; Web3Forms uses a **public browser-side key**, not a secret server API key.
3. For the **GitHub Pages mirror**, add a GitHub repository **Actions Variable** named `WEB3FORMS_ACCESS_KEY` in Settings → Secrets and variables → Actions → Variables. Run **Deploy to GitHub Pages** again. The workflow injects it as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` during the static export.
4. Submit one test enquiry using the published Vercel site. Verify that the form shows success **and** that the email arrives. Check Spam/Promotions if needed. Repeat on GitHub Pages if you use the mirror.

If no access key is set, the contact form deliberately opens a **pre-filled email draft** rather than claiming a message was delivered. If the provider rejects a submission, the form keeps the entered details, explains the error, and provides a draft-email fallback.

The former FormSubmit integration was removed after a controlled diagnostic request received HTTP 403. **No email delivery is claimed until a valid Web3Forms key is configured and a real message is received.** The `/cv` page is currently a placeholder while an updated résumé is prepared.

## Get in touch

I’m interested in opportunities to learn, collaborate, and contribute to meaningful AI or software projects.

- [GitHub: @Technix19](https://github.com/Technix19)
- [Email: lanceapostol04@gmail.com](mailto:lanceapostol04@gmail.com)
- [Portfolio](https://apostol-portfolio-ashy.vercel.app/)

## Credits and license

This portfolio is adapted from [Sazzad Ali's open-source developer portfolio](https://github.com/ali-sazzad/sazzadali-portfolio). The original author is credited for the template design and animation architecture.

The original template was published under the **MIT License**. Its copyright and license notice are retained in [LICENSE](LICENSE). The personal content and project materials are customizations for this portfolio.
