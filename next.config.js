const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src', 'public', '.storybook'],
  },
};

module.exports = withVanillaExtract(nextConfig);
