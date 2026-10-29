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

/** No finalized PDF is available yet; the CV button is intentionally hidden. */
export const CV_PATH = ""

export const socials = {
  github: "https://github.com/Technix19",
  email: `mailto:${EMAIL}`,
}

export const navItems = ["About", "Projects", "Skills", "Contact"] as const

export const roles = [
  "Aspiring AI Developer",
  "Computer Science Student",
  "Machine Learning Enthusiast",
  "Software Developer",
]

export type Project = {
  title: string
  description: string
  image?: string
  tags: string[]
  link?: string
  github?: string
  comingSoon?: boolean
}

export const projects: Project[] = [
  {
    title: "Codely — Adaptive Coding Practice",
    description:
      "Our undergraduate thesis project: a coding practice platform that uses a Random Forest classifier and programming performance metrics to recommend question difficulty.",
    tags: ["Machine Learning", "Python", "Random Forest", "PostgreSQL", "Judge0"],
  },
  {
    title: "REST API Development",
    description:
      "An academic backend project implementing CRUD endpoints with Node.js and Express, PostgreSQL integration, and in-memory IP rate limiting.",
    tags: ["Node.js", "Express", "PostgreSQL", "REST API"],
  },
  {
    title: "Personal Portfolio (In Progress)",
    description:
      "My developer portfolio, customized from an open-source Next.js and GSAP template to showcase my academic work, technical interests, and journey into AI development.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    github: "https://github.com/Technix19/apostol-portfolio",
  },
]

export const skillClusters = [
  {
    title: "AI & ML",
    accent: "from-emerald-500/30 to-teal-400/5",
    items: ["Python", "Scikit-learn", "Random Forest", "Google Colab"],
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
  { slug: "scikitlearn", name: "Scikit-learn" },
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
