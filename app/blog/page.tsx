import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

const posts = [
  { cat: "Family Caregiving", color: "bg-terracotta/10 text-terracotta", title: "Simple Ways to Honor Aging Parents Every Day", excerpt: "Small daily rituals can profoundly strengthen your bond and bring peace to both caregiver and loved one.", date: "Nov 14, 2025", read: "5 min" },
  { cat: "Memory Care", color: "bg-teal/10 text-teal", title: "Memory Care Doesn't End at Home", excerpt: "Choosing a memory care facility is one of the most difficult decisions. Here's a compassionate guide to evaluating your options.", date: "Nov 10, 2025", read: "7 min" },
  { cat: "Faith & Aging", color: "bg-charcoal/10 text-charcoal", title: "Faith, Resilience, and the Caregiver's Spirit", excerpt: "How spiritual practice sustains caregivers through the most demanding seasons of life.", date: "Nov 5, 2025", read: "6 min" },
  { cat: "Professional Care", color: "bg-teal/10 text-teal", title: "Dementia Communication: What the Research Says", excerpt: "The latest evidence on verbal and non-verbal communication techniques for memory care professionals.", date: "Oct 28, 2025", read: "8 min" },
  { cat: "Burnout", color: "bg-terracotta/10 text-terracotta", title: "The Hidden Toll of Caregiver Stress", excerpt: "Understanding the physical and emotional impact of long-term caregiving — and what you can do about it.", date: "Oct 20, 2025", read: "6 min" },
  { cat: "End-of-Life", color: "bg-charcoal/10 text-charcoal", title: "Having the Conversation: Legacy and End-of-Life Planning", excerpt: "A compassionate guide to starting the conversation about advance directives, wishes, and legacy.", date: "Oct 14, 2025", read: "9 min" },
]

export default function BlogPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">The Blog</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Stories From the Heart</h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto">Compassionate articles, expert insights, and real stories to inform and inspire every caregiver.</p>
        </div>
      </div>
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.title} className="bg-white rounded-2xl overflow-hidden border border-cream-dark hover:shadow-lg transition-all flex flex-col group">
              <div className="h-48 bg-gradient-to-br from-teal/10 to-cream-dark flex items-center justify-center">
                <span className="text-4xl">📰</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className={`self-start text-xs px-3 py-1 rounded-full font-lato font-semibold mb-3 ${p.color}`}>{p.cat}</span>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-3 group-hover:text-teal transition-colors leading-snug">{p.title}</h3>
                <p className="text-sm text-charcoal/60 font-lato leading-relaxed flex-1 mb-4">{p.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-charcoal/40 font-lato">
                    <Calendar className="w-3.5 h-3.5" />{p.date} · {p.read}
                  </span>
                  <Link href="#" className="inline-flex items-center gap-1 text-teal text-xs font-lato font-semibold hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
