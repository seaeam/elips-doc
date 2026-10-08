import {
  Search,
  SlidersHorizontal,
  X,
  ChevronsDownUp,
  ChevronsUpDown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { COURSE_PHASES, getVisibleLessons } from "../../journey"
import { useCourseCatalogStore } from "../../store"
import { SectionCard } from "../section-card"

export function SectionIndex() {
  const sections = useCourseCatalogStore((state) => state.sections)
  const query = useCourseCatalogStore((state) => state.query)
  const selectedPhase = useCourseCatalogStore((state) => state.selectedPhase)
  const setQuery = useCourseCatalogStore((state) => state.setQuery)
  const setSelectedPhase = useCourseCatalogStore(
    (state) => state.setSelectedPhase
  )
  const resetFilters = useCourseCatalogStore((state) => state.resetFilters)
  const expandedSectionHrefs = useCourseCatalogStore(
    (state) => state.expandedSectionHrefs
  )
  const setSectionsExpanded = useCourseCatalogStore(
    (state) => state.setSectionsExpanded
  )
  const visibleSections = getVisibleLessons(sections, query, selectedPhase)
  const lessonCount = visibleSections.reduce(
    (sum, { lessonIndices }) => sum + lessonIndices.length,
    0
  )
  const visibleHrefs = visibleSections.map(({ section }) => section.href)
  const allExpanded =
    visibleHrefs.length > 0 &&
    visibleHrefs.every((href) => expandedSectionHrefs.includes(href))
  const isFiltered = query.trim() !== "" || selectedPhase !== "all"

  return (
    <section aria-labelledby="catalog-chapters-title" className="min-w-0">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground">
            EXPLORE THE CHAPTERS
          </p>
          <h2
            id="catalog-chapters-title"
            className="mt-2 text-2xl font-semibold tracking-tight"
          >
            全部章节
          </h2>
        </div>
        <p className="text-xs text-muted-foreground">展开章节，点击标题阅读</p>
      </div>
      <div className="rounded-xl border border-border bg-muted/20 p-4 sm:p-5">
        <label htmlFor="catalog-search" className="sr-only">
          搜索章节与小节标题
        </label>
        <div className="relative">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <input
            id="catalog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setQuery("")
            }}
            placeholder="搜索章节、小节，如 DSL / webpack"
            autoComplete="off"
            aria-describedby="catalog-result-count"
            className="h-12 w-full rounded-lg border border-border bg-background pr-11 pl-10 text-base outline-none placeholder:text-muted-foreground/80 focus-visible:ring-2 focus-visible:ring-ring sm:text-sm [&::-webkit-search-cancel-button]:appearance-none"
          />
          {query && (
            <button
              type="button"
              aria-label="清除搜索"
              onClick={() => {
                setQuery("")
                document.getElementById("catalog-search")?.focus()
              }}
              className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
            >
              <X aria-hidden="true" className="size-4" />
            </button>
          )}
        </div>
        <div
          role="group"
          aria-label="按学习阶段筛选"
          className="mt-4 flex flex-wrap items-center gap-2"
        >
          <SlidersHorizontal
            aria-hidden="true"
            className="mr-1 hidden size-3.5 text-muted-foreground sm:block"
          />
          {[
            { id: "all", shortTitle: "全部章节" } as const,
            ...COURSE_PHASES,
          ].map((phase) => (
            <button
              key={phase.id}
              type="button"
              aria-pressed={selectedPhase === phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={cn(
                "min-h-9 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                selectedPhase === phase.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-transparent text-muted-foreground hover:border-border hover:bg-background hover:text-foreground"
              )}
            >
              {phase.shortTitle}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <p
          id="catalog-result-count"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="text-xs text-muted-foreground"
        >
          {isFiltered ? "找到" : "共"}{" "}
          <span className="font-medium text-foreground">
            {visibleSections.length}
          </span>{" "}
          章 ·{" "}
          <span className="font-medium text-foreground">{lessonCount}</span> 节
          {query.trim() && <span className="ml-2">匹配标题</span>}
        </p>
        <div className="flex items-center gap-2">
          {isFiltered && (
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="text-xs text-muted-foreground"
            >
              重置筛选
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            disabled={visibleSections.length === 0}
            onClick={() => setSectionsExpanded(visibleHrefs, !allExpanded)}
            className="gap-1.5 text-xs text-muted-foreground"
          >
            {allExpanded ? (
              <ChevronsDownUp aria-hidden="true" />
            ) : (
              <ChevronsUpDown aria-hidden="true" />
            )}
            {allExpanded ? "全部收起" : "全部展开"}
          </Button>
        </div>
      </div>
      <div>
        {visibleSections.map(({ section, lessonIndices }) => (
          <SectionCard
            key={section.href}
            sectionHref={section.href}
            lessonIndices={lessonIndices}
          />
        ))}
      </div>
      {visibleSections.length === 0 && (
        <div className="flex flex-col items-center rounded-xl border border-dashed border-border px-5 py-14 text-center">
          <Search
            aria-hidden="true"
            className="mb-5 size-6 text-muted-foreground"
          />
          <h3 className="text-base font-medium">暂时没有匹配的章节</h3>
          <p className="mt-2 max-w-sm text-sm leading-7 text-muted-foreground">
            试试更短的关键词，或切换到全部学习阶段。可以搜索「领域模型」「表单」或「git」。
          </p>
          <Button
            variant="outline"
            onClick={resetFilters}
            className="mt-5 h-9 px-4"
          >
            清除搜索与筛选
          </Button>
        </div>
      )}
    </section>
  )
}
