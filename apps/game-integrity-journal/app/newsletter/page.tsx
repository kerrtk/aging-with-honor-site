import type { Metadata } from "next"

import { NewsletterInline } from "@/components/newsletter-inline"

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Subscribe to Game Integrity Journal's newsletter for investigative reporting on sports integrity.",
  alternates: { canonical: "/newsletter" },
}

const benefits = [
  "Every investigation, the morning it publishes",
  "A monthly roundup of governance and policy changes across sport",
  "Early access to major investigations before they go public",
]

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 text-center sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-gold-dark)]">
        Newsletter
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold text-foreground">
        Get the investigations first.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        One email, a few times a week. No noise — just the reporting that holds sport accountable.
      </p>

      <ul className="mt-8 space-y-2 text-left text-muted-foreground">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex gap-2">
            <span className="text-[color:var(--color-gold-dark)]">&#10003;</span>
            {benefit}
          </li>
        ))}
      </ul>

      <NewsletterInline className="mx-auto mt-10 max-w-md justify-center" />
    </div>
  )
}
