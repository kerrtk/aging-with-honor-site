import type { Metadata } from "next"

import { ArticleCard } from "@/components/article-card"
import { FeaturedHero } from "@/components/featured-hero"
import { NewsletterInline } from "@/components/newsletter-inline"
import { SectionRail } from "@/components/section-rail"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  getArticlesBySection,
  getArticlesByType,
  getFeaturedArticle,
  getLatestArticles,
} from "@/lib/content/articles"
import { sections } from "@/lib/content/sections"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  const featured = getFeaturedArticle()
  const latest = getLatestArticles(5, featured.slug)
  const investigations = getArticlesByType("investigation", 5).filter((a) => a.slug !== featured.slug)
  const opinion = getArticlesByType("opinion", 5)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <FeaturedHero article={featured} />

      <section aria-label="Coverage highlights" className="mt-16 border-t border-border pt-10">
        <Tabs defaultValue="latest">
          <TabsList>
            <TabsTrigger value="latest">Latest</TabsTrigger>
            <TabsTrigger value="investigations">Investigations</TabsTrigger>
            <TabsTrigger value="opinion">Opinion</TabsTrigger>
          </TabsList>
          <TabsContent value="latest">
            <div className="grid gap-6 sm:grid-cols-2">
              {latest.map((article) => (
                <ArticleCard key={article.slug} article={article} variant="horizontal" />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="investigations">
            <div className="grid gap-6 sm:grid-cols-2">
              {investigations.map((article) => (
                <ArticleCard key={article.slug} article={article} variant="horizontal" />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="opinion">
            <div className="grid gap-6 sm:grid-cols-2">
              {opinion.map((article) => (
                <ArticleCard key={article.slug} article={article} variant="horizontal" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {sections.map((section) => (
        <SectionRail
          key={section.slug}
          section={section}
          articles={getArticlesBySection(section.slug, { excludeSlug: featured.slug, limit: 3 })}
        />
      ))}

      <section className="mt-16 rounded-lg bg-[var(--color-ink)] px-6 py-12 text-center text-[var(--color-paper)] sm:px-12">
        <h2 className="font-display text-3xl font-bold">Get the investigations first.</h2>
        <p className="mx-auto mt-3 max-w-xl text-[var(--color-paper)]/70">
          One email, a few times a week. No noise — just the reporting that holds sport accountable.
        </p>
        <NewsletterInline compact className="mx-auto mt-6 max-w-md justify-center" />
      </section>
    </div>
  )
}
