import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { articleFrontmatterSchema, type Article } from "./schema"
import { calculateReadingTime } from "./reading-time"

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles")

let cache: Article[] | null = null

function loadAll(): Article[] {
  if (cache) return cache

  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"))
  const articles = files.map((filename) => {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), "utf8")
    const { data, content } = matter(raw)
    const parsed = articleFrontmatterSchema.safeParse(data)
    if (!parsed.success) {
      throw new Error(`Invalid frontmatter in content/articles/${filename}: ${parsed.error.message}`)
    }
    return {
      ...parsed.data,
      content,
      readingTime: calculateReadingTime(content),
    }
  })

  cache = articles.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
  return cache
}

export function getAllArticles(): Article[] {
  return loadAll()
}

export function getAllArticleSlugs(): string[] {
  return loadAll().map((a) => a.slug)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return loadAll().find((a) => a.slug === slug)
}

export function getArticlesBySection(section: string, opts: { excludeSlug?: string; limit?: number } = {}): Article[] {
  const results = loadAll().filter((a) => a.section === section && a.slug !== opts.excludeSlug)
  return opts.limit ? results.slice(0, opts.limit) : results
}

export function getArticlesByType(type: string, limit?: number): Article[] {
  const results = loadAll().filter((a) => a.type === type)
  return limit ? results.slice(0, limit) : results
}

export function getFeaturedArticle(): Article {
  const all = loadAll()
  return all.find((a) => a.featured) ?? all[0]
}

export function getLatestArticles(limit = 6, excludeSlug?: string): Article[] {
  return loadAll()
    .filter((a) => a.slug !== excludeSlug)
    .slice(0, limit)
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const all = loadAll()
  const sameSection = all.filter((a) => a.slug !== article.slug && a.section === article.section)
  if (sameSection.length >= limit) return sameSection.slice(0, limit)

  const others = all.filter((a) => a.slug !== article.slug && a.section !== article.section)
  return [...sameSection, ...others].slice(0, limit)
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return loadAll().filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.dek.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  )
}
