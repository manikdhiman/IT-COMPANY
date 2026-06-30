import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Enforce proper production deployment path resolution */
  trailingSlash: false,
};

export default nextConfig;