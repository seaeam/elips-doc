import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Head } from "nextra/components"
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
    default: "ELIPS Docs",
    template: "%s | ELIPS Docs",
  },
  description: "Documentation for ELIPS.",
}

const navbar = <Navbar logo={<b>Elips doc</b>} />
const footer = <Footer>MIT {new Date().getFullYear()} © ELIPS Docs.</Footer>

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
