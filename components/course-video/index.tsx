"use client"

import { useRef, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type {
  MuxPlayerProps,
  MuxPlayerRefAttributes,
} from "@mux/mux-player-react"
import { RotateCw } from "lucide-react"
import { COURSE_SECTIONS } from "@/components/course-catalog/const"
import { cn } from "@/lib/utils"
import { getLessonCover, type LessonCoverData } from "./cover-data"
import { VideoCover } from "./video-cover"

const Player = dynamic(() => import("@/components/ui/player"), {
  ssr: false,
  loading: () => (
    <div
      className="flex aspect-video items-center justify-center rounded-xl bg-neutral-950 text-sm text-neutral-400"
      role="status"
    >
      正在加载视频…
    </div>
  ),
})

type CourseVideoProps = MuxPlayerProps & {
  chapterLabel?: string
  notesHref?: string
}

function VideoSurface({
  title = "课程视频",
  notesHref,
  onError,
  style,
  cover,
  ...props
}: Omit<CourseVideoProps, "chapterLabel" | "className"> & {
  cover: LessonCoverData
}) {
  const [state, setState] = useState<"idle" | "playing" | "error">("idle")
  const [attempt, setAttempt] = useState(0)
  const playerRef = useRef<MuxPlayerRefAttributes>(null)
  const playRequested = useRef(false)
  const preloadFailed = useRef(false)

  function startPlayback() {
    playRequested.current = true
    setState("playing")

    if (preloadFailed.current) {
      preloadFailed.current = false
      setAttempt((value) => value + 1)
      return
    }

    // Keep play() within the click gesture and reuse the buffered player.
    // If the module is still loading, autoPlay starts it when it mounts.
    void playerRef.current?.play()?.catch(() => {
      // Media failures go through onError. If the browser blocks playback,
      // the now-visible native play control lets the user try again.
    })
  }

  if (state === "error") {
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-4 rounded-xl bg-neutral-950 px-5 text-center text-white">
        <p role="status" className="text-sm leading-7 text-neutral-400">
          视频暂时无法加载，可以先阅读本节笔记。
        </p>
        <button
          type="button"
          onClick={startPlayback}
          className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-xs transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <RotateCw className="size-3.5" aria-hidden="true" />
          重试视频
        </button>
        {notesHref && (
          <Link
            href={notesHref}
            className="rounded text-xs text-neutral-400 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            阅读{title}
          </Link>
        )}
      </div>
    )
  }

  return (
    <div className="relative">
      <div
        aria-hidden={state === "idle"}
        inert={state === "idle"}
        className={cn(
          state === "idle" && "pointer-events-none absolute inset-0 opacity-0"
        )}
      >
        <Player
          key={attempt}
          {...props}
          playerRef={playerRef}
          title={title}
          aria-label={`${title}视频`}
          preload="auto"
          autoPlay={state === "playing"}
          playsInline
          onError={(event) => {
            preloadFailed.current = true
            if (playRequested.current) setState("error")
            onError?.(event)
          }}
          className="block aspect-video w-full overflow-hidden rounded-xl"
          style={{ ...style, aspectRatio: "16 / 9" }}
        />
      </div>
      {state === "idle" && (
        <VideoCover title={title} cover={cover} onPlay={startPlayback} />
      )}
    </div>
  )
}

export function CourseVideo({
  className,
  chapterLabel,
  ...props
}: CourseVideoProps) {
  const pathname = usePathname()
  const coursePath = props.notesHref ?? pathname
  const chapter = COURSE_SECTIONS.find((section) =>
    coursePath.startsWith(
      `${section.href.slice(0, section.href.lastIndexOf("/"))}/`
    )
  )
  const lessonNumber = Number(coursePath.split("/").filter(Boolean).at(-1)) || 1
  const cover = getLessonCover(chapter?.number ?? "01", lessonNumber)
  const caption =
    chapterLabel ??
    (chapter
      ? `第${"一二三四五六七八九"[Number(chapter.number) - 1]}章 · ${chapter.title}`
      : "课程视频")

  return (
    <figure className={cn("not-prose @container m-0 min-w-0", className)}>
      <VideoSurface
        key={props.playbackId ?? props.src ?? props.title}
        {...props}
        cover={cover}
      />
      <figcaption className="mt-4 flex items-start justify-between gap-3 px-1 pb-1 text-xs leading-6">
        <span className="min-w-0 text-foreground">{caption}</span>
        <span className="shrink-0 text-[10px] text-muted-foreground">
          VIDEO + NOTES
        </span>
      </figcaption>
    </figure>
  )
}
