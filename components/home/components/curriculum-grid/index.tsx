import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { NumberTicker } from "@/components/ui/number-ticker"

import { getSectionStatusVariant } from "../../utils"
import { SectionHeader } from "../section-header"
import type { CourseSection } from "../../types"

type CurriculumGridProps = {
  sections: CourseSection[]
}

export function CurriculumGrid({ sections }: CurriculumGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
      <BlurFade inView>
        <SectionHeader
          badge="课程路线"
          title="从背景、需求、架构到实现"
          description="每一章都承担一个明确任务：建立背景、完成推导、设计结构，最后把系统能力真正落到代码。"
        />
      </BlurFade>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((section, index) => {
          const Icon = section.icon

          return (
            <BlurFade key={section.href} inView delay={0.04 * index}>
              <Card className="h-full border border-border/60 bg-background/70 transition-transform duration-300 hover:-translate-y-1 hover:border-foreground/15">
                <CardHeader className="gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <Badge variant="outline" className="px-3 py-1">
                        第 {section.number} 章
                      </Badge>
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg border border-border/70 bg-muted/60 p-2">
                          <Icon className="size-4 text-foreground/80" />
                        </div>
                        <CardTitle className="text-lg">
                          {section.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge
                      variant={getSectionStatusVariant(section.status)}
                      className="px-3 py-1"
                    >
                      {section.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-7 text-muted-foreground">
                    {section.summary}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      <NumberTicker value={section.lessons} /> 节
                    </span>
                    <span>持续整理视频与笔记</span>
                  </div>
                </CardContent>
                <CardFooter className="justify-between gap-3">
                  <span className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Course Module
                  </span>
                  <Button asChild variant="ghost" size="sm" className="">
                    <Link href={section.href}>
                      查看章节
                      <ArrowRight className="ml-1 size-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </BlurFade>
          )
        })}
      </div>
    </section>
  )
}
