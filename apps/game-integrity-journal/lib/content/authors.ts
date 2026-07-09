import fs from "node:fs"
import path from "node:path"
import { authorSchema, type Author } from "./schema"

const AUTHORS_DIR = path.join(process.cwd(), "content", "authors")

let cache: Author[] | null = null

function loadAll(): Author[] {
  if (cache) return cache

  const files = fs.readdirSync(AUTHORS_DIR).filter((f) => f.endsWith(".json"))
  cache = files.map((filename) => {
    const raw = fs.readFileSync(path.join(AUTHORS_DIR, filename), "utf8")
    const parsed = authorSchema.safeParse(JSON.parse(raw))
    if (!parsed.success) {
      throw new Error(`Invalid author data in content/authors/${filename}: ${parsed.error.message}`)
    }
    return parsed.data
  })
  return cache
}

export function getAllAuthors(): Author[] {
  return loadAll()
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return loadAll().find((a) => a.slug === slug)
}
