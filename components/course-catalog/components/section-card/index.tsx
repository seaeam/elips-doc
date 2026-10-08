import { ChevronDown } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useSectionLessons } from "../../hooks/use-section-lessons"
import { getCoursePhase } from "../../journey"
import { useCourseCatalogStore } from "../../store"
import { LessonCollapsibleList } from "../lesson-collapsible-list"

type SectionCardProps = {
  sectionHref: string
  lessonIndices: number[]
}

export function SectionCard({ sectionHref, lessonIndices }: SectionCardProps) {
  const section = useCourseCatalogStore(
    (state) => state.sectionsByHref[sectionHref]
  )
  const query = useCourseCatalogStore((state) => state.query)
  const { lessons, isExpanded, setLessonsOpen } = useSectionLessons(sectionHref)

  if (!section) return null

  const titleId = `catalog-chapter-${section.number}-title`
  const Icon = section.icon
  const phase = getCoursePhase(section.number)

  return (
    <section
      id={`chapter-${section.number}`}
      aria-labelledby={titleId}
      className="catalog-chapter scroll-mt-28 border-b border-border"
    >
      <Collapsible open={isExpanded} onOpenChange={setLessonsOpen}>
        <h3>
          <CollapsibleTrigger
            className="catalog-chapter-toggle group grid w-full grid-cols-[1.75rem_minmax(0,1fr)_auto] items-start gap-x-3 rounded-md py-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:grid-cols-[2.5rem_minmax(0,1fr)_auto] sm:gap-x-4 sm:py-7"
            aria-label={`${isExpanded ? "收起" : "展开"}第 ${section.number} 章：${section.title}`}
          >
            <span
              aria-hidden="true"
              className="flex flex-col items-center gap-3 pt-0.5"
            >
              <span className="font-mono text-xs leading-6 text-muted-foreground">
                {section.number}
              </span>
              <span className="hidden size-9 items-center justify-center rounded-lg border border-border bg-muted/25 text-muted-foreground transition-colors group-hover:text-foreground sm:flex">
                <Icon className="size-4" />
              </span>
            </span>
            <span className="min-w-0">
              <span className="mb-1.5 block text-[10px] leading-6 font-normal tracking-wide text-muted-foreground">
                {phase?.shortTitle}
              </span>
              <span
                id={titleId}
                className="block text-base leading-7 font-medium text-foreground sm:text-lg"
              >
                {section.title}
              </span>
              <span className="mt-2 block text-xs leading-6 font-normal text-muted-foreground sm:text-sm">
                {section.summary}
              </span>
            </span>
            <span className="flex items-center gap-2 pt-1 text-xs leading-6 font-normal text-muted-foreground sm:gap-3">
              <span className="whitespace-nowrap">
                {query.trim() && lessonIndices.length !== lessons.length
                  ? `${lessonIndices.length}/${lessons.length}`
                  : lessons.length}{" "}
                节
              </span>
              <ChevronDown
                aria-hidden="true"
                className="catalog-chevron size-3.5 shrink-0"
              />
            </span>
          </CollapsibleTrigger>
        </h3>
        <CollapsibleContent
          inert={!isExpanded}
          aria-hidden={!isExpanded}
          className="catalog-lessons-panel overflow-hidden"
        >
          <div className="pb-7 sm:ml-14">
            <LessonCollapsibleList
              sectionHref={sectionHref}
              lessons={lessons}
              lessonIndices={lessonIndices}
              query={query}
            />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </section>
  )
}
