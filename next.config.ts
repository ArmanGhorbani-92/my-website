import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/my-website",
  trailingSlash: true,
};

export default nextConfig;