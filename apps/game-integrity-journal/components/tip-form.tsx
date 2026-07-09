"use client"

import { useState, type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function TipForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")

    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch("/api/tips", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-border bg-muted p-6">
        <p className="font-semibold text-foreground">Thank you. Your tip has been received.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          An editor will review it. If you left contact information, we&apos;ll reach out only if we need
          clarification — never to a workplace or public channel.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="tip-message" className="text-sm font-semibold text-foreground">
          What should we look into?
        </label>
        <Textarea id="tip-message" name="message" required minLength={20} className="mt-2" rows={6} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="tip-name" className="text-sm font-semibold text-foreground">
            Name <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <Input id="tip-name" name="name" className="mt-2" />
        </div>
        <div>
          <label htmlFor="tip-email" className="text-sm font-semibold text-foreground">
            Email <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <Input id="tip-email" name="email" type="email" className="mt-2" />
        </div>
      </div>
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Submit tip"}
      </Button>
      {status === "error" && <p className="text-sm text-destructive">Something went wrong. Please try again.</p>}
    </form>
  )
}
