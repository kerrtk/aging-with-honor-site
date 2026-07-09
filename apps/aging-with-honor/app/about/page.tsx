import Link from "next/link"
import { Heart, CheckCircle, Users, Shield, ArrowRight } from "lucide-react"

const values = [
  { icon: <Heart className="w-6 h-6 text-terracotta" />, title: "Compassion First", desc: "Every resource we create is filtered through genuine care for seniors and those who love them." },
  { icon: <Shield className="w-6 h-6 text-teal" />, title: "Faith-Informed", desc: "We honor the spiritual dimensions of aging, supporting caregivers and seniors in their faith journeys." },
  { icon: <Users className="w-6 h-6 text-charcoal-light" />, title: "Community-Centered", desc: "No caregiver should walk alone. Our platform is built around shared wisdom and mutual support." },
  { icon: <CheckCircle className="w-6 h-6 text-terracotta" />, title: "Evidence-Based", desc: "Our educational content is grounded in research and reviewed by elder care professionals." },
]

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">About Us</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Our Mission: Honor Every Season of Life</h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto">Aging With Honor was founded on the belief that aging is not decline — it&apos;s transformation. We exist to equip families, caregivers, and care professionals with education and community.</p>
        </div>
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-terracotta text-sm font-lato font-semibold uppercase tracking-widest block mb-3">Our Story</span>
            <h2 className="font-playfair text-3xl font-bold text-charcoal mb-5">Born Out of Personal Experience</h2>
            <div className="space-y-4 text-charcoal/70 font-lato leading-relaxed text-lg">
              <p>Aging With Honor grew from a deeply personal place — the experience of caring for a loved one and discovering how little practical, compassionate guidance was available for families navigating that journey.</p>
              <p>Founded in Des Moines, Iowa, we set out to build a platform that treats aging as a sacred season of life — one that deserves dignity, education, and a whole community of support.</p>
              <p>Today, we serve thousands of family caregivers, elder care professionals, and senior living communities across the country — and we&apos;re just getting started.</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cream to-cream-dark rounded-2xl h-72 flex items-center justify-center border border-cream-dark">
            <div className="text-center">
              <div className="font-playfair text-5xl font-bold text-teal mb-2">AWH</div>
              <p className="text-charcoal/40 font-lato text-sm">Founder Photo Coming Soon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-3xl font-bold text-charcoal mb-3">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-cream-dark hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-4">{v.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">{v.title}</h3>
                <p className="text-sm text-charcoal/60 font-lato leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-teal text-center">
        <h2 className="font-playfair text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-white/70 font-lato mb-8">Explore our resources, courses, and community.</p>
        <Link href="/caregiver-resources" className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3 rounded-full font-lato font-semibold transition-colors">
          Explore Resources <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
