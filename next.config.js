const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  eslint: {
    dirs: ['src', 'public', '.storybook'],
  },
};

module.exports = withVanillaExtract(nextConfig);
