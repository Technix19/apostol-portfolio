import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CV Coming Soon | Lance Apostol",
  description: "Lance Apostol's updated CV will be available here soon.",
}

export default function CvPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-neutral-950 px-6 text-center text-white">
      <h1 className="text-3xl font-bold">Updated CV coming soon</h1>
      <p className="max-w-md text-gray-400">
        I&apos;m preparing a current copy of my resume. In the meantime,
        feel free to explore my projects or contact me directly.
      </p>
      <Link href="/" className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold">
        Back to portfolio
      </Link>
    </main>
  )
}
