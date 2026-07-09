"use client"

import { useState } from "react"
import { Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterCta() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="py-24 bg-teal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-teal-dark/50 -translate-x-1/2 translate-y-1/2" />
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">Join a Caring Community</h2>
        <p className="text-white/80 font-lato text-lg mb-8">Get weekly caregiver tips, course announcements, and stories of honor delivered to your inbox. Over 10,000 families and professionals already subscribe.</p>
        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 rounded-full px-8 py-4">
            <CheckCircle className="w-5 h-5 text-terracotta-light" />
            <span className="text-white font-lato font-semibold">You&apos;re subscribed — welcome to the community!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/30 text-white placeholder:text-white/50 font-lato focus:border-white flex-1" required />
            <Button type="submit" className="bg-terracotta hover:bg-terracotta-dark text-white font-lato font-semibold px-7 rounded-full shrink-0">
              Subscribe Free
            </Button>
          </form>
        )}
        <p className="text-white/40 text-xs font-lato mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
