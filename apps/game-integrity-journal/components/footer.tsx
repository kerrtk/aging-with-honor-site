import Link from "next/link"

import { Logo } from "@/components/logo"
import { NewsletterInline } from "@/components/newsletter-inline"
import { sections } from "@/lib/content/sections"

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <Logo variant="inverted" />
            <p className="mt-4 max-w-xs text-sm text-[var(--color-paper)]/70">
              Independent investigative journalism holding sport accountable to fair play.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">Sections</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.slug}>
                  <Link href={`/section/${s.slug}`} className="text-[var(--color-paper)]/80 hover:text-[var(--color-gold)]">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">Newsroom</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[var(--color-paper)]/80 hover:text-[var(--color-gold)]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ethics" className="text-[var(--color-paper)]/80 hover:text-[var(--color-gold)]">
                  Editorial Standards
                </Link>
              </li>
              <li>
                <Link href="/tips" className="text-[var(--color-paper)]/80 hover:text-[var(--color-gold)]">
                  Submit a Tip
                </Link>
              </li>
              <li>
                <Link href="/investigations" className="text-[var(--color-paper)]/80 hover:text-[var(--color-gold)]">
                  Investigations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">Stay informed</h3>
            <NewsletterInline compact className="mt-4" />
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[var(--color-paper)]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Game Integrity Journal. All rights reserved.</p>
          <p>Fair play, reported without fear or favor.</p>
        </div>
      </div>
    </footer>
  )
}
