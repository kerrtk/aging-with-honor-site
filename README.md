# Media Monorepo

Two independent Next.js apps, each its own brand, dependency tree, and deployment target.

```
apps/
  aging-with-honor/        AgingWithHonor.com — caregiver & senior-support education
  game-integrity-journal/  GameIntegrityJournal.com — sports-integrity investigative journalism
```

Each app is self-contained: own `package.json`, own Tailwind/Next config, own `components/ui`
primitives. There is no shared runtime package between them by design — the two brands are
meant to scale, deploy, and evolve independently.

## Getting started

```bash
npm install                # installs both workspaces from the repo root
npm run dev:awh            # run Aging With Honor locally
npm run dev:gij            # run Game Integrity Journal locally
```

## Deployment

Each app should be its own Vercel project (or equivalent), with **Root Directory** set to
`apps/aging-with-honor` or `apps/game-integrity-journal` respectively, and its own custom
domain. Building one app never requires building or deploying the other.

## Adding a new app

Create a new directory under `apps/`, give it its own `package.json` with a unique `"name"`,
and it's automatically picked up by the root workspaces config — no other changes needed.
