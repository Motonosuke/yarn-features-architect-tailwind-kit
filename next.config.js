/** @type {import('next').NextConfig} */
module.exports = {
  i18n: { locales: ['ja'], defaultLocale: 'ja' },
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
};
