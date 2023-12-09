import { Badge as BaseBadge } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BaseBadge> = {
  title: 'Base/Badge',
  component: BaseBadge,
};
export default meta;

type Story = StoryObj<typeof BaseBadge>;
export const Badge: Story = {
  render: () => <BaseBadge>Badge</BaseBadge>,
};
