import type { Metadata } from "next"
import { useMDXComponents as getMDXComponents } from "@/mdx-components"
import { generateStaticParamsFor, importPage } from "nextra/pages"
import { createNextraPageMetadata } from "@/lib/seo"

type PageProps = {
  params: Promise<{
    mdxPath?: string[]
  }>
}

export const generateStaticParams = generateStaticParamsFor("mdxPath")

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)

  return createNextraPageMetadata(metadata, params.mdxPath)
}

const Wrapper = getMDXComponents().wrapper!

export default async function Page(props: PageProps) {
  const params = await props.params
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.mdxPath)

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
