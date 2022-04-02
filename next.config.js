/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  env: {
    API_BASE_URL: 'https://stg.yenta-app.com/apis/agents',
  },
  experimental: {
    esmExternals: false,
  },
};
