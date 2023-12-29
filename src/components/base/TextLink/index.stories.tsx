import { pagesPath } from '@/utils/$path';

import { TextLink as BaseTextLink } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BaseTextLink> = {
  title: 'Base/TextLink',
  component: BaseTextLink,
};
export default meta;

type Story = StoryObj<typeof BaseTextLink>;
export const TextLink: Story = {
  render: () => (
    <dl>
      <dt style={{ color: 'white' }}>Default</dt>
      <dd style={{ marginBottom: '16px' }}>
        <BaseTextLink href={pagesPath.$url()}>Default TextLink</BaseTextLink>
      </dd>
      <dt style={{ color: 'white' }}>target=&quot;_blank&quot;</dt>
      <dd style={{ marginBottom: '16px' }}>
        <BaseTextLink href={pagesPath.$url()} target={'_blank'}>
          target=&quot;_blank&quot; TextLink
        </BaseTextLink>
      </dd>
      <dt style={{ color: 'white' }}>size=&quot;lg&quot;</dt>
      <dd style={{ marginBottom: '16px' }}>
        <BaseTextLink href={pagesPath.$url()} size={'lg'}>
          size=&quot;lg&quot; TextLink
        </BaseTextLink>
      </dd>
    </dl>
  ),
};
