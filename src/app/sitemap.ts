import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "/hakkimizda",
  "/etkinlikler",
  "/projelerimiz",
  "/yonetim-kurulu",
  "/iletisim",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ibtuaidata.com.tr";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
