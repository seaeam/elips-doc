import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import type { CourseHighlight } from "../../types"
import { HomeReveal } from "../reveal"

type HighlightGridProps = {
  highlights: CourseHighlight[]
}

export function HighlightGrid({ highlights }: HighlightGridProps) {
  return (
    <section
      aria-labelledby="home-curriculum-title"
      className="grid gap-8 border-t border-border py-12 md:py-16 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20 lg:py-20"
    >
      <div>
        <HomeReveal className="lg:sticky lg:top-28">
          <p className="mb-4 font-mono text-xs tracking-widest text-muted-foreground">
            NODE.JS / WEBPACK / VUE
          </p>
          <h2
            id="home-curriculum-title"
            className="text-3xl font-medium tracking-tight"
          >
            课程内容
          </h2>
          <p className="mt-4 max-w-72 text-sm leading-7 text-muted-foreground">
            服务端、页面渲染、组件和工程配置，都在同一个项目里实现。
          </p>
          <Link
            href="/courses"
            className="home-text-link mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            查看全部章节
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </HomeReveal>
      </div>

      <ol className="min-w-0 divide-y divide-border border-y border-border lg:border-t-0">
        {highlights.map((item) => (
          <li key={item.href}>
            <HomeReveal>
              <Link
                href={item.href}
                className="home-chapter-link home-text-link grid grid-cols-[1fr_auto] items-start gap-x-5 gap-y-3 py-7 sm:grid-cols-[4.5rem_1fr_auto] sm:gap-x-5 lg:py-8"
              >
                <span className="pt-1 font-mono text-xs leading-6 text-muted-foreground sm:row-span-2">
                  <span className="sr-only">第 </span>
                  {item.chapters}
                  <span className="ml-1 font-sans">章</span>
                </span>
                <h3 className="home-chapter-title col-start-1 row-start-2 text-xl leading-7 font-medium tracking-tight sm:col-start-2 sm:row-start-1">
                  {item.title}
                </h3>
                <ArrowUpRight
                  aria-hidden="true"
                  className="home-chapter-arrow col-start-2 row-start-1 mt-1 size-5 text-muted-foreground sm:col-start-3 sm:row-span-2"
                />
                <p className="col-span-2 text-sm leading-7 text-muted-foreground sm:col-span-1 sm:col-start-2">
                  {item.description}
                </p>
              </Link>
            </HomeReveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
