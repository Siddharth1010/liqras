const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-plugin-svgr");

const nextConfig = {
  images: {
    domains: [
      'localhost',
      'avatars1.githubusercontent.com',
      'images.ctfassets.net'
    ],
  }
};

module.exports = withPlugins([
  withSvgr
], nextConfig);
