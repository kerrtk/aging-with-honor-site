"use client"

import { useState } from "react"
import { Mail, MapPin, CheckCircle, Download, Users, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const reasons = [
  { icon: <Download className="w-5 h-5 text-terracotta" />, title: "Free Caregiver Guide", desc: "Download our 20-page Caregiver's Companion guide." },
  { icon: <Users className="w-5 h-5 text-teal" />, title: "Newsletter Signup", desc: "Weekly tips and resources for caregivers." },
  { icon: <Building className="w-5 h-5 text-charcoal-light" />, title: "Care Center Partnership", desc: "Bring our resources to your facility." },
  { icon: <Mail className="w-5 h-5 text-terracotta" />, title: "General Inquiry", desc: "Questions, feedback, or collaboration ideas." },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">Contact Us</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s Connect</h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto">Download your free guide, sign up for our newsletter, or reach out to partner with us.</p>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-charcoal mb-6">How Can We Help?</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {reasons.map((r) => (
                <div key={r.title} className="bg-white rounded-xl p-5 border border-cream-dark">
                  <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center mb-3">{r.icon}</div>
                  <h3 className="font-playfair font-bold text-charcoal mb-1">{r.title}</h3>
                  <p className="text-sm text-charcoal/60 font-lato">{r.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-charcoal/70 font-lato"><Mail className="w-5 h-5 text-teal" /><span>hello@agingwithhonor.com</span></div>
              <div className="flex items-center gap-3 text-charcoal/70 font-lato"><MapPin className="w-5 h-5 text-teal" /><span>Des Moines, Iowa</span></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-cream-dark shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-teal" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">Message Received!</h3>
                <p className="text-charcoal/60 font-lato">We&apos;ll be in touch within 1–2 business days.</p>
              </div>
            ) : (
              <>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-charcoal font-lato mb-1.5 block">Name *</label>
                      <Input placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border-cream-dark font-lato" required />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-charcoal font-lato mb-1.5 block">Email *</label>
                      <Input type="email" placeholder="you@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="border-cream-dark font-lato" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-charcoal font-lato mb-1.5 block">Subject</label>
                    <Input placeholder="How can we help?" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className="border-cream-dark font-lato" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-charcoal font-lato mb-1.5 block">Message *</label>
                    <Textarea placeholder="Tell us a bit about what you need..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="border-cream-dark font-lato min-h-[120px]" required />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-lato font-semibold rounded-full">Send Message</Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
