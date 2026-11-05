import type { Metadata } from "next"
import { ProjectLibrary } from "@/components/projects/ProjectLibrary"

export const metadata: Metadata = {
  title: "Projects | Lance Apostol",
  description:
    "Explore Lance Apostol's software and machine learning projects, including case studies, technologies, screenshots, and development approaches.",
}

export default function ProjectsPage() {
  return <ProjectLibrary />
}
