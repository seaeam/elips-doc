"use client"

import { CourseHomeHero } from "./components/course-home-hero"
import { CurriculumGrid } from "./components/curriculum-grid"
import { FinalCta } from "./components/final-cta"
import { HighlightGrid } from "./components/highlight-grid"
import { useCourseHomepageStore } from "./store"

export function CourseHomepage() {
  const heroPlaybackId = useCourseHomepageStore((state) => state.heroPlaybackId)
  const heroStats = useCourseHomepageStore((state) => state.heroStats)
  const highlights = useCourseHomepageStore((state) => state.highlights)
  const sections = useCourseHomepageStore((state) => state.sections)
  const techStack = useCourseHomepageStore((state) => state.techStack)

  return (
    <div className="not-prose relative">
      <CourseHomeHero
        heroPlaybackId={heroPlaybackId}
        heroStats={heroStats}
        techStack={techStack}
      />
      <HighlightGrid highlights={highlights} />
      <CurriculumGrid sections={sections} />
      <FinalCta />
    </div>
  )
}
