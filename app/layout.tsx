import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Banner, Head } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import { Footer, Layout, Navbar } from "nextra-theme-docs"
import "nextra-theme-docs/style.css"
import "./globals.css"

import { defaultSocialImage, siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.defaultTitle}`,
  },
  description: siteConfig.defaultDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [defaultSocialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [defaultSocialImage.url],
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

const navbar = <Navbar logo={<b>ELPIS doc</b>} />
const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © {siteConfig.name}.
  </Footer>
)
const banner = (
  <Banner storageKey="course-updating-2026-04-25">
    🎉 当前视频内容与课程笔记正在持续更新中。
  </Banner>
)

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      dir="ltr"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          editLink={null}
          feedback={{
            content: null,
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
