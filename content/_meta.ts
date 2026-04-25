import type { MetaRecord } from "nextra"

const meta: MetaRecord = {
  index: {
    title: "课程介绍",
    type: "page",
    display: "hidden",
    theme: {
      copyPage: false,
      pagination: false,
      sidebar: false,
      layout: "full",
      toc: false,
    },
  },
  courses: {
    title: "课程",
    type: "page",
  },
  about: {
    title: "关于",
    type: "page",
    theme: {
      pagination: false,
      sidebar: false,
      toc: false,
    },
  },
}

export default meta
