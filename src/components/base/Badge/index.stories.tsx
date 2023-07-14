import { Meta, StoryObj } from '@storybook/react';

import { Badge as BaseBadge } from '.';

const meta: Meta<typeof BaseBadge> = {
  title: 'Base/Badge',
  component: BaseBadge,
};
export default meta;

type Story = StoryObj<typeof BaseBadge>;
export const Badge: Story = {
  render: () => (
    <dl>
      <dt style={{ marginBottom: '8px' }}>color=&quot;blue&quot;</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseBadge color="blue">Badge</BaseBadge>
      </dd>
    </dl>
  ),
};
