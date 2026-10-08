"use client"

import { useEffect } from "react"

import { CourseCatalogHero } from "./components/course-catalog-hero"
import { LearningPath, RoadmapPanel } from "./components/roadmap-panel"
import { SectionIndex } from "./components/section-index"
import { CatalogClosing, StartingPoints } from "./components/starting-points"
import { useCourseCatalogStore } from "./store"

export function CourseCatalog() {
  const revealChapter = useCourseCatalogStore((state) => state.revealChapter)

  useEffect(() => {
    let frame: number | undefined
    const syncChapterHash = () => {
      const chapter = window.location.hash.match(/^#chapter-(\d{2})$/)?.[1]
      if (!chapter) return
      revealChapter(chapter)
      frame = requestAnimationFrame(() => {
        document
          .getElementById(`chapter-${chapter}`)
          ?.scrollIntoView({ block: "start" })
      })
    }
    syncChapterHash()
    window.addEventListener("hashchange", syncChapterHash)
    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame)
      window.removeEventListener("hashchange", syncChapterHash)
    }
  }, [revealChapter])

  return (
    <div className="experience-page catalog-page not-prose mx-auto w-full max-w-6xl pb-12 md:pb-20">
      <CourseCatalogHero />
      <LearningPath />
      <StartingPoints />
      <div
        id="catalog-chapters"
        className="grid scroll-mt-28 items-start gap-10 border-t border-border pt-10 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12 lg:pt-14"
      >
        <RoadmapPanel />
        <SectionIndex />
      </div>
      <CatalogClosing />
    </div>
  )
}
