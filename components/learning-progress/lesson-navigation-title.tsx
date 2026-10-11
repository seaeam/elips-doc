"use client"

import { LessonStatus } from "./lesson-status"
import { useLearningProgress } from "./store"

export function LessonNavigationTitle({
  href,
  title,
}: {
  href: string
  title: string
}) {
  const record = useLearningProgress().lessons[href]
  return (
    <span
      className="inline-flex min-w-0 items-start gap-2"
      data-lesson-navigation={href}
    >
      <LessonStatus record={record} className="h-[1lh] [&_svg]:size-3.5" />
      <span className="min-w-0">{title}</span>
    </span>
  )
}
