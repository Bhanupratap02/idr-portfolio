import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'idr-portfolio-storage.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
  
};

export default nextConfig;
