import { create } from "zustand"

import {
  ABOUT_HERO_BADGES,
  ABOUT_HERO_DESCRIPTION,
  ABOUT_HERO_NOTES,
  ABOUT_HERO_TITLE,
  ABOUT_MAINTENANCE_RULES,
  ABOUT_POLICY_RULES,
  ABOUT_SOURCE_PANELS,
} from "./const"

import type { AboutPageStore } from "./types"

function createAboutPageStoreState(): AboutPageStore {
  return {
    heroBadges: ABOUT_HERO_BADGES,
    heroDescription: ABOUT_HERO_DESCRIPTION,
    heroNotes: ABOUT_HERO_NOTES,
    heroTitle: ABOUT_HERO_TITLE,
    maintenanceRules: ABOUT_MAINTENANCE_RULES,
    policyRules: ABOUT_POLICY_RULES,
    sourcePanels: ABOUT_SOURCE_PANELS,
  }
}

export const useAboutPageStore = create<AboutPageStore>(() =>
  createAboutPageStoreState()
)
