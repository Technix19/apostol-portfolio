import type { ReactNode } from "react"
import { Code2, PenTool, Rocket } from "lucide-react"

/** Shared About content for the desktop code scene and the mobile stories. */
export const pillars = [
  { Icon: PenTool, title: "Explore", text: "Understand the problem, study the requirements, and choose an approach." },
  { Icon: Code2, title: "Build", text: "Turn ideas into working software using code, APIs, and databases." },
  { Icon: Rocket, title: "Improve", text: "Test, measure, troubleshoot, and refine what I build." },
]

export const strengths = ["Machine Learning", "API Development", "Problem Solving"]
export const stack = [
  { slug: "python", name: "Python", invert: false },
  { slug: "nodejs", name: "Node.js" },
  { slug: "postgresql", name: "PostgreSQL" },
  { slug: "flutter", name: "Flutter" },
]

const K = ({ children }: { children: ReactNode }) => <span className="text-[#34d399]">{children}</span>
const V = ({ children }: { children: ReactNode }) => <span className="text-[#5eead4]">{children}</span>
const P = ({ children }: { children: ReactNode }) => <span className="text-[#6b7280]">{children}</span>
const S = ({ children }: { children: ReactNode }) => <span className="text-[#f9a8d4]">{children}</span>
const key = (k: string) => <span className="text-[#7dd3fc]">{k}</span>

export const LINES: ReactNode[] = [
  <>
    <K>const</K> <V>lance</V> <P>=</P> <P>{"{"}</P>
  </>,
  <>
    {"  "}
    {key("role")}
    <P>:</P> <S>&quot;Aspiring AI Developer&quot;</S>
    <P>,</P>
  </>,
  <>
    {"  "}
    {key("based")}
    <P>:</P> <S>&quot;Pampanga, Philippines&quot;</S>
    <P>,</P>
  </>,
  <>
    {"  "}
    {key("strengths")}
    <P>: [</P>
    <S>&quot;ML&quot;</S>
    <P>, </P>
    <S>&quot;APIs&quot;</S>
    <P>, </P>
    <S>&quot;Problem Solving&quot;</S>
    <P>],</P>
  </>,
  <>
    {"  "}
    {key("stack")}
    <P>: [</P>
    <S>&quot;Python&quot;</S>
    <P>, </P>
    <S>&quot;Node.js&quot;</S>
    <P>, </P>
    <S>&quot;PostgreSQL&quot;</S>
    <P>],</P>
  </>,
  <>
    {"  "}
    {key("motto")}
    <P>:</P> <S>&quot;Build, test, improve&quot;</S>
    <P>,</P>
  </>,
  <>
    <P>{"}"}</P>
  </>,
]
