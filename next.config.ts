import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "i.pinimg.com",
            pathname: "/**",
        },
        {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },

      // "www.surrey.ac.uk",
      // "images.squarespace-cdn.com",
      // "awsimages.detik.net.id",
      // "drive.google.com",
      // "docs.google.com",
    ],
  },
};

export default nextConfig;
