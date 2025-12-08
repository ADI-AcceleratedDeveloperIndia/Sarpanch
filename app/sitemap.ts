import { MetadataRoute } from "next";
import { getData } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const data = getData();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.vercel.app";

  const routes = [
    "",
    "/leadership",
    "/works",
    "/gallery",
    "/history",
    "/announcements",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}


