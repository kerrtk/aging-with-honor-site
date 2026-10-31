import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { marked } from "marked"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { getPost, getPosts, formatDate } from "@/lib/journal"

const SITE = "https://agingwithhonor.com"

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) return { title: "Not found | Aging With Honor" }

  // seoTitle drives the search result; title stays the headline on the page.
  const metaTitle = post.seoTitle ?? post.title

  return {
    title: `${metaTitle} | Aging With Honor`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: metaTitle,
      description: post.description,
      publishedTime: post.date,
      url: `${SITE}/blog/${post.slug}`,
    },
  }
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) notFound()

  // Content comes from Markdown files in this repository, not from user input.
  const html = await marked.parse(post.body)

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE}/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: "TK Kerr",
      description:
        "Medical equipment technician serving nursing homes, care facilities, and private residences across central Iowa. Founder of Aging With Honor.",
      url: `${SITE}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Aging With Honor",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/awh-seal.png` },
    },
  }

  return (
    <div className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="bg-gradient-to-br from-teal to-teal-dark py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-lato text-sm mb-7 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All journal entries
          </Link>

          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">
            {post.category}
          </span>

          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/65 font-lato text-sm">
            <span>By TK Kerr</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {post.readMinutes} min read
            </span>
          </div>
        </div>
      </div>

      <div className="py-16 px-4">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-cream-dark p-7 sm:p-12">
          <div
            className="prose prose-lg max-w-none font-lato prose-headings:font-playfair prose-headings:text-teal prose-a:text-teal prose-strong:text-charcoal prose-p:text-charcoal/75 prose-li:text-charcoal/75 prose-blockquote:border-l-terracotta prose-blockquote:text-charcoal/70 prose-table:text-base prose-th:text-charcoal prose-td:text-charcoal/75"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl border border-cream-dark p-7 sm:p-8">
          <h2 className="font-playfair text-xl font-bold text-charcoal mb-3">
            About the person who wrote this
          </h2>
          <p className="font-lato text-charcoal/70 leading-relaxed mb-5">
            TK Kerr runs a medical equipment route for UnityPoint at Home out of
            Urbandale, Iowa. Nursing homes, care facilities, and a lot of private
            living rooms, the same stops week after week. Everything published
            here comes from something he has actually seen.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-teal font-lato font-semibold text-sm hover:gap-3 transition-all"
          >
            Read the full story
          </Link>
        </div>
      </div>
    </div>
  )
}
