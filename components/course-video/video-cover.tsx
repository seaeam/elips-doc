import { Play } from "lucide-react"
import { CoverArtwork } from "./cover-artwork"
import { formatWatchTime } from "@/lib/learning-progress"
import type { LessonCoverData } from "./cover-data"
import styles from "./cover.module.css"

export function VideoCover({
  title,
  cover,
  onPlay,
  resumeTime = 0,
  completed = false,
}: {
  title: string
  cover: LessonCoverData
  onPlay: () => void
  resumeTime?: number
  completed?: boolean
}) {
  const action =
    resumeTime > 0 ? "继续观看" : completed ? "重新观看" : "播放本节"
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={
        resumeTime > 0
          ? `继续观看${title}视频，从${formatWatchTime(resumeTime)}开始`
          : "播放" + title + "视频"
      }
      className={styles.cover}
      data-slot="video-cover"
      data-chapter={cover.chapterNumber}
      data-lesson={cover.lessonNumber}
    >
      <span className={styles.masthead} data-cover-part="masthead">
        <span className={styles.brand}>
          ELPIS<span className={styles.brandNote}>506 LAB</span>
        </span>
        <span className={styles.chapter}>第 {cover.chapterNumber} 章</span>
      </span>
      <span className={styles.stage} data-cover-part="stage">
        <span className={styles.copy} data-cover-part="copy">
          <span className={styles.eyebrow}>{cover.label}</span>
          <span className={styles.title} data-cover-part="title">
            {title}
          </span>
          <span className={styles.watch}>
            <span className={styles.play} data-cover-part="play">
              <Play aria-hidden="true" />
            </span>
            <span>
              {action}
              <span className={styles.watchNote}>
                {resumeTime > 0
                  ? `从 ${formatWatchTime(resumeTime)} 继续`
                  : completed
                    ? "本节已完成"
                    : "VIDEO LESSON"}
              </span>
            </span>
          </span>
        </span>
        <span
          className={styles.artworkFrame}
          data-cover-part="artwork"
          aria-hidden="true"
        >
          <CoverArtwork cover={cover} />
        </span>
      </span>
      <span className={styles.footer} data-cover-part="footer">
        <span className={styles.topics} data-cover-part="topics">
          {cover.topics.map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </span>
        <span className={styles.lessonCount}>
          <strong>{String(cover.lessonNumber).padStart(2, "0")}</strong>
          <span aria-hidden="true"> / </span>
          <span className="sr-only">，共</span>
          {String(cover.totalLessons).padStart(2, "0")}
          <span className="sr-only">节</span>
        </span>
      </span>
    </button>
  )
}
