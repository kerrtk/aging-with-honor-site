import { Mail } from "lucide-react"
import { SubscribeForm } from "@/components/subscribe-form"

const inProgress = [
  {
    title: "The Caregiver's Companion Guide",
    desc: "A practical starter guide for families who just became caregivers. Doctor visits, medications, home safety, and the conversations that get postponed until they cannot be.",
  },
  {
    title: "Written Guides and Printables",
    desc: "Checklists and templates you can print and actually use, built from what comes up over and over on the route rather than from a content calendar.",
  },
  {
    title: "Stories From the Journey",
    desc: "Real accounts from three years of daily rounds through facilities, care homes, and front doors. Names changed, dignity kept.",
  },
]

export function WhatsComing() {
  return (
    <section className="py-24 bg-teal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-teal-dark/50 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-3">
            What We Are Building
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Being Written Right Now
          </h2>
          <p className="text-white/75 font-lato text-lg max-w-2xl mx-auto leading-relaxed">
            None of this is finished yet, and we are not going to pretend otherwise.
            Here is what is actually in progress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {inProgress.map((item) => (
            <div key={item.title} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7">
              <h3 className="font-playfair text-xl font-bold text-white mb-3 leading-snug">{item.title}</h3>
              <p className="font-lato text-sm text-white/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-10 max-w-xl mx-auto shadow-xl">
          <div className="text-center mb-7">
            <h3 className="font-playfair text-2xl font-bold text-charcoal mb-3">
              Know When It Is Ready
            </h3>
            <p className="font-lato text-charcoal/65 leading-relaxed">
              Leave your email and you will hear from us when the first guide is
              finished. That is the only reason we will write to you.
            </p>
          </div>

          <SubscribeForm source="homepage" />

          <div className="mt-7 pt-6 border-t border-cream-dark text-center">
            <p className="font-lato text-sm text-charcoal/60 mb-2">
              Would rather just talk to a person?
            </p>
            <a
              href="mailto:kerr.systems@gmail.com?subject=Aging%20With%20Honor"
              className="inline-flex items-center gap-2 font-lato font-semibold text-sm text-teal hover:text-teal-dark transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              kerr.systems@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
