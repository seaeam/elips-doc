export type CourseHighlight = {
  chapters: string
  title: string
  description: string
  href: string
}

export type CourseHomepageStore = {
  heroPlaybackId: string
  highlights: CourseHighlight[]
}
