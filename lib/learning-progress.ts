export type LessonProgress = {
  mediaId: string
  position: number
  duration: number
  updatedAt: number
  completed: boolean
  completionOverride?: { completed: boolean; updatedAt: number }
}

export type LearningProgress = {
  version: 1
  lessons: Record<string, LessonProgress>
}

export type ProgressPoint = LessonProgress & { href: string }
export type LearningLesson = { href: string; title: string }

export const EMPTY_PROGRESS: LearningProgress = { version: 1, lessons: {} }
export const COMPLETION_RATIO = 0.9

export function hasReachedCompletion(position: number, duration: number) {
  return duration > 0 && position / duration >= COMPLETION_RATIO
}

function isRecord(value: unknown): value is LessonProgress {
  if (!value || typeof value !== "object") return false
  const record = value as Partial<LessonProgress>
  return (
    typeof record.mediaId === "string" &&
    record.mediaId.length > 0 &&
    typeof record.position === "number" &&
    Number.isFinite(record.position) &&
    record.position >= 0 &&
    typeof record.duration === "number" &&
    Number.isFinite(record.duration) &&
    record.duration >= 0 &&
    (record.duration > 0 || record.position === 0) &&
    typeof record.updatedAt === "number" &&
    Number.isFinite(record.updatedAt) &&
    record.updatedAt > 0 &&
    typeof record.completed === "boolean" &&
    (record.completionOverride === undefined ||
      (record.completionOverride !== null &&
        typeof record.completionOverride.completed === "boolean" &&
        Number.isFinite(record.completionOverride.updatedAt) &&
        record.completionOverride.updatedAt > 0))
  )
}

function mergeRecords(current: LessonProgress, previous?: LessonProgress) {
  const latest =
    previous && previous.updatedAt > current.updatedAt ? previous : current
  const other = latest === current ? previous : current
  const sameMedia = other?.mediaId === latest.mediaId ? other : undefined
  const override =
    (sameMedia?.completionOverride?.updatedAt ?? 0) >
    (latest.completionOverride?.updatedAt ?? 0)
      ? sameMedia?.completionOverride
      : latest.completionOverride

  return {
    mediaId: latest.mediaId,
    position: Math.min(latest.position, latest.duration),
    duration: latest.duration,
    updatedAt: latest.updatedAt,
    completed:
      override?.completed ??
      (latest.completed ||
        !!sameMedia?.completed ||
        hasReachedCompletion(latest.position, latest.duration)),
    ...(override ? { completionOverride: override } : {}),
  }
}

export function parseProgress(
  raw: string | null,
  lessons: readonly LearningLesson[]
): LearningProgress {
  try {
    const data = JSON.parse(raw ?? "null")
    if (data?.version !== 1 || !data.lessons) return EMPTY_PROGRESS
    const entries: Record<string, LessonProgress> = {}
    for (const { href } of lessons) {
      const entry: unknown = data.lessons[href]
      if (!isRecord(entry)) continue
      entries[href] = mergeRecords(entry)
    }
    return { version: 1, lessons: entries }
  } catch {
    return EMPTY_PROGRESS
  }
}

export function updateProgress(
  progress: LearningProgress,
  point: ProgressPoint
): LearningProgress {
  if (!isRecord(point)) return progress
  const { href, ...record } = point
  return {
    version: 1,
    lessons: {
      ...progress.lessons,
      [href]: mergeRecords(record, progress.lessons[href]),
    },
  }
}

export function setLessonCompletion(
  progress: LearningProgress,
  change: {
    href: string
    mediaId: string
    completed: boolean
    updatedAt: number
  }
) {
  const saved = progress.lessons[change.href]
  const record = saved?.mediaId === change.mediaId ? saved : undefined
  return updateProgress(progress, {
    href: change.href,
    mediaId: change.mediaId,
    position: record?.position ?? 0,
    duration: record?.duration ?? 0,
    updatedAt: Math.max(change.updatedAt, record?.updatedAt ?? 0),
    completed: change.completed,
    completionOverride: {
      completed: change.completed,
      updatedAt: change.updatedAt,
    },
  })
}

export function getResumeTime(
  record: LessonProgress | undefined,
  mediaId: string,
  duration = record?.duration
) {
  if (!record || record.mediaId !== mediaId || isLessonFinished(record))
    return 0
  const limit =
    duration && Number.isFinite(duration) ? duration : record.duration
  return Math.max(0, Math.min(record.position, limit - 1))
}

export function isLessonFinished(record: LessonProgress | undefined) {
  return (
    !!record?.completed &&
    (record.completionOverride?.completed === true ||
      hasReachedCompletion(record.position, record.duration))
  )
}

export function getContinueLesson<T extends LearningLesson>(
  progress: LearningProgress,
  lessons: readonly T[]
): T | null {
  const latest = lessons.reduce<T | null>((current, lesson) => {
    const time = progress.lessons[lesson.href]?.updatedAt ?? 0
    const latestTime = current
      ? (progress.lessons[current.href]?.updatedAt ?? 0)
      : 0
    return time > latestTime ? lesson : current
  }, null)
  if (!latest || !isLessonFinished(progress.lessons[latest.href])) return latest
  const index = lessons.findIndex((lesson) => lesson.href === latest.href)
  const remaining = [...lessons.slice(index + 1), ...lessons.slice(0, index)]
  return (
    remaining.find((lesson) => !progress.lessons[lesson.href]?.completed) ??
    latest
  )
}

export function formatWatchTime(seconds: number) {
  const total = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const remainder = String(total % 60).padStart(2, "0")
  return hours
    ? `${hours}:${String(minutes).padStart(2, "0")}:${remainder}`
    : `${String(minutes).padStart(2, "0")}:${remainder}`
}
