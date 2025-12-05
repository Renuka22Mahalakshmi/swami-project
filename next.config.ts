/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: false, // keep only valid experimental features
  },
};

module.exports = nextConfig;
