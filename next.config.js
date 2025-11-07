/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Configure external packages that shouldn't be bundled
  transpilePackages: ['grapesjs', 'grapesjs-preset-newsletter'],

  // Empty turbopack config to silence warning (using default turbopack)
  turbopack: {},

  // Output configuration for Vercel
  output: 'standalone',
}

module.exports = nextConfig
