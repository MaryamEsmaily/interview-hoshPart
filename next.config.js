/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_API_ADDRESS: process.env.REACT_APP_API_ADDRESS,
  },
};

module.exports = nextConfig;
