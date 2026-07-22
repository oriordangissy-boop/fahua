import type { NextConfig } from "next";

const pagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isStaticExport = pagesBasePath.length > 0;

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  basePath: pagesBasePath || undefined,
  assetPrefix: pagesBasePath || undefined,
  trailingSlash: isStaticExport,
  images: { unoptimized: true },
};

export default nextConfig;
