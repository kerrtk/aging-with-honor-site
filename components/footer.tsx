import Link from "next/link"
import { Heart, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-playfair text-lg font-bold text-white">Aging With Honor</span>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed mb-4 font-lato">
              Faith, family, and dignity in every season. Built by someone who spends his
              working days inside the places this is written about.
            </p>
            <p className="text-sm text-terracotta italic font-playfair">&ldquo;Plan Today. Honor Tomorrow.&rdquo;</p>
          </div>

          <div>
            <h4 className="font-playfair text-white font-semibold text-lg mb-5">Pages</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/caregiver-resources", label: "Caregiver Resources" },
                { href: "/courses", label: "Courses" },
                { href: "/blog", label: "Journal" },
                { href: "/community", label: "Community" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-cream/70 hover:text-terracotta transition-colors font-lato">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-white font-semibold text-lg mb-5">Get In Touch</h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-center gap-2.5 text-sm text-cream/70 font-lato">
                <Mail className="w-4 h-4 text-teal shrink-0" />
                <a href="mailto:kerr.systems@gmail.com" className="hover:text-terracotta transition-colors">kerr.systems@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-cream/70 font-lato">
                <MapPin className="w-4 h-4 text-teal shrink-0" />Des Moines, Iowa
              </li>
            </ul>
            <Link href="/contact" className="inline-block bg-terracotta hover:bg-terracotta-dark text-white text-sm px-5 py-2.5 rounded-full font-lato font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-cream/50 font-lato">&copy; {new Date().getFullYear()} Aging With Honor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
