/** @type {import('next').NextConfig} */
const nextConfig = {
  // React's Strict Mode is a development mode only feature for highlighting potential problems in an application. It helps to identify unsafe lifecycles, legacy API usage, and a number of other features.
  reactStrictMode: true,
  // The app directory is still an experimental feature, so we need to set a flag in the next.config.js file in order to use it:
  experimental: { appDir: true },
};
module.exports = nextConfig;
