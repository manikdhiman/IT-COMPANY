import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Enforce smooth routing on production environments */
  trailingSlash: false,
};

export default nextConfig;