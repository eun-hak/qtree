import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "../lib/site";

export const runtime = "edge";

export const alt = SITE_NAME;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #4F46E5 0%, #9333EA 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            padding: 48,
          }}
        >
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: 24,
              background: "rgba(255, 255, 255, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 88,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Q
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                fontSize: 56,
                fontWeight: "bold",
                color: "white",
                lineHeight: 1.2,
              }}
            >
              {SITE_NAME}
            </div>
            <div
              style={{
                fontSize: 32,
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              {SITE_TAGLINE}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
