import type { PageMapItem } from "nextra"
import { LessonNavigationTitle } from "./lesson-navigation-title"

export function withLearningStatus(items: PageMapItem[]): PageMapItem[] {
  return items.map((item) => {
    if ("children" in item)
      return { ...item, children: withLearningStatus(item.children) }
    if (!("route" in item) || !/^\/courses\/[^/]+\/\d+$/.test(item.route))
      return item
    const title = "title" in item ? item.title : item.frontMatter?.title
    return typeof title === "string"
      ? {
          ...item,
          title: <LessonNavigationTitle href={item.route} title={title} />,
        }
      : item
  })
}
