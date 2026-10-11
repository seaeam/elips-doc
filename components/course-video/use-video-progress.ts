"use client"

import { useCallback, useEffect, useRef, useState, type RefObject } from "react"
import type { MuxPlayerRefAttributes } from "@mux/mux-player-react"
import {
  getLearningProgress,
  saveLearningProgress,
  useLearningProgress,
} from "@/components/learning-progress/store"
import {
  getResumeTime,
  hasReachedCompletion,
  type ProgressPoint,
} from "@/lib/learning-progress"

export function useVideoProgress(
  href: string,
  mediaId: string,
  playerRef: RefObject<MuxPlayerRefAttributes | null>,
  defaultStartTime = 0
) {
  const progress = useLearningProgress()
  const saved = progress.lessons[href]
  const matchingRecord = saved?.mediaId === mediaId ? saved : undefined
  const [startTime, setStartTime] = useState(() => {
    const record = getLearningProgress().lessons[href]
    return record?.mediaId === mediaId
      ? getResumeTime(record, mediaId)
      : defaultStartTime
  })
  const pendingSeek = useRef<number | null>(startTime)
  const hasPlayed = useRef(false)
  const lastPoint = useRef<ProgressPoint | null>(null)
  const lastSavedAt = useRef(0)

  const flush = useCallback(() => {
    if (lastPoint.current) {
      saveLearningProgress(lastPoint.current)
      lastSavedAt.current = Date.now()
    }
  }, [])

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") flush()
    }
    window.addEventListener("pagehide", flush)
    document.addEventListener("visibilitychange", onVisibilityChange)
    return () => {
      flush()
      window.removeEventListener("pagehide", flush)
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [flush])

  function capture(force = false, completed = false) {
    const player = playerRef.current
    // Loading, restoring and seeking behind the cover are not learning activity.
    if (!hasPlayed.current || !player || player.media?.seeking) return
    const { duration, currentTime } = player
    if (
      !Number.isFinite(duration) ||
      duration <= 0 ||
      !Number.isFinite(currentTime)
    )
      return
    lastPoint.current = {
      href,
      mediaId,
      position: completed ? duration : currentTime,
      duration,
      completed: completed || player.ended,
      updatedAt: Date.now(),
    }
    const saved = getLearningProgress().lessons[href]
    const newlyCompleted =
      saved?.completionOverride === undefined &&
      !saved?.completed &&
      hasReachedCompletion(currentTime, duration)
    if (force || newlyCompleted || Date.now() - lastSavedAt.current >= 5000)
      flush()
  }

  function applyPendingSeek() {
    const player = playerRef.current
    if (!player || player.readyState < 1 || pendingSeek.current === null) return
    const duration = player.duration
    const position = Number.isFinite(duration)
      ? Math.min(pendingSeek.current, Math.max(0, duration - 1))
      : pendingSeek.current
    if (Math.abs(player.currentTime - position) > 0.25)
      player.currentTime = position
    pendingSeek.current = null
  }

  function preparePlayback(fromBeginning = false) {
    const record = getLearningProgress().lessons[href]
    const position = fromBeginning
      ? 0
      : record?.mediaId === mediaId
        ? getResumeTime(record, mediaId, playerRef.current?.duration)
        : defaultStartTime
    setStartTime(position)
    pendingSeek.current = position
    applyPendingSeek()
  }

  return {
    startTime,
    resumeTime: getResumeTime(matchingRecord, mediaId),
    completed: matchingRecord?.completed ?? false,
    preparePlayback,
    onLoadedMetadata: applyPendingSeek,
    onPlaying: () => {
      hasPlayed.current = true
      capture(true)
    },
    onTimeUpdate: () => capture(),
    onPause: () => capture(true),
    onSeeked: () => capture(true),
    onEnded: () => capture(true, true),
  }
}
