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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.hookedontailsbowfishing.com',
          },
        ],
        destination: 'https://hookedontailsbowfishing.com/:path*',
        permanent: true,
      },
      {
        source: '/book-online',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
