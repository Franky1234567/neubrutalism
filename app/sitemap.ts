import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.franky.my.id", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://www.franky.my.id/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.franky.my.id/stack", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.franky.my.id/contact", lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];
}