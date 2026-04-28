"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { CourseCatalogHero } from "./components/course-catalog-hero"
import { RoadmapPanel } from "./components/roadmap-panel"
import { SectionIndex } from "./components/section-index"

export function CourseCatalog() {
  return (
    <div className="not-prose mx-auto mt-8 flex max-w-6xl flex-col gap-12 pb-16">
      <CourseCatalogHero />

      <section className="flex flex-col gap-8">
        <BlurFade inView>
          <RoadmapPanel />
        </BlurFade>

        <SectionIndex />
      </section>
    </div>
  )
}
