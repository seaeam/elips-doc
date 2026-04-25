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
}

export type CourseHighlight = {
  title: string
  description: string
  icon: LucideIcon
}

export type CourseHeroStat = {
  label: string
  value: number
  delay?: number
  suffix?: string
}

export type CourseHomepageStore = {
  heroPlaybackId: string
  heroStats: CourseHeroStat[]
  highlights: CourseHighlight[]
  sections: CourseSection[]
  techStack: string[]
  totalLessons: number
  totalModules: number
  updatedModules: number
}
