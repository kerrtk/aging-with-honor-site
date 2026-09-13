import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Journal | Aging With Honor",
  description: "Stories and practical writing from Aging With Honor. First articles in progress.",
  robots: { index: false, follow: true },
}

export default function BlogPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">The Journal</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Stories From the Heart</h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto">Writing from the route, for the people carrying this work.</p>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-cream-dark p-10 sm:p-12 text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-charcoal mb-5">
            The First Articles Are Being Written
          </h2>
          <div className="space-y-4 font-lato text-charcoal/70 leading-relaxed text-left">
            <p>
              No posts published yet. The writing is drawn from real encounters on a
              medical equipment route through nursing homes, care facilities, and family
              homes across central Iowa, with names and details changed to protect the
              people in them.
            </p>
            <p>
              That takes longer than filling a page with articles nobody lived. It is
              worth the wait.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-7 py-3 rounded-full font-lato font-semibold transition-colors"
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
