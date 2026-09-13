"use client"

import { useState } from "react"
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

type State =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "done"; already: boolean }
  | { status: "failed"; message: string }

export function SubscribeForm({ source = "site" }: { source?: string }) {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [state, setState] = useState<State>({ status: "idle" })

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setState({ status: "sending" })

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, firstName, source }),
      })
      const data = await response.json().catch(() => ({}))

      if (response.ok && data.ok) {
        setState({ status: "done", already: Boolean(data.alreadySubscribed) })
        return
      }

      setState({
        status: "failed",
        message:
          data.error ??
          "Something went wrong on our end. Please email kerr.systems@gmail.com.",
      })
    } catch {
      setState({
        status: "failed",
        message:
          "We could not reach the server. Check your connection and try again.",
      })
    }
  }

  if (state.status === "done") {
    return (
      <div className="text-center py-6" role="status">
        <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-7 h-7 text-teal" />
        </div>
        <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">
          {state.already ? "You were already on the list" : "You are on the list"}
        </h3>
        <p className="font-lato text-sm text-charcoal/60 max-w-sm mx-auto">
          Nothing is being sent out yet. When the first guide is finished, you
          will be among the first to get it.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label
          htmlFor="subscribe-first-name"
          className="text-sm font-lato font-semibold text-charcoal mb-1.5 block"
        >
          First name <span className="font-normal text-charcoal/45">(optional)</span>
        </label>
        <input
          id="subscribe-first-name"
          name="firstName"
          type="text"
          autoComplete="given-name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          className="w-full rounded-lg border border-cream-dark bg-white px-3.5 py-2.5 font-lato text-charcoal placeholder:text-charcoal/35 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25"
          placeholder="What should we call you?"
        />
      </div>

      <div>
        <label
          htmlFor="subscribe-email"
          className="text-sm font-lato font-semibold text-charcoal mb-1.5 block"
        >
          Email address
        </label>
        <input
          id="subscribe-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-lg border border-cream-dark bg-white px-3.5 py-2.5 font-lato text-charcoal placeholder:text-charcoal/35 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25"
          placeholder="you@email.com"
        />
      </div>

      {state.status === "failed" && (
        <div
          role="alert"
          className="flex gap-2.5 rounded-lg border border-terracotta/40 bg-terracotta/5 px-3.5 py-3"
        >
          <AlertCircle className="w-5 h-5 text-terracotta-dark shrink-0 mt-0.5" />
          <p className="font-lato text-sm text-charcoal/80">{state.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={state.status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3 font-lato font-semibold text-white transition-colors hover:bg-terracotta-dark focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:ring-offset-2 disabled:opacity-70"
      >
        {state.status === "sending" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Adding you
          </>
        ) : (
          <>
            <Mail className="w-4 h-4" aria-hidden="true" />
            Keep me posted
          </>
        )}
      </button>

      <p className="font-lato text-xs text-charcoal/45 text-center">
        No newsletter yet, so nothing will arrive until there is something worth
        sending. Unsubscribe any time.
      </p>
    </form>
  )
}
