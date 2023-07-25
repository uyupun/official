import { sprinkles } from '@/styles/sprinkles.css';

import { Image as BaseImage, type ImageSize, type ImageSource } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BaseImage> = {
  title: 'Base/Image',
  component: BaseImage,
};
export default meta;

type Story = StoryObj<typeof BaseImage>;
const sources: ImageSource[] = [
  {
    srcset: './images/zeus/zeus.avif',
    format: 'avif',
    isDesktop: true,
  },
  {
    srcset: './images/zeus/zeus.webp',
    format: 'webp',
    isDesktop: true,
  },
  {
    srcset: './images/zeus/zeus.png',
    format: 'png',
    isDesktop: true,
  },
  {
    srcset: './images/zeus/zeus-mobile.avif',
    format: 'avif',
  },
  {
    srcset: './images/zeus/zeus-mobile.webp',
    format: 'webp',
  },
  {
    srcset: './images/zeus/zeus-mobile.png',
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
const style = sprinkles({
  display: 'inline-block',
  padding: 2,
  backgroundColor: 'lightBlue',
});

export const Image: Story = {
  render: () => (
    <dl>
      <dt>isLazy=true</dt>
      <dd style={{ marginBottom: '16px' }}>
        <BaseImage alt={alt} height={height} isLazy={true} sources={sources} width={width} />
      </dd>
      <dt>isLazy=false</dt>
      <dd style={{ marginBottom: '16px' }}>
        <BaseImage alt={alt} height={height} isLazy={false} sources={sources} width={width} />
      </dd>
      <dt>Custom style</dt>
      <dd style={{ marginBottom: '16px' }}>
        <BaseImage
          alt={alt}
          className={style}
          height={height}
          isLazy={false}
          sources={sources}
          width={width}
        />
      </dd>
    </dl>
  ),
};
