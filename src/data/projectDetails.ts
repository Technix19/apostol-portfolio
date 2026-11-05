/**
 * Longer, employer-facing project notes.
 *
 * Keep these claims grounded in the work itself. The portfolio's project cards
 * are the source of truth for titles, stack tags, screenshots, and external links.
 * Add outcomes or individual contributions only after they can be verified.
 */
export type ProjectCategory = "AI & ML" | "Full Stack" | "Backend" | "Frontend"

export type ProjectDetail = {
  category: ProjectCategory
  context: string
  headline: string
  problem: string
  approach: string
  implementation: { title: string; description: string }[]
  features: string[]
  engineeringFocus: string[]
}

export const projectCategories = ["All", "AI & ML", "Full Stack", "Backend", "Frontend"] as const

export const projectDetails: Record<string, ProjectDetail> = {
  sourcemind: {
    category: "AI & ML",
    context: "Personal project · Document question-answering system",
    headline: "Answers from your own documents, with evidence you can inspect.",
    problem:
      "AI-generated explanations are difficult to trust when you cannot trace a claim back to the passage it came from. SourceMind focuses on making source material searchable and the evidence behind answers accessible.",
    approach:
      "The application combines a Next.js research workspace with a Python FastAPI service for document ingestion and retrieval. Supabase provides email-and-password authentication, user-scoped PostgreSQL records, and private file storage. It offers keyword search, optional meaning-based retrieval where enabled, and source-only or model-generated responses with linked evidence.",
    implementation: [
      {
        title: "Page-aware ingestion and private storage",
        description:
          "Extracts and indexes text from PDFs, TXT, and Markdown files while retaining page references. Document metadata and text are scoped to the signed-in user with Supabase Row Level Security, and originals are kept in private storage.",
      },
      {
        title: "Retrieval with visible citations",
        description:
          "Uses TF-IDF keyword retrieval and, where configured, embedding-based search with pgvector. Results include relevant passages, document names, and page numbers, with links to open stored originals.",
      },
      {
        title: "Optional grounded AI responses",
        description:
          "Supports evidence-only results as well as optional model-generated answers. Citation references are validated against retrieved passages, and the interface can signal when available evidence is insufficient.",
      },
      {
        title: "Reproducible retrieval evaluation",
        description:
          "Includes a labeled question set and a dashboard reporting retrieval measures such as Recall@k and MRR. The evaluation also documents uncertainty, sample-size limits, and cases where retrieval fails.",
      },
    ],
    features: [
      "Email-and-password accounts with user-scoped research workspaces",
      "Upload and organize text-based PDF, TXT, and Markdown documents",
      "Keyword search and optional semantic retrieval",
      "Source-only responses or optional AI-generated answers",
      "Clickable source excerpts with original PDF page references",
      "Evaluation dashboard with retrieval comparisons and limitations",
    ],
    engineeringFocus: [
      "Protecting user documents with authentication, RLS, and private file access",
      "Making retrieval results traceable instead of presenting unsupported model claims",
      "Comparing retrieval methods without overstating small evaluation results",
      "Keeping optional generation separate from core evidence retrieval",
    ],
  },
  codely: {
    category: "AI & ML",
    context: "Undergraduate thesis · Team project",
    headline: "Coding practice that adapts to each learner's progress.",
    problem:
      "Generic coding exercises can be too easy for some learners and too difficult for others. Codely explores how performance data can guide the next practice challenge.",
    approach:
      "The platform combines a diagnostic assessment, coding practice, and mastery tracking. A Random Forest classifier uses coding performance signals to recommend question difficulty, while Judge0 provides code execution.",
    implementation: [
      {
        title: "Adaptive difficulty",
        description:
          "Uses performance signals such as correctness, attempts, and execution time to guide a beginner, intermediate, or advanced difficulty recommendation.",
      },
      {
        title: "Code execution",
        description:
          "Integrates Judge0 so programming submissions can be executed and evaluated as part of the practice workflow.",
      },
      {
        title: "Progress and mastery",
        description:
          "Tracks performance at a concept level and presents learning progress in the dashboard, including areas that need more practice.",
      },
    ],
    features: [
      "Diagnostic coding assessment",
      "Adaptive difficulty recommendations",
      "Concept mastery and progress tracking",
      "Code execution and feedback",
      "Learning dashboard and suggested practice",
    ],
    engineeringFocus: [
      "Connecting model predictions to a practical user workflow",
      "Selecting useful performance features for difficulty prediction",
      "Keeping execution results and mastery data consistent",
    ],
  },
  easybooks: {
    category: "Full Stack",
    context: "Bookkeeping application · Flutter Web",
    headline: "A practical workspace for everyday business bookkeeping.",
    problem:
      "Sales, expenses, and tax-related summaries are harder to review when financial information is spread across different records and tools.",
    approach:
      "EasyBooks brings transaction recording and financial reporting into one Flutter interface. Supabase handles sign-in and persistent records, while the dashboard summarizes sales, expenses, and gross profit.",
    implementation: [
      {
        title: "Financial dashboard",
        description:
          "Provides date-range summaries for gross sales, expenses, and profit, together with charts that show daily activity.",
      },
      {
        title: "Supabase integration",
        description:
          "Uses Supabase for authentication and user-linked financial records, with Row Level Security policies at the database layer.",
      },
      {
        title: "Flutter Web deployment",
        description:
          "Builds Flutter Web with a cloud-based GitHub Actions workflow and publishes the compiled frontend through Vercel.",
      },
    ],
    features: [
      "Income and expense recording",
      "Gross sales, expense, and profit summaries",
      "Daily financial charts and date filtering",
      "Tax reporting views",
      "Email-and-password authentication",
    ],
    engineeringFocus: [
      "Managing authenticated, user-scoped financial records",
      "Adapting a Flutter application for deployment in a web browser",
      "Keeping reporting calculations consistent with transaction data",
    ],
  },
  "barkada-league": {
    category: "Full Stack",
    context: "League-management web application",
    headline: "A place to organize friendly competitions and track results.",
    problem:
      "Keeping track of players, schedules, match results, and rankings across a friendly league can become messy without a shared system.",
    approach:
      "Barkada League provides a browser-based space to create leagues, organize seasons, record results, and follow leaderboards. It combines a React frontend with a Node.js and Express backend.",
    implementation: [
      {
        title: "League organization",
        description:
          "Supports public or private leagues, player management, and season-level organization.",
      },
      {
        title: "Match records",
        description:
          "Stores match scores and history so participants can review competition results.",
      },
      {
        title: "Full-stack data flow",
        description:
          "Uses React and Vite for the interface, an Express API, and PostgreSQL/Supabase for application data.",
      },
    ],
    features: [
      "Public and private leagues",
      "Player and season management",
      "Match score recording",
      "Leaderboards and match history",
      "Responsive league dashboard",
    ],
    engineeringFocus: [
      "Keeping league, player, and season data related correctly",
      "Updating rankings from recorded match results",
      "Connecting a React UI to backend APIs and persistent storage",
    ],
  },
  "rest-api-development": {
    category: "Backend",
    context: "Academic backend project",
    headline: "REST APIs with persistence and request limits.",
    problem:
      "A backend needs clear request and response behavior, predictable data operations, and safeguards against excessive requests.",
    approach:
      "This academic project explores CRUD endpoints with Node.js and Express, PostgreSQL-backed data operations, and an in-memory IP-based rate limiter.",
    implementation: [
      {
        title: "CRUD endpoints",
        description:
          "Implements HTTP routes for creating, reading, updating, and deleting application records.",
      },
      {
        title: "Database access",
        description:
          "Connects the API to PostgreSQL for persistent storage rather than relying only on in-memory records.",
      },
      {
        title: "Request rate limiting",
        description:
          "Uses an in-memory map to track requests per client IP and respond with HTTP 429 when a client exceeds the allowed limit.",
      },
    ],
    features: [
      "Express-based REST API",
      "Create, read, update, and delete operations",
      "PostgreSQL persistence",
      "In-memory IP rate limiting",
    ],
    engineeringFocus: [
      "RESTful endpoint design and HTTP status codes",
      "Database-backed application state",
      "Handling excessive requests without new middleware packages",
    ],
  },
  "personal-portfolio": {
    category: "Frontend",
    context: "Personal website · Ongoing improvements",
    headline: "An animated portfolio built to show the work behind the code.",
    problem:
      "A project list alone leaves little room to explain technical decisions, demonstrate outcomes, or show how a developer approaches problems.",
    approach:
      "This website customizes an open-source Next.js and GSAP portfolio template with personal content, project previews, responsive motion, and a longer-form project library.",
    implementation: [
      {
        title: "Animated project showcase",
        description:
          "Uses GSAP and ScrollTrigger for horizontal project scrolling on larger screens and stacked-card transitions on smaller screens.",
      },
      {
        title: "Responsive interface",
        description:
          "Combines Next.js, TypeScript, and Tailwind CSS with image previews and accessible project links.",
      },
      {
        title: "Static deployment",
        description:
          "Supports GitHub Pages through a static Next.js export, alongside a conventional Next.js deployment target.",
      },
    ],
    features: [
      "Responsive animated homepage",
      "Featured project previews",
      "Separate project archive and case studies",
      "GitHub and live-demo links",
      "GitHub Pages static export",
    ],
    engineeringFocus: [
      "Preserving usability while introducing scroll-based animation",
      "Making project content easy to maintain",
      "Supporting static hosting and multiple screen sizes",
    ],
  },
}
