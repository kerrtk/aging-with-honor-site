import { Star } from "lucide-react"

const testimonials = [
  { quote: "Aging With Honor gave me the tools and confidence to care for my mother during her final years. The resources here are unlike anything I found elsewhere — practical, compassionate, and faith-grounded.", name: "Sandra M.", role: "Family Caregiver, Iowa", initials: "SM", color: "bg-teal" },
  { quote: "As a CNA at a memory care facility, the professional training materials on this site have genuinely changed how I communicate with residents. Every care center should use these resources.", name: "James T.", role: "Certified Nursing Assistant", initials: "JT", color: "bg-terracotta" },
  { quote: "We integrated Aging With Honor's activity toolkits into our independent living community and the feedback from both residents and staff has been wonderful. Partnership was seamless.", name: "Director Lisa K.", role: "Sunrise Gardens Senior Living", initials: "LK", color: "bg-charcoal-light" },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-terracotta text-sm font-lato font-semibold uppercase tracking-widest block mb-3">Community Voices</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">Trusted by Families & Professionals</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-cream rounded-2xl p-8 border border-cream-dark flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-terracotta fill-terracotta" />)}
              </div>
              <blockquote className="font-playfair text-charcoal/80 italic text-lg leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-lato font-bold text-sm shrink-0`}>{t.initials}</div>
                <div>
                  <div className="font-lato font-semibold text-charcoal">{t.name}</div>
                  <div className="text-sm text-charcoal/50 font-lato">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
