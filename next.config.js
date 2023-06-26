import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src', 'public', '.storybook'],
  },
};

export default withVanillaExtract(nextConfig);
