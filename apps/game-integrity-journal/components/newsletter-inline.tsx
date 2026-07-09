"use client"

import { useState, type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function NewsletterInline({ compact = false, className }: { compact?: boolean; className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [email, setEmail] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <p className={cn("text-sm font-semibold", compact ? "text-[var(--color-gold-light)]" : "text-primary", className)}>
        You&apos;re on the list. Watch your inbox.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-2 sm:flex-row", className)}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={compact ? "border-white/20 bg-transparent text-[var(--color-paper)] placeholder:text-[var(--color-paper)]/50" : undefined}
      />
      <Button type="submit" variant={compact ? "gold" : "default"} disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Sign up"}
      </Button>
      {status === "error" && <p className="text-sm text-destructive">Something went wrong. Try again.</p>}
    </form>
  )
}
