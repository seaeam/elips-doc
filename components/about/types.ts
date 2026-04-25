import type { LucideIcon } from "lucide-react"

export type AboutTone = "default" | "warning"

export type AboutHeroNote = {
  description: string
  icon: LucideIcon
  title: string
  tone: AboutTone
}

export type AboutPanel = {
  badge: string
  description: string
  icon: LucideIcon
  items: string[]
  title: string
}

export type AboutRule = {
  description: string
  icon: LucideIcon
  title: string
}

export type AboutPageStore = {
  heroBadges: string[]
  heroDescription: string
  heroNotes: AboutHeroNote[]
  heroTitle: string
  maintenanceRules: AboutRule[]
  policyRules: AboutRule[]
  sourcePanels: AboutPanel[]
}
