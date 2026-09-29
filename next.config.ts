import type { NextConfig } from "next";

// Static export for GitHub Pages: `npm run build` writes the whole site to /out.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // /about → /about/index.html, which GitHub Pages serves directly
  images: { unoptimized: true }, // no image server on GitHub Pages
};

export default nextConfig;
