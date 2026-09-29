import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { comparisons } from "@/content/comparisons";
import { legal } from "@/content/legal";
import { loans } from "@/content/loans";
import { calculatorLinks, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/get-a-quote",
    "/learn",
    ...loans.map((l) => `/loans/${l.slug}`),
    ...comparisons.map((c) => `/learn/compare/${c.slug}`),
    ...calculatorLinks.map((c) => c.href),
    ...legal.map((l) => `/legal/${l.slug}`),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}/` })); // trailing slash matches canonical URLs
}
