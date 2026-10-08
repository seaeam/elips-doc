import { useCourseCatalogStore } from "../store"

export function useChapterNavigation() {
  const revealChapter = useCourseCatalogStore((state) => state.revealChapter)

  return (chapterNumber: string) => {
    revealChapter(chapterNumber)
    // A filtered chapter must be rendered again before the anchor can scroll.
    requestAnimationFrame(() => {
      document.getElementById(`chapter-${chapterNumber}`)?.scrollIntoView({
        block: "start",
      })
    })
  }
}
