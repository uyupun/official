const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) =>
    merge(config, {
      plugins: [new VanillaExtractPlugin()],
    }),
};
