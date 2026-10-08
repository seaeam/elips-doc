"use client"

import { useState } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Braces,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Package,
  Pause,
  Play,
  Server,
  Terminal,
} from "lucide-react"
import { COURSE_SECTIONS } from "@/components/course-catalog/const"
import { BlurFade } from "@/components/ui/blur-fade"
import { BorderBeam } from "@/components/ui/border-beam"
import { Button } from "@/components/ui/button"
import { DotPattern } from "@/components/ui/dot-pattern"
import { Marquee } from "@/components/ui/marquee"
import { NumberTicker } from "@/components/ui/number-ticker"
import { cn } from "@/lib/utils"

const Player = dynamic(() => import("@/components/ui/player"), {
  loading: () => (
    <div
      className="flex aspect-video items-center justify-center rounded-xl bg-muted text-sm text-muted-foreground"
      role="status"
    >
      正在加载视频…
    </div>
  ),
})

export function HomeMetrics() {
  const total = COURSE_SECTIONS.reduce(
    (sum, section) => sum + section.lessons,
    0
  )
  return (
    <div
      className="grid grid-cols-2 border-y border-border py-2 sm:grid-cols-4"
      aria-label="课程概览"
    >
      {[
        {
          value: COURSE_SECTIONS.length,
          label: "章课程",
          sub: "按原课程顺序整理",
        },
        { value: total, label: "节笔记", sub: "附视频与代码示例" },
        { value: 4, label: "个部分", sub: "需求、实现与发布" },
        { value: 1, label: "个框架项目", sub: "ELPIS 中后台开发框架" },
      ].map(({ value, label, sub }, i) => (
        <div
          key={label}
          className={cn(
            "px-4 py-6 sm:px-6 sm:py-8",
            i % 2 === 1 && "border-l border-border",
            i === 2 && "sm:border-l"
          )}
        >
          <div className="flex items-baseline gap-2">
            <NumberTicker
              value={value}
              className="text-4xl font-medium tracking-tighter sm:text-5xl"
            />
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
          <p className="mt-3 text-[11px] text-muted-foreground">{sub}</p>
        </div>
      ))}
    </div>
  )
}

const technologies = [
  { name: "Vue 3", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "Koa", icon: Layers3 },
  { name: "Webpack 5", icon: Boxes },
  { name: "JSON Schema", icon: Braces },
  { name: "npm", icon: Package },
  { name: "MySQL", icon: Database },
  { name: "GitFlow", icon: GitBranch },
  { name: "CI / CD", icon: Terminal },
]

export function TechStack() {
  const [paused, setPaused] = useState(false)
  return (
    <div
      className="flex flex-col gap-5 border-b border-border py-6 sm:flex-row sm:items-center"
      aria-label="课程涉及的技术栈"
    >
      <div className="flex shrink-0 items-center justify-between gap-4 sm:flex-col sm:items-start">
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
          TECH STACK
        </span>
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
          className="experience-focus inline-flex min-h-6 cursor-pointer items-center gap-1 rounded text-[10px] text-muted-foreground hover:text-foreground"
        >
          {paused ? (
            <Play className="size-2.5" />
          ) : (
            <Pause className="size-2.5" />
          )}
          {paused ? "继续滚动" : "暂停滚动"}
        </button>
      </div>
      <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Marquee
          pauseOnHover
          repeat={2}
          className={cn(
            "p-0 [--duration:48s] [--gap:2.5rem]",
            paused && "[&_.animate-marquee]:[animation-play-state:paused]"
          )}
        >
          {technologies.map(({ name, icon: Icon }) => (
            <span
              key={name}
              className="inline-flex items-center gap-2.5 py-3 text-sm font-medium whitespace-nowrap text-muted-foreground"
            >
              <Icon className="size-4" aria-hidden="true" />
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export function HomeIntro({ playbackId }: { playbackId: string }) {
  const [playing, setPlaying] = useState(false)
  const [playError, setPlayError] = useState(false)
  return (
    <section
      aria-labelledby="home-intro-title"
      className="grid items-center gap-10 border-t border-border py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
    >
      <BlurFade inView>
        <p className="experience-eyebrow">03 / COURSE INTRODUCTION</p>
        <h2
          id="home-intro-title"
          className="mt-4 text-3xl leading-snug font-medium tracking-tight sm:text-4xl"
        >
          第一节：课程设计初衷
        </h2>
        <p className="mt-5 text-sm leading-8 text-muted-foreground">
          这一节介绍中后台开发中常见的重复工作，以及 ELPIS 希望解决的问题。
        </p>
        <ol className="mt-6 space-y-3 text-sm">
          {[
            "哪些业务代码会反复编写？",
            "哪些代码适合放进框架？",
            "业务项目如何使用框架？",
          ].map((q, i) => (
            <li key={q} className="flex gap-3">
              <span className="font-mono text-[11px] text-muted-foreground">
                0{i + 1}
              </span>
              <span>{q}</span>
            </li>
          ))}
        </ol>
        <Link
          href="/courses/01-introduction/01"
          className="experience-focus mt-7 inline-flex items-center gap-2 rounded text-sm underline decoration-border underline-offset-4 hover:decoration-foreground"
        >
          阅读课程设计初衷{" "}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </BlurFade>
      <BlurFade inView delay={0.1}>
        <figure className="relative overflow-hidden rounded-2xl border border-border bg-muted/10 p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between px-1 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-2">
              <Play className="size-3" /> 课程导览
            </span>
            <span className="font-mono">EPISODE 01</span>
          </div>
          {playError ? (
            <div
              className="flex aspect-video flex-col items-center justify-center gap-4 rounded-xl bg-muted px-6 text-center"
              role="status"
            >
              <p className="text-sm leading-7 text-muted-foreground">
                视频暂时无法加载，
                <br />
                可以先阅读本节笔记。
              </p>
              <Link
                href="/courses/01-introduction/01"
                className="experience-focus rounded text-sm underline underline-offset-4"
              >
                阅读课程设计初衷
              </Link>
              <button
                type="button"
                className="experience-focus cursor-pointer rounded text-xs text-muted-foreground"
                onClick={() => setPlayError(false)}
              >
                重试视频
              </button>
            </div>
          ) : playing ? (
            <Player
              playbackId={playbackId}
              title="课程设计初衷"
              aria-label="课程设计初衷视频"
              autoPlay
              onError={() => setPlayError(true)}
              className="aspect-video w-full overflow-hidden rounded-xl"
              style={{ aspectRatio: "16 / 9" }}
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="播放课程设计初衷视频"
              className="experience-focus group relative flex aspect-video w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl bg-zinc-950 text-white"
            >
              <DotPattern
                width={22}
                height={22}
                cr={0.6}
                className="[mask-image:radial-gradient(ellipse_at_center,black,transparent)] text-white/15"
              />
              <span className="absolute top-6 left-6 font-mono text-[9px] tracking-[0.22em] text-zinc-500">
                506 LAB / ELPIS
              </span>
              <span
                className="absolute font-mono text-[clamp(4rem,9vw,8rem)] font-medium tracking-tighter text-white/5"
                aria-hidden="true"
              >
                ELPIS
              </span>
              <span className="relative flex size-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-transform motion-safe:group-hover:scale-110">
                <Play className="ml-0.5 size-5 fill-white" aria-hidden="true" />
              </span>
              <span className="relative mt-5 text-sm font-medium">
                课程设计初衷
              </span>
              <span className="relative mt-2 text-[10px] text-zinc-400">
                点击播放课程视频
              </span>
            </button>
          )}
          <figcaption className="mt-4 flex items-center justify-between gap-3 px-1 pb-1 text-xs">
            <span>第一章 · 前言</span>
            <span className="shrink-0 text-[10px] text-muted-foreground">
              VIDEO + NOTES
            </span>
          </figcaption>
          <BorderBeam
            size={120}
            duration={12}
            colorFrom="var(--border)"
            colorTo="var(--muted-foreground)"
          />
        </figure>
      </BlurFade>
    </section>
  )
}

export function HomeNextStep() {
  return (
    <BlurFade inView>
      <section
        className="relative isolate overflow-hidden rounded-3xl border border-border bg-muted/15 px-7 py-12 text-center sm:px-12 sm:py-16"
        aria-labelledby="home-next-title"
      >
        <DotPattern
          width={18}
          height={18}
          cr={0.7}
          className="-z-10 [mask-image:linear-gradient(to_right,black,transparent_35%,transparent_65%,black)] text-muted-foreground/20"
        />
        <p className="experience-eyebrow">COURSE INDEX</p>
        <h2
          id="home-next-title"
          className="mt-4 text-3xl leading-snug font-medium tracking-tight sm:text-4xl"
        >
          查看全部课程
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
          目录按原课程排列，可以按章节阅读，也可以搜索小节标题。
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="h-12 gap-3 rounded-full px-6">
            <Link href="/courses">
              打开课程目录 <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-12 rounded-full px-5"
          >
            <Link href="/about">了解这份笔记</Link>
          </Button>
        </div>
      </section>
    </BlurFade>
  )
}
