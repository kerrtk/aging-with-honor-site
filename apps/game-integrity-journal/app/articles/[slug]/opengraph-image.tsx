import { ImageResponse } from "next/og"

import { getArticleBySlug } from "@/lib/content/articles"
import { getSection } from "@/lib/content/sections"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  const section = article ? getSection(article.section) : undefined

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B1220",
          color: "#F7F4EE",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, backgroundColor: "#C89B3C" }} />
          <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
            Game Integrity Journal
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {section && (
            <span
              style={{
                fontSize: 22,
                color: "#C89B3C",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              {section.navLabel}
            </span>
          )}
          <span style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 1000 }}>
            {article?.title ?? "Game Integrity Journal"}
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
