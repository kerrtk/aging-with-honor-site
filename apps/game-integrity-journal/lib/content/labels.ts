import type { Article } from "./schema"

export function typeLabel(type: Article["type"]): string {
  switch (type) {
    case "investigation":
      return "Investigation"
    case "opinion":
      return "Opinion"
    default:
      return "Report"
  }
}

export function typeBadgeVariant(type: Article["type"]): "crimson" | "gold" | "muted" {
  switch (type) {
    case "investigation":
      return "crimson"
    case "opinion":
      return "gold"
    default:
      return "muted"
  }
}
