import type { LucideIcon } from "lucide-react"

export type CourseHighlight = {
  title: string
  description: string
  icon: LucideIcon
}

export type CourseHomepageStore = {
  heroPlaybackId: string
  highlights: CourseHighlight[]
}
