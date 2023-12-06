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
      <dt style={{ marginBottom: '8px' }}>color=&quot;expo&quot;</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseBadge color="expo">Expo</BaseBadge>
      </dd>
      <dt style={{ marginBottom: '8px' }}>color=&quot;fastApi&quot;</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseBadge color="fastApi">FastAPI</BaseBadge>
      </dd>
    </dl>
  ),
};
