import { useCourseCatalogStore } from "../store"

const EMPTY_LESSON_TITLES: string[] = []

export function useSectionLessons(sectionHref: string) {
  const lessons = useCourseCatalogStore(
    (state) =>
      state.sectionsByHref[sectionHref]?.lessonTitles ?? EMPTY_LESSON_TITLES
  )
  const visibleLessonCount = useCourseCatalogStore(
    (state) => state.visibleLessonCount
  )
  const isExpanded = useCourseCatalogStore((state) =>
    state.expandedSectionHrefs.includes(sectionHref)
  )
  const collapseSectionLessons = useCourseCatalogStore(
    (state) => state.collapseSectionLessons
  )
  const expandSectionLessons = useCourseCatalogStore(
    (state) => state.expandSectionLessons
  )
  const visibleLessons = lessons.slice(0, visibleLessonCount)
  const hiddenLessons = lessons.slice(visibleLessonCount)

  return {
    hiddenLessons,
    isExpanded,
    hasHiddenLessons: hiddenLessons.length > 0,
    setLessonsOpen: (open: boolean) => {
      if (open) {
        expandSectionLessons(sectionHref)
        return
      }

      collapseSectionLessons(sectionHref)
    },
    visibleLessons,
  }
}
