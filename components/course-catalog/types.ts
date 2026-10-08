import type { LucideIcon } from "lucide-react"
import type { CoursePhaseId } from "./journey"

export type CourseSectionStatus = "已更新" | "持续更新"

export type CourseSection = {
  lessons: number
  href: string
  number: string
  title: string
  summary: string
  status: CourseSectionStatus
  icon: LucideIcon
  lessonTitles: string[]
}

export type RoadmapStep = {
  title: string
  range: string
  href: string
}

export type CourseCatalogStoreState = {
  query: string
  selectedPhase: CoursePhaseId
  expandedSectionHrefs: string[]
  roadmapSteps: RoadmapStep[]
  sections: CourseSection[]
  sectionsByHref: Record<string, CourseSection>
  totalLessons: number
  totalModules: number
}

export type CourseCatalogStoreActions = {
  setQuery: (query: string) => void
  setSelectedPhase: (phase: CoursePhaseId) => void
  resetFilters: () => void
  revealChapter: (chapterNumber: string) => void
  setSectionsExpanded: (sectionHrefs: string[], expanded: boolean) => void
  collapseSectionLessons: (sectionHref: string) => void
  expandSectionLessons: (sectionHref: string) => void
  toggleSectionLessons: (sectionHref: string) => void
}

export type CourseCatalogStore = CourseCatalogStoreState &
  CourseCatalogStoreActions
