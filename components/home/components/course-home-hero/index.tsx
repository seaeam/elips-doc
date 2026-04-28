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
            框架建设课
          </Badge>
          <Badge variant="outline">Domain Model Thinking</Badge>
        </div>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          ELPIS
          关注的是如何从重复业务开发里抽象出可复用的框架能力：先理解问题，再建立模型语言，最后让工程实现服务于架构判断。
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
              Problem
            </p>
            <p className="mt-2 text-sm leading-6">
              把页面、接口、配置里反复出现的模式提炼出来。
            </p>
          </div>
          <div className="rounded-lg border border-border/60 bg-background/70 p-4">
            <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Model
            </p>
            <p className="mt-2 text-sm leading-6">
              用领域模型和 DSL 统一描述业务与界面结构。
            </p>
          </div>
          <div className="rounded-lg border border-border/60 bg-background/70 p-4">
            <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Framework
            </p>
            <p className="mt-2 text-sm leading-6">
              把模型语言落到服务端、工程化和组件运行时。
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade inView delay={0.15}>
        <Card className="p-4">
          <CardHeader>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <CardTitle className="text-xl">开篇导览</CardTitle>
                <CardDescription>
                  先理解这门课要解决的问题，再进入具体章节。
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
                  这不是 API 罗列，而是一次“从业务模式到框架能力”的拆解。
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/40 p-4">
                <Workflow className="size-4 text-muted-foreground" />
                <p className="mt-2 text-sm leading-6 text-foreground">
                  适合把课程当作架构复盘材料，带着自己的业务系统对照吸收。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  )
}
