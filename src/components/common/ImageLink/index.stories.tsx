import { ComponentMeta, Story } from '@storybook/react';

import { ImageSize, ImageSource } from '@/components/base/Image';
import { pagesPath, staticPath } from '@/lib/$path';

import { ImageLink as CommonImageLink } from '.';

export default {
  title: 'Common/ImageLink',
  component: CommonImageLink,
} as ComponentMeta<typeof CommonImageLink>;

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
const width: ImageSize = {
  mobile: 200,
  desktop: 300,
};
const height: ImageSize = {
  mobile: 276,
  desktop: 413,
};

export const ImageLink: Story = () => {
  return (
    <dl>
      <dt>Default</dt>
      <dd style={{ marginBottom: '16px' }}>
        <CommonImageLink
          href={pagesPath.$url()}
          text="ゼウスくん"
          sources={sources}
          width={width}
          height={height}
        >
          ゼウスくん
        </CommonImageLink>
      </dd>
    </dl>
  );
};
