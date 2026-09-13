import { Hero } from "@/components/hero"
import { MissionSection } from "@/components/mission-section"
import { CaregiverCards } from "@/components/caregiver-cards"
import { WhatsComing } from "@/components/whats-coming"

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <CaregiverCards />
      <WhatsComing />
    </>
  )
}
