import Link from "next/link"
import { Heart, Users, Building, ArrowRight } from "lucide-react"

const cards = [
  {
    icon: <Heart className="w-7 h-7 text-terracotta" />, bg: "bg-terracotta/10",
    title: "Family Caregivers", border: "border-terracotta/30 hover:border-terracotta/60",
    desc: "You stepped into this without training and without warning. The guides being written first are for you. The doctor visit you have on Thursday, the medication list nobody can keep straight, the conversation you have been putting off.",
    cta: "Tell us what you need", href: "/contact",
  },
  {
    icon: <Users className="w-7 h-7 text-teal" />, bg: "bg-teal/10",
    title: "Professional Caregivers", border: "border-teal/20 hover:border-teal/50",
    desc: "CNAs, home health aides, and memory care staff carry more than the job description says. Material for you is in development, shaped by what actually happens on a shift rather than what a textbook says should.",
    cta: "Tell us what you need", href: "/contact",
  },
  {
    icon: <Building className="w-7 h-7 text-charcoal-light" />, bg: "bg-charcoal/10",
    title: "Senior Care Centers", border: "border-charcoal/20 hover:border-charcoal/40",
    desc: "If you run a memory wing, an assisted living community, or an independent living facility and want to talk about what your residents and staff actually need, that conversation is open now.",
    cta: "Start a conversation", href: "/contact",
  },
]

export function CaregiverCards() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-terracotta text-sm font-lato font-semibold uppercase tracking-widest block mb-3">Who This Is For</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">Three Kinds of People Carry This Work</h2>
          <p className="text-charcoal/60 font-lato max-w-xl mx-auto text-lg">Aging With Honor is being built for all three. Here is who we are writing for, and how to reach us in the meantime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div key={c.title} className={`bg-white rounded-2xl p-8 border-2 transition-all duration-200 hover:shadow-lg flex flex-col ${c.border}`}>
              <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>{c.icon}</div>
              <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">{c.title}</h3>
              <p className="text-charcoal/60 font-lato leading-relaxed mb-6 flex-1">{c.desc}</p>
              <Link href={c.href} className="inline-flex items-center gap-2 text-teal font-lato font-semibold text-sm hover:gap-3 transition-all group mt-auto">
                {c.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
