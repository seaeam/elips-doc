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
  focus: string
  keywords: string[]
  lessonTitles: string[]
}

export type CourseHeroStat = {
  label: string
  value: number
  delay?: number
  suffix?: string
}

export type RoadmapStep = {
  title: string
  range: string
  description: string
}

export type CourseCatalogStoreState = {
  currentFocus: CourseSection
  expandedSectionHrefs: string[]
  heroStats: CourseHeroStat[]
  roadmapSteps: RoadmapStep[]
  sections: CourseSection[]
  sectionsByHref: Record<string, CourseSection>
  totalLessons: number
  totalModules: number
  updatedModules: number
  visibleLessonCount: number
}

export type CourseCatalogStoreActions = {
  collapseSectionLessons: (sectionHref: string) => void
  expandSectionLessons: (sectionHref: string) => void
  toggleSectionLessons: (sectionHref: string) => void
}

export type CourseCatalogStore = CourseCatalogStoreState &
  CourseCatalogStoreActions
