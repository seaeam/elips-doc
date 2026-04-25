import { AboutPage } from "@/components/about/about-page"
import { CourseHomepage } from "@/components/home/course-homepage"
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
