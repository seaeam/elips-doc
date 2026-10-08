import Link from "next/link"
import {
  ArrowUpRight,
  Compass,
  Layers3,
  PackageCheck,
  Workflow,
} from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { MagicCard } from "@/components/ui/magic-card"
import { COURSE_HIGHLIGHTS } from "../../const"

const phases = [
  {
    icon: Compass,
    subtitle: "课程背景与方案选型",
    outcome: "分析中后台开发中的重复工作，确定技术栈和前后端分工。",
    topics: ["需求推导", "方案选型", "BFF 设计"],
  },
  {
    icon: Workflow,
    subtitle: "Node.js、Koa 与 Webpack",
    outcome: "编写加载器、路由与中间件，配置开发服务和生产构建。",
    topics: ["Loader", "中间件", "Webpack 5"],
  },
  {
    icon: Layers3,
    subtitle: "DSL 与 Vue 3 组件",
    outcome: "定义页面 DSL，实现表格、搜索、表单和详情组件。",
    topics: ["JSON Schema", "Vue 3", "动态组件"],
  },
  {
    icon: PackageCheck,
    subtitle: "npm 发布与业务开发",
    outcome: "发布框架 npm 包，用它开发登录和人员管理功能，再配置 CI/CD。",
    topics: ["npm 发布", "业务实践", "CI / CD"],
  },
]

export function LearningPath() {
  return (
    <section
      id="learning-path"
      aria-labelledby="learning-path-title"
      className="scroll-mt-24 py-16 md:py-24"
    >
      <BlurFade inView>
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="experience-eyebrow">01 / COURSE OUTLINE</p>
            <h2
              id="learning-path-title"
              className="mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-4xl"
            >
              课程分为四个部分
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              先介绍需求和架构，再编写服务端、页面和组件，最后封装发布。
            </p>
          </div>
          <Link
            href="/courses"
            className="experience-focus inline-flex w-fit items-center gap-2 rounded text-sm underline-offset-4 hover:underline"
          >
            浏览完整目录 <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </BlurFade>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {COURSE_HIGHLIGHTS.map((item, index) => {
          const phase = phases[index]
          const Icon = phase.icon
          return (
            <BlurFade
              key={item.href}
              inView
              delay={index * 0.06}
              className="h-full rounded-2xl"
            >
              <MagicCard
                className="h-full rounded-2xl"
                gradientColor="var(--muted)"
                gradientFrom="var(--muted-foreground)"
                gradientTo="var(--border)"
                gradientOpacity={0.55}
              >
                <Link
                  href={item.href}
                  className="experience-focus group block h-full rounded-2xl p-6"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <Icon
                      className="size-5 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[11px] text-muted-foreground">
                      0{index + 1} / 04
                    </span>
                  </div>
                  <p className="font-mono text-[10px] tracking-wider text-muted-foreground">
                    CHAPTER {item.chapters}
                  </p>
                  <h3 className="mt-3 text-xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {phase.subtitle}
                  </p>
                  <p className="mt-5 min-h-[84px] text-sm leading-7 text-muted-foreground">
                    {phase.outcome}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 border-t border-border pt-4 text-[10px] text-muted-foreground">
                    {phase.topics.map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                  <div className="mt-7 flex items-center justify-between text-xs">
                    <span>查看章节</span>
                    <ArrowUpRight
                      className="size-4 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </MagicCard>
            </BlurFade>
          )
        })}
      </div>
    </section>
  )
}
