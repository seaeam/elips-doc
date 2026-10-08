"use client"

import { CourseCatalogHero } from "./components/course-catalog-hero"
import { RoadmapPanel } from "./components/roadmap-panel"
import { SectionIndex } from "./components/section-index"

export function CourseCatalog() {
  return (
    <div className="catalog-page not-prose mx-auto w-full max-w-6xl pb-12 md:pb-20">
      <CourseCatalogHero />
      <div className="grid items-start gap-10 border-t border-border pt-6 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-14 lg:pt-10">
        <RoadmapPanel />
        <SectionIndex />
      </div>
    </div>
  )
}
