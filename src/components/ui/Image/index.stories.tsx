import { ComponentMeta, Story } from '@storybook/react';

import { Image, ImageSource } from '.';

export default {
  title: 'Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const sources: ImageSource[] = [
  {
    srcset: '/images/zeus/zeus.avif',
    format: 'avif',
    width: 300,
    height: 413,
    isDesktop: true,
  },
  {
    srcset: '/images/zeus/zeus.webp',
    format: 'webp',
    width: 300,
    height: 413,
    isDesktop: true,
  },
  {
    srcset: '/images/zeus/zeus.png',
    format: 'png',
    width: 300,
    height: 413,
    isDesktop: true,
  },
  {
    srcset: '/images/zeus/zeus-mobile.avif',
    format: 'avif',
    width: 200,
    height: 276,
  },
  {
    srcset: '/images/zeus/zeus-mobile.webp',
    format: 'webp',
    width: 200,
    height: 276,
  },
  {
    srcset: '/images/zeus/zeus-mobile.png',
    format: 'png',
    width: 200,
    height: 276,
  },
];
const alt = 'ゼウスくん';

export const _Image: Story = () => {
  return (
    <dl>
      <dt>isLazy=true</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Image sources={sources} alt={alt} isLazy={true} />
      </dd>
      <dt>isLazy=false</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Image sources={sources} alt={alt} isLazy={false} />
      </dd>
    </dl>
  );
};
