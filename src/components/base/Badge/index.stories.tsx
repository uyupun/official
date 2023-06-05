import { ComponentMeta, Story } from '@storybook/react';

import { Badge as BaseBadge } from '.';

export default {
  title: 'Base/Badge',
  component: BaseBadge,
} as ComponentMeta<typeof BaseBadge>;

export const Badge: Story = () => {
  return (
    <dl>
      <dt style={{ marginBottom: '8px' }}>color=&quot;blue&quot;</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseBadge color="blue">Badge</BaseBadge>
      </dd>
    </dl>
  );
};
