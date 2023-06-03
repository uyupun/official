import { ComponentMeta, Story } from '@storybook/react';

import { pagesPath } from '@/lib/$path';

import { TextLink } from '.';

export default {
  title: 'TextLink',
  component: TextLink,
} as ComponentMeta<typeof TextLink>;

export const _TextLink: Story = () => {
  return (
    <dl>
      <dt>Default</dt>
      <dd style={{ marginBottom: '16px' }}>
        <TextLink href={pagesPath.$url()}>Default TextLink</TextLink>
      </dd>
      <dt>target=&quot;_blank&quot;</dt>
      <dd style={{ marginBottom: '16px' }}>
        <TextLink href={pagesPath.$url()} target={'_blank'}>
          target=&quot;_blank&quot; TextLink
        </TextLink>
      </dd>
    </dl>
  );
};
