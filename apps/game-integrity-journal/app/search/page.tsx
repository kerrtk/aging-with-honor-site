import type { Metadata } from "next"

import { ArticleCard } from "@/components/article-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { searchArticles } from "@/lib/content/articles"

export const metadata: Metadata = {
  title: "Search",
  robots: { index: false },
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q = "" } = await searchParams
  const results = q ? searchArticles(q) : []

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold text-foreground">Search</h1>
      <form method="GET" className="mt-8 flex gap-3">
        <Input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Search articles, topics, tags…"
          aria-label="Search articles"
          autoFocus
        />
        <Button type="submit">Search</Button>
      </form>

      {q && (
        <p className="mt-8 text-sm text-muted-foreground">
          {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;{q}&rdquo;
        </p>
      )}

      <div className="mt-6 space-y-8">
        {results.map((article) => (
          <ArticleCard key={article.slug} article={article} variant="horizontal" />
        ))}
      </div>
    </div>
  )
}
