import { create } from "zustand"
import {
  COURSE_SECTIONS,
  DEFAULT_VISIBLE_LESSON_COUNT,
  ROADMAP_STEPS,
} from "./const"
import type { CourseCatalogStore, CourseCatalogStoreState } from "./types"
import {
  buildHeroStats,
  createSectionsByHref,
  getCurrentFocusSection,
  getTotalLessons,
  getUpdatedModules,
} from "./utils"

function createCourseCatalogStoreState(): CourseCatalogStoreState {
  const sections = COURSE_SECTIONS
  const totalLessons = getTotalLessons(sections)
  const updatedModules = getUpdatedModules(sections)
  const totalModules = sections.length

  return {
    currentFocus: getCurrentFocusSection(sections, "08"),
    expandedSectionHrefs: [],
    heroStats: buildHeroStats(totalLessons, updatedModules, totalModules),
    roadmapSteps: ROADMAP_STEPS,
    sections,
    sectionsByHref: createSectionsByHref(sections),
    totalLessons,
    totalModules,
    updatedModules,
    visibleLessonCount: DEFAULT_VISIBLE_LESSON_COUNT,
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
