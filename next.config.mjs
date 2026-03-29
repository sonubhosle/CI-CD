const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithubActions ? '/CI-CD' : '',
  assetPrefix: isGithubActions ? '/CI-CD/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
