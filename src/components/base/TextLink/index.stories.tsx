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
      <dt>Default</dt>
      <dd style={{ marginBottom: '16px' }}>
        <BaseTextLink href={pagesPath.$url()}>Default TextLink</BaseTextLink>
      </dd>
      <dt>target=&quot;_blank&quot;</dt>
      <dd style={{ marginBottom: '16px' }}>
        <BaseTextLink href={pagesPath.$url()} target={'_blank'}>
          target=&quot;_blank&quot; TextLink
        </BaseTextLink>
      </dd>
    </dl>
  ),
};
