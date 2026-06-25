import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

const values = [
  { title: "Faith-Centered Approach", desc: "Grounded in compassion, purpose, and the belief that every life holds sacred worth." },
  { title: "Family & Professional Support", desc: "Resources tailored for family caregivers and certified elder care professionals alike." },
  { title: "Practical, Actionable Guidance", desc: "Education you can apply today — not theory, but real tools for real caregiving moments." },
  { title: "Community You Can Count On", desc: "A safe space to share, learn, and find encouragement among people who truly understand." },
]

export function MissionSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Image ───────────────────────────────────────────── */}
          <div className="relative">
            {/* Decorative pine border frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-teal/20 rounded-2xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-[4/5]">
              <Image
                src="/img-mission.jpg"
                alt="A compassionate caregiver sharing a family photo album with an elderly man"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-teal-dark/40 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -right-5 bg-terracotta text-white rounded-xl px-5 py-4 shadow-lg">
              <p className="font-playfair text-3xl font-bold leading-none">15+</p>
              <p className="font-lato text-xs mt-1 text-white/85">Years of Dedicated<br />Elder Care Education</p>
            </div>
          </div>

          {/* ── Content ─────────────────────────────────────────── */}
          <div>
            <p className="font-lato text-sm font-semibold text-terracotta tracking-widest uppercase mb-3">
              Our Mission
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-teal leading-snug mb-5">
              Honoring Every Life,<br />
              <span className="italic text-charcoal">Every Step of the Way</span>
            </h2>
            <p className="font-lato text-charcoal/70 text-lg leading-relaxed mb-8">
              Aging With Honor exists to equip and encourage those on the caregiving journey — whether
              you're a family member stepping in for a loved one or a certified professional serving
              seniors every day. We believe dignity, compassion, and preparedness go hand in hand.
            </p>

            <ul className="space-y-4 mb-10">
              {values.map(({ title, desc }) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-lato font-semibold text-charcoal">{title}</p>
                    <p className="font-lato text-sm text-charcoal/60 mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-teal text-white font-lato font-semibold px-6 py-3 rounded-full hover:bg-teal-dark transition-colors"
            >
              Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
