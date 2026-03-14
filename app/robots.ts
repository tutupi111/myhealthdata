import type { MetadataRoute } from "next";

// Canonical domain: sitemap reference must use https://www.myhealthdata.foundation (see vercel.json for non-www redirect).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.myhealthdata.foundation/sitemap.xml",
  };
}
