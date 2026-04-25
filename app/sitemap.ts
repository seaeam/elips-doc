import type { MetadataRoute } from "next"
import { generateStaticParamsFor, importPage } from "nextra/pages"

import { buildPagePath, createCanonicalUrl } from "@/lib/seo"

const generateStaticParams = generateStaticParamsFor("mdxPath")

function getPriority(pathname: string) {
  if (pathname === "/") {
    return 1
  }

  if (pathname === "/courses") {
    return 0.9
  }

  if (pathname === "/about") {
    return 0.7
  }

  if (pathname.startsWith("/courses/")) {
    return 0.8
  }

  return 0.6
}

function getChangeFrequency(
  pathname: string
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (pathname === "/") {
    return "weekly"
  }

  if (pathname === "/courses" || pathname.startsWith("/courses/")) {
    return "monthly"
  }

  return "yearly"
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paramsList = await generateStaticParams()
  const uniquePaths = new Map<string, string[]>()

  uniquePaths.set("/", [])

  for (const params of paramsList) {
    const rawPath = params.mdxPath
    const pathSegments = Array.isArray(rawPath)
      ? rawPath
      : rawPath
        ? [String(rawPath)]
        : []
    const pathname = buildPagePath(pathSegments)

    uniquePaths.set(pathname, pathSegments)
  }

  return Promise.all(
    [...uniquePaths.entries()].map(async ([pathname, pathSegments]) => {
      const { metadata } = await importPage(pathSegments)

      return {
        url: createCanonicalUrl(pathname),
        lastModified: metadata.timestamp
          ? new Date(metadata.timestamp)
          : undefined,
        changeFrequency: getChangeFrequency(pathname),
        priority: getPriority(pathname),
      }
    })
  )
}
