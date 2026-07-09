import type { MetadataRoute } from "next"

import { getAllArticles } from "@/lib/content/articles"
import { SITE_URL } from "@/lib/json-ld"
import { sections } from "@/lib/content/sections"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/investigations", "/opinion", "/about", "/ethics", "/tips", "/search"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }))

  const sectionRoutes = sections.map((s) => ({
    url: `${SITE_URL}/section/${s.slug}`,
    lastModified: new Date(),
  }))

  const articleRoutes = getAllArticles().map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: a.updatedAt ?? a.publishedAt,
  }))

  return [...staticRoutes, ...sectionRoutes, ...articleRoutes]
}
