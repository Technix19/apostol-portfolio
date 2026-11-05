"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Layers3 } from "lucide-react"
import { projects } from "@/data/portfolio"
import { projectCategories, projectDetails } from "@/data/projectDetails"
import { asset } from "@/lib/utils"

const pad = (number: number) => String(number).padStart(2, "0")

/**
 * The archive is deliberately separate from the scroll-pinned homepage.
 * All filters run locally, so the GitHub Pages static export works without
 * a server or an API request.
 */
export function ProjectLibrary() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All")
  const visible = projects.filter(
    (project) => category === "All" || projectDetails[project.slug].category === category,
  )

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/3 top-0 h-[520px] w-[640px] rounded-full bg-purple-500/10 blur-[140px]"
        aria-hidden="true"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 border-b border-white/10 px-6 py-6 md:px-10">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
        >
          <ArrowLeft size={17} aria-hidden="true" /> Back to portfolio
        </Link>
        <span className="font-mono text-xs uppercase tracking-[0.28em] text-purple-400">
          LA / PROJECTS
        </span>
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-20 md:px-10 md:pt-28">
        <div className="max-w-4xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.32em] text-purple-400">
            Selected work / {pad(projects.length)} projects
          </p>
          <h1 className="text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl md:text-[clamp(5rem,10vw,10rem)]">
            My <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Works.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Beyond the previews: the problems, technical approaches, and details
            behind the applications I&apos;ve worked on.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-y border-white/10 py-5">
          <p className="font-mono text-sm text-gray-400" aria-live="polite">
            <span className="font-semibold text-white">{pad(visible.length)}</span> projects shown
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {projectCategories.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={category === option}
                onClick={() => setCategory(option)}
                className={
                  "min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 " +
                  (category === option
                    ? "border-purple-400 bg-purple-400 text-black"
                    : "border-white/15 bg-white/5 text-gray-300 hover:border-purple-400/60 hover:text-white")
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <section aria-label="Project archive">
          {visible.map((project, index) => {
            const detail = projectDetails[project.slug]
            const imageOnRight = index % 2 !== 0
            const href = `/projects/${project.slug}`

            return (
              <article
                key={project.slug}
                className="grid gap-8 border-b border-white/10 py-14 md:grid-cols-2 md:items-center md:gap-14 md:py-20"
              >
                <Link
                  href={href}
                  aria-label={`Read case study for ${project.title}`}
                  className={
                    "group relative block aspect-[16/11] overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 shadow-2xl shadow-black/20 transition-colors hover:border-purple-400/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400 " +
                    (imageOnRight ? "md:order-2" : "md:order-1")
                  }
                >
                  {project.image ? (
                    <Image
                      src={asset(project.image)}
                      alt={`${project.title} application preview`}
                      fill
                      sizes="(min-width: 768px) 48vw, 100vw"
                      className={
                        (project.imageFit === "contain" ? "object-contain" : "object-cover") +
                        " transition-transform duration-700 motion-safe:group-hover:scale-105"
                      }
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-neutral-900 via-[#152b2a] to-[#0b1215] px-8 text-center">
                      <Layers3 className="h-11 w-11 text-purple-400" aria-hidden="true" />
                      <span className="max-w-xs text-3xl font-bold tracking-tight">{project.title}</span>
                    </div>
                  )}
                  <span className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-black/70 px-3 py-1 font-mono text-sm text-white backdrop-blur">
                    {pad(projects.indexOf(project) + 1)}
                  </span>
                  <span className="absolute bottom-4 right-5 grid h-11 w-11 place-items-center rounded-full bg-purple-400 text-black transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1">
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </span>
                </Link>

                <div className={"space-y-5 " + (imageOnRight ? "md:order-1" : "md:order-2")}>
                  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-purple-400">
                    <span>{pad(projects.indexOf(project) + 1)} / {detail.category}</span>
                    <span className="h-px w-12 bg-purple-400/50" aria-hidden="true" />
                  </div>
                  <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                    <Link href={href} className="transition-colors hover:text-purple-400">
                      {project.title}
                    </Link>
                  </h2>
                  <p className="max-w-xl text-lg leading-relaxed text-gray-300">{detail.headline}</p>
                  <p className="max-w-xl text-sm leading-relaxed text-gray-400">{project.description}</p>

                  <dl className="grid gap-3 border-y border-white/10 py-5 text-sm">
                    <div className="grid grid-cols-[90px_1fr] gap-3">
                      <dt className="font-mono text-xs uppercase tracking-wider text-gray-500">Context</dt>
                      <dd className="text-gray-200">{detail.context}</dd>
                    </div>
                    <div className="grid grid-cols-[90px_1fr] gap-3">
                      <dt className="font-mono text-xs uppercase tracking-wider text-gray-500">Stack</dt>
                      <dd className="text-gray-200">{project.tags.slice(0, 5).join(" · ")}</dd>
                    </div>
                  </dl>
                  <div className="flex flex-wrap items-center gap-5">
                    <Link
                      href={href}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 px-5 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
                    >
                      Read case study <ArrowRight size={17} aria-hidden="true" />
                    </Link>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                      >
                        Live site <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                      >
                        <Github size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </section>

        <div className="mt-20 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-neutral-900 p-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-purple-400">What&apos;s next?</p>
            <h2 className="mt-2 text-2xl font-bold">Have a project in mind?</h2>
          </div>
          <Link
            href="/#contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-medium text-white transition-colors hover:border-purple-400 hover:text-purple-400"
          >
            Get in touch <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  )
}
