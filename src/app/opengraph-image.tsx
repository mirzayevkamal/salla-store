import Logo from "@/components/logo";
import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "About GOAT store";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo />
        <p style={{ fontSize: 72, fontWeight: 900 }}>About GOAT store</p>
      </div>
    ),
    {
      ...size,
    }
  );
}
