/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/worklog',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  i18n,
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
