import Link from "next/link"

import { ArticleCard } from "@/components/article-card"
import type { Article } from "@/lib/content/schema"
import type { Section } from "@/lib/content/sections"

export function SectionRail({ section, articles }: { section: Section; articles: Article[] }) {
  if (articles.length === 0) return null
  return (
    <section aria-labelledby={`section-${section.slug}`} className="border-t border-border py-10">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 id={`section-${section.slug}`} className="font-display text-2xl font-bold text-foreground">
          {section.title}
        </h2>
        <Link
          href={`/section/${section.slug}`}
          className="text-sm font-semibold text-primary hover:text-[color:var(--color-gold-dark)]"
        >
          View all &rarr;
        </Link>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}
