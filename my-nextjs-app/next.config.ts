import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint checks during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript errors during builds
  },
};

export default nextConfig;

