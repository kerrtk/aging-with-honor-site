import type { Metadata } from "next"
import { Fraunces, Inter } from "next/font/google"

import "./globals.css"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { organizationJsonLd, SITE_URL } from "@/lib/json-ld"

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

const description =
  "Independent investigative journalism covering doping, officiating, college and youth sports governance, gambling integrity, and fair play."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Game Integrity Journal | Sports Integrity, Investigated",
    template: "%s | Game Integrity Journal",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Game Integrity Journal",
    title: "Game Integrity Journal | Sports Integrity, Investigated",
    description,
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
