import type { Metadata } from "next"
import type { $NextraMetadata } from "nextra"

import { defaultSocialImage, siteConfig } from "./site-config"

type PageMetadataInput = {
  description?: string | null
  metadata?: Partial<Metadata>
  pathname: string
  title?: string | null
}

export function buildPagePath(pathSegments?: string[]) {
  if (!pathSegments?.length) {
    return "/"
  }

  return `/${pathSegments.join("/")}`
}

export function getMetadataTitle(
  title: Metadata["title"] | string | null | undefined
) {
  if (!title) {
    return siteConfig.defaultTitle
  }

  if (typeof title === "string") {
    return title
  }

  if ("absolute" in title && title.absolute) {
    return title.absolute
  }

  if ("default" in title && title.default) {
    return title.default
  }

  return siteConfig.defaultTitle
}

export function getMetadataDescription(
  description: string | null | undefined,
  title?: string | null
) {
  const normalizedDescription = description?.trim()

  if (normalizedDescription) {
    return normalizedDescription
  }

  if (title?.trim()) {
    return `${title.trim()} - ${siteConfig.defaultDescription}`
  }

  return siteConfig.defaultDescription
}

export function createPageMetadata({
  description,
  metadata,
  pathname,
  title,
}: PageMetadataInput): Metadata {
  const normalizedTitle = getMetadataTitle(title)
  const normalizedDescription = getMetadataDescription(
    description,
    normalizedTitle
  )
  const pageType = pathname === "/" ? "website" : "article"

  return {
    ...metadata,
    title: normalizedTitle,
    description: normalizedDescription,
    alternates: {
      ...metadata?.alternates,
      canonical: pathname,
    },
    openGraph: {
      ...metadata?.openGraph,
      title: normalizedTitle,
      description: normalizedDescription,
      url: pathname,
      locale: metadata?.openGraph?.locale ?? siteConfig.locale,
      siteName: metadata?.openGraph?.siteName ?? siteConfig.name,
      images: metadata?.openGraph?.images ?? [defaultSocialImage],
      ...(pageType === "website" ? { type: "website" } : { type: "article" }),
    },
    twitter: {
      ...metadata?.twitter,
      card: "summary_large_image",
      title: normalizedTitle,
      description: normalizedDescription,
      images: metadata?.twitter?.images ?? [defaultSocialImage.url],
    },
  }
}

export function createNextraPageMetadata(
  metadata: $NextraMetadata,
  pathSegments?: string[]
): Metadata {
  const {
    description,
    filePath,
    openGraph,
    readingTime,
    timestamp,
    title,
    twitter,
    ...rest
  } = metadata

  void filePath
  void readingTime
  void timestamp

  return createPageMetadata({
    description,
    metadata: {
      ...rest,
      openGraph,
      twitter,
    },
    pathname: buildPagePath(pathSegments),
    title,
  })
}

export function createCanonicalUrl(pathname: string) {
  return new URL(pathname, siteConfig.url).toString()
}
