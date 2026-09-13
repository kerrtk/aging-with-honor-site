# Aging With Honor — project notes for Claude

This is TK Kerr's Aging With Honor site (agingwithhonor.com). Read this before
changing anything.

## The one rule that matters most

**Never put anything on this site that is not true.**

In September 2026 this site was found to be carrying fabricated testimonials
from people who do not exist, a named care facility that does not exist, nine
priced courses with invented star ratings, nine blog articles that were never
written, twenty-four downloads that did not exist, and three forms that told
visitors "your guide is on its way" while discarding every submission. All of
it was live, on a site aimed at families making decisions about their parents'
care.

That is the standard this project is recovering from. So:

- No invented statistics, review counts, ratings, or subscriber numbers.
- No testimonials or quotes unless TK confirms the person is real and consenting.
- No product, course, guide, or download listed before it exists.
- No form that reports success it did not receive. If a backend is missing, the
  form says so plainly.
- No anecdote attributed to TK's experience unless TK supplied it. Do not write
  "I watched a family..." on his behalf.

When something is not ready, the site says it is not ready. That honesty is the
brand's actual competitive position, not a limitation to work around.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 3 + `@tailwindcss/typography`
- Markdown posts via `gray-matter` + `marked`
- Hosted on Vercel, project `aging-with-honor-site`, team "Kerr Systems"
- Repo `kerrtk/aging-with-honor-site`; pushing to `main` deploys production

## Brand

Locked July 2026 as "Honor Crest". Do not redesign these.

| Token | Value | Notes |
| --- | --- | --- |
| Pine (`teal` in Tailwind) | `#256A5C` | Primary |
| Clay (`terracotta`) | `#BA6444` | Accent |
| Linen (`cream`) | `#EAD5C2` | Ground |
| Charcoal | `#2D2B29` | Text |
| Gold | `#D9A566` | Inside the seal only; elsewhere a hairline accent |

Fonts: Playfair Display for display (`font-playfair`), Lato for body
(`font-lato`). Tagline: "Plan Today. Honor Tomorrow."

Pine & Clay belongs to Aging With Honor and Kerr Life Vision only. Never use it
for Game Integrity Journal or VeraCell/MPG.

## Voice

Write like a real person talking to one person they care about.

- Vary sentence length. Some short. Some that carry a thought all the way.
- Natural connectors (and, but, so, because).
- Never "in conclusion", "overall", "moreover", "furthermore".
- Lead with the person, not the statistic.
- No clichés, and go easy on em dashes.
- Faith shows up naturally, never preachy.

The audience is exhausted family caregivers, CNAs and aides, and care facility
staff. Write for the daughter reading this at 2am.

## Publishing a journal post

Posts are `.md` files in `content/journal/`. The filename is the URL and is
permanent once published.

```markdown
---
title: "The headline the reader sees (becomes the H1)"
seoTitle: "The keyword-led version for the title tag"   # optional
description: Meta description, roughly 140-160 characters, written for a person.
date: 2026-09-13
category: Medicare
draft: false
---

Body in plain Markdown. No H1 here — the frontmatter title is the H1.
```

- `seoTitle` drives the `<title>` tag and Open Graph title; `title` stays the
  on-page H1. TK uses this split deliberately.
- `draft: true` keeps a file in the repo but entirely off the site.
- Read time is derived from word count. Nothing to set.
- Posts are added to `sitemap.xml` automatically.
- Plain Markdown, not MDX, so a post can never break the build.

`content/journal/README.md` holds the same reference for TK.

## Writing about Medicare, health, or money (YMYL)

This category is Your Money or Your Life. Google weights trust hardest here and
a wrong figure costs a real family real money.

- Verify every fact against a **primary** source: CMS, the Federal Register,
  Medicare.gov. Not secondary articles, which are frequently out of date.
- Cite the sources in the post and link them.
- Explain how a system works and what questions to ask. Do not give medical or
  legal advice. Point to the professional.
- If a claim cannot be verified, leave it out and say why.
- Dated figures (deductibles, coinsurance) need the year stated in the text so
  they can be found and updated later.

Names of patients, families, and facilities are always changed. Always.

## SEO conventions

- `app/sitemap.ts` and `app/robots.ts` generate both files.
- Every page sets its own `metadata`. Do not let pages inherit one title.
- Thin pages carry `robots: { index: false, follow: true }` until they hold real
  content. `/blog` lifts this automatically on the first published post; lift it
  by hand on `/courses`, `/community`, `/caregiver-resources` as each fills, and
  add them to the sitemap at the same time.
- Posts emit Article + Person JSON-LD. The Person block is an E-E-A-T signal:
  TK's first-hand experience on his route is the site's core advantage, so
  authorship stays explicit and real.

Content strategy is three pillars: Medicare (observation status first), the
first 90 days of family caregiving, and central Iowa local content. Head terms
like "caregiver resources" belong to AARP and the NIA and are not the target.

## Environment variables

Set in Vercel, never committed:

- `BREVO_API_KEY` — Brevo transactional/contacts key
- `BREVO_LIST_ID` — numeric list id

`app/api/subscribe/route.ts` returns 503 with an honest message when these are
missing. Do not "fix" that by faking success.

## How to work here

- Push to a branch, let Vercel build a preview, and have TK review before
  merging to `main`. Production is a public site read by people in distress.
- **Verify by looking.** Open the rendered page in a browser and read it. A
  green build is not proof the content is right.
- Keep changes minimal and scoped to what was asked.
- When TK corrects a fact, the correction wins and it goes in his memory so it
  does not recur.

## Known open items

- **agingwithhonor.com does not serve this site.** It 302-redirects to
  `aging-with-honor-site.vercel.app` and is not attached to the Vercel project.
  Registrar is Hostinger. Until DNS points at Vercel, no SEO work compounds.
- No `/privacy`, `/terms`, or affiliate disclosure pages yet. Required before
  any affiliate or sponsored revenue.
- The Caregiver's Companion Guide is referenced as in progress and does not
  exist yet. Do not link to it as if it does.
