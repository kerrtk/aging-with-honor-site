import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { typeBadgeVariant, typeLabel } from "@/lib/content/labels"
import { getSection } from "@/lib/content/sections"
import type { Article } from "@/lib/content/schema"

export function FeaturedHero({ article }: { article: Article }) {
  const section = getSection(article.section)
  return (
    <Link href={`/articles/${article.slug}`} className="group grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="aspect-[16/10] rounded-lg border border-dashed border-border bg-muted" aria-hidden="true" />
      <div>
        <div className="flex items-center gap-3">
          <Badge variant={typeBadgeVariant(article.type)}>{typeLabel(article.type)}</Badge>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {section?.navLabel}
          </span>
        </div>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-foreground group-hover:text-[color:var(--color-gold-dark)] sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{article.dek}</p>
      </div>
    </Link>
  )
}
