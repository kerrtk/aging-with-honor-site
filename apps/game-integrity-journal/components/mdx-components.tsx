import type { MDXComponents } from "mdx/types"

import { cn } from "@/lib/utils"

function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 border-l-4 border-[color:var(--color-gold)] pl-6 font-display text-2xl italic leading-snug text-primary">
      {children}
    </blockquote>
  )
}

function Callout({ children, label = "Context" }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="my-8 rounded-md border border-border bg-muted p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-gold-dark)]">
        {label}
      </p>
      <div className="text-sm text-foreground">{children}</div>
    </div>
  )
}

function Figure({ caption, children }: { caption?: string; children: React.ReactNode }) {
  return (
    <figure className="my-8">
      {children}
      {caption && <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption>}
    </figure>
  )
}

function ImagePlaceholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md border border-dashed border-border bg-muted px-4 text-center text-sm text-muted-foreground"
      )}
      style={{ aspectRatio: aspect }}
    >
      {label}
    </div>
  )
}

export const mdxComponents: MDXComponents = {
  Pullquote,
  Callout,
  Figure,
  ImagePlaceholder,
}
