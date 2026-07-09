import Link from "next/link"
import { Users, Heart, Star, MessageSquare, ArrowRight, Calendar } from "lucide-react"

const features = [
  { icon: <MessageSquare className="w-7 h-7 text-teal" />, bg: "bg-teal/10", title: "Discussion Forums", desc: "Connect with thousands of caregivers, share your story, ask questions, and offer encouragement." },
  { icon: <Calendar className="w-7 h-7 text-terracotta" />, bg: "bg-terracotta/10", title: "Live Webinars", desc: "Join monthly live sessions with elder care experts, clinicians, and community leaders." },
  { icon: <Star className="w-7 h-7 text-teal" />, bg: "bg-teal/10", title: "Member Spotlights", desc: "Stories from real caregivers and care professionals who are making a difference every day." },
  { icon: <Users className="w-7 h-7 text-terracotta" />, bg: "bg-terracotta/10", title: "Support Groups", desc: "Virtual support groups for family caregivers, memory care staff, and those navigating grief." },
]

const spotlights = [
  { initials: "SM", color: "bg-teal", name: "Sandra M.", role: "Family Caregiver, Iowa", quote: "This community gave me strength I didn't know I had. I've learned so much from others on the same journey." },
  { initials: "JT", color: "bg-terracotta", name: "James T.", role: "CNA, Memory Care Wing", quote: "The professional caregiver forums have completely changed how I approach dementia communication with my residents." },
  { initials: "LK", color: "bg-charcoal-light", name: "Director Lisa K.", role: "Sunrise Gardens Senior Living", quote: "We've implemented three programs from this community in our facility. The ROI in human terms has been tremendous." },
]

export default function CommunityPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">Community</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">You Are Not Alone</h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto">A welcoming, faith-informed community for every caregiver — family, professional, and care facility partner.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3 rounded-full font-lato font-semibold transition-colors">
            Join the Community <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14"><h2 className="font-playfair text-3xl font-bold text-charcoal">What the Community Offers</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-cream rounded-2xl p-7 border border-cream-dark text-center hover:shadow-md transition-all">
                <div className={`w-14 h-14 rounded-xl ${f.bg} flex items-center justify-center mx-auto mb-4`}>{f.icon}</div>
                <h3 className="font-playfair text-lg font-bold text-charcoal mb-2">{f.title}</h3>
                <p className="text-sm text-charcoal/60 font-lato leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-terracotta text-sm font-lato font-semibold uppercase tracking-widest block mb-3">Member Voices</span>
            <h2 className="font-playfair text-3xl font-bold text-charcoal">Community Spotlights</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {spotlights.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-8 border border-cream-dark">
                <Heart className="w-6 h-6 text-terracotta mb-4" />
                <blockquote className="font-playfair text-charcoal/80 italic text-lg leading-relaxed mb-6">&ldquo;{s.quote}&rdquo;</blockquote>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full ${s.color} flex items-center justify-center text-white font-lato font-bold text-sm`}>{s.initials}</div>
                  <div>
                    <div className="font-lato font-semibold text-charcoal">{s.name}</div>
                    <div className="text-sm text-charcoal/50 font-lato">{s.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-teal text-center">
        <h2 className="font-playfair text-3xl font-bold text-white mb-4">Ready to Join?</h2>
        <p className="text-white/70 font-lato mb-8 max-w-lg mx-auto">Membership is free. Connect with caregivers, access forums, and attend live events.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3 rounded-full font-lato font-semibold transition-colors">
          Sign Up Free <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
