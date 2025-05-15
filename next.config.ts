import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: '/rk_technologies',
    images: {
      remotePatterns: [
          {hostname: 'cdn2.thecatapi.com'}
      ],
        unoptimized: true,
  }
};

export default nextConfig;
