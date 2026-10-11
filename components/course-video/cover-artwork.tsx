import { useId } from "react"
import type { LessonCoverData } from "./cover-data"
import { LessonArtwork } from "./lesson-artwork"
import styles from "./cover.module.css"

export function CoverArtwork({ cover }: { cover: LessonCoverData }) {
  const id = useId().replace(/:/g, "")
  return (
    <svg
      className={styles.artwork}
      viewBox="0 0 480 360"
      fill="none"
      stroke="var(--art-line)"
      strokeWidth="1.3"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      data-cover-diagram={cover.artwork}
    >
      <defs>
        <linearGradient id={`${id}-paper`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="var(--art-paper)" />
          <stop offset="1" stopColor="var(--art-paper-end)" />
        </linearGradient>
        <linearGradient id={`${id}-ink`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="var(--art-ink)" />
          <stop offset="1" stopColor="var(--art-ink-end)" />
        </linearGradient>
      </defs>
      <ellipse
        cx="244"
        cy="310"
        rx="144"
        ry="16"
        fill="var(--art-shadow)"
        stroke="none"
      />
      <LessonArtwork
        artwork={cover.artwork}
        paper={`url(#${id}-paper)`}
        ink={`url(#${id}-ink)`}
      />
    </svg>
  )
}
