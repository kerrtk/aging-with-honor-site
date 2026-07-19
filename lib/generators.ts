// ─────────────────────────────────────────────────────────────────────────
// Personal Brand Builder — content generators
//
// These are deterministic, template-driven generators. They weave the user's
// own answers into proven copywriting frameworks so the output feels personal
// rather than generic. No network calls — everything runs client-side.
// ─────────────────────────────────────────────────────────────────────────

export interface BrandConfig {
  /** First name or full name to use publicly. */
  name: string
  /** The quality or background that makes this person different. */
  strength: string
  /** A specific description of the ideal person they serve. */
  audience: string
  /** The short version of why they do this. */
  story: string
}

export interface ContentPillar {
  pillar: string
  description: string
  postIdeas: string[]
}

export interface BrandPackage {
  positioningStatement: string
  contentPillars: ContentPillar[]
  bios: Record<string, string>
  storyHooks: string[]
}

/** Trim, collapse internal whitespace, and drop a trailing period. */
function tidy(value: string): string {
  return value.trim().replace(/\s+/g, " ").replace(/[.\s]+$/, "")
}

/** Lowercase the first character — useful for mid-sentence insertions. */
function lower(value: string): string {
  const v = tidy(value)
  return v.charAt(0).toLowerCase() + v.slice(1)
}

/** Best-effort first name from whatever the user typed in the name field. */
function firstName(name: string): string {
  const cleaned = tidy(name).replace(/[^\p{L}\p{N}.\s-]/gu, "")
  return cleaned.split(" ")[0] || cleaned
}

export function generatePersonalBrand(config: BrandConfig): BrandPackage {
  const name = tidy(config.name)
  const first = firstName(config.name)
  const strength = tidy(config.strength)
  const audience = tidy(config.audience)
  const audienceLower = lower(config.audience)
  const story = tidy(config.story)

  const positioningStatement =
    `I'm ${name} — ${lower(strength)}. ` +
    `I help ${audienceLower} go from [pain point] to [result], ` +
    `without the overwhelm, guesswork, or feeling like they have to do it alone. ` +
    `${story}`

  const contentPillars: ContentPillar[] = [
    {
      pillar: "🌱 Your Story & Journey",
      description:
        "The behind-the-scenes content that builds trust. People follow people they relate to — so let them see the real you, not the highlight reel.",
      postIdeas: [
        `The moment everything changed for me: ${story}`,
        `What I wish someone had told ${audienceLower} before they started`,
        `3 things being "${strength.toLowerCase()}" taught me about ${audienceLower}`,
        `My honest before-and-after — and what actually made the difference`,
      ],
    },
    {
      pillar: "💡 Teach & Add Value",
      description:
        "Position yourself as the helpful expert. Every post should leave your audience a little smarter, lighter, or more capable than before.",
      postIdeas: [
        `5 quick tips for ${audienceLower} who feel stuck`,
        `The #1 mistake ${audienceLower} make (and the simple fix)`,
        `A 2-minute habit that changes everything for ${audienceLower}`,
        `Myth vs. truth: what ${audienceLower} get wrong about getting started`,
      ],
    },
    {
      pillar: "❤️ Connect & Build Community",
      description:
        "Turn followers into a community. Ask questions, celebrate wins, and make people feel seen — relationships are what move people to action.",
      postIdeas: [
        `Drop a 🙌 if you're ${audienceLower} and you needed to hear this today`,
        `Tell me in the comments: what's the #1 thing holding you back right now?`,
        `Celebrating a win from someone in our community — your turn is coming`,
        `The question I get asked most by ${audienceLower} — answered`,
      ],
    },
    {
      pillar: "🎯 Invite & Call to Action",
      description:
        "Make the ask. You can't help people who don't know what to do next — so consistently, warmly invite them to take the next step with you.",
      postIdeas: [
        `If you're ${audienceLower} and you're ready for a change, here's how I can help`,
        `I have room for a few new people this week — comment "ME" if that's you`,
        `What working with me actually looks like (and who it's for)`,
        `Stop scrolling. If this is you, send me a message — let's talk.`,
      ],
    },
  ]

  const bios: Record<string, string> = {
    instagram:
      `✨ ${first} | ${strength}\n` +
      `Helping ${audienceLower} 💪\n` +
      `📍 [Your city] | Mom / wife / dreamer\n` +
      `👇 Start here`,
    facebook:
      `${name} — ${strength}.\n\n` +
      `I help ${audienceLower} get real results without the overwhelm. ` +
      `${story}\n\n` +
      `Follow along for tips, encouragement, and the occasional reality check. ` +
      `Have a question? Send me a message — I read every one. 💛`,
    linkedin:
      `${name} | ${strength}\n\n` +
      `I partner with ${audienceLower} to move from where they are to where they want to be. ` +
      `${story}\n\n` +
      `My approach is practical, people-first, and built on trust. ` +
      `If that resonates, let's connect — I'm always happy to share what's working.`,
    tiktok:
      `${first} 🎯 ${strength}\n` +
      `Real tips for ${audienceLower}\n` +
      `Follow for the stuff no one tells you 👇`,
  }

  const storyHooks: string[] = [
    `${story.slice(0, 1).toUpperCase()}${story.slice(1)} — and here's what no one tells you...`,
    `If you're ${audienceLower}, this is the post I wish I'd seen a year ago.`,
    `I almost gave up on [your goal]. Then this one thing changed everything.`,
    `Nobody talks about this side of being ${strength.toLowerCase()}, so I will.`,
    `The truth about [your topic] that ${audienceLower} need to hear today.`,
    `3 years ago I was [where you started]. Today, [where you are]. Here's the bridge.`,
    `Stop me if you've heard this one: "${audience} just can't [common excuse]." Wrong.`,
    `I get asked this constantly by ${audienceLower}, so let's settle it once and for all.`,
    `The day I decided to [pivotal decision] — and why I'd do it again in a heartbeat.`,
    `If I could say one thing to ${audienceLower} who feel invisible, it would be this 👇`,
  ]

  return { positioningStatement, contentPillars, bios, storyHooks }
}
