import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Player from "@/components/ui/player"

type CourseHomeHeroProps = {
  heroPlaybackId: string
}

export function CourseHomeHero({ heroPlaybackId }: CourseHomeHeroProps) {
  return (
    <section
      aria-labelledby="home-title"
      className="grid items-center gap-12 pt-10 pb-12 sm:pt-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:pt-20 lg:pb-20"
    >
      <div className="min-w-0">
        <p className="home-enter mb-6 text-sm text-muted-foreground">
          506 实验室{" "}
          <span aria-hidden="true" className="mx-2 text-border">
            /
          </span>{" "}
          课程笔记
        </p>
        <h1 id="home-title" className="flex flex-col items-start">
          <span className="home-wordmark">
            ELPIS
            <span aria-hidden="true" className="home-wordmark-light">
              ELPIS
            </span>
          </span>
          <span
            className="home-enter mt-6 text-[1.65rem] leading-snug font-medium tracking-tight text-foreground sm:text-3xl xl:text-[2rem]"
            style={{ animationDelay: "100ms" }}
          >
            中后台框架开发笔记
          </span>
        </h1>
        <p
          className="home-enter mt-5 max-w-[29rem] text-base leading-8 text-muted-foreground"
          style={{ animationDelay: "160ms" }}
        >
          记录 ELPIS 的开发过程：用 Node.js 写服务端，用 Vue 3
          实现配置驱动的页面，再把它封装成可复用的框架。
        </p>
        <div
          className="home-enter mt-7 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "220ms" }}
        >
          <Button
            asChild
            size="lg"
            className="home-primary-action h-11 gap-3 px-5 has-data-[icon=inline-end]:pr-4"
          >
            <Link href="/courses/01-introduction/01">
              开始阅读
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="h-11 px-4">
            <Link href="/courses">查看目录</Link>
          </Button>
        </div>
        <p
          className="home-enter mt-5 text-sm leading-6 text-muted-foreground"
          style={{ animationDelay: "280ms" }}
        >
          写过一些业务项目，想试着自己搭框架，可以从这里开始。
        </p>
      </div>

      <figure className="home-media-enter min-w-0 lg:pt-6">
        <div className="mb-5 flex items-center justify-between text-xs text-muted-foreground">
          <span>课程导览</span>
          <span className="font-mono tracking-wider">ELPIS / 01</span>
        </div>
        <div className="home-video">
          <Player
            playbackId={heroPlaybackId}
            title="课程设计初衷"
            aria-label="课程设计初衷视频"
            preload="none"
            className="aspect-video w-full rounded-lg"
            style={{ aspectRatio: "16 / 9" }}
          />
        </div>
        <figcaption className="relative mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-border/70 pt-4">
          <span className="text-sm font-medium">课程设计初衷</span>
          <Link
            href="/courses/01-introduction/01"
            className="home-text-link group inline-flex min-h-11 items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            阅读本节笔记
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            />
          </Link>
        </figcaption>
      </figure>
    </section>
  )
}
