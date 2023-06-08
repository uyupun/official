import { ComponentMeta, Story } from '@storybook/react';

import { staticPath } from '@/lib/$path';
import { sprinkles } from '@/styles/sprinkles.css';

import { Image as BaseImage, ImageSize, ImageSource } from '.';

export default {
  title: 'Base/Image',
  component: BaseImage,
} as ComponentMeta<typeof BaseImage>;

const sources: ImageSource[] = [
  {
    srcset: staticPath.images.zeus.zeus_avif,
    format: 'avif',
    isDesktop: true,
  },
  {
    srcset: staticPath.images.zeus.zeus_webp,
    format: 'webp',
    isDesktop: true,
  },
  {
    srcset: staticPath.images.zeus.zeus_png,
    format: 'png',
    isDesktop: true,
  },
  {
    srcset: staticPath.images.zeus.zeus_mobile_avif,
    format: 'avif',
  },
  {
    srcset: staticPath.images.zeus.zeus_mobile_webp,
    format: 'webp',
  },
  {
    srcset: staticPath.images.zeus.zeus_mobile_png,
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
