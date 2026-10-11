"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  formatWatchTime,
  getContinueLesson,
  isLessonFinished,
} from "@/lib/learning-progress"
import { cn } from "@/lib/utils"
import { LEARNING_LESSONS, useLearningProgress } from "./store"
import { LessonStatus } from "./lesson-status"

export function LearningAction({
  defaultLabel = "开始学习",
  className,
}: {
  defaultLabel?: string
  className?: string
}) {
  const progress = useLearningProgress()
  const lesson = getContinueLesson(progress, LEARNING_LESSONS)
  const allCompleted = LEARNING_LESSONS.every(
    (item) => progress.lessons[item.href]?.completed
  )

  return (
    <Button asChild size="lg" className={cn("gap-3", className)}>
      <Link href={lesson?.href ?? LEARNING_LESSONS[0].href}>
        {lesson ? (allCompleted ? "回顾课程" : "继续学习") : defaultLabel}
        <ArrowRight aria-hidden="true" />
      </Link>
    </Button>
  )
}

export function LearningSummary({ className }: { className?: string }) {
  const progress = useLearningProgress()
  const lesson = getContinueLesson(progress, LEARNING_LESSONS)
  if (!lesson) return null
  const record = progress.lessons[lesson.href]
  const completedCount = LEARNING_LESSONS.filter(
    (item) => progress.lessons[item.href]?.completed
  ).length

  return (
    <div
      className={cn("max-w-xl border-l-2 border-border pl-4", className)}
      data-slot="learning-summary"
    >
      <Link
        href={lesson.href}
        className="inline-flex items-start gap-2 rounded text-sm leading-6 font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        {lesson.title}
        <LessonStatus record={record} className="mt-1" />
      </Link>
      <p className="mt-1 text-xs leading-6 text-muted-foreground">
        第 {lesson.chapterNumber} 章 · 第 {lesson.lessonNumber} 节
        <span className="mx-2" aria-hidden="true">
          /
        </span>
        {isLessonFinished(record)
          ? "已完成"
          : record?.position
            ? `上次看到 ${formatWatchTime(record.position)}`
            : "接着学习这一节"}
      </p>
      <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
        已完成 {completedCount} / {LEARNING_LESSONS.length} 节 ·
        进度保存在此浏览器
      </p>
    </div>
  )
}
