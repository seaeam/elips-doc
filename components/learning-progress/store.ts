"use client"

import { useSyncExternalStore } from "react"
import { COURSE_SECTIONS } from "@/components/course-catalog/const"
import { getLessonHref } from "@/components/course-catalog/utils"
import {
  EMPTY_PROGRESS,
  parseProgress,
  setLessonCompletion,
  updateProgress,
  type LearningProgress,
  type ProgressPoint,
} from "@/lib/learning-progress"

export const LEARNING_LESSONS = COURSE_SECTIONS.flatMap((section) =>
  section.lessonTitles.map((title, index) => ({
    href: getLessonHref(section.href, index),
    title,
    chapter: section.title,
    chapterNumber: section.number,
    lessonNumber: index + 1,
  }))
)

const STORAGE_KEY = "elpis:learning-progress:v1"
const listeners = new Set<() => void>()
let snapshot: LearningProgress | undefined

function readStorage() {
  try {
    return parseProgress(
      window.localStorage.getItem(STORAGE_KEY),
      LEARNING_LESSONS
    )
  } catch {
    return EMPTY_PROGRESS
  }
}

export function getLearningProgress() {
  if (typeof window === "undefined") return EMPTY_PROGRESS
  return (snapshot ??= readStorage())
}

function emitChange() {
  listeners.forEach((listener) => listener())
}

function onStorage(event: StorageEvent) {
  if (event.key !== STORAGE_KEY && event.key !== null) return
  snapshot = readStorage()
  emitChange()
}

function subscribe(listener: () => void) {
  if (listeners.size === 0) window.addEventListener("storage", onStorage)
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0) window.removeEventListener("storage", onStorage)
  }
}

function mergeStoredProgress() {
  // Merge other tabs' lessons before writing; an old paused tab must not erase them.
  let merged = readStorage()
  for (const [href, record] of Object.entries(getLearningProgress().lessons)) {
    merged = updateProgress(merged, { href, ...record })
  }
  return merged
}

function persistProgress(progress: LearningProgress) {
  snapshot = progress
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot))
  } catch {
    // Storage can be unavailable in private/restricted contexts. Playback still works.
  }
  emitChange()
}

export function saveLearningProgress(point: ProgressPoint) {
  if (!LEARNING_LESSONS.some((lesson) => lesson.href === point.href)) return
  persistProgress(updateProgress(mergeStoredProgress(), point))
}

export function saveLessonCompletion(
  href: string,
  mediaId: string,
  completed: boolean
) {
  if (!LEARNING_LESSONS.some((lesson) => lesson.href === href)) return
  persistProgress(
    setLessonCompletion(mergeStoredProgress(), {
      href,
      mediaId,
      completed,
      updatedAt: Date.now(),
    })
  )
}

export function useLearningProgress() {
  return useSyncExternalStore(
    subscribe,
    getLearningProgress,
    () => EMPTY_PROGRESS
  )
}
