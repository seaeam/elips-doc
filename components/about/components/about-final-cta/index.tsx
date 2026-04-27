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
              了解背景后，就可以按章节开始看了
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              课程目录会继续补充笔记和实现记录。需要完整讲解时，仍然回到原课程。
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-stretch">
            <Button asChild className="h-10 px-5">
              <Link href="/courses">
                进入课程
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
