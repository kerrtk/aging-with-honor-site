import type { SectionSlug } from "./schema"

export interface Section {
  slug: SectionSlug
  title: string
  navLabel: string
  description: string
}

export const sections: Section[] = [
  {
    slug: "doping",
    title: "Doping & Anti-Doping",
    navLabel: "Doping",
    description:
      "Testing regimes, banned-substance enforcement, and the science and politics of a level playing field.",
  },
  {
    slug: "officiating",
    title: "Officiating & Fair Play",
    navLabel: "Officiating",
    description:
      "Referee accountability, replay technology, and the human and machine judgment calls that decide games.",
  },
  {
    slug: "college-sports",
    title: "College Athletics",
    navLabel: "College",
    description:
      "Recruiting, NIL, conference realignment, and governance across amateur and collegiate sport.",
  },
  {
    slug: "youth-sports",
    title: "Youth & Amateur Sports",
    navLabel: "Youth Sports",
    description:
      "Safety, coaching conduct, and the integrity of the systems that shape young athletes.",
  },
  {
    slug: "gambling",
    title: "Betting & Gambling Integrity",
    navLabel: "Gambling",
    description:
      "Match-fixing risk, sportsbook partnerships, and the integrity infrastructure of a legalized-betting era.",
  },
  {
    slug: "governance",
    title: "Governance & Federations",
    navLabel: "Governance",
    description:
      "Leadership accountability inside the leagues, federations, and governing bodies that run sport.",
  },
]

export function getSection(slug: string): Section | undefined {
  return sections.find((s) => s.slug === slug)
}
