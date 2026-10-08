import type { LucideIcon } from "lucide-react"

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
  expandedSectionHrefs: string[]
  roadmapSteps: RoadmapStep[]
  sections: CourseSection[]
  sectionsByHref: Record<string, CourseSection>
  totalLessons: number
  totalModules: number
}

export type CourseCatalogStoreActions = {
  collapseSectionLessons: (sectionHref: string) => void
  expandSectionLessons: (sectionHref: string) => void
  toggleSectionLessons: (sectionHref: string) => void
}

export type CourseCatalogStore = CourseCatalogStoreState &
  CourseCatalogStoreActions
