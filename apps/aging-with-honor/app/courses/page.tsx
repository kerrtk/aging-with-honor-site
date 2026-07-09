import Link from "next/link"
import { Star, Clock, ArrowRight, FileText, Heart, Shield, Users, Zap } from "lucide-react"

const courses = [
  { icon: <Heart className="w-6 h-6 text-terracotta" />, bg: "bg-terracotta/10", badge: "Bestseller", bColor: "bg-terracotta text-white", title: "Understanding Dementia with Compassion", desc: "Evidence-based communication, behavioral responses, and daily care strategies for memory care settings.", hrs: "4.5 hrs", lessons: 12, level: "Beginner", rating: 4.9, reviews: 248, price: "$49", free: false },
  { icon: <Shield className="w-6 h-6 text-teal" />, bg: "bg-teal/10", badge: "Free", bColor: "bg-teal text-white", title: "Faith-Based Care for Seniors", desc: "Explore spiritual care approaches that honor the faith traditions and personal beliefs of aging loved ones.", hrs: "2 hrs", lessons: 6, level: "All Levels", rating: 4.8, reviews: 189, price: "Free", free: true },
  { icon: <FileText className="w-6 h-6 text-charcoal-light" />, bg: "bg-charcoal/10", badge: "New", bColor: "bg-charcoal text-white", title: "Navigating Caregiver Burnout", desc: "Identify burnout early, build sustainable self-care habits, and discover community support strategies.", hrs: "3 hrs", lessons: 9, level: "Intermediate", rating: 4.7, reviews: 97, price: "$39", free: false },
  { icon: <Users className="w-6 h-6 text-teal" />, bg: "bg-teal/10", badge: null, bColor: "", title: "Communication in Elder Care", desc: "Master verbal and non-verbal communication for effective interactions with seniors at all cognitive levels.", hrs: "3.5 hrs", lessons: 10, level: "All Levels", rating: 4.8, reviews: 154, price: "$45", free: false },
  { icon: <Zap className="w-6 h-6 text-terracotta" />, bg: "bg-terracotta/10", badge: "Popular", bColor: "bg-terracotta text-white", title: "End-of-Life Planning for Families", desc: "A compassionate step-by-step guide to advance directives, hospice decisions, and legacy conversations.", hrs: "5 hrs", lessons: 14, level: "Beginner", rating: 4.9, reviews: 312, price: "$59", free: false },
  { icon: <Shield className="w-6 h-6 text-teal" />, bg: "bg-teal/10", badge: "Free", bColor: "bg-teal text-white", title: "Introduction to Senior Wellness", desc: "An overview of physical, cognitive, and emotional wellness strategies for adults 65 and older.", hrs: "1.5 hrs", lessons: 5, level: "Beginner", rating: 4.6, reviews: 203, price: "Free", free: true },
]

export default function CoursesPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">Education Center</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Courses & Learning Paths</h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto">Expert-led courses for family caregivers and elder care professionals. Learn at your pace, on your schedule.</p>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((c) => (
            <div key={c.title} className="bg-white rounded-2xl overflow-hidden border border-cream-dark hover:shadow-lg transition-all flex flex-col">
              <div className="h-2 bg-gradient-to-r from-teal to-teal-light" />
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center`}>{c.icon}</div>
                  {c.badge && <span className={`text-xs px-3 py-1 rounded-full font-lato font-semibold ${c.bColor}`}>{c.badge}</span>}
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">{c.title}</h3>
                <p className="text-sm text-charcoal/60 font-lato leading-relaxed mb-4 flex-1">{c.desc}</p>
                <div className="flex items-center gap-4 text-xs text-charcoal/50 font-lato mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{c.hrs}</span>
                  <span>{c.lessons} lessons</span><span>{c.level}</span>
                </div>
                <div className="flex items-center gap-1.5 mb-5">
                  <Star className="w-4 h-4 text-terracotta fill-terracotta" />
                  <span className="font-lato font-semibold text-sm text-charcoal">{c.rating}</span>
                  <span className="text-xs text-charcoal/40 font-lato">({c.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-playfair text-xl font-bold text-teal">{c.price}</span>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 bg-teal hover:bg-teal-dark text-white text-sm px-4 py-2 rounded-full font-lato font-semibold transition-colors">
                    {c.free ? "Enroll Free" : "Enroll"} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
