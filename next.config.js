/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // GitHub Pages serves from a subpath (repo name) unless using custom domain
  // Update this if your repo name is different
  basePath: process.env.NODE_ENV === 'production' ? '/ai-tooling' : '',
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
