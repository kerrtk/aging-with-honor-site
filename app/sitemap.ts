import type { MetadataRoute } from "next"
import { getPosts } from "@/lib/journal"

const BASE = "https://agingwithhonor.com"

// Pages with real content are listed here. As /courses, /community and
// /caregiver-resources are filled in, remove their `robots` noindex flag and
// add them below. Journal posts are added automatically as they are published,
// and /blog joins the list once at least one post exists.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const posts = getPosts()

  const core: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ]

  if (posts.length === 0) return core

  return [
    ...core,
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ]
}
