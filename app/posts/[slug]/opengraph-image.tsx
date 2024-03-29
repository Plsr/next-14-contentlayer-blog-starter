import { allPosts } from "@/.contentlayer/generated";
import siteConfig from "@/site.config";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  // TODO: Return sane default
  if (!post) return null;

  const description = post.metaDescription || post.body.raw.slice(0, 200);

  // Font
  const interBold = fetch(
    new URL("public/Inter-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const interRegular = fetch(
    new URL("public/Inter-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "flex-end",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          padding: "20px",
          background: "#ddd",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          {siteConfig.title}
        </div>
        <div
          style={{
            fontSize: 60,
            marginTop: "auto",
            fontWeight: 700,
            color: "#222",
          }}
        >
          {post.title}
        </div>
        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            height: "8px",
            width: "10%",
            borderRadius: "20px",
            background: "#1DC49C",
          }}
        />
        <div
          style={{
            fontSize: 50,
            color: "#444",
          }}
        >
          {description}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: await interBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
