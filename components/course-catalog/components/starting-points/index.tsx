import Link from "next/link"
import { ArrowUpRight, Braces, Compass, ServerCog } from "lucide-react"

import {
  LearningAction,
  LearningSummary,
} from "@/components/learning-progress/continue-learning"
import { useLearningProgress } from "@/components/learning-progress/store"
import { COURSE_SECTIONS } from "../../const"

const STARTING_POINTS = [
  {
    chapter: "01",
    eyebrow: "课程背景",
    title: "课程介绍",
    description:
      "介绍课程的设计初衷、适合人群与学习方式，建议第一次阅读时先看。",
    icon: Compass,
  },
  {
    chapter: "04",
    eyebrow: "Node.js 与 Koa",
    title: "服务端内核",
    description:
      "从项目初始化开始，介绍 elpis-core 的加载器、路由与中间件实现。",
    icon: ServerCog,
  },
  {
    chapter: "06",
    eyebrow: "Vue 3 与 DSL",
    title: "领域模型与页面",
    description:
      "介绍领域模型的 DSL 设计、解析引擎，以及表格和查询页面的实现。",
    icon: Braces,
  },
]

export function StartingPoints() {
  return (
    <section
      aria-labelledby="starting-points-title"
      className="border-t border-border py-10 md:py-14"
    >
      <div className="mb-7">
        <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground">
          QUICK LINKS
        </p>
        <h2
          id="starting-points-title"
          className="mt-2 text-xl font-semibold tracking-tight md:text-2xl"
        >
          章节快捷入口
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          课程介绍、服务端内核和领域模型，分别从以下章节开始。
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {STARTING_POINTS.map((point) => {
          const section = COURSE_SECTIONS.find(
            (item) => item.number === point.chapter
          )!
          const Icon = point.icon
          return (
            <div
              key={point.chapter}
              className="h-full rounded-xl border border-border bg-card transition-colors hover:border-ring/50"
            >
              <Link
                href={section.href}
                className="group flex h-full flex-col rounded-xl p-6 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              >
                <div className="mb-6 flex items-center justify-between">
                  <Icon
                    aria-hidden="true"
                    className="size-5 text-muted-foreground"
                  />
                  <span className="text-[10px] text-muted-foreground">
                    {point.eyebrow}
                  </span>
                </div>
                <h3 className="text-base font-medium tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                  {point.description}
                </p>
                <p className="mt-7 flex items-center justify-between border-t border-border pt-4 text-xs">
                  <span>
                    进入第 {point.chapter} 章{" "}
                    <span className="ml-2 text-muted-foreground">
                      {section.lessonTitles.length} 节
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                  />
                </p>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function CatalogClosing() {
  const progress = useLearningProgress()
  const hasProgress = Object.keys(progress.lessons).length > 0
  return (
    <section
      aria-labelledby="catalog-closing-title"
      className="relative mt-12 overflow-hidden rounded-xl border border-border bg-card p-7 md:mt-16 md:p-10"
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12">
        <div>
          <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground">
            GETTING STARTED
          </p>
          <h2
            id="catalog-closing-title"
            className="mt-4 text-2xl leading-snug font-semibold tracking-tight md:text-3xl"
          >
            {hasProgress ? "接着上次的进度学习" : "从第一节开始阅读"}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            {hasProgress
              ? "每节课的观看位置都会自动保存，可以随时回来继续。"
              : "第一章介绍课程背景和学习方式。笔记的来源、整理方式和使用说明，可以在关于页查看。"}
          </p>
          <LearningSummary className="mt-5" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <LearningAction defaultLabel="开始阅读" className="h-11 gap-4 px-5" />
          <Link
            href="/about"
            className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            笔记来源与使用说明
          </Link>
        </div>
      </div>
    </section>
  )
}
