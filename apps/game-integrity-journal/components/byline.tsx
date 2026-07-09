import Link from "next/link"
import { format } from "date-fns"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { Author } from "@/lib/content/schema"

export function Byline({
  author,
  publishedAt,
  readingTime,
  size = "default",
}: {
  author: Author
  publishedAt: Date
  readingTime: number
  size?: "default" | "sm"
}) {
  return (
    <div className="flex items-center gap-3">
      <Avatar className={size === "sm" ? "h-8 w-8" : "h-10 w-10"}>
        <AvatarFallback>{author.initials}</AvatarFallback>
      </Avatar>
      <div className="text-sm leading-tight">
        <Link href={`/authors/${author.slug}`} className="font-semibold text-foreground hover:underline">
          {author.name}
        </Link>
        <p className="text-muted-foreground">
          {format(publishedAt, "MMMM d, yyyy")} · {readingTime} min read
        </p>
      </div>
    </div>
  )
}
