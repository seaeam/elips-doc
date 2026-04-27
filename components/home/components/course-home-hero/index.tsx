import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { NumberTicker } from "@/components/ui/number-ticker"
import { ArrowRight, Info, Sparkles } from "lucide-react"
import Link from "next/link"

import { DiaTextReveal } from "@/components/ui/dia-text-reveal"
import Player from "@/components/ui/player"
import { ShineBorder } from "@/components/ui/shine-border"
import type { CourseHeroStat } from "../../types"

type CourseHomeHeroProps = {
  heroPlaybackId: string
  heroStats: CourseHeroStat[]
  techStack: string[]
}

export function CourseHomeHero({
  heroPlaybackId,
  heroStats,
  techStack,
}: CourseHomeHeroProps) {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center">
      <BlurFade inView delay={0.05} className="space-y-8">
        <div className="flex items-center justify-start">
          <DiaTextReveal
            className="text-7xl font-bold tracking-tight"
            text="ELPIS"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary">
            <Sparkles className="size-3.5" />
            持续更新
          </Badge>
          <Badge variant="outline">Elpis Framework</Badge>
        </div>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          从真实开发问题出发，推导需求、方案、架构与实现，最终把前后端框架能力真正串起来。
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="h-10 px-5">
            <Link href="/courses">
              进入课程
              <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-10 px-5">
            <Link href="/about">
              课程说明
              <Info />
            </Link>
          </Button>
        </div>

        <div className="relative grid w-full gap-4 overflow-hidden rounded-lg sm:grid-cols-3">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          {heroStats.map((stat) => (
            <div key={stat.label} className="p-4">
              <div className="text-3xl font-semibold tracking-tight">
                <NumberTicker value={stat.value} delay={stat.delay} />
                {stat.suffix}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </BlurFade>

      <BlurFade inView delay={0.15}>
        <Card className="p-4">
          <CardHeader>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-xl">课程导览</CardTitle>
                <CardDescription>
                  从课程设计初衷开始，逐步走到框架能力落地。
                </CardDescription>
              </div>
              <Badge variant="outline" className="px-3 py-1">
                2026 持续整理
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Player
              playbackId={heroPlaybackId}
              title="课程设计初衷"
              className="aspect-video w-full"
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-muted/40 p-4">
                <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  当前重点
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  Node.js 内核引擎、Webpack5 工程化、Vue3 领域模型架构。
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/40 p-4">
                <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  学习方式
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  视频 + 结构化笔记同步整理，适合边学边搭框架原型。
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {techStack.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  )
}
