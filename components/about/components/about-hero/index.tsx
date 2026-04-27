import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Home } from "lucide-react"
import Link from "next/link"
import type { AboutHeroNote } from "../../types"
import { getAboutNoteClassName } from "../../utils"

type AboutHeroProps = {
  heroBadges: string[]
  heroDescription: string
  heroNotes: AboutHeroNote[]
  heroTitle: string
}

export function AboutHero({
  heroBadges,
  heroDescription,
  heroNotes,
  heroTitle,
}: AboutHeroProps) {
  return (
    <section className="px-6 pt-12 pb-16 md:px-10 md:pt-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:items-center">
        <BlurFade inView className="space-y-8">
          <div className="flex flex-wrap items-center gap-2.5">
            {heroBadges.map((badge, index) => (
              <Badge
                key={badge}
                variant={index === 0 ? "secondary" : "outline"}
                className="px-3 py-1"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
              {heroTitle}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              {heroDescription}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-10 px-5">
              <Link href="/courses">
                进入课程
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-10 px-5">
              <Link href="/">
                返回首页
                <Home className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.12}>
          <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/85 p-6">
            <div className="space-y-3 border-b border-border/60 pb-5">
              <div className="flex items-center gap-2.5">
                <BookOpen className="size-4 text-foreground/75" />
                <p className="text-sm font-medium text-foreground">
                  这份笔记记录什么
                </p>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                记录课程目录、章节重点、实现过程和学习时补充的理解。需要完整讲解时，仍然回到原课程。
              </p>
            </div>

            <div className="space-y-3 pt-5">
              {heroNotes.map((note) => {
                const Icon = note.icon

                return (
                  <div
                    key={note.title}
                    className={`rounded-xl border px-4 py-3.5 ${getAboutNoteClassName(note.tone)}`}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="mt-1 size-4 shrink-0 text-foreground/75" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">
                          {note.title}
                        </p>
                        <p className="text-sm leading-7 text-muted-foreground">
                          {note.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
