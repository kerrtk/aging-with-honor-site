import { CheckCircle2, Lock, ScrollText, ShieldCheck } from "lucide-react"

const badges = [
  { icon: ShieldCheck, label: "Editorially Independent" },
  { icon: CheckCircle2, label: "Every Claim Fact-Checked" },
  { icon: Lock, label: "Sources Protected" },
  { icon: ScrollText, label: "Public Corrections Policy" },
]

export function TrustBadgeRow() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {badges.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center gap-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)]/15 text-[var(--color-gold-dark)]">
            <Icon className="h-6 w-6" />
          </div>
          <p className="text-sm font-semibold text-foreground">{label}</p>
        </div>
      ))}
    </div>
  )
}
