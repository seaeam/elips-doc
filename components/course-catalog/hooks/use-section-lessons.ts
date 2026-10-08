import { useCourseCatalogStore } from "../store"

const EMPTY_LESSON_TITLES: string[] = []

export function useSectionLessons(sectionHref: string) {
  const lessons = useCourseCatalogStore(
    (state) =>
      state.sectionsByHref[sectionHref]?.lessonTitles ?? EMPTY_LESSON_TITLES
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

  return {
    lessons,
    isExpanded,
    setLessonsOpen: (open: boolean) => {
      if (open) {
        expandSectionLessons(sectionHref)
      } else {
        collapseSectionLessons(sectionHref)
      }
    },
  }
}
