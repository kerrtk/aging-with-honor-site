import Link from "next/link"
import { Heart, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-playfair text-lg font-bold text-white">Aging With Honor</span>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed mb-4 font-lato">Empowering families, caregivers, and seniors with education, compassion, and community wisdom.</p>
            <p className="text-sm text-terracotta italic font-playfair">"Plan Today. Honor Tomorrow. Leave a Legacy of Love."</p>
          </div>

          <div>
            <h4 className="font-playfair text-white font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[{ href: "/about", label: "About Us" }, { href: "/caregiver-resources", label: "Caregiver Resources" }, { href: "/courses", label: "Courses" }, { href: "/blog", label: "Blog" }, { href: "/community", label: "Community" }].map((l) => (
                <li key={l.label}><Link href={l.href} className="text-sm text-cream/70 hover:text-terracotta transition-colors font-lato">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-white font-semibold text-lg mb-5">Resources</h4>
            <ul className="space-y-2.5">
              {["Family Caregivers", "Professional Caregivers", "Memory Care", "Independent Living", "Partner With Us"].map((l) => (
                <li key={l}><Link href="/caregiver-resources" className="text-sm text-cream/70 hover:text-terracotta transition-colors font-lato">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-white font-semibold text-lg mb-5">Get In Touch</h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-center gap-2.5 text-sm text-cream/70 font-lato"><Mail className="w-4 h-4 text-teal shrink-0" />hello@agingwithhonor.com</li>
              <li className="flex items-center gap-2.5 text-sm text-cream/70 font-lato"><MapPin className="w-4 h-4 text-teal shrink-0" />Des Moines, Iowa</li>
            </ul>
            <Link href="/contact" className="inline-block bg-terracotta hover:bg-terracotta-dark text-white text-sm px-5 py-2.5 rounded-full font-lato font-semibold transition-colors">Download Free Guide</Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/50 font-lato">© 2025 Aging With Honor. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-cream/50 font-lato">
            <Link href="#" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-cream transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-cream transition-colors">Affiliate Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
