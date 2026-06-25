"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/",                    label: "Home" },
  { href: "/about",               label: "About" },
  { href: "/caregiver-resources", label: "Caregiver Resources" },
  { href: "/courses",             label: "Courses" },
  { href: "/blog",                label: "Blog" },
  { href: "/community",           label: "Community" },
  { href: "/contact",             label: "Contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-cream-dark shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ─────────────────────────────────────────────── */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/awh-logo.webp"
              alt="Aging With Honor — Plan Today. Honor Tomorrow."
              width={200}
              height={78}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop Nav ──────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-lato text-sm font-medium transition-colors relative pb-0.5
                  ${pathname === link.href
                    ? "text-teal after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-teal after:rounded-full"
                    : "text-charcoal/70 hover:text-teal"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── CTA + Mobile Toggle ──────────────────────────────── */}
          <div className="flex items-center gap-3">
            <Link
              href="/caregiver-resources"
              className="hidden sm:inline-flex items-center bg-terracotta text-white text-sm font-lato font-semibold px-5 py-2.5 rounded-full hover:bg-terracotta-dark transition-colors"
            >
              Free Guide
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-charcoal hover:text-teal hover:bg-cream transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-cream-dark">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-lato text-base py-3 px-4 rounded-lg transition-colors
                  ${pathname === link.href
                    ? "text-teal bg-teal/5 font-semibold"
                    : "text-charcoal/80 hover:text-teal hover:bg-cream"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/caregiver-resources"
              onClick={() => setMobileOpen(false)}
              className="mt-3 bg-terracotta text-white text-center font-lato font-semibold py-3 px-6 rounded-full hover:bg-terracotta-dark transition-colors"
            >
              Free Guide
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
