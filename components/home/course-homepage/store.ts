import {
  COURSE_HIGHLIGHTS,
  COURSE_SECTIONS,
  HERO_PLAYBACK_ID,
  TECH_STACK,
} from "./const"
import { create } from "zustand"

import type { CourseHomepageStore } from "./types"
import { buildHeroStats, getTotalLessons, getUpdatedModules } from "./utils"

function createCourseHomepageStoreState(): CourseHomepageStore {
  const totalLessons = getTotalLessons(COURSE_SECTIONS)
  const updatedModules = getUpdatedModules(COURSE_SECTIONS)
  const totalModules = COURSE_SECTIONS.length

  return {
    heroPlaybackId: HERO_PLAYBACK_ID,
    heroStats: buildHeroStats(totalLessons, updatedModules, totalModules),
    highlights: COURSE_HIGHLIGHTS,
    sections: COURSE_SECTIONS,
    techStack: TECH_STACK,
    totalLessons,
    totalModules,
    updatedModules,
  }
}

export const useCourseHomepageStore = create<CourseHomepageStore>(() =>
  createCourseHomepageStoreState()
)
