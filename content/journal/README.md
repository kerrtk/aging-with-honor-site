# The Journal

Every `.md` file in this folder becomes a post at `/blog/<filename>`.
The filename is the URL, so keep it lowercase with hyphens and treat it as
permanent — changing it later breaks any link anyone has shared.

## Frontmatter

Every post starts with this block:

```markdown
---
title: Can Medicare Refuse to Pay If You Are Under Observation
description: One sentence that shows up in search results and on the journal index. Write it for a person, not a crawler.
date: 2026-09-20
category: Medicare
draft: false
---

The post itself starts here, in plain Markdown.
```

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Becomes the `<h1>` and the browser tab title |
| `description` | yes | The meta description. Aim for 140–160 characters |
| `date` | yes | `YYYY-MM-DD`. Controls ordering, newest first |
| `category` | no | Shown as a label. Defaults to `Journal` |
| `draft` | no | `true` keeps the file in the repo but off the site entirely |

Read time is calculated from the word count, so there is nothing to set.

## Publishing

Commit the file to `main`. Vercel rebuilds and the post is live in about a
minute, added to the sitemap automatically.

The `/blog` index is set to `noindex` while there are no published posts.
That lifts by itself the moment the first one goes up — nothing to remember.

## House rules

- Names of patients, families, and facilities are always changed. Always.
- Write what you actually saw. Nothing on this site should be sourced from
  anywhere but real experience.
- Explain how systems work and what to ask. Do not give medical or legal
  advice, and point people to the professional who can.
