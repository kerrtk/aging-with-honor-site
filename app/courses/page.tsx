import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Courses | Aging With Honor",
  description: "Caregiver education from Aging With Honor. Course development is underway.",
  robots: { index: false, follow: true },
}

export default function CoursesPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">Education Center</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Courses</h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto">Caregiver education, in development.</p>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-cream-dark p-10 sm:p-12 text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-charcoal mb-5">
            Nothing Here Yet, and We Would Rather Say So
          </h2>
          <div className="space-y-4 font-lato text-charcoal/70 leading-relaxed text-left">
            <p>
              There are no courses to enroll in today. Building one properly takes time,
              and putting up a catalog of things that do not exist would be a poor way to
              start a relationship with people who are already stretched thin.
            </p>
            <p>
              The first course is being built for family caregivers who have just been
              handed a diagnosis and do not know what the next ninety days look like.
              When it is ready, it will be here, and it will be honest about what it covers.
            </p>
            <p>
              If there is something you would want taught, that input genuinely shapes what
              gets made first.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-7 py-3 rounded-full font-lato font-semibold transition-colors"
          >
            Tell Us What You Need <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
