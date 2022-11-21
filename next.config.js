/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["openweathermap.org", "mattthedev-next-weather-app.vercel.app"],
  },
  i18n: {
    locales: ['en-GB', 'fr'],
    defaultLocale: 'en-GB'
  }
}

module.exports = nextConfig
