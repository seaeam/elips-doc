import { AboutPage } from "@/components/about"
import { CourseCatalog } from "@/components/course-catalog"
import { CourseHomepage } from "@/components/home"
import { Button } from "@/components/ui/button"
import { DiaTextReveal } from "@/components/ui/dia-text-reveal"
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"
import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"
import type { MDXComponents } from "nextra/mdx-components"
import Player from "./components/ui/player"

const themeComponents = getThemeComponents()
const customComponents: MDXComponents = {
  AboutPage,
  Button,
  CourseCatalog,
  CourseHomepage,
  HeroVideoDialog,
  MuxPlayer: Player,
  DiaTextReveal,
}

export function useMDXComponents(
  components: MDXComponents = {}
): MDXComponents {
  return {
    ...themeComponents,
    ...customComponents,
    ...components,
  }
}
