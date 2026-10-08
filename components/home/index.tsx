"use client"

import { CourseHomeHero } from "./components/course-home-hero"
import { FinalCta } from "./components/final-cta"
import { HighlightGrid } from "./components/highlight-grid"
import { HomeReveal } from "./components/reveal"
import { useCourseHomepageStore } from "./store"

export function CourseHomepage() {
  const heroPlaybackId = useCourseHomepageStore((state) => state.heroPlaybackId)
  const highlights = useCourseHomepageStore((state) => state.highlights)

  return (
    <div className="home-page not-prose relative mx-auto w-full max-w-6xl pb-8 md:pb-14">
      <CourseHomeHero heroPlaybackId={heroPlaybackId} />
      <HighlightGrid highlights={highlights} />
      <HomeReveal>
        <FinalCta />
      </HomeReveal>
    </div>
  )
}
