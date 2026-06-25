import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"

const posts = [
  {
    slug:     "understanding-dementia-family-guide",
    category: "Memory Care",
    title:    "Understanding Dementia: A Compassionate Family Guide",
    excerpt:  "When a loved one receives a dementia diagnosis, the journey ahead can feel overwhelming. Learn how to navigate each stage with grace, patience, and practical strategies.",
    image:    "/img-blog-dementia.jpg",
    imageAlt: "Adult daughter showing her elderly mother family photographs to help with memory",
    date:     "June 18, 2025",
    readTime: "7 min read",
    categoryColor: "bg-teal/10 text-teal",
  },
  {
    slug:     "preventing-caregiver-burnout",
    category: "Caregiver Wellness",
    title:    "Preventing Caregiver Burnout Before It Starts",
    excerpt:  "Caring for others is sacred work — but you cannot pour from an empty cup. Discover the warning signs of burnout and the daily practices that protect your wellbeing.",
    image:    "/img-blog-burnout.jpg",
    imageAlt: "A caregiver taking a peaceful moment of rest in a sunlit garden with a cup of tea",
    date:     "June 10, 2025",
    readTime: "5 min read",
    categoryColor: "bg-terracotta/10 text-terracotta-dark",
  },
  {
    slug:     "navigating-care-planning-conversation",
    category: "Planning & Legacy",
    title:    "How to Start the Care Planning Conversation",
    excerpt:  "Talking about the future doesn't have to be hard. Here's a gentle, faith-centered framework for bringing your family together around what matters most.",
    image:    "/img-blog-planning.jpg",
    imageAlt: "A multigenerational family having a warm, thoughtful conversation around a dining table",
    date:     "June 3, 2025",
    readTime: "6 min read",
    categoryColor: "bg-charcoal/10 text-charcoal",
  },
]

export function BlogPreview() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-lato text-sm font-semibold text-terracotta tracking-widest uppercase mb-2">
              From the Blog
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-teal">
              Wisdom for the Journey
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-lato text-sm font-semibold text-teal hover:text-teal-dark transition-colors flex-shrink-0"
          >
            View All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Category badge over image */}
                <div className="absolute top-3 left-3">
                  <span className={`font-lato text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm bg-white/85 ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-playfair text-lg font-bold text-charcoal leading-snug mb-3 group-hover:text-teal transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="font-lato text-sm text-charcoal/60 leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-charcoal/40 font-lato border-t border-cream-dark pt-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
