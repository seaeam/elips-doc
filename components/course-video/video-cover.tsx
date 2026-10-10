import type { CSSProperties } from "react"
import { Play } from "lucide-react"
import { CoverArtwork } from "./cover-artwork"
import type { LessonCoverData } from "./cover-data"
import styles from "./cover.module.css"

export function VideoCover({
  title,
  cover,
  onPlay,
}: {
  title: string
  cover: LessonCoverData
  onPlay: () => void
}) {
  const palette = {
    "--cover-accent": cover.accent,
    "--cover-background": cover.background,
  } as CSSProperties

  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`播放${title}视频`}
      className={styles.cover}
      style={palette}
    >
      <span className={styles.masthead}>
        <span className={styles.brand}>
          <svg
            className={styles.brandMark}
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 2h12M2 8h9M2 14h12"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          ELPIS <span aria-hidden="true">/</span> 506 LAB
        </span>
        <span className={styles.chapter}>CHAPTER {cover.chapterNumber}</span>
      </span>
      <CoverArtwork cover={cover} />
      <span className={styles.copy}>
        <span className={styles.eyebrow}>{cover.label}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.topics}>
          {cover.topics.map((topic) => (
            <span key={topic} className={styles.topic}>
              {topic}
            </span>
          ))}
        </span>
      </span>
      <span className={styles.footer}>
        <span className={styles.play}>
          <span className={styles.playIcon}>
            <Play aria-hidden="true" />
          </span>
          播放本节
        </span>
        <span className={styles.lessonMeta}>
          <span className={styles.ticks} aria-hidden="true">
            {Array.from({ length: cover.totalLessons }, (_, i) => (
              <span
                key={i}
                className={`${styles.tick} ${i === cover.lessonNumber - 1 ? styles.currentTick : ""}`}
              />
            ))}
          </span>
          <span>
            <strong>{String(cover.lessonNumber).padStart(2, "0")}</strong> /{" "}
            {String(cover.totalLessons).padStart(2, "0")}
          </span>
        </span>
      </span>
    </button>
  )
}
