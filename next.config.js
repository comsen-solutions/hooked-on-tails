/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: '/book-online',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
