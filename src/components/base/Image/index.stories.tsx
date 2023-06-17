import { ComponentMeta, Story } from '@storybook/react';

import { sprinkles } from '@/styles/sprinkles.css';

import { Image as BaseImage, ImageSize, ImageSource } from '.';

export default {
  title: 'Base/Image',
  component: BaseImage,
} as ComponentMeta<typeof BaseImage>;

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

export const Image: Story = () => {
  return (
    <dl>
      <dt>isLazy=true</dt>
      <dd style={{ marginBottom: '16px' }}>
        <BaseImage sources={sources} alt={alt} isLazy={true} width={width} height={height} />
      </dd>
      <dt>isLazy=false</dt>
      <dd style={{ marginBottom: '16px' }}>
        <BaseImage sources={sources} alt={alt} isLazy={false} width={width} height={height} />
      </dd>
      <dt>Custom style</dt>
      <dd style={{ marginBottom: '16px' }}>
        <BaseImage
          sources={sources}
          alt={alt}
          isLazy={false}
          width={width}
          height={height}
          className={style}
        />
      </dd>
    </dl>
  );
};