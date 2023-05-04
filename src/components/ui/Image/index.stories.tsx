import { ComponentMeta, Story } from '@storybook/react';

import { breakpoint } from '@/styles/breakpoint';
import { sprinkles } from '@/styles/sprinkles.css';

import { Image, ImageProps } from '.';

export default {
  title: 'Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const sources: ImageProps['sources'] = [
  {
    srcset: '/images/zeus/zeus-pc.webp',
    type: 'image/webp',
    media: breakpoint,
  },
  {
    srcset: '/images/zeus/zeus-pc.png',
    type: 'image/png',
    media: breakpoint,
  },
  {
    srcset: '/images/zeus/zeus-sp.webp',
    type: 'image/webp',
  },
  {
    srcset: '/images/zeus/zeus-sp.png',
    type: 'image/png',
  },
];
const src = '/images/zeus/zeus-pc.png';
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
        <Image sources={sources} src={src} alt={alt} className={className} isLazy={true} />
      </dd>
      <dt>isLazy=false</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Image sources={sources} src={src} alt={alt} className={className} isLazy={false} />
      </dd>
    </dl>
  );
};
