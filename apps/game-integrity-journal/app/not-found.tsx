import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-crimson)]">404</p>
      <h1 className="mt-2 font-display text-4xl font-bold text-foreground">This story doesn&apos;t exist.</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you&apos;re looking for was moved, removed, or never published.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to the front page</Link>
      </Button>
    </div>
  )
}
