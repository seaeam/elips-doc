import type { MDXComponents } from "nextra/mdx-components"
import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"
import { Button } from "@/components/ui/button"
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"
import MuxPlayer from "@mux/mux-player-react"
import { DiaTextReveal } from "@/components/ui/dia-text-reveal"

const themeComponents = getThemeComponents()
const customComponents: MDXComponents = {
  Button,
  HeroVideoDialog,
  MuxPlayer,
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
