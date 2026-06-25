import Link from "next/link"
import { Star, Clock, ArrowRight, FileText, Shield, Heart } from "lucide-react"

const courses = [
  {
    icon: <Heart className="w-6 h-6 text-terracotta" />, bg: "bg-terracotta/10", badge: "Bestseller", badgeColor: "bg-terracotta text-white",
    title: "Understanding Dementia with Compassion",
    desc: "Evidence-based communication techniques, behavioral responses, and daily care strategies for memory care settings.",
    duration: "4.5 hrs", lessons: 12, level: "Beginner", rating: 4.9, price: "$49",
  },
  {
    icon: <Shield className="w-6 h-6 text-teal" />, bg: "bg-teal/10", badge: "Free", badgeColor: "bg-teal text-white",
    title: "Faith-Based Care for Seniors",
    desc: "Explore spiritual care approaches that honor the faith traditions and personal beliefs of aging loved ones.",
    duration: "2 hrs", lessons: 6, level: "All Levels", rating: 4.8, price: "Free",
  },
  {
    icon: <FileText className="w-6 h-6 text-charcoal-light" />, bg: "bg-charcoal/10", badge: "New", badgeColor: "bg-charcoal text-white",
    title: "Navigating Caregiver Burnout",
    desc: "Identify early signs of burnout, build sustainable self-care habits, and discover community support strategies.",
    duration: "3 hrs", lessons: 9, level: "Intermediate", rating: 4.7, price: "$39",
  },
]

export function LearningPaths() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-terracotta text-sm font-lato font-semibold uppercase tracking-widest block mb-3">Education Center</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">Grow Your Knowledge. Strengthen Your Care.</h2>
          <p className="text-charcoal/60 font-lato max-w-xl mx-auto text-lg">Expert-led courses designed for families and care professionals — at your pace, on your schedule.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {courses.map((c) => (
            <div key={c.title} className="bg-cream rounded-2xl overflow-hidden border border-cream-dark hover:shadow-lg transition-all flex flex-col">
              <div className="h-2 bg-gradient-to-r from-teal to-teal-light" />
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center`}>{c.icon}</div>
                  <span className={`text-xs px-3 py-1 rounded-full font-lato font-semibold ${c.badgeColor}`}>{c.badge}</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">{c.title}</h3>
                <p className="text-sm text-charcoal/60 font-lato leading-relaxed mb-4 flex-1">{c.desc}</p>
                <div className="flex items-center gap-4 text-xs text-charcoal/50 font-lato mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{c.duration}</span>
                  <span>{c.lessons} lessons</span><span>{c.level}</span>
                </div>
                <div className="flex items-center gap-1.5 mb-5">
                  <Star className="w-4 h-4 text-terracotta fill-terracotta" />
                  <span className="font-lato font-semibold text-sm text-charcoal">{c.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-playfair text-xl font-bold text-teal">{c.price}</span>
                  <Link href="/courses" className="inline-flex items-center gap-1.5 bg-teal hover:bg-teal-dark text-white text-sm px-4 py-2 rounded-full font-lato font-semibold transition-colors">
                    Enroll <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/courses" className="inline-flex items-center gap-2 border-2 border-teal text-teal hover:bg-teal hover:text-white px-8 py-3 rounded-full font-lato font-semibold transition-all">
            View All Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
