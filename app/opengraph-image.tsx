import { ImageResponse } from "next/og"

import { siteConfig } from "@/lib/site-config"

export const runtime = "nodejs"
export const alt = siteConfig.name
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px",
        background:
          "linear-gradient(135deg, #f8fafc 0%, #eef4ff 45%, #ffffff 100%)",
        color: "#0f172a",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          fontSize: 28,
          fontWeight: 600,
          color: "#334155",
        }}
      >
        <div
          style={{
            height: 14,
            width: 14,
            borderRadius: 9999,
            background: "#2563eb",
          }}
        />
        {siteConfig.shortName}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          maxWidth: "920px",
        }}
      >
        <div
          style={{
            fontSize: 86,
            lineHeight: 1,
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          ELPIS
        </div>
        <div
          style={{
            fontSize: 36,
            lineHeight: 1.35,
            color: "#334155",
          }}
        >
          Course Notes, Architecture and Engineering Practice
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 24,
          color: "#475569",
        }}
      >
        <div>{siteConfig.name}</div>
        <div>{siteConfig.creator}</div>
      </div>
    </div>,
    {
      ...size,
    }
  )
}
