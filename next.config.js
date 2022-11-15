/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["openweathermap.org", "mattthedev-next-weather-app.vercel.app"],
  },
}

module.exports = nextConfig
