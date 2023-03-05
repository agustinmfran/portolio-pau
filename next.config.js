/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "fr",
    localeDetection: false,
  },
};

module.exports = nextConfig;
