import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import { FrameworkMap } from "../framework-map"

export function CourseHomeHero() {
  return (
    <section
      aria-labelledby="home-title"
      className="relative grid items-center gap-5 pt-10 pb-10 sm:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:pt-20 lg:pb-16"
    >
      <div className="relative z-10 min-w-0">
        <BlurFade>
          <div className="mb-7 flex items-center gap-3 text-xs">
            <span
              className="inline-flex size-2 rounded-full bg-foreground"
              aria-hidden="true"
            />
            <AnimatedShinyText className="mx-0 tracking-wide">
              506 实验室 / ELPIS 课程笔记
            </AnimatedShinyText>
          </div>
          <h1 id="home-title">
            <span className="home-wordmark">
              ELPIS
              <span className="ml-3 align-top font-mono text-[11px] font-normal tracking-widest text-muted-foreground">
                DOCS
              </span>
            </span>
            <span className="mt-6 block text-[1.8rem] leading-snug font-medium tracking-tight sm:text-[2.25rem]">
              中后台框架开发笔记
            </span>
          </h1>
        </BlurFade>
        <BlurFade delay={0.12}>
          <p className="mt-5 max-w-[28rem] text-base leading-8 text-muted-foreground">
            记录 ELPIS 框架的设计与实现。
            <br className="hidden sm:block" />
            内容包括 Node.js 服务端、Vue 3 页面、Webpack
            构建，以及框架的封装与发布。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="home-primary-action h-12 gap-3 rounded-full px-6"
            >
              <Link href="/courses/01-introduction/01">
                开始学习 <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 gap-3 rounded-full px-6"
            >
              <Link href="/courses">
                课程目录 <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex -space-x-1.5" aria-hidden="true">
              {["{ }", "</>", "⌘"].map((symbol) => (
                <span
                  key={symbol}
                  className="flex size-7 items-center justify-center rounded-full border border-background bg-muted font-mono text-[10px] text-foreground"
                >
                  {symbol}
                </span>
              ))}
            </span>
            视频 · 代码示例 · 架构图
          </div>
        </BlurFade>
      </div>
      <BlurFade delay={0.2} className="min-w-0">
        <FrameworkMap />
      </BlurFade>
      <a
        href="#learning-path"
        className="experience-focus mt-4 flex w-fit items-center gap-2 rounded text-xs text-muted-foreground transition-colors hover:text-foreground lg:col-span-2"
      >
        <ArrowDown className="size-3.5" aria-hidden="true" /> 查看课程安排
      </a>
    </section>
  )
}
