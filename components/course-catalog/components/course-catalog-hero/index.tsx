import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, BookOpenCheck, Sparkles } from "lucide-react"
import Link from "next/link"
import { useCourseCatalogStore } from "../../store"
import { getSectionStatusVariant } from "../../utils"

export function CourseCatalogHero() {
  const currentFocus = useCourseCatalogStore((state) => state.currentFocus)
  const heroStats = useCourseCatalogStore((state) => state.heroStats)
  const CurrentFocusIcon = currentFocus.icon

  return (
    <section className="relative overflow-hidden rounded-xl border border-border/60 bg-linear-to-br from-background via-background to-muted/50 px-5 py-8 md:px-8 lg:px-10">
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.74fr)] lg:items-center">
        <BlurFade className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="px-3 py-1">
              <Sparkles data-icon="inline-start" />
              章节导航
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              MDX Index
            </Badge>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="max-w-3xl text-3xl leading-tight font-semibold md:text-5xl">
              按章节定位每一节课程笔记
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              查看模块状态、小节标题与推荐学习顺序，快速找到下一节内容，再直接跳到对应的课程页面。
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">模块入口</Badge>
            <Badge variant="outline">小节标题</Badge>
            <Badge variant="outline">更新状态</Badge>
            <Badge variant="outline">快速跳转</Badge>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="px-4">
              <Link href="/courses/01-introduction/01">
                开始第一章
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-4">
              <Link href={currentFocus.href}>
                直达 npm 发布
                <BookOpenCheck data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </BlurFade>

        <BlurFade delay={0.1} className="flex flex-col gap-4">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border/70 bg-background/75 p-4"
              >
                <div className="text-3xl leading-none font-semibold">
                  <NumberTicker value={stat.value} delay={stat.delay} />
                  {stat.suffix}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-border/70 bg-background/75 p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-muted/60">
                  <CurrentFocusIcon className="size-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">当前重点</p>
                  <p className="font-medium">{currentFocus.title}</p>
                </div>
              </div>
              <Badge variant={getSectionStatusVariant(currentFocus.status)}>
                {currentFocus.status}
              </Badge>
            </div>
            <Separator className="my-4" />
            <p className="text-sm leading-7 text-muted-foreground">
              {currentFocus.focus}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
