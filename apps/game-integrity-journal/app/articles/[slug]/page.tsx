import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Byline } from "@/components/byline"
import { RelatedArticles } from "@/components/related-articles"
import { ShareBar } from "@/components/share-bar"
import { Badge } from "@/components/ui/badge"
import { getAuthorBySlug } from "@/lib/content/authors"
import { getAllArticleSlugs, getArticleBySlug, getRelatedArticles } from "@/lib/content/articles"
import { typeBadgeVariant, typeLabel } from "@/lib/content/labels"
import { getSection } from "@/lib/content/sections"
import { articleJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/json-ld"
import { ArticleBody } from "@/lib/mdx"

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.dek,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.dek,
      publishedTime: article.publishedAt.toISOString(),
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const author = getAuthorBySlug(article.author)
  if (!author) notFound()

  const section = getSection(article.section)
  const related = getRelatedArticles(article, 3)
  const url = `${SITE_URL}/articles/${article.slug}`

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: article.title,
              dek: article.dek,
              slug: article.slug,
              publishedAt: article.publishedAt,
              updatedAt: article.updatedAt,
              authorName: author.name,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: section?.title ?? "Section", url: `${SITE_URL}/section/${article.section}` },
              { name: article.title, url },
            ])
          ),
        }}
      />

      <div className="flex items-center gap-3">
        <Badge variant={typeBadgeVariant(article.type)}>{article.kicker ?? typeLabel(article.type)}</Badge>
        {section && (
          <Link
            href={`/section/${section.slug}`}
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
          >
            {section.navLabel}
          </Link>
        )}
      </div>

      <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-4 text-xl text-muted-foreground">{article.dek}</p>

      <div className="mt-8 flex flex-col gap-4 border-y border-border py-4 sm:flex-row sm:items-center sm:justify-between">
        <Byline author={author} publishedAt={article.publishedAt} readingTime={article.readingTime} />
        <ShareBar url={url} title={article.title} />
      </div>

      <ArticleBody source={article.content} />

      <div className="mt-16">
        <RelatedArticles articles={related} />
      </div>
    </article>
  )
}
