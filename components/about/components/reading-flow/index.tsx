"use client"

import { useRef } from "react"
import {
  BookOpen,
  Code2,
  FileText,
  GitBranch,
  RotateCcw,
  Video,
} from "lucide-react"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { DotPattern } from "@/components/ui/dot-pattern"

export function ReadingFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const codeRef = useRef<HTMLDivElement>(null)
  const diagramRef = useRef<HTMLDivElement>(null)
  const notesRef = useRef<HTMLDivElement>(null)
  const reviewRef = useRef<HTMLDivElement>(null)

  const beamProps = {
    containerRef,
    pathColor: "var(--muted-foreground)",
    pathOpacity: 0.2,
    pathWidth: 1.5,
    gradientStartColor: "var(--muted-foreground)",
    gradientStopColor: "var(--foreground)",
    duration: 5,
    repeatDelay: 1,
  }

  return (
    <figure className="relative min-w-0 overflow-hidden rounded-xl border border-border bg-muted/20">
      <DotPattern
        width={20}
        height={20}
        cr={0.7}
        className="[mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)] text-muted-foreground/20"
      />
      <div className="relative flex items-center justify-between gap-3 border-b border-border px-5 py-4">
        <p className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
          VIDEOS & NOTES
        </p>
        <BookOpen
          className="size-3.5 text-muted-foreground"
          aria-hidden="true"
        />
      </div>

      <div
        ref={containerRef}
        className="relative isolate flex min-h-72 items-center justify-between px-5 py-7 sm:px-8"
      >
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex flex-col items-center gap-1.5">
            <div
              ref={videoRef}
              className="flex size-10 items-center justify-center rounded-xl border border-border bg-background sm:size-11"
            >
              <Video className="size-4 text-foreground/75" aria-hidden="true" />
            </div>
            <span className="text-[10px] text-muted-foreground">视频讲解</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div
              ref={codeRef}
              className="flex size-10 items-center justify-center rounded-xl border border-border bg-background sm:size-11"
            >
              <Code2 className="size-4 text-foreground/75" aria-hidden="true" />
            </div>
            <span className="text-[10px] text-muted-foreground">关键代码</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div
              ref={diagramRef}
              className="flex size-10 items-center justify-center rounded-xl border border-border bg-background sm:size-11"
            >
              <GitBranch
                className="size-4 text-foreground/75"
                aria-hidden="true"
              />
            </div>
            <span className="text-[10px] text-muted-foreground">结构图解</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div
            ref={notesRef}
            className="flex size-[4.5rem] flex-col items-center justify-center gap-1.5 rounded-2xl border border-foreground/15 bg-background shadow-sm sm:size-20"
          >
            <FileText className="size-5 text-foreground" aria-hidden="true" />
            <span className="font-mono text-[10px] font-medium tracking-[0.1em]">
              ELPIS
            </span>
          </div>
          <span className="text-xs font-medium text-foreground">学习笔记</span>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div
            ref={reviewRef}
            className="flex size-11 items-center justify-center rounded-full border border-border bg-background sm:size-12"
          >
            <RotateCcw
              className="size-4 text-foreground/75"
              aria-hidden="true"
            />
          </div>
          <span className="text-xs text-muted-foreground">查阅复习</span>
        </div>

        <div aria-hidden="true">
          <AnimatedBeam
            {...beamProps}
            fromRef={videoRef}
            toRef={notesRef}
            delay={0}
          />
          <AnimatedBeam
            {...beamProps}
            fromRef={codeRef}
            toRef={notesRef}
            delay={0.45}
          />
          <AnimatedBeam
            {...beamProps}
            fromRef={diagramRef}
            toRef={notesRef}
            delay={0.9}
          />
          <AnimatedBeam
            {...beamProps}
            fromRef={notesRef}
            toRef={reviewRef}
            delay={1.35}
          />
        </div>
      </div>

      <figcaption className="relative border-t border-border px-5 py-3 text-center text-xs leading-6 text-muted-foreground">
        视频用于回看演示，笔记用于查找代码和配置。
      </figcaption>
    </figure>
  )
}
