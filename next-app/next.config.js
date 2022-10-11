/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {},
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    HOSTNAME: process.env.HOSTNAME,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    },{
      test: /\.(txt|csv|mmdb)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: "[path][name].[ext]",
            emitFile: true,
          },
        },
      ],
    },);

    return config;
  },
};

module.exports = nextConfig;
