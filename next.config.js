/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  // output: "export",
  // distDir: "out",
  reactStrictMode: false,
  swcMinify: true,
  images: { unoptimized: true },
  // i18n: {
  //   locales: ["en", "ko"],
  //   defaultLocale: "ko",
  //   localeDetection: false,
  // },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ko/job",
        permanent: false,
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "assets/styles")],
    prependData: `@import "_mixins.scss"; @import "_variables";`,
  },
};

module.exports = nextConfig;
