import { sprinkles } from '@/styles/sprinkles.css';

import { Image as BaseImage } from '.';

import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

const meta: Meta<typeof BaseImage> = {
  title: 'Base/Image',
  component: BaseImage,
};
export default meta;

type Story = StoryObj<typeof BaseImage>;
const sources: ComponentProps<typeof BaseImage>['sources'] = [
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
const width: ComponentProps<typeof BaseImage>['width'] = {
  mobile: 200,
  desktop: 300,
};
const height: ComponentProps<typeof BaseImage>['height'] = {
  mobile: 276,
  desktop: 413,
};
const style = sprinkles({
  display: 'inline-block',
  padding: 2,
  backgroundColor: 'white',
});

export const Image: Story = {
  render: () => (
    <dl>
      <dt style={{ color: 'white' }}>isLazy=true</dt>
      <dd style={{ marginBottom: '16px' }}>
        <BaseImage alt={alt} height={height} isLazy={true} sources={sources} width={width} />
      </dd>
      <dt style={{ color: 'white' }}>isLazy=false</dt>
      <dd style={{ marginBottom: '16px' }}>
        <BaseImage alt={alt} height={height} isLazy={false} sources={sources} width={width} />
      </dd>
      <dt style={{ color: 'white' }}>Custom style</dt>
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
