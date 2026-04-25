import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"

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
    <section className="px-6 pt-10 pb-14 md:px-10 md:pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
        <BlurFade inView className="space-y-7">
          <div className="flex flex-wrap items-center gap-2.5">
            {heroBadges.map((badge, index) => (
              <Badge
                key={badge}
                variant={index === 1 ? "destructive" : "outline"}
                className="px-3 py-1"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
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
          <div className="rounded-2xl border border-foreground/10 bg-background/80 p-6 shadow-[0_24px_80px_-52px_rgba(0,0,0,0.42)] backdrop-blur-xl">
            <div className="space-y-2 border-b border-border/60 pb-5">
              <p className="text-sm font-medium text-foreground">使用说明</p>
              <p className="text-sm leading-7 text-muted-foreground">
                这页只说明资料来源和使用范围，信息保持简洁，不做对外展示。
              </p>
            </div>

            <div className="space-y-3 pt-5">
              {heroNotes.map((note) => {
                const Icon = note.icon

                return (
                  <div
                    key={note.title}
                    className={`rounded-xl border px-4 py-3 ${getAboutNoteClassName(note.tone)}`}
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
