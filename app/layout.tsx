import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Banner, Head } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import { Footer, Layout, Navbar } from "nextra-theme-docs"
import "nextra-theme-docs/style.css"
import "./globals.css"
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
  title: {
    default: "ELPIS Docs",
    template: "%s | ELPIS Docs",
  },
  description: "Documentation for ELPIS.",
}

const navbar = <Navbar logo={<b>ELPIS doc</b>} />
const footer = <Footer>MIT {new Date().getFullYear()} © ELPIS Docs.</Footer>
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
