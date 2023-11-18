/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'www.facebook.com', 'onecart-public.s3.atman.pl'],
  },
  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl',
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig;