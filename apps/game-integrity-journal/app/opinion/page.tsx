import type { Metadata } from "next"

import { ArticleCard } from "@/components/article-card"
import { getArticlesByType } from "@/lib/content/articles"

export const metadata: Metadata = {
  title: "Opinion",
  description: "Perspective and analysis on the state of sports integrity.",
  alternates: { canonical: "/opinion" },
}

export default function OpinionPage() {
  const articles = getArticlesByType("opinion")

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-2xl border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-gold-dark)]">
          Perspective
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold text-foreground">Opinion</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Argued positions from our reporters and contributors — clearly labeled, never confused with our news
          reporting.
        </p>
      </header>
      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}
