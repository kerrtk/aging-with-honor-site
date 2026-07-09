import { Hero } from "@/components/hero"
import { MissionSection } from "@/components/mission-section"
import { CaregiverCards } from "@/components/caregiver-cards"
import { LearningPaths } from "@/components/learning-paths"
import { LeadMagnet } from "@/components/lead-magnet"
import { BlogPreview } from "@/components/blog-preview"
import { Testimonials } from "@/components/testimonials"
import { NewsletterCta } from "@/components/newsletter-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <CaregiverCards />
      <LearningPaths />
      <LeadMagnet />
      <BlogPreview />
      <Testimonials />
      <NewsletterCta />
    </>
  )
}
