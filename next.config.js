/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This allows images from any HTTPS domain
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true, // Enable the experimental `app` directory feature
  },
};

module.exports = nextConfig;
