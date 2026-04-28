"use client"

import { CourseHomeHero } from "./components/course-home-hero"
import { FinalCta } from "./components/final-cta"
import { HighlightGrid } from "./components/highlight-grid"
import { useCourseHomepageStore } from "./store"

export function CourseHomepage() {
  const heroPlaybackId = useCourseHomepageStore((state) => state.heroPlaybackId)
  const highlights = useCourseHomepageStore((state) => state.highlights)

  return (
    <div className="not-prose relative">
      <CourseHomeHero heroPlaybackId={heroPlaybackId} />
      <HighlightGrid highlights={highlights} />
      <FinalCta />
    </div>
  )
}
