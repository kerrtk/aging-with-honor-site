import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B1220",
          color: "#F7F4EE",
          gap: 24,
        }}
      >
        <div style={{ width: 56, height: 56, borderRadius: 12, backgroundColor: "#C89B3C" }} />
        <span style={{ fontSize: 52, fontWeight: 700, letterSpacing: 1 }}>Game Integrity Journal</span>
        <span style={{ fontSize: 26, color: "#C89B3C" }}>Sports Integrity, Investigated</span>
      </div>
    ),
    { ...size }
  )
}
