import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Heart, Users, Building, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Caregiver Resources | Aging With Honor",
  description: "Practical guides and printables for family and professional caregivers. Library in development.",
  robots: { index: false, follow: true },
}

const planned = [
  {
    icon: <Heart className="w-7 h-7 text-terracotta" />, bg: "bg-terracotta/10",
    title: "Family Caregiver Guides",
    desc: "Doctor visits, medication tracking, home safety, and starting the planning conversation. First up, because it is what families ask for most.",
  },
  {
    icon: <Users className="w-7 h-7 text-teal" />, bg: "bg-teal/10",
    title: "Professional Caregiver Tools",
    desc: "Communication approaches and self-care material for CNAs, aides, and memory care staff.",
  },
  {
    icon: <Shield className="w-7 h-7 text-teal" />, bg: "bg-teal/10",
    title: "Legal and Financial Basics",
    desc: "Plain-language overviews of the paperwork families hit first. Written carefully, because getting this wrong costs people real money.",
  },
  {
    icon: <Building className="w-7 h-7 text-charcoal-light" />, bg: "bg-charcoal/10",
    title: "Care Facility Material",
    desc: "Resident engagement and family communication tools, shaped with facilities rather than guessed at.",
  },
]

export default function CaregiverResourcesPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">Resource Library</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Caregiver Resources</h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto">The library is being built. Here is what is planned, and what is honestly not ready.</p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-cream-dark p-8 sm:p-10 mb-14">
          <h2 className="font-playfair text-2xl font-bold text-charcoal mb-4">Nothing Is Downloadable Yet</h2>
          <p className="font-lato text-charcoal/70 leading-relaxed mb-4">
            There are no finished guides on this site today. Rather than list downloads that
            do not exist, here is the actual roadmap, in the order things are being written.
          </p>
          <p className="font-lato text-charcoal/70 leading-relaxed">
            If you need something now, write in and describe your situation. Sometimes the
            answer is a phone call rather than a PDF, and that is available today.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {planned.map((c) => (
            <div key={c.title} className="bg-white rounded-2xl p-7 border border-cream-dark flex flex-col">
              <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>{c.icon}</div>
              <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">{c.title}</h3>
              <p className="text-sm text-charcoal/60 font-lato leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3.5 rounded-full font-lato font-semibold transition-colors"
          >
            Tell Us What You Need First <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
