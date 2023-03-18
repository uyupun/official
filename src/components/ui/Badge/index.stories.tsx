import { ComponentMeta, Story } from '@storybook/react';

import { Badge } from '.';

export default {
  title: 'Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const _Badge: Story = () => {
  return (
    <dl>
      <dt style={{ marginBottom: '8px' }}>color=&quot;blue&quot;</dt>
      <dd style={{ marginBottom: '24px' }}>
        <Badge color="blue">Badge</Badge>
      </dd>
    </dl>
  );
};
