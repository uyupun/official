import { ComponentMeta, Story } from '@storybook/react';

import { Anchor } from '.';

import { pagesPath } from '@/lib/$path';

export default {
  title: 'Anchor',
  component: Anchor,
} as ComponentMeta<typeof Anchor>;

export const _Anchor: Story = () => {
  return (
    <dl>
      <dt>Default</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Anchor href={pagesPath.$url()}>Default Anchor</Anchor>
      </dd>
      <dt>target=&quot;_blank&quot;</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Anchor href={pagesPath.$url()} target={'_blank'}>
          target=&quot;_blank&quot; Anchor
        </Anchor>
      </dd>
    </dl>
  );
};
