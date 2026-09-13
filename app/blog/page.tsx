import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { getPosts, formatDate } from "@/lib/journal"

export function generateMetadata(): Metadata {
  const hasPosts = getPosts().length > 0

  return {
    title: "Journal | Aging With Honor",
    description: hasPosts
      ? "Practical writing on caregiving, Medicare, and aging with dignity, drawn from daily rounds through central Iowa care facilities."
      : "Stories and practical writing from Aging With Honor. The first articles are in progress.",
    alternates: { canonical: "/blog" },
    // An empty index has nothing to offer a search result, so keep it out
    // until there is something to read. This lifts by itself on the first post.
    robots: hasPosts ? undefined : { index: false, follow: true },
  }
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">
            The Journal
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Stories From the Heart
          </h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto">
            Writing from the route, for the people carrying this work.
          </p>
        </div>
      </div>

      <div className="py-20 px-4">
        {posts.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-cream-dark p-10 sm:p-12 text-center">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-charcoal mb-5">
              The First Articles Are Being Written
            </h2>
            <div className="space-y-4 font-lato text-charcoal/70 leading-relaxed text-left">
              <p>
                No posts published yet. The writing is drawn from real encounters
                on a medical equipment route through nursing homes, care
                facilities, and family homes across central Iowa, with names and
                details changed to protect the people in them.
              </p>
              <p>
                That takes longer than filling a page with articles nobody lived.
                It is worth the wait.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-7 py-3 rounded-full font-lato font-semibold transition-colors"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto grid gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-cream-dark p-7 sm:p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-lato font-semibold uppercase tracking-widest text-terracotta-dark">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-charcoal/45 font-lato">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-charcoal/45 font-lato">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {post.readMinutes} min read
                  </span>
                </div>

                <h2 className="font-playfair text-2xl font-bold text-charcoal leading-snug mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-teal transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                {post.description && (
                  <p className="font-lato text-charcoal/65 leading-relaxed mb-5">
                    {post.description}
                  </p>
                )}

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-teal font-lato font-semibold text-sm hover:gap-2.5 transition-all"
                >
                  Read it <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
