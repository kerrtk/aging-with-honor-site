import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-lato", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://agingwithhonor.com"),
  title: "Aging With Honor | Plan Today. Honor Tomorrow.",
  description: "Empowering families, caregivers, and seniors through trusted education, uplifting resources, and compassionate community support.",
  openGraph: {
    title: "Aging With Honor | Plan Today. Honor Tomorrow.",
    description: "Empowering families, caregivers, and seniors through trusted education, uplifting resources, and compassionate community support.",
    images: [{ url: "/awh-og.png", width: 1200, height: 630, alt: "Aging With Honor — Honor Crest" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/awh-og.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-lato bg-cream text-charcoal antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
