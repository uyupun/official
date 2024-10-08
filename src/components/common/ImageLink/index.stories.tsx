import { pagesPath } from '@/utils/$path';

import { ImageLink as CommonImageLink } from '.';

import type { Image } from '@/components/base/Image';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

const meta: Meta<typeof CommonImageLink> = {
  title: 'Common/ImageLink',
  component: CommonImageLink,
};
export default meta;

type Story = StoryObj<typeof CommonImageLink>;
const sources: ComponentProps<typeof Image>['sources'] = [
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
const width: ComponentProps<typeof Image>['width'] = {
  mobile: 200,
  desktop: 300,
};
const height: ComponentProps<typeof Image>['height'] = {
  mobile: 276,
  desktop: 413,
};

export const ImageLink: Story = {
  render: () => (
    <dl>
      <dt style={{ color: 'white' }}>Default</dt>
      <dd style={{ marginBottom: '16px' }}>
        <CommonImageLink
          height={height}
          href={pagesPath.$url()}
          isLazy={false}
          sources={sources}
          text="ゼウスくん"
          width={width}
        >
          ゼウスくん
        </CommonImageLink>
      </dd>
      <dt style={{ color: 'white' }}>
        target=&quot;_blank&quot; rel=&quot;noreferrer noopener&quot;
      </dt>
      <dd style={{ marginBottom: '16px' }}>
        <CommonImageLink
          height={height}
          href="https://example.com/"
          isLazy={false}
          rel="noreferrer noopener"
          sources={sources}
          target="_blank"
          text="ゼウスくん"
          width={width}
        >
          ゼウスくん
        </CommonImageLink>
      </dd>
      <dt style={{ color: 'white' }}>Complex children</dt>
      <dd style={{ marginBottom: '16px' }}>
        <CommonImageLink
          height={height}
          href="https://example.com/"
          isLazy={true}
          rel="noreferrer noopener"
          sources={sources}
          target="_blank"
          text="ゼウスくん"
          width={width}
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
