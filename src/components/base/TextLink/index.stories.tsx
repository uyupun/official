import { ComponentMeta, Story } from '@storybook/react';

import { pagesPath } from '@/utils/$path';

import { TextLink as CommonTextLink } from '.';

export default {
  title: 'Base/TextLink',
  component: CommonTextLink,
} as ComponentMeta<typeof CommonTextLink>;

export const TextLink: Story = () => {
  return (
    <dl>
      <dt>Default</dt>
      <dd style={{ marginBottom: '16px' }}>
        <CommonTextLink href={pagesPath.$url()}>Default TextLink</CommonTextLink>
      </dd>
      <dt>target=&quot;_blank&quot;</dt>
      <dd style={{ marginBottom: '16px' }}>
        <CommonTextLink href={pagesPath.$url()} target={'_blank'}>
          target=&quot;_blank&quot; TextLink
        </CommonTextLink>
      </dd>
    </dl>
  );
};
