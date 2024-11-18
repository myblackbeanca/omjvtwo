"use client"

import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { IssuesSection } from "@/components/home/issues-section"
import { MissionSection } from "@/components/home/mission-section"
import { StatsSection } from "@/components/home/stats-section"
import { NewsletterSection } from "@/components/home/newsletter-section"

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <IssuesSection />
      <MissionSection />
      <StatsSection />
      <NewsletterSection />
    </div>
  )
}