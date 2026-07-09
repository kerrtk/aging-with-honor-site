import type { Metadata } from "next"

import { TipForm } from "@/components/tip-form"

export const metadata: Metadata = {
  title: "Submit a Tip",
  description: "Send Game Integrity Journal a confidential tip about a sports integrity story.",
  alternates: { canonical: "/tips" },
}

export default function TipsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-crimson)]">
        Confidential
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold text-foreground">Submit a Tip</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        If you have information about doping, officiating misconduct, governance failures, or safety concerns in
        sport, we want to hear from you. You can submit anonymously — name and email are optional.
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        We do not share tips or source identities with the subjects of our reporting, employers, or any outside
        party without your explicit consent. Read our full{" "}
        <a href="/ethics" className="font-semibold text-primary hover:underline">
          source protection policy
        </a>
        .
      </p>

      <div className="mt-10 rounded-lg border border-border p-6">
        <TipForm />
      </div>
    </div>
  )
}
