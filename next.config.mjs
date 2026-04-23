import nextra from "nextra"

const withNextra = nextra({})

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
}

export default withNextra(nextConfig)
