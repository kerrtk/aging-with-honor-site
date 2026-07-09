import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { typeBadgeVariant, typeLabel } from "@/lib/content/labels"
import { getSection } from "@/lib/content/sections"
import type { Article } from "@/lib/content/schema"
import { cn } from "@/lib/utils"

interface ArticleCardProps {
  article: Article
  variant?: "default" | "compact" | "horizontal"
  className?: string
}

export function ArticleCard({ article, variant = "default", className }: ArticleCardProps) {
  const section = getSection(article.section)

  if (variant === "compact") {
    return (
      <Link href={`/articles/${article.slug}`} className={cn("group block", className)}>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{section?.navLabel}</p>
        <h3 className="mt-1 font-display text-base font-semibold leading-snug text-foreground group-hover:text-[color:var(--color-gold-dark)]">
          {article.title}
        </h3>
      </Link>
    )
  }

  if (variant === "horizontal") {
    return (
      <Link href={`/articles/${article.slug}`} className={cn("group flex gap-4", className)}>
        <div
          className="aspect-[4/3] w-28 shrink-0 rounded-md border border-dashed border-border bg-muted sm:w-32"
          aria-hidden="true"
        />
        <div>
          <Badge variant={typeBadgeVariant(article.type)}>{typeLabel(article.type)}</Badge>
          <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground group-hover:text-[color:var(--color-gold-dark)]">
            {article.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{article.dek}</p>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/articles/${article.slug}`} className={cn("group block", className)}>
      <div className="aspect-[16/10] rounded-md border border-dashed border-border bg-muted" aria-hidden="true" />
      <div className="mt-3">
        <Badge variant={typeBadgeVariant(article.type)}>{typeLabel(article.type)}</Badge>
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-foreground group-hover:text-[color:var(--color-gold-dark)]">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{article.dek}</p>
      </div>
    </Link>
  )
}
