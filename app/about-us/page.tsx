"use client"

import { AboutHero } from "@/components/about/hero-section"
import { JennyStory } from "@/components/about/jenny-story"
import { Timeline } from "@/components/about/timeline"
import { Team } from "@/components/about/team"

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <JennyStory />
      <Timeline />
      <Team />
    </div>
  )
}