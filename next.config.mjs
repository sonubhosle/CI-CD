/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/CI-CD',
  assetPrefix: '/CI-CD/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
