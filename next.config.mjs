import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  webpack: (config) => {
    // styled-components is an optional peer dep of @sanity/visual-editing
    // We don't use visual editing — mark it as empty to prevent build errors
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-components': false,
    }
    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tr',
        permanent: false,
      },
    ]
  },
}

export default withNextIntl(nextConfig)
