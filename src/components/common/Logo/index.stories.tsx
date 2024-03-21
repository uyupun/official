import { Logo as CommonLogo } from '.';

import type { Image } from '@/components/base/Image';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

const meta: Meta<typeof CommonLogo> = {
  title: 'Common/Logo',
  component: CommonLogo,
};
export default meta;

type Story = StoryObj<typeof CommonLogo>;
const width: ComponentProps<typeof Image>['width'] = {
  mobile: 40,
  desktop: 64,
};
const height: ComponentProps<typeof Image>['height'] = {
  mobile: 40,
  desktop: 64,
};

export const Logo: Story = {
  render: () => (
    <dl>
      <dt style={{ color: 'white' }}>{'type="discussion"'}</dt>
      <dd style={{ margin: '8px 0 16px 0' }}>
        <CommonLogo
          alt={'オフィシャルサイトのGitHub discussion'}
          height={height}
          href={'https://github.com/uyupun/official/discussions/77'}
          isLazy={false}
          type={'discussion'}
          width={width}
        />
      </dd>
      <dt style={{ color: 'white' }}>{'type="github"'}</dt>
      <dd style={{ margin: '8px 0 16px 0' }}>
        <CommonLogo
          alt={'たかしのGitHubアカウント'}
          height={height}
          href={'https://github.com/takashi0602'}
          isLazy={false}
          type={'github'}
          width={width}
        />
      </dd>
      <dt style={{ color: 'white' }}>{'type="home"'}</dt>
      <dd style={{ margin: '8px 0 16px 0' }}>
        <CommonLogo
          alt={'たかしのポートフォリオ'}
          height={height}
          href={'https://takashimelon.vercel.app'}
          isLazy={false}
          type={'home'}
          width={width}
        />
      </dd>
      <dt style={{ color: 'white' }}>{'type="qiita"'}</dt>
      <dd style={{ margin: '8px 0 16px 0' }}>
        <CommonLogo
          alt={'たかしのQiitaアカウント'}
          height={height}
          href={'https://qiita.com/takashimelon'}
          isLazy={false}
          type={'qiita'}
          width={width}
        />
      </dd>
      <dt style={{ color: 'white' }}>{'type="uyupun"'}</dt>
      <dd style={{ margin: '8px 0 16px 0' }}>
        <CommonLogo
          alt={'ぅゅ...ぷんぽぷんぽのGitHub Organization'}
          height={height}
          href={'https://github.com/uyupun'}
          isLazy={false}
          type={'uyupun'}
          width={width}
        />
      </dd>
      <dt style={{ color: 'white' }}>{'type="uyupun-archive"'}</dt>
      <dd style={{ margin: '8px 0 16px 0' }}>
        <CommonLogo
          alt={'ぅゅ...ぷんぽぷんぽアーカイブのGitHub Organization'}
          height={height}
          href={'https://github.com/uyupun'}
          isLazy={false}
          type={'uyupun-archive'}
          width={width}
        />
      </dd>
      <dt style={{ color: 'white' }}>{'type="x"'}</dt>
      <dd style={{ margin: '8px 0 16px 0' }}>
        <CommonLogo
          alt={'ぅゅ...ぷんぽぷんぽのXアカウント'}
          height={height}
          href={'https://twitter.com/uyupunpopunpo'}
          isLazy={false}
          type={'x'}
          width={width}
        />
      </dd>
      <dt style={{ color: 'white' }}>{'type="youtube"'}</dt>
      <dd style={{ margin: '8px 0 16px 0' }}>
        <CommonLogo
          alt={'ぅゅ...ぷんぽぷんぽのYouTubeアカウント'}
          height={height}
          href={'https://www.youtube.com/channel/UCE_4jtgERiX2yIYSvh3uzWA'}
          isLazy={false}
          type={'youtube'}
          width={width}
        />
      </dd>
    </dl>
  ),
};
