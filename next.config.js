/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    deviceSizes: [320, 420, 768, 1024],
    imageSizes: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: `/ohhouse-products-images/**`,
      },
    ],
  },
}

module.exports = nextConfig
