import { Meta, StoryObj } from '@storybook/react';

import { ImageSize, ImageSource } from '@/components/base/Image';
import { pagesPath } from '@/utils/$path';

import { ImageLink as CommonImageLink } from '.';

const meta: Meta<typeof CommonImageLink> = {
  title: 'Common/ImageLink',
  component: CommonImageLink,
};
export default meta;

type Story = StoryObj<typeof CommonImageLink>;
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
const width: ImageSize = {
  mobile: 200,
  desktop: 300,
};
const height: ImageSize = {
  mobile: 276,
  desktop: 413,
};

export const ImageLink: Story = {
  render: () => (
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
      <dt>target=&quot;_blank&quot; rel=&quot;noreferrer noopener&quot;</dt>
      <dd style={{ marginBottom: '16px' }}>
        <CommonImageLink
          href="https://example.com/"
          target="_blank"
          rel="noreferrer noopener"
          text="ゼウスくん"
          sources={sources}
          width={width}
          height={height}
        >
          ゼウスくん
        </CommonImageLink>
      </dd>
      <dt>Complex children</dt>
      <dd style={{ marginBottom: '16px' }}>
        <CommonImageLink
          href="https://example.com/"
          target="_blank"
          rel="noreferrer noopener"
          text="ゼウスくん"
          sources={sources}
          width={width}
          height={height}
        >
          <div>
            <div style={{ fontSize: '16px' }}>汎用五感伝達機構</div>
            <div style={{ fontSize: '20px' }}>ウユンプニオン 零号機</div>
          </div>
        </CommonImageLink>
      </dd>
    </dl>
  ),
};
