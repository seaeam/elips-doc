import { COURSE_HIGHLIGHTS, HERO_PLAYBACK_ID } from "./const"
import { create } from "zustand"

import type { CourseHomepageStore } from "./types"

function createCourseHomepageStoreState(): CourseHomepageStore {
  return {
    heroPlaybackId: HERO_PLAYBACK_ID,
    highlights: COURSE_HIGHLIGHTS,
  }
}

export const useCourseHomepageStore = create<CourseHomepageStore>(() =>
  createCourseHomepageStoreState()
)
