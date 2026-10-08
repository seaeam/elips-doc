import Link from "next/link"
import { ArrowDown, ArrowRight, BookOpen } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import { DotPattern } from "@/components/ui/dot-pattern"
import { NumberTicker } from "@/components/ui/number-ticker"
import { COURSE_PHASES } from "../../journey"
import { useCourseCatalogStore } from "../../store"

export function CourseCatalogHero() {
  const totalLessons = useCourseCatalogStore((state) => state.totalLessons)
  const totalModules = useCourseCatalogStore((state) => state.totalModules)
  const sections = useCourseCatalogStore((state) => state.sections)
  const reducedMotion = useReducedMotion()
  const distribution = COURSE_PHASES.map((phase) => ({
    ...phase,
    lessons: sections
      .filter((section) =>
        (phase.chapters as readonly string[]).includes(section.number)
      )
      .reduce((count, section) => count + section.lessonTitles.length, 0),
  }))
  const largestPhase = Math.max(...distribution.map((phase) => phase.lessons))
  const trackColors = [
    "bg-foreground/40",
    "bg-foreground/55",
    "bg-foreground/80",
    "bg-foreground/30",
  ]
  const metrics = [
    { value: totalModules, label: "课程章节", suffix: "章" },
    { value: totalLessons, label: "课程笔记", suffix: "节" },
    { value: COURSE_PHASES.length, label: "内容分类", suffix: "类" },
  ]

  return (
    <header className="relative overflow-hidden pt-9 pb-12 md:pt-16 md:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 [mask-image:linear-gradient(to_left,black,transparent)] opacity-35"
      >
        <DotPattern
          width={20}
          height={20}
          cr={1}
          className="text-foreground/20"
        />
      </div>
      <BlurFade
        delay={0.05}
        initial={reducedMotion ? false : "hidden"}
        duration={reducedMotion ? 0 : 0.5}
        className="relative"
      >
        <p className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.18em] text-muted-foreground">
          <BookOpen aria-hidden="true" className="size-3.5" />
          ELPIS / COURSE NOTES
        </p>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-end lg:gap-16">
          <div>
            <h1 className="text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              课程笔记
              <span aria-hidden="true" className="text-muted-foreground">
                .
              </span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed font-medium tracking-tight text-foreground md:text-2xl">
              ELPIS 框架的设计与实现
            </p>
            <p className="mt-4 max-w-xl text-sm leading-8 text-muted-foreground md:text-base">
              这里收录了课程各节的笔记，按原课程顺序排列。可以从第一章开始阅读，也可以按服务端、页面组件等内容筛选，或直接搜索小节标题。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-11 gap-3 px-5">
                <Link href="/courses/01-introduction/01">
                  从第一节开始 <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 gap-3 px-5"
              >
                <a href="#catalog-chapters">
                  浏览全部章节 <ArrowDown aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
          <div className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <div aria-labelledby="catalog-distribution-title">
              <div className="mb-5 flex items-baseline justify-between gap-3">
                <h2
                  id="catalog-distribution-title"
                  className="text-xs font-medium"
                >
                  课程内容分布
                </h2>
                <span className="font-mono text-[10px] tracking-wide text-muted-foreground">
                  {totalLessons} LESSONS
                </span>
              </div>
              <ol className="grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-1 lg:gap-y-3.5">
                {distribution.map((phase, index) => (
                  <li key={phase.id}>
                    <div className="mb-2 flex items-baseline justify-between gap-2 text-[11px]">
                      <span className="text-muted-foreground">
                        <span className="mr-1.5 font-mono text-[9px]">
                          {phase.range}
                        </span>
                        {phase.shortTitle}
                      </span>
                      <span className="shrink-0 font-mono text-[10px] text-foreground">
                        {phase.lessons}
                        <span className="ml-1 font-sans text-muted-foreground">
                          节
                        </span>
                      </span>
                    </div>
                    <div
                      aria-hidden="true"
                      className="h-1.5 overflow-hidden rounded-full bg-foreground/5"
                    >
                      <motion.div
                        className={`h-full origin-left rounded-full ${trackColors[index]}`}
                        style={{
                          width: `${(phase.lessons / largestPhase) * 100}%`,
                        }}
                        initial={reducedMotion ? false : { scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: reducedMotion ? 0 : 0.65,
                          delay: reducedMotion ? 0 : 0.2 + index * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-5 lg:gap-5">
              {metrics.map(({ value, label, suffix }, index) => (
                <div key={suffix} className="flex flex-col">
                  <dt className="mt-3 text-[11px] leading-5 text-muted-foreground sm:text-xs">
                    {label}
                  </dt>
                  <dd
                    className="-order-1 flex items-baseline gap-1.5 font-medium"
                    aria-label={`${value} ${suffix}`}
                  >
                    {reducedMotion ? (
                      <span
                        aria-hidden="true"
                        className="text-3xl tracking-tight sm:text-4xl"
                      >
                        {value}
                      </span>
                    ) : (
                      <NumberTicker
                        aria-hidden="true"
                        value={value}
                        delay={0.15 + index * 0.1}
                        className="text-3xl sm:text-4xl"
                      />
                    )}
                    <span
                      aria-hidden="true"
                      className="text-xs text-muted-foreground"
                    >
                      {suffix}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </BlurFade>
    </header>
  )
}
