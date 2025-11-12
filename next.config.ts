// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Domain dari konfigurasi pertama Anda
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**',
      },
      // Domain dari konfigurasi kedua Anda
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      // Domain yang Anda komentari (saya ubah menjadi format yang benar)
      {
        protocol: 'https',
        hostname: 'www.surrey.ac.uk',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'awsimages.detik.net.id',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'docs.google.com',
        pathname: '/**',
      },
    ],
  },
};

// Gunakan 'export default' untuk file .ts
export default nextConfig;