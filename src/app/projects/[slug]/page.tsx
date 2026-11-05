import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Layers3 } from "lucide-react"
import { projects } from "@/data/portfolio"
import { projectDetails } from "@/data/projectDetails"
import { asset } from "@/lib/utils"

type PageProps = {
  params: Promise<{ slug: string }>
}

// A fixed set of pages is required by GitHub Pages' static Next.js export.
export const dynamicParams = false

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((entry) => entry.slug === slug)

  if (!project) return { title: "Project not found | Lance Apostol" }

  return {
    title: `${project.title} | Lance Apostol`,
    description: project.description,
  }
}

const pad = (n: number) => String(n).padStart(2, "0")

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params
  const index = projects.findIndex((entry) => entry.slug === slug)
  if (index < 0) notFound()

  const project = projects[index]
  const detail = projectDetails[slug]
  if (!detail) notFound()

  const previous = projects[index - 1]
  const next = projects[index + 1]

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[600px] rounded-full bg-purple-500/10 blur-[130px]" aria-hidden="true" />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 border-b border-white/10 px-6 py-6 md:px-10">
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
        >
          <ArrowLeft size={17} aria-hidden="true" /> All projects
        </Link>
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.28em] text-purple-400 hover:text-white">
          LA / Portfolio
        </Link>
      </header>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-14 md:px-10 md:pt-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-purple-400">
          Case study {pad(index + 1)} / {pad(projects.length)} · {detail.category}
        </p>
        <div className="mt-5 flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
              {detail.headline}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-purple-400"
              >
                <Github size={18} aria-hidden="true" /> Source code <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 px-5 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
              >
                View live site <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 lg:mt-16">
          {project.image ? (
            <Image
              src={asset(project.image)}
                      unoptimized
              alt={`${project.title} application screenshot`}
              fill
              priority
              sizes="(min-width: 1280px) 1152px, 100vw"
              className={project.imageFit === "contain" ? "object-contain" : "object-cover"}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-6 bg-gradient-to-br from-neutral-900 via-[#152b2a] to-[#111326] px-8 text-center">
              <Layers3 size={52} className="text-purple-400" aria-hidden="true" />
              <p className="max-w-xl text-3xl font-bold tracking-tight md:text-5xl">{project.title}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-gray-400">Project overview</p>
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-6 border-y border-white/10 py-6 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">Project context</p>
            <p className="mt-2 font-medium text-gray-200">{detail.context}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">Technologies</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-purple-400/25 bg-purple-400/10 px-3 py-1 text-sm text-purple-300">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-purple-400">01 / Overview</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">The idea</h2>
          </div>
          <div className="space-y-9">
            <div>
              <h3 className="mb-3 text-lg font-semibold">The problem</h3>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-300">{detail.problem}</p>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold">The approach</h3>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-300">{detail.approach}</p>
            </div>
          </div>
        </div>

        <section className="mt-24 border-t border-white/10 pt-16" aria-labelledby="implementation-title">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-purple-400">02 / Technical implementation</p>
          <h2 id="implementation-title" className="mb-10 mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Under the hood
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {detail.implementation.map((item, i) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-neutral-900 p-7">
                <p className="font-mono text-sm text-purple-400">{pad(i + 1)}</p>
                <h3 className="mt-7 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-24 grid gap-10 border-t border-white/10 pt-16 lg:grid-cols-2 lg:gap-20">
          <section aria-labelledby="features-title">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-purple-400">03 / Features</p>
            <h2 id="features-title" className="mb-8 mt-3 text-3xl font-bold">What it does</h2>
            <ul className="space-y-4">
              {detail.features.map((feature) => (
                <li key={feature} className="flex gap-4 border-b border-white/10 pb-4 text-gray-200">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="focus-title">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-purple-400">04 / Engineering focus</p>
            <h2 id="focus-title" className="mb-8 mt-3 text-3xl font-bold">Technical considerations</h2>
            <ul className="space-y-4">
              {detail.engineeringFocus.map((focus) => (
                <li key={focus} className="flex gap-4 border-b border-white/10 pb-4 text-gray-200">
                  <span className="mt-1 font-mono text-purple-400" aria-hidden="true"><ArrowRight size={16} /></span>
                  {focus}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <nav aria-label="More project case studies" className="mt-24 grid gap-4 border-t border-white/10 pt-10 md:grid-cols-2">
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-colors hover:border-purple-400/50"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-400">
                <ArrowLeft size={15} aria-hidden="true" /> Previous project
              </span>
              <span className="mt-3 block text-lg font-semibold transition-colors group-hover:text-purple-400">{previous.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-colors hover:border-purple-400/50"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-400">
                Next project <ArrowRight size={15} aria-hidden="true" />
              </span>
              <span className="mt-3 block text-lg font-semibold transition-colors group-hover:text-purple-400">{next.title}</span>
            </Link>
          ) : (
            <Link href="/projects" className="group rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-colors hover:border-purple-400/50">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-400">
                Back to archive <ArrowRight size={15} aria-hidden="true" />
              </span>
              <span className="mt-3 block text-lg font-semibold transition-colors group-hover:text-purple-400">All projects</span>
            </Link>
          )}
        </nav>
        <div className="mt-12 text-center">
          <Link href="/#projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-gray-400 transition-colors hover:text-purple-400">
            <ArrowLeft size={17} aria-hidden="true" /> Return to featured work
          </Link>
        </div>
      </div>
    </main>
  )
}
