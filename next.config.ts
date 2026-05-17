import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = (isProd || isGitHubActions) ? '/Mithun-Cards-Web' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
