import { create } from "zustand"
import { COURSE_SECTIONS, ROADMAP_STEPS } from "./const"
import type { CourseCatalogStore, CourseCatalogStoreState } from "./types"
import { createSectionsByHref, getTotalLessons } from "./utils"

function createCourseCatalogStoreState(): CourseCatalogStoreState {
  const sections = COURSE_SECTIONS
  const totalLessons = getTotalLessons(sections)
  const totalModules = sections.length

  return {
    expandedSectionHrefs: [],
    roadmapSteps: ROADMAP_STEPS,
    sections,
    sectionsByHref: createSectionsByHref(sections),
    totalLessons,
    totalModules,
  }
}

export const useCourseCatalogStore = create<CourseCatalogStore>((set) => ({
  ...createCourseCatalogStoreState(),
  collapseSectionLessons: (sectionHref) =>
    set((state) => ({
      expandedSectionHrefs: state.expandedSectionHrefs.filter(
        (href) => href !== sectionHref
      ),
    })),
  expandSectionLessons: (sectionHref) =>
    set((state) => {
      if (state.expandedSectionHrefs.includes(sectionHref)) {
        return state
      }

      return {
        expandedSectionHrefs: [...state.expandedSectionHrefs, sectionHref],
      }
    }),
  toggleSectionLessons: (sectionHref) =>
    set((state) => {
      if (state.expandedSectionHrefs.includes(sectionHref)) {
        return {
          expandedSectionHrefs: state.expandedSectionHrefs.filter(
            (href) => href !== sectionHref
          ),
        }
      }

      return {
        expandedSectionHrefs: [...state.expandedSectionHrefs, sectionHref],
      }
    }),
}))
