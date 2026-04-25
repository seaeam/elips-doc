import type { AboutTone } from "./types"

export function getAboutNoteClassName(tone: AboutTone) {
  return tone === "warning"
    ? "border-destructive/15 bg-destructive/[0.04]"
    : "border-border/60 bg-muted/20"
}
