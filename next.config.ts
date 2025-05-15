import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: '/rk_technologies',
    images: {
      remotePatterns: [
          {hostname: 'cdn2.thecatapi.com'}
      ],
        unoptimized: true,
  }
};

export default nextConfig;
