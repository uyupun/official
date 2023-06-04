import { ComponentMeta, Story } from '@storybook/react';

import { Image, ImageSize, ImageSource } from '.';

export default {
  title: 'Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const sources: ImageSource[] = [
  {
    srcset: '/images/zeus/zeus.avif',
    format: 'avif',
    isDesktop: true,
  },
  {
    srcset: '/images/zeus/zeus.webp',
    format: 'webp',
    isDesktop: true,
  },
  {
    srcset: '/images/zeus/zeus.png',
    format: 'png',
    isDesktop: true,
  },
  {
    srcset: '/images/zeus/zeus-mobile.avif',
    format: 'avif',
  },
  {
    srcset: '/images/zeus/zeus-mobile.webp',
    format: 'webp',
  },
  {
    srcset: '/images/zeus/zeus-mobile.png',
    format: 'png',
  },
];
const alt = 'ゼウスくん';
const width: ImageSize = {
  mobile: 200,
  desktop: 300,
};
const height: ImageSize = {
  mobile: 276,
  desktop: 413,
};

export const _Image: Story = () => {
  return (
    <dl>
      <dt>isLazy=true</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Image sources={sources} alt={alt} isLazy={true} width={width} height={height} />
      </dd>
      <dt>isLazy=false</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Image sources={sources} alt={alt} isLazy={false} width={width} height={height} />
      </dd>
    </dl>
  );
};