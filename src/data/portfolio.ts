/**
 * Portfolio content. Keep personal claims accurate and add live project links
 * only when the corresponding demos or repositories are ready to share.
 */
export const PERSON = {
  name: "Lance Jezreel B. Apostol",
  firstName: "Lance",
  initials: "LA",
  location: "Guagua, Pampanga, Philippines",
  role: "Computer Science Student & Aspiring AI Developer",
  motto: "Building useful software, one problem at a time.",
} as const

export const EMAIL = "lanceapostol04@gmail.com"
export const PHONE = "09327688198"

/** No finalized PDF is available yet; the CV button is intentionally hidden. */
export const CV_PATH = ""

export const socials = {
  github: "https://github.com/Technix19",
  email: `mailto:${EMAIL}`,
  phone: "tel:+639327688198",
}

export const navItems = ["About", "Projects", "Skills", "Contact"] as const

export const roles = [
  "Aspiring AI Developer",
  "Computer Science Student",
  "Machine Learning Enthusiast",
  "Software Developer",
]

export type Project = {
  slug: string
  title: string
  description: string
  image?: string
  imageFit?: "contain" | "cover"
  tags: string[]
  link?: string
  github?: string
  comingSoon?: boolean
}

export const projects: Project[] = [
  {
    slug: "sourcemind",
    title: "SourceMind — Evidence-First Document AI",
    description:
      "A document question-answering app that helps you research PDFs and notes with source-backed answers, page-level citations, and optional AI generation. Built with FastAPI, Next.js, Supabase, and retrieval evaluation.",
    image: "/sourcemind-dashboard-hq.png",
    imageFit: "contain",
    tags: ["Python", "FastAPI", "Next.js", "Supabase", "RAG", "PostgreSQL"],
    github: "https://github.com/Technix19/sourcemind",
    link: "https://sourcemind-eight.vercel.app/",
  },
  {
    slug: "codely",
    title: "Codely — Adaptive Coding Practice",
    description:
      "Our undergraduate thesis project: a coding practice platform that uses a Random Forest classifier and programming performance metrics to recommend question difficulty.",
    image: "/codely-dashboard.webp",
    imageFit: "contain",
    tags: ["Machine Learning", "Python", "Random Forest", "PostgreSQL", "Judge0"],
    github: "https://github.com/francoiseee/Coding-Simulator",
    link: "https://coding-simulator-eight.vercel.app/",
  },
  {
    slug: "easybooks",
    title: "EasyBooks — Bookkeeping Dashboard",
    description:
      "A Flutter-based bookkeeping web app for recording sales and expenses, tracking gross profit, viewing daily charts, and generating tax reports. Uses Supabase for authentication and data, with Flutter Web deployed on Vercel.",
    image: "/easybooks-dashboard-hires.webp",
    imageFit: "contain",
    tags: ["Flutter", "Dart", "Supabase", "Vercel", "Financial Reporting"],
    github: "https://github.com/Technix19/repo_easybooks",
    link: "https://easybooks-7oeqic9a1-codely4.vercel.app/",
  },
  {
    slug: "barkada-league",
    title: "Barkada League",
    description:
      "A full-stack web app for friendly competitions. Create public or private leagues, manage players and seasons, record match scores, and track live leaderboards and match history.",
    image: "/barkada-league.webp",
    imageFit: "cover",
    tags: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Supabase"],
    github: "https://github.com/Technix19/Barkada_League",
    link: "https://barkada-league.vercel.app/",
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "My developer portfolio, customized from an open-source Next.js and GSAP template to showcase my academic work, technical interests, and journey into AI development.",
    image: "/personal-portfolio-hero-hq.webp",
    imageFit: "contain",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    github: "https://github.com/Technix19/apostol-portfolio",
  },
]

export const skillClusters = [
  {
    title: "AI & ML",
    accent: "from-emerald-500/30 to-teal-400/5",
    items: ["Python", "Random Forest", "Model Evaluation", "Google Colab"],
  },
  {
    title: "Backend",
    accent: "from-rose-500/30 to-orange-400/5",
    items: ["Node.js", "Express", "PostgreSQL", "Supabase", "REST APIs"],
  },
  {
    title: "Frontend",
    accent: "from-blue-500/30 to-cyan-400/5",
    items: ["JavaScript", "HTML5", "CSS3", "Flutter", "Dart"],
  },
  {
    title: "Dev Tools",
    accent: "from-amber-400/30 to-yellow-300/5",
    items: ["Git", "GitHub", "Figma", "Vercel", "VS Code"],
  },
  {
    title: "Soft Skills",
    accent: "from-purple-500/30 to-pink-400/5",
    items: ["Problem Solving", "Communication", "Teamwork", "Leadership", "Critical Thinking"],
  },
]

/** Supported Devicon slugs for the floating background, skill icons, and tech marquee. */
export const techIcons: { slug: string; name: string; variant?: string }[] = [
  { slug: "python", name: "Python" },
  { slug: "html5", name: "HTML5" },
  { slug: "css3", name: "CSS3" },
  { slug: "javascript", name: "JavaScript" },
  { slug: "nodejs", name: "Node.js" },
  { slug: "express", name: "Express" },
  { slug: "postgresql", name: "PostgreSQL" },
  { slug: "supabase", name: "Supabase" },
  { slug: "flutter", name: "Flutter" },
  { slug: "dart", name: "Dart" },
  { slug: "java", name: "Java" },
  { slug: "git", name: "Git" },
  { slug: "github", name: "GitHub" },
  { slug: "figma", name: "Figma" },
  { slug: "vscode", name: "VS Code" },
  { slug: "vercel", name: "Vercel" },
]

export const deviconUrl = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`
