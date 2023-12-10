import { TechnologyBadge as CaseTechnologyBadge } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CaseTechnologyBadge> = {
  title: 'Case/TechnologyBadge',
  component: CaseTechnologyBadge,
};
export default meta;

type Story = StoryObj<typeof CaseTechnologyBadge>;
export const TechnologyBadge: Story = {
  render: () => (
    <dl>
      <dt style={{ marginBottom: '8px' }}>label=&quot;expo&quot;</dt>
      <dd style={{ marginBottom: '24px' }}>
        <CaseTechnologyBadge label="expo" />
      </dd>
      <dt style={{ marginBottom: '8px' }}>label=&quot;fastApi&quot;</dt>
      <dd style={{ marginBottom: '24px' }}>
        <CaseTechnologyBadge label="fastApi" />
      </dd>
    </dl>
  ),
};
