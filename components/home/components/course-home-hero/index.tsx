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
import { ArrowRight, Blocks, Info, Sparkles, Workflow } from "lucide-react"
import Link from "next/link"

import { DiaTextReveal } from "@/components/ui/dia-text-reveal"
import Player from "@/components/ui/player"

type CourseHomeHeroProps = {
  heroPlaybackId: string
}

export function CourseHomeHero({ heroPlaybackId }: CourseHomeHeroProps) {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center">
      <BlurFade inView delay={0.05} className="flex flex-col gap-8">
        <div className="flex items-center justify-start">
          <DiaTextReveal
            className="text-7xl font-bold tracking-tight"
            text="ELPIS"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary">
            <Sparkles data-icon="inline-start" />
            面向前端开发者
          </Badge>
          <Badge variant="outline">框架与工程实践</Badge>
        </div>
        <div className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            从业务抽象到框架实现
          </h1>
          <p className="text-base leading-7 text-muted-foreground md:text-lg">
            ELPIS 是一份围绕前端框架设计整理的学习笔记，重点不是罗列 API，
            而是讲清楚如何识别重复问题、建立模型，再把设计落到工程和代码。
          </p>
        </div>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          适合已经有项目经验、希望系统理解前端架构、领域建模和工程化取舍的开发者。
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <Link href="/courses">
              查看课程目录
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/about">
              课程说明
              <Info data-icon="inline-end" />
            </Link>
          </Button>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border/60 bg-background/70 p-4">
            <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
              适合谁
            </p>
            <p className="mt-2 text-sm leading-6">
              想从业务开发进一步走向架构设计与框架建设的前端开发者。
            </p>
          </div>
          <div className="rounded-lg border border-border/60 bg-background/70 p-4">
            <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
              你会看到
            </p>
            <p className="mt-2 text-sm leading-6">
              需求抽象、领域模型、Node.js 内核、Webpack 5 工程化和 Vue 3 实践。
            </p>
          </div>
          <div className="rounded-lg border border-border/60 bg-background/70 p-4">
            <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
              怎么阅读
            </p>
            <p className="mt-2 text-sm leading-6">
              先看导览建立上下文，再按章节查阅，适合学习、复盘和对照自己的项目。
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade inView delay={0.15}>
        <Card className="p-4">
          <CardHeader>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <CardTitle className="text-xl">先看这门课讲什么</CardTitle>
                <CardDescription>
                  用一段导览视频快速了解课程范围、问题背景和学习方式。
                </CardDescription>
              </div>
              <Badge variant="outline" className="px-3 py-1">
                Intro
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
                <Blocks className="size-4 text-muted-foreground" />
                <p className="mt-2 text-sm leading-6 text-foreground">
                  重点不在记忆 API，而在理解为什么这样设计、为什么这样拆分。
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/40 p-4">
                <Workflow className="size-4 text-muted-foreground" />
                <p className="mt-2 text-sm leading-6 text-foreground">
                  更适合带着实际业务问题来读，把它当成一次系统的架构复盘。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  )
}
