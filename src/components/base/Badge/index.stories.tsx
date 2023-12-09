import { Badge as BaseBadge } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BaseBadge> = {
  title: 'Base/Badge',
  component: BaseBadge,
};
export default meta;

type Story = StoryObj<typeof BaseBadge>;
export const Badge: Story = {
  render: () => (
    <dl>
      <dt style={{ marginBottom: '8px' }}>label=&quot;Expo&quot;</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseBadge label="Expo"></BaseBadge>
      </dd>
      <dt style={{ marginBottom: '8px' }}>label=&quot;FastApi&quot;</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseBadge label="FastApi"></BaseBadge>
      </dd>
    </dl>
  ),
};
