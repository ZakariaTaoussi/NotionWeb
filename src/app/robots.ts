import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ziko-notion.vercel.app/sitemap.xml",
    host: "https://ziko-notion.vercel.app",
  };
}
