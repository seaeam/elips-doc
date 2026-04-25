type SiteConfig = {
  creator: string
  defaultDescription: string
  defaultTitle: string
  keywords: string[]
  locale: string
  name: string
  shortName: string
  url: string
}

function normalizeSiteUrl(value: string) {
  const trimmedValue = value.trim()

  if (!trimmedValue) {
    return "http://localhost:3000"
  }

  const normalizedValue = /^https?:\/\//.test(trimmedValue)
    ? trimmedValue
    : `https://${trimmedValue}`

  return normalizedValue.replace(/\/$/, "")
}

function resolveSiteUrl() {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000"

  return normalizeSiteUrl(candidate)
}

export const siteConfig: SiteConfig = {
  creator: "506 Lab",
  defaultDescription:
    "围绕 ELPIS 框架搭建过程整理的课程笔记，覆盖需求分析、架构设计、Node.js 服务端内核、Webpack 5 工程化与 Vue 3 领域模型等内容。",
  defaultTitle: "ELPIS 课程笔记",
  keywords: [
    "ELPIS",
    "前端架构",
    "Node.js",
    "Webpack 5",
    "Vue 3",
    "领域模型",
    "课程笔记",
    "全栈课程",
  ],
  locale: "zh_CN",
  name: "ELPIS 课程笔记",
  shortName: "ELPIS",
  url: resolveSiteUrl(),
}

export const defaultSocialImage = {
  alt: siteConfig.name,
  height: 630,
  url: "/opengraph-image",
  width: 1200,
}
