type AboutHeroProps = {
  heroDescription: string
  heroTitle: string
}

export function AboutHero({ heroDescription, heroTitle }: AboutHeroProps) {
  return (
    <header className="pt-8 pb-10 md:pt-12 md:pb-14">
      <BlurFade>
        <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="font-mono tracking-[0.16em]">ELPIS / FIELD NOTES</p>
          <span className="flex items-center gap-2">
            <span
              className="size-1.5 rounded-full bg-foreground/60"
              aria-hidden="true"
            />
            506 实验室 · 学习记录
          </span>
        </div>
      </BlurFade>

      <div className="grid items-center gap-10 pt-12 pb-10 md:grid-cols-[1.35fr_1fr] md:gap-12 md:pt-16 md:pb-14">
        <div>
          <BlurFade delay={0.06}>
            <h1 className="text-4xl leading-[1.2] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {heroTitle}
            </h1>
          </BlurFade>
          <BlurFade delay={0.14}>
            <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">
              {heroDescription}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-2">
              <Link
                href="/courses"
                className="about-link group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground"
              >
                打开课程目录
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <a
                href="#about-reading-title"
                className="about-link inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground"
              >
                阅读建议
                <ArrowDown aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </BlurFade>
        </div>

        <BlurFade
          delay={0.2}
          className="relative hidden border-l border-border pl-10 md:block lg:pl-14"
        >
          <p
            className="text-[clamp(7rem,13vw,11rem)] leading-[0.85] font-medium tracking-[-0.09em] text-foreground/[0.09] dark:text-foreground/[0.14]"
            aria-hidden="true"
          >
            506
          </p>
          <div className="mt-5 flex items-center gap-4">
            <span className="h-px w-10 bg-foreground/40" aria-hidden="true" />
            <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
              LAB / LEARNING NOTES
            </p>
          </div>
        </BlurFade>
      </div>

      <BlurFade delay={0.24}>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-border pt-5">
          <p className="text-xs leading-6 text-muted-foreground">
            服务端、前端工程化、动态组件与项目实践
          </p>
          <p className="flex items-center gap-5 text-xs text-muted-foreground">
            <span>
              <strong className="mr-1.5 font-mono text-sm font-medium text-foreground">
                09
              </strong>
              章节
            </span>
            <span className="h-3 w-px bg-border" aria-hidden="true" />
            <span>
              <strong className="mr-1.5 font-mono text-sm font-medium text-foreground">
                67
              </strong>
              小节
            </span>
            <span className="hidden sm:inline">视频 / 代码 / 图解</span>
          </p>
        </div>
      </BlurFade>
    </header>
  )
}
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
