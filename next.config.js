const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  i18n: { locales: ['ja'], defaultLocale: 'ja' },
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
});
