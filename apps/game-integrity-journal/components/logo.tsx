import { cn } from "@/lib/utils"

type LogoVariant = "default" | "inverted"

export function LogoMark({ className, variant = "default" }: { className?: string; variant?: LogoVariant }) {
  const inkHalf = variant === "inverted" ? "var(--color-paper)" : "var(--color-ink)"
  const check = variant === "inverted" ? "var(--color-ink)" : "var(--color-paper)"
  return (
    <svg viewBox="0 0 40 40" className={cn("h-8 w-8", className)} aria-hidden="true">
      <path d="M20 2 L36 8 V19 C36 29 29 35.5 20 38 C11 35.5 4 29 4 19 V8 Z" fill={inkHalf} />
      <path d="M20 2 L36 8 V19 C36 29 29 35.5 20 38 V2 Z" fill="var(--color-gold)" />
      <path
        d="M13 19.5 L18 24.5 L27.5 13.5"
        stroke={check}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function Logo({
  className,
  withWordmark = true,
  variant = "default",
}: {
  className?: string
  withWordmark?: boolean
  variant?: LogoVariant
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark variant={variant} />
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.05rem] font-bold tracking-tight",
              variant === "inverted" ? "text-[var(--color-paper)]" : "text-foreground"
            )}
          >
            Game Integrity
          </span>
          <span
            className={cn(
              "text-[0.65rem] font-semibold uppercase tracking-[0.25em]",
              variant === "inverted" ? "text-[var(--color-gold-light)]" : "text-[var(--color-gold-dark)]"
            )}
          >
            Journal
          </span>
        </span>
      )}
    </span>
  )
}
