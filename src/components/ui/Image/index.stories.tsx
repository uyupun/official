import { ComponentMeta, Story } from '@storybook/react';

import { sprinkles } from '@/styles/sprinkles.css';

import { Image, ImageProps } from '.';

export default {
  title: 'Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const sources: ImageProps['sources'] = [
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
const className = sprinkles({
  width: {
    mobile: 200,
    desktop: 300,
  },
});

export const _Image: Story = () => {
  return (
    <dl>
      <dt>isLazy=true</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Image sources={sources} alt={alt} className={className} isLazy={true} />
      </dd>
      <dt>isLazy=false</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Image sources={sources} alt={alt} className={className} isLazy={false} />
      </dd>
    </dl>
  );
};
