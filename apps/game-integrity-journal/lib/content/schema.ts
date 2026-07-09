import { z } from "zod"

export const articleTypeSchema = z.enum(["investigation", "news", "opinion"])
export const accessSchema = z.enum(["free", "member"])

export const sectionSlugSchema = z.enum([
  "doping",
  "officiating",
  "college-sports",
  "youth-sports",
  "gambling",
  "governance",
])

export type SectionSlug = z.infer<typeof sectionSlugSchema>

export const articleFrontmatterSchema = z.object({
  title: z.string().min(1),
  dek: z.string().min(1),
  slug: z.string().min(1),
  section: sectionSlugSchema,
  type: articleTypeSchema.default("news"),
  access: accessSchema.default("free"),
  author: z.string().min(1),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  kicker: z.string().optional(),
})

export type ArticleFrontmatter = z.infer<typeof articleFrontmatterSchema>

export type Article = ArticleFrontmatter & {
  content: string
  readingTime: number
}

export const authorSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  title: z.string().min(1),
  bio: z.string().min(1),
  initials: z.string().min(1).max(3),
})

export type Author = z.infer<typeof authorSchema>
