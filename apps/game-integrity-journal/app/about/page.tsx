import type { Metadata } from "next"
import Link from "next/link"

import { TrustBadgeRow } from "@/components/trust-badges"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getAllAuthors } from "@/lib/content/authors"

export const metadata: Metadata = {
  title: "About Us",
  description: "Game Integrity Journal is an independent newsroom covering sports integrity.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  const authors = getAllAuthors()

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-gold-dark)]">
        About Game Integrity Journal
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">
        Sport is worth holding to its own standards.
      </h1>
      <p className="mt-6 text-xl text-muted-foreground">
        Game Integrity Journal is an independent newsroom covering the systems that decide whether sport stays fair:
        doping enforcement, officiating and replay technology, college and youth sports governance, and the
        integrity risks introduced by legalized gambling. We report on the institutions that run sport — not just the
        games themselves.
      </p>

      <section className="mt-14 border-t border-border pt-10">
        <h2 className="font-display text-2xl font-bold text-foreground">What we believe</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-foreground">Accountability requires independence</h3>
            <p className="mt-2 text-muted-foreground">
              We accept no funding from leagues, federations, teams, or betting operators — the entities most likely
              to appear in our reporting.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Fair play means fair reporting</h3>
            <p className="mt-2 text-muted-foreground">
              Every subject of a critical story is contacted for comment before publication. Their response is
              included, in full context, every time.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 border-t border-border pt-10">
        <h2 className="font-display text-2xl font-bold text-foreground">Our standards, at a glance</h2>
        <div className="mt-8">
          <TrustBadgeRow />
        </div>
        <p className="mt-6 text-muted-foreground">
          Read our full editorial standards and corrections policy on the{" "}
          <Link href="/ethics" className="font-semibold text-primary hover:underline">
            Ethics &amp; Standards
          </Link>{" "}
          page.
        </p>
      </section>

      <section className="mt-14 border-t border-border pt-10">
        <h2 className="font-display text-2xl font-bold text-foreground">The newsroom</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          {authors.map((author) => (
            <Link key={author.slug} href={`/authors/${author.slug}`} className="group text-center">
              <Avatar className="mx-auto h-16 w-16">
                <AvatarFallback>{author.initials}</AvatarFallback>
              </Avatar>
              <p className="mt-3 font-semibold text-foreground group-hover:text-[color:var(--color-gold-dark)]">
                {author.name}
              </p>
              <p className="text-sm text-muted-foreground">{author.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
