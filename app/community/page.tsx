import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Community | Aging With Honor",
  description: "A community for family and professional caregivers. Currently being formed.",
  robots: { index: false, follow: true },
}

export default function CommunityPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">Community</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">You Are Not Alone</h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto">A place for family caregivers, professionals, and care facility partners. Being formed now.</p>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-cream-dark p-10 sm:p-12 text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-charcoal mb-5">
            There Is No Forum to Join Yet
          </h2>
          <div className="space-y-4 font-lato text-charcoal/70 leading-relaxed text-left">
            <p>
              A community with no members is not a community, so there is nothing here to
              sign up for today. What exists right now is one person who will read your
              email and answer it.
            </p>
            <p>
              That is a smaller promise than a forum and a webinar schedule. It is also
              one that can actually be kept, and it is where every real community starts.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-7 py-3 rounded-full font-lato font-semibold transition-colors"
          >
            Reach Out <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
