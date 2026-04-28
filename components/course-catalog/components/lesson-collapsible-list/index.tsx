import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useSectionLessons } from "../../hooks/use-section-lessons"

function LessonListItem({
  title,
  lessonIndex,
}: {
  title: string
  lessonIndex: number
}) {
  return (
    <li className="grid grid-cols-[auto_1fr] items-start gap-3 rounded-md border border-border/60 bg-background/55 px-3 py-2 text-sm">
      <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-muted text-[0.68rem] font-medium text-muted-foreground">
        {String(lessonIndex + 1).padStart(2, "0")}
      </span>
      <span className="leading-6">{title}</span>
    </li>
  )
}

export function LessonCollapsibleList({
  sectionHref,
}: {
  sectionHref: string
}) {
  const {
    hasHiddenLessons,
    hiddenLessons,
    isExpanded,
    setLessonsOpen,
    visibleLessons,
  } = useSectionLessons(sectionHref)

  return (
    <Collapsible
      open={isExpanded}
      onOpenChange={setLessonsOpen}
      className="flex flex-col gap-3"
    >
      <ul className="grid gap-2">
        {visibleLessons.map((title, lessonIndex) => (
          <LessonListItem
            key={`${sectionHref}-${lessonIndex}-${title}`}
            title={title}
            lessonIndex={lessonIndex}
          />
        ))}
      </ul>

      {hasHiddenLessons ? (
        <CollapsibleContent className="overflow-hidden">
          <ul className="grid gap-2">
            {hiddenLessons.map((title, hiddenIndex) => {
              const lessonIndex = hiddenIndex + visibleLessons.length

              return (
                <LessonListItem
                  key={`${sectionHref}-${lessonIndex}-${title}`}
                  title={title}
                  lessonIndex={lessonIndex}
                />
              )
            })}
          </ul>
        </CollapsibleContent>
      ) : null}

      {hasHiddenLessons ? (
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm" className="w-fit">
            {isExpanded ? "收起课程" : `展开剩余 ${hiddenLessons.length} 节`}
            {isExpanded ? (
              <ChevronUp data-icon="inline-end" />
            ) : (
              <ChevronDown data-icon="inline-end" />
            )}
          </Button>
        </CollapsibleTrigger>
      ) : null}
    </Collapsible>
  )
}
