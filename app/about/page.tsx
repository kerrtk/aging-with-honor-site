import type { Metadata } from "next"
import Link from "next/link"
import { Heart, Users, Shield, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Aging With Honor",
  description:
    "Aging With Honor was started by TK Kerr, who spends his working days inside nursing homes, care facilities, and family living rooms across central Iowa.",
}

const values = [
  { icon: <Heart className="w-6 h-6 text-terracotta" />, title: "Compassion First", desc: "Every resource here is filtered through genuine care for seniors and the people who love them." },
  { icon: <Shield className="w-6 h-6 text-teal" />, title: "Faith-Informed", desc: "We honor the spiritual dimension of aging, and we do it without preaching at anyone." },
  { icon: <Users className="w-6 h-6 text-charcoal-light" />, title: "Community-Centered", desc: "No caregiver should walk alone. What gets built here is shaped by the people carrying the work." },
  { icon: <CheckCircle className="w-6 h-6 text-terracotta" />, title: "Honest About Our Stage", desc: "This is new. We publish what is finished and we say plainly what is not." },
]

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">About</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Our Mission: Honor Every Season of Life</h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto">Aging is not decline. It is transformation, and it deserves to be met with dignity, preparation, and people who show up.</p>
        </div>
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-terracotta text-sm font-lato font-semibold uppercase tracking-widest block mb-3">Our Story</span>
            <h2 className="font-playfair text-3xl font-bold text-charcoal mb-5">It Started on a Route</h2>
            <div className="space-y-4 text-charcoal/70 font-lato leading-relaxed text-lg">
              <p>
                My name is TK Kerr. Three years ago I started running a medical equipment route
                for UnityPoint at Home out of Urbandale, Iowa. Nursing homes, care facilities,
                and a lot of private living rooms. Same stops, week after week.
              </p>
              <p>
                You learn things on a route like that. You learn which daughter has been awake
                since four in the morning. You learn that the family who seems to be handling it
                is often the one closest to breaking. And you learn how much of what people need
                is simple, practical, and written down absolutely nowhere.
              </p>
              <p>
                I was raised in Fredericksburg, Iowa by my grandparents, Vernon and Norma. Stub,
                everybody called him. What they gave me was not money or advantage. It was the
                understanding that you treat people with dignity all the way to the end, and that
                showing up matters more than saying the right thing.
              </p>
              <p>
                Aging With Honor is my attempt to put that down on paper for the people who need
                it. It is early. There is more planned than finished. But everything published
                here comes from something I have actually seen.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cream to-cream-dark rounded-2xl h-72 flex items-center justify-center border border-cream-dark">
            <div className="text-center px-8">
              <div className="font-playfair text-5xl font-bold text-teal mb-2">AWH</div>
              <p className="text-charcoal/40 font-lato text-sm">Plan Today. Honor Tomorrow.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-3xl font-bold text-charcoal mb-3">What We Stand On</h2>
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
        <h2 className="font-playfair text-3xl font-bold text-white mb-4">Say Hello</h2>
        <p className="text-white/70 font-lato mb-8 max-w-lg mx-auto">If you are carrying this work right now, tell me what you needed and could not find.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3 rounded-full font-lato font-semibold transition-colors">
          Get In Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
