import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ArticleCard } from "@/components/article-card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getAllArticles } from "@/lib/content/articles"
import { getAllAuthors, getAuthorBySlug } from "@/lib/content/authors"

export function generateStaticParams() {
  return getAllAuthors().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) return {}
  return {
    title: author.name,
    description: author.bio,
    alternates: { canonical: `/authors/${author.slug}` },
  }
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) notFound()

  const articles = getAllArticles().filter((a) => a.author === author.slug)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-center gap-5 border-b border-border pb-8">
        <Avatar className="h-16 w-16 text-lg">
          <AvatarFallback>{author.initials}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">{author.name}</h1>
          <p className="text-muted-foreground">{author.title}</p>
        </div>
      </div>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{author.bio}</p>

      <h2 className="mt-12 font-display text-2xl font-bold text-foreground">Latest stories</h2>
      <div className="mt-6 space-y-8">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} variant="horizontal" />
        ))}
      </div>
    </div>
  )
}
