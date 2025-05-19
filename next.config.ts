import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/cat_app',
    images: {
      remotePatterns: [
          {hostname: 'cdn2.thecatapi.com'}
      ],
        unoptimized: true,
  }
};

export default nextConfig;
