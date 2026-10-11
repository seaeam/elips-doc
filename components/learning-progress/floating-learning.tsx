"use client"

import { useEffect, useId, useRef, useState, type PointerEvent } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, BookOpen, Play, X } from "lucide-react"
import { Popover } from "radix-ui"
import { Button } from "@/components/ui/button"
import {
  formatWatchTime,
  getContinueLesson,
  isLessonFinished,
} from "@/lib/learning-progress"
import { LEARNING_LESSONS, useLearningProgress } from "./store"
import { LessonStatus } from "./lesson-status"
import styles from "./floating-learning.module.css"

function LearningPopover() {
  const [open, setOpen] = useState(false)
  const openedByHover = useRef(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const headingId = useId()
  const progress = useLearningProgress()
  const nextLesson = getContinueLesson(progress, LEARNING_LESSONS)
  const lesson = nextLesson ?? LEARNING_LESSONS[0]
  const record = progress.lessons[lesson.href]
  const completedCount = LEARNING_LESSONS.filter(
    (item) => progress.lessons[item.href]?.completed
  ).length
  const allCompleted = completedCount === LEARNING_LESSONS.length
  const action = nextLesson
    ? allCompleted
      ? "回顾课程"
      : "继续学习"
    : "开始学习"
  const watchedPercent = record?.duration
    ? Math.min(100, (record.position / record.duration) * 100)
    : 0

  useEffect(() => {
    return () => {
      if (closeTimer.current !== null) clearTimeout(closeTimer.current)
    }
  }, [])

  function cancelClose() {
    if (closeTimer.current !== null) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  function changeOpen(nextOpen: boolean) {
    cancelClose()
    setOpen(nextOpen)
  }

  function enterWithPointer(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return
    cancelClose()
    if (!open) {
      openedByHover.current = true
      setOpen(true)
    }
  }

  function leaveWithPointer(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || !openedByHover.current) return
    cancelClose()
    // Keep the panel open while crossing the gap from the bubble.
    closeTimer.current = setTimeout(() => {
      closeTimer.current = null
      setOpen(false)
    }, 180)
  }

  return (
    <Popover.Root open={open} onOpenChange={changeOpen}>
      <Popover.Trigger asChild>
        <Button
          type="button"
          size="icon-lg"
          aria-label="打开学习进度"
          data-slot="floating-learning-trigger"
          onPointerEnter={enterWithPointer}
          onPointerLeave={leaveWithPointer}
          onPointerDown={(event) => {
            if (event.pointerType !== "mouse") openedByHover.current = false
          }}
          onKeyDown={() => {
            openedByHover.current = false
            cancelClose()
          }}
          onClick={(event) => {
            // A click after hovering should keep the revealed shortcuts open.
            if (open && openedByHover.current) event.preventDefault()
          }}
          className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 rounded-full border-primary-foreground/20 shadow-md sm:right-[max(1.5rem,env(safe-area-inset-right))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))]"
        >
          <BookOpen className="size-5" aria-hidden="true" />
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          aria-labelledby={headingId}
          side="top"
          align="end"
          sideOffset={12}
          collisionPadding={16}
          data-slot="floating-learning-content"
          onPointerEnter={enterWithPointer}
          onPointerLeave={leaveWithPointer}
          onKeyDownCapture={(event) => {
            if (event.key === "Tab") {
              openedByHover.current = false
              cancelClose()
            }
          }}
          onOpenAutoFocus={(event) => {
            if (openedByHover.current) event.preventDefault()
          }}
          onCloseAutoFocus={(event) => {
            if (openedByHover.current) event.preventDefault()
          }}
          className={`${styles.panel} z-40 max-h-[var(--radix-popover-content-available-height)] w-80 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-lg border border-border bg-popover p-5 text-popover-foreground shadow-lg outline-none`}
        >
          <div className="flex items-center justify-between gap-3">
            <h2 id={headingId} className="text-sm font-semibold">
              {action}
            </h2>
            <Popover.Close asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="-my-1 -mr-1 text-muted-foreground"
                aria-label="关闭学习进度"
              >
                <X aria-hidden="true" />
              </Button>
            </Popover.Close>
          </div>

          <div className="mt-5">
            <p className="text-xs leading-5 text-muted-foreground">
              第 {lesson.chapterNumber} 章 · {lesson.chapter}
            </p>
            <p className="mt-1.5 flex items-start gap-2 text-base leading-7 font-semibold">
              <span className="min-w-0 break-words">{lesson.title}</span>
              <LessonStatus record={record} className="mt-1.5" />
            </p>
            {record && record.duration > 0 ? (
              <div className="mt-4">
                <div className="mb-2 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                  <span>
                    {isLessonFinished(record) ? "本节已完成" : "上次看到"}
                  </span>
                  <span className="font-mono tabular-nums">
                    {formatWatchTime(record.position)} /{" "}
                    {formatWatchTime(record.duration)}
                  </span>
                </div>
                <div
                  role="progressbar"
                  aria-label="本节观看进度"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(watchedPercent)}
                  className="h-1 overflow-hidden rounded-full bg-muted"
                >
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${watchedPercent}%` }}
                  />
                </div>
              </div>
            ) : (
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {record?.completed
                  ? "已完成本节，可以随时回来复习。"
                  : nextLesson
                    ? "接着学习这一节。"
                    : "从这里开始，下次接着上次的位置看。"}
              </p>
            )}
          </div>

          <Button asChild className="mt-5 h-10 w-full justify-between">
            <Link
              href={`${lesson.href}#course-video`}
              onClick={(event) => {
                changeOpen(false)
                if (
                  event.button !== 0 ||
                  event.metaKey ||
                  event.ctrlKey ||
                  event.shiftKey ||
                  event.altKey ||
                  window.location.pathname !== lesson.href
                )
                  return

                const video = document.getElementById("course-video")
                if (video) {
                  event.preventDefault()
                  video.scrollIntoView({ block: "start" })
                }
              }}
            >
              <span className="inline-flex items-center gap-2">
                <Play className="size-3.5 fill-current" aria-hidden="true" />
                {action}
              </span>
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
            <span>
              已完成 {completedCount} / {LEARNING_LESSONS.length} 节
            </span>
            <Link
              href="/courses"
              onClick={() => changeOpen(false)}
              className="rounded-sm underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              课程目录
            </Link>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export function FloatingLearning() {
  const pathname = usePathname()
  return <LearningPopover key={pathname} />
}
