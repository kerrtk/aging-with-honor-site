import { ArticleCard } from "@/components/article-card"
import type { Article } from "@/lib/content/schema"

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null
  return (
    <section aria-labelledby="related-heading" className="border-t border-border pt-10">
      <h2 id="related-heading" className="font-display text-2xl font-bold text-foreground">
        Related coverage
      </h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}
