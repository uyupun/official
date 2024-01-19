import { TechnologyBadge as DomainTechnologyBadge } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DomainTechnologyBadge> = {
  title: 'Domain/TechnologyBadge',
  component: DomainTechnologyBadge,
};
export default meta;

type Story = StoryObj<typeof DomainTechnologyBadge>;
export const TechnologyBadge: Story = {
  render: () => (
    <dl>
      <dt style={{ color: 'white', marginBottom: '8px' }}>label=&quot;expo&quot;</dt>
      <dd style={{ marginBottom: '24px' }}>
        <DomainTechnologyBadge label="expo" />
      </dd>
      <dt style={{ color: 'white', marginBottom: '8px' }}>label=&quot;fastApi&quot;</dt>
      <dd style={{ marginBottom: '24px' }}>
        <DomainTechnologyBadge label="fastApi" />
      </dd>
    </dl>
  ),
};
