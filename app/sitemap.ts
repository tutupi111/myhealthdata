import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

// Production canonical domain: all sitemap URLs must use https://www.myhealthdata.foundation only.
const BASE_URL = "https://www.myhealthdata.foundation";

const staticPaths = ["", "/mission", "/projects", "/research", "/join", "/contact"] as const;
const portalPaths = ["/portal/patient", "/portal/researcher", "/portal/admin"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of locales) {
    for (const path of staticPaths) {
      const pathSegment = path ? path : "";
      entries.push({
        url: `${BASE_URL}/${lang}${pathSegment}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
      });
    }
    for (const path of portalPaths) {
      entries.push({
        url: `${BASE_URL}/${lang}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
