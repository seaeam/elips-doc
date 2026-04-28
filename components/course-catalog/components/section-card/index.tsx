import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ShineBorder } from "@/components/ui/shine-border"
import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Compass,
  Layers3,
} from "lucide-react"
import Link from "next/link"
import { useCourseCatalogStore } from "../../store"
import { getSectionStatusVariant } from "../../utils"
import { LessonCollapsibleList } from "../lesson-collapsible-list"

type SectionCardProps = {
  index: number
  sectionHref: string
}

export function SectionCard({ sectionHref, index }: SectionCardProps) {
  const section = useCourseCatalogStore(
    (state) => state.sectionsByHref[sectionHref]
  )

  if (!section) {
    return null
  }

  const Icon = section.icon
  const isCurrentFocus = section.number === "08"

  return (
    <BlurFade inView delay={index * 0.035}>
      <Card className="relative h-full border-border/60 bg-background/80 transition-transform duration-300 hover:-translate-y-1 hover:border-foreground/15">
        {isCurrentFocus ? (
          <ShineBorder
            duration={10}
            shineColor={[
              "rgba(160,124,254,0.48)",
              "rgba(254,143,181,0.42)",
              "rgba(255,190,123,0.38)",
            ]}
          />
        ) : null}

        <CardHeader className="gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-muted/60">
                <Icon className="size-4" />
              </span>
              <div className="min-w-0">
                <CardDescription>
                  第 {section.number} 章 · {section.lessons} 节
                </CardDescription>
                <CardTitle className="mt-1 text-lg md:text-xl">
                  {section.title}
                </CardTitle>
              </div>
            </div>
            <Badge
              variant={getSectionStatusVariant(section.status)}
              className="shrink-0"
            >
              {section.status}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-5">
          <p className="text-sm leading-7 text-muted-foreground">
            {section.summary}
          </p>

          <div className="rounded-lg border border-border/70 bg-muted/35 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Compass className="size-3.5" />
              本章重点
            </div>
            <p className="text-sm leading-6">{section.focus}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {section.keywords.map((keyword) => (
              <Badge key={keyword} variant="outline">
                {keyword}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Layers3 className="size-3.5" />
              章节内容
            </div>
            <LessonCollapsibleList sectionHref={section.href} />
          </div>
        </CardContent>

        <CardFooter className="justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {section.status === "已更新" ? (
              <CheckCircle2 className="size-3.5" />
            ) : (
              <CircleDot className="size-3.5" />
            )}
            <span>{section.lessons} lessons</span>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href={section.href}>
              开始学习
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </BlurFade>
  )
}
