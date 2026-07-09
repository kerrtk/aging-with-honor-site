import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Editorial Standards & Ethics",
  description: "How Game Integrity Journal sources, verifies, corrects, and publishes its reporting.",
  alternates: { canonical: "/ethics" },
}

const standards = [
  {
    title: "Independence",
    body: "We accept no funding, sponsorship, or in-kind support from leagues, federations, teams, athlete agencies, or betting operators. Our reporting is funded by readers and subscribers only.",
  },
  {
    title: "Right of reply",
    body: "Every individual or organization named critically in our reporting is contacted for comment before publication, given adequate time to respond, and their response is published in full context — not selectively quoted.",
  },
  {
    title: "Sourcing standard",
    body: "Investigative claims are corroborated by at least two independent sources, or by documentary evidence, before publication. Anonymous sourcing is used only when a source faces credible risk of retaliation, and is disclosed as such to readers.",
  },
  {
    title: "Corrections policy",
    body: "When we get something wrong, we say so — clearly, at the top of the affected story, with the correction dated and the original error described rather than silently edited away.",
  },
  {
    title: "Opinion vs. reporting",
    body: "Opinion pieces are clearly labeled as such in navigation, on article pages, and in social sharing cards. They are never presented as news reporting, and news reporters do not write opinion pieces on subjects they cover.",
  },
  {
    title: "Source protection",
    body: "Confidential sources and tips submitted through our tip line are handled by a limited number of editorial staff and are never shared with subjects of a story, advertisers, or outside parties without the source's explicit consent.",
  },
]

export default function EthicsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-gold-dark)]">
        Editorial Standards
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold text-foreground">Ethics &amp; Standards</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Trust is the only currency an integrity newsroom has. These are the standards we hold ourselves to, and the
        ones we expect readers to hold us accountable for.
      </p>

      <div className="mt-12 space-y-10">
        {standards.map((standard) => (
          <div key={standard.title} className="border-t border-border pt-8">
            <h2 className="font-display text-xl font-bold text-foreground">{standard.title}</h2>
            <p className="mt-2 text-muted-foreground">{standard.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
