import Link from "next/link"
import { Heart, Users, Building, ArrowRight } from "lucide-react"

const cards = [
  {
    icon: <Heart className="w-7 h-7 text-terracotta" />, bg: "bg-terracotta/10",
    title: "Family Caregivers", tag: "Most Popular", border: "border-terracotta/30 hover:border-terracotta/60",
    desc: "Simple guides, printable checklists, and emotional support tools to help you care for a loved one with confidence and compassion.",
    highlights: ["Doctor visit checklists", "Medication tracking", "Stress & burnout tips", "Legal planning guides"],
    cta: "Explore Family Resources", href: "/caregiver-resources",
  },
  {
    icon: <Users className="w-7 h-7 text-teal" />, bg: "bg-teal/10",
    title: "Professional Caregivers", tag: null, border: "border-teal/20 hover:border-teal/50",
    desc: "Training modules, empathy frameworks, and evidence-based techniques for CNAs, home health aides, and elder care professionals.",
    highlights: ["Communication skills", "Dementia care techniques", "Caregiver self-care", "Printable activity kits"],
    cta: "Access Professional Tools", href: "/caregiver-resources",
  },
  {
    icon: <Building className="w-7 h-7 text-charcoal-light" />, bg: "bg-charcoal/10",
    title: "Senior Care Centers", tag: null, border: "border-charcoal/20 hover:border-charcoal/40",
    desc: "Community engagement programs, staff resources, and partner content for memory wings, assisted living, and independent living facilities.",
    highlights: ["Activity programming", "Staff training aids", "Family communication", "Partnership opportunities"],
    cta: "Partner With Us", href: "/contact",
  },
]

export function CaregiverCards() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-terracotta text-sm font-lato font-semibold uppercase tracking-widest block mb-3">Who We Serve</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">Resources for Every Caregiver</h2>
          <p className="text-charcoal/60 font-lato max-w-xl mx-auto text-lg">Whether you&apos;re a family member, trained professional, or running a care facility — we have tools built just for you.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div key={c.title} className={`bg-white rounded-2xl p-8 border-2 transition-all duration-200 hover:shadow-lg flex flex-col ${c.border}`}>
              {c.tag && <span className="self-start bg-terracotta text-white text-xs px-3 py-1 rounded-full font-lato font-semibold mb-4">{c.tag}</span>}
              <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>{c.icon}</div>
              <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">{c.title}</h3>
              <p className="text-charcoal/60 font-lato leading-relaxed mb-5 flex-1">{c.desc}</p>
              <ul className="space-y-2 mb-6">
                {c.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-charcoal/70 font-lato">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />{h}
                  </li>
                ))}
              </ul>
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
