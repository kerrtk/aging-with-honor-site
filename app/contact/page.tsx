import type { Metadata } from "next"
import { Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Aging With Honor",
  description: "Reach Aging With Honor directly. A real person reads and answers every message.",
}

const reasons = [
  { title: "You Are Caring for Someone", desc: "Tell me what you are facing and what you could not find. It shapes what gets written first." },
  { title: "You Do This for a Living", desc: "CNAs, aides, and care staff: what would actually help on a shift?" },
  { title: "You Run a Care Facility", desc: "Open to talking about what your residents and staff need." },
  { title: "Anything Else", desc: "Questions, corrections, collaboration. All of it welcome." },
]

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">Contact</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s Connect</h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto">
            No contact form here yet, and no automated reply pretending to be one.
            Just an email address that reaches a person.
          </p>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-2xl p-10 sm:p-12 border border-cream-dark shadow-sm text-center mb-14">
            <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-terracotta" />
            </div>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-charcoal mb-4">Write Directly</h2>
            <p className="font-lato text-charcoal/65 leading-relaxed max-w-lg mx-auto mb-8">
              Every message goes to TK. Replies usually come within a couple of days,
              sometimes sooner, occasionally slower when the route runs long.
            </p>
            <a
              href="mailto:kerr.systems@gmail.com?subject=Aging%20With%20Honor"
              className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-lato font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              <Mail className="w-4 h-4" />
              kerr.systems@gmail.com
            </a>
            <div className="flex items-center justify-center gap-2.5 text-charcoal/50 font-lato text-sm mt-8">
              <MapPin className="w-4 h-4 text-teal" />
              Des Moines, Iowa
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white rounded-xl p-6 border border-cream-dark">
                <h3 className="font-playfair font-bold text-charcoal mb-2 text-lg">{r.title}</h3>
                <p className="text-sm text-charcoal/60 font-lato leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
