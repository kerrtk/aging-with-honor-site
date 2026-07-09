import Link from "next/link"
import { Search } from "lucide-react"

import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { sections } from "@/lib/content/sections"

const primaryNav = [
  ...sections.map((s) => ({ href: `/section/${s.slug}`, label: s.navLabel })),
  { href: "/investigations", label: "Investigations" },
  { href: "/opinion", label: "Opinion" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs sm:px-6 lg:px-8">
          <span className="hidden sm:inline">Independent sports-integrity journalism</span>
          <div className="flex items-center gap-4">
            <Link href="/tips" className="font-semibold hover:text-[var(--color-gold)]">
              Submit a Tip
            </Link>
            <Link href="/newsletter" className="hover:text-[var(--color-gold)]">
              Newsletter
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Game Integrity Journal home">
          <Logo />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/search"
            aria-label="Search"
            className="rounded-md p-2 text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Search className="h-5 w-5" />
          </Link>
          <Button asChild variant="gold" size="sm" className="hidden sm:inline-flex">
            <Link href="/newsletter">Subscribe</Link>
          </Button>
          <div className="xl:hidden">
            <MobileNav navItems={primaryNav} />
          </div>
        </div>
      </div>
    </header>
  )
}
