import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { asset } from "@/lib/utils";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const isVercel = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "vercel";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Lance Apostol | Aspiring AI Developer",
  description:
    "Portfolio of Lance Apostol, a Computer Science student exploring AI, machine learning, and software development.",
  keywords: ["Lance Apostol", "AI Developer", "Computer Science", "Python", "Machine Learning", "Software Development", "Philippines"],
  authors: [{ name: "Lance Jezreel B. Apostol", url: SITE_URL }],
  creator: "Lance Jezreel B. Apostol",
  icons: { icon: { url: asset("/my-letter-favicon.svg"), type: "image/svg+xml" } },
  openGraph: {
    title: "Lance Apostol | Aspiring AI Developer",
    description: "Computer Science projects, AI interests, and software engineering experience.",
    url: SITE_URL,
    siteName: "Lance Jezreel B. Apostol Portfolio",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Lance Apostol | Aspiring AI Developer",
    description: "Exploring AI development through machine learning and practical software projects.",
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the head script may set data-theme before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {isVercel && <Analytics />}
      </body>
    </html>
  );
}
