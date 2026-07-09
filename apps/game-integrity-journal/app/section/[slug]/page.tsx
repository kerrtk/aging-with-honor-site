import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ArticleCard } from "@/components/article-card"
import { getArticlesBySection } from "@/lib/content/articles"
import { getSection, sections } from "@/lib/content/sections"

export function generateStaticParams() {
  return sections.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const section = getSection(slug)
  if (!section) return {}
  return {
    title: section.title,
    description: section.description,
    alternates: { canonical: `/section/${section.slug}` },
  }
}

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const section = getSection(slug)
  if (!section) notFound()

  const articles = getArticlesBySection(section.slug)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-2xl border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-gold-dark)]">Section</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-foreground">{section.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{section.description}</p>
      </header>

      {articles.length > 0 ? (
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-muted-foreground">No stories published in this section yet. Check back soon.</p>
      )}
    </div>
  )
}
