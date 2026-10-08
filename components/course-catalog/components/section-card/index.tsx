import { ChevronDown } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useSectionLessons } from "../../hooks/use-section-lessons"
import { useCourseCatalogStore } from "../../store"
import { LessonCollapsibleList } from "../lesson-collapsible-list"

type SectionCardProps = {
  sectionHref: string
}

export function SectionCard({ sectionHref }: SectionCardProps) {
  const section = useCourseCatalogStore(
    (state) => state.sectionsByHref[sectionHref]
  )
  const { lessons, isExpanded, setLessonsOpen } = useSectionLessons(sectionHref)

  if (!section) return null

  const titleId = `catalog-chapter-${section.number}-title`

  return (
    <section
      id={`chapter-${section.number}`}
      aria-labelledby={titleId}
      className="catalog-chapter scroll-mt-28 border-b border-border"
    >
      <Collapsible open={isExpanded} onOpenChange={setLessonsOpen}>
        <h3 aria-labelledby={titleId}>
          <CollapsibleTrigger
            className="catalog-chapter-toggle grid w-full grid-cols-[1.5rem_minmax(0,1fr)_auto] items-start gap-x-3 rounded-md py-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:grid-cols-[2rem_minmax(0,1fr)_auto] sm:gap-x-5 sm:py-7"
            aria-label={`${isExpanded ? "收起" : "展开"}第 ${section.number} 章：${section.title}`}
          >
            <span
              aria-hidden="true"
              className="pt-1 font-mono text-sm leading-7 text-muted-foreground"
            >
              {section.number}
            </span>
            <span className="min-w-0">
              <span
                id={titleId}
                className="block text-lg leading-8 font-medium text-foreground sm:text-xl"
              >
                {section.title}
              </span>
              <span className="mt-1 block text-sm leading-7 font-normal text-muted-foreground">
                {section.summary}
              </span>
            </span>
            <span className="flex items-center gap-2 pt-1 text-sm leading-7 font-normal text-muted-foreground sm:gap-4">
              <span className="whitespace-nowrap">{lessons.length} 节</span>
              <ChevronDown
                aria-hidden="true"
                className="catalog-chevron size-4 shrink-0"
              />
            </span>
          </CollapsibleTrigger>
        </h3>
        <CollapsibleContent
          inert={!isExpanded}
          aria-hidden={!isExpanded}
          className="catalog-lessons-panel overflow-hidden"
        >
          <div className="pb-7 sm:ml-[3.25rem]">
            <LessonCollapsibleList
              sectionHref={sectionHref}
              lessons={lessons}
            />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </section>
  )
}
