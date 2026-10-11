import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutFinalCta() {
  return (
    <section
      aria-labelledby="about-next-title"
      className="relative mt-2 overflow-hidden rounded-xl border border-border bg-card px-6 py-9 md:px-10 md:py-11"
    >
      <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center md:gap-10">
        <div>
          <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
            BACK TO LEARNING
          </p>
          <h2
            id="about-next-title"
            className="text-2xl leading-9 font-medium tracking-tight text-foreground sm:text-3xl"
          >
            返回课程目录
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            按章节查找内容，或从第一节开始阅读。
          </p>
        </div>
        <nav
          aria-label="开始阅读"
          className="flex shrink-0 flex-wrap items-center gap-x-6 gap-y-3 md:flex-col md:items-stretch"
        >
          <Button asChild size="lg" className="group gap-5">
            <Link href="/courses">
              查看课程目录
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </Button>
          <Link
            href="/courses/01-introduction/01"
            className="about-link inline-flex min-h-11 items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            从第一节开始
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </section>
  )
}
