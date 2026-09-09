import type { MetadataRoute } from "next"

const BASE = "https://agingwithhonor.com"

// Only pages with real content are listed. As /courses, /blog, /community and
// /caregiver-resources are filled in, remove their `robots` noindex flag and
// add them here.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: `${BASE}/`,        lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/about`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
  ]
}
