/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.GITHUB_PAGES ? '/ada-rodriguez' : '',
  basePath: process.env.GITHUB_PAGES ? '/ada-rodriguez' : ''
}

module.exports = nextConfig