"use client"

import { useState } from "react"
import { Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const benefits = ["Daily caregiver checklists (printable)", "Communication tips for memory care", "Stress & self-care assessment", "Emergency planning template", "Resource directory (national + local)"]

export function LeadMagnet() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="py-24 bg-terracotta relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal/20 -translate-x-1/3 translate-y-1/3" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block bg-white/20 text-white text-sm font-lato font-semibold px-4 py-1.5 rounded-full mb-5">100% Free — No Credit Card Required</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">Download The Caregiver&apos;s Companion Guide</h2>
            <p className="text-white/80 font-lato text-lg leading-relaxed mb-8">A 20-page resource packed with practical tools, checklists, and compassionate guidance for every caregiver.</p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-white font-lato">
                  <CheckCircle className="w-5 h-5 text-teal-light shrink-0" />{b}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-teal" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">You&apos;re all set!</h3>
                <p className="text-charcoal/60 font-lato">Check your inbox — your free guide is on its way.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center">
                    <Download className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <div className="font-playfair text-lg font-bold text-charcoal">Get Your Free Guide</div>
                    <div className="text-sm text-charcoal/50 font-lato">Join 10,000+ caregivers</div>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-lato font-semibold text-charcoal mb-1.5 block">Your Name</label>
                    <Input placeholder="First name" value={name} onChange={(e) => setName(e.target.value)} className="border-cream-dark font-lato" required />
                  </div>
                  <div>
                    <label className="text-sm font-lato font-semibold text-charcoal mb-1.5 block">Email Address</label>
                    <Input type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="border-cream-dark font-lato" required />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-lato font-semibold rounded-full gap-2">
                    <Download className="w-4 h-4" />Send Me The Free Guide
                  </Button>
                </form>
                <p className="text-xs text-charcoal/40 font-lato text-center mt-4">We respect your privacy. Unsubscribe anytime.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
