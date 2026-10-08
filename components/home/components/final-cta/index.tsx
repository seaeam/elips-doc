import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { NoiseTexture } from "@/components/ui/noise-texture"

export function FinalCta() {
  return (
    <section
      aria-labelledby="home-about-title"
      className="relative overflow-hidden rounded-xl border border-border/70 bg-linear-to-br from-background to-muted/50 px-6 py-8 sm:px-9 sm:py-10"
    >
      <NoiseTexture noiseOpacity={0.12} aria-hidden="true" />
      <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-12">
        <div className="max-w-2xl">
          <h2
            id="home-about-title"
            className="text-xl font-medium tracking-tight"
          >
            关于这份笔记
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            由 506
            实验室学习「哲玄大前端全栈课程」时整理，方便回看代码和查阅章节。
            阅读时请配合原课程，内容仅供实验室内部学习。
          </p>
        </div>
        <Link
          href="/about"
          className="home-text-link group inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        >
          来源与使用说明
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </section>
  )
}
