import Link from "next/link"
import { Download, FileText, Users, Heart, Building, Shield, ArrowRight, CheckCircle } from "lucide-react"

const categories = [
  { icon: <Heart className="w-7 h-7 text-terracotta" />, bg: "bg-terracotta/10", title: "Family Caregiver Guides", desc: "Practical guides for families caring for aging parents or loved ones at home.", items: ["Doctor Visit Checklist", "Medication Tracking Log", "Home Safety Assessment", "End-of-Life Planning Starter"] },
  { icon: <Users className="w-7 h-7 text-teal" />, bg: "bg-teal/10", title: "Professional Caregiver Tools", desc: "Training aids, activity kits, and communication frameworks for elder care staff.", items: ["Dementia Communication Cards", "Activity Facilitation Guide", "Caregiver Self-Care Plan", "Behavioral Response Protocol"] },
  { icon: <Building className="w-7 h-7 text-charcoal-light" />, bg: "bg-charcoal/10", title: "Care Facility Resources", desc: "Programs and content for memory wings, assisted living, and independent living communities.", items: ["Staff Training Modules", "Family Communication Templates", "Resident Engagement Toolkit", "Partnership Program Info"] },
  { icon: <Shield className="w-7 h-7 text-teal" />, bg: "bg-teal/10", title: "Legal & Financial Planning", desc: "Essential resources to help families plan proactively for aging transitions.", items: ["Power of Attorney Overview", "Medicare & Medicaid Primer", "Estate Planning Checklist", "Long-Term Care Insurance Guide"] },
  { icon: <FileText className="w-7 h-7 text-terracotta" />, bg: "bg-terracotta/10", title: "Mental Health & Wellness", desc: "Emotional support resources for caregivers dealing with burnout, grief, and stress.", items: ["Caregiver Stress Assessment", "Grief Support Resources", "Mindfulness for Caregivers", "Local Support Group Finder"] },
  { icon: <Download className="w-7 h-7 text-charcoal-light" />, bg: "bg-charcoal/10", title: "Printable Downloads", desc: "Free printables, forms, and templates ready to use today.", items: ["Daily Care Schedule Template", "Emergency Contact Sheet", "Medication Log (Monthly)", "Weekly Wellness Check-In"] },
]

export default function CaregiverResourcesPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">Resource Library</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Caregiver Resources</h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto">Free guides, printable tools, and professional training materials for family caregivers, elder care staff, and senior living communities.</p>
        </div>
      </div>

      <div className="bg-terracotta py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white text-center sm:text-left">
            <div className="font-playfair text-xl font-bold mb-1">📘 Free: The Caregiver&apos;s Companion Guide</div>
            <div className="text-white/80 font-lato text-sm">A 20-page resource covering daily care, communication, burnout prevention & more.</div>
          </div>
          <Link href="/contact" className="shrink-0 bg-white text-terracotta hover:bg-cream font-lato font-semibold px-6 py-2.5 rounded-full transition-colors">Download Free →</Link>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((c) => (
            <div key={c.title} className="bg-white rounded-2xl p-7 border border-cream-dark hover:shadow-lg transition-all flex flex-col">
              <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>{c.icon}</div>
              <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">{c.title}</h3>
              <p className="text-sm text-charcoal/60 font-lato mb-4 leading-relaxed">{c.desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {c.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-charcoal/70 font-lato">
                    <CheckCircle className="w-4 h-4 text-teal shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-teal font-lato font-semibold text-sm hover:gap-2.5 transition-all group">
                Access Resources <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
