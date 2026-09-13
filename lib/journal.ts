import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const JOURNAL_DIR = path.join(process.cwd(), "content/journal")

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readMinutes: number
  body: string
}

/**
 * Reads every published post from content/journal.
 * Files with `draft: true` in their frontmatter are skipped, so a piece can
 * live in the repo while it is still being written.
 */
function readAll(): Post[] {
  if (!fs.existsSync(JOURNAL_DIR)) return []

  return fs
    .readdirSync(JOURNAL_DIR)
    .filter((file) => file.endsWith(".md") && file !== "README.md")
    .map((file) => {
      const raw = fs.readFileSync(path.join(JOURNAL_DIR, file), "utf8")
      const { data, content } = matter(raw)
      const words = content.trim().split(/\s+/).filter(Boolean).length

      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title ?? "Untitled"),
        description: String(data.description ?? ""),
        date: String(data.date ?? ""),
        category: String(data.category ?? "Journal"),
        readMinutes: Math.max(1, Math.round(words / 200)),
        body: content,
        draft: data.draft === true,
      }
    })
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ draft: _draft, ...post }) => post)
}

export function getPosts(): Post[] {
  return readAll()
}

export function getPost(slug: string): Post | undefined {
  return readAll().find((post) => post.slug === slug)
}

/**
 * Formats an ISO date in UTC so a yyyy-mm-dd frontmatter value never shifts
 * back a day for readers west of Greenwich.
 */
export function formatDate(iso: string): string {
  if (!iso) return ""
  const parsed = new Date(iso)
  if (Number.isNaN(parsed.getTime())) return iso
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}
