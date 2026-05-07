import { ArrowRight, Home } from "lucide-react"
import Link from "next/link"

import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"

export function AboutFinalCta() {
  return (
    <section className="px-6 pb-20 md:px-10">
      <BlurFade inView className="mx-auto max-w-6xl">
        <div className="grid gap-8 border-t border-border/60 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">
              了解清楚背景后，就可以开始按章节阅读
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              如果你已经确认这份内容适合自己的学习方式，直接进入课程目录即可；需要完整上下文时，仍然建议回到原课程。
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-stretch">
            <Button asChild className="h-10 px-5">
              <Link href="/courses">
                查看课程目录
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-10 px-5">
              <Link href="/">
                返回首页
                <Home className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </BlurFade>
    </section>
  )
}
