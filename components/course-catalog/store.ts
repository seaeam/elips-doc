import { create } from "zustand"
import { COURSE_SECTIONS, ROADMAP_STEPS } from "./const"
import { getVisibleLessons } from "./journey"
import type { CourseCatalogStore, CourseCatalogStoreState } from "./types"
import { createSectionsByHref, getTotalLessons } from "./utils"

function createCourseCatalogStoreState(): CourseCatalogStoreState {
  const sections = COURSE_SECTIONS
  const totalLessons = getTotalLessons(sections)
  const totalModules = sections.length

  return {
    query: "",
    selectedPhase: "all",
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
  setQuery: (query) =>
    set((state) => ({
      query,
      ...(query.trim()
        ? {
            expandedSectionHrefs: getVisibleLessons(
              state.sections,
              query,
              state.selectedPhase
            ).map(({ section }) => section.href),
          }
        : {}),
    })),
  setSelectedPhase: (selectedPhase) =>
    set((state) => ({
      selectedPhase,
      ...(state.query.trim()
        ? {
            expandedSectionHrefs: getVisibleLessons(
              state.sections,
              state.query,
              selectedPhase
            ).map(({ section }) => section.href),
          }
        : {}),
    })),
  resetFilters: () => set({ query: "", selectedPhase: "all" }),
  revealChapter: (chapterNumber) =>
    set((state) => {
      const section = state.sections.find(
        (item) => item.number === chapterNumber
      )
      if (!section) return state
      return {
        query: "",
        selectedPhase: "all",
        expandedSectionHrefs: Array.from(
          new Set([...state.expandedSectionHrefs, section.href])
        ),
      }
    }),
  setSectionsExpanded: (sectionHrefs, expanded) =>
    set((state) => ({
      expandedSectionHrefs: expanded
        ? Array.from(new Set([...state.expandedSectionHrefs, ...sectionHrefs]))
        : state.expandedSectionHrefs.filter(
            (href) => !sectionHrefs.includes(href)
          ),
    })),
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
