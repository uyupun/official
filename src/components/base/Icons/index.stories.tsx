import * as Icons from '.';

import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';

const IconList: FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {Object.entries(Icons).map(([iconName, IconComponent], index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconComponent fill="white" />
          <div style={{ color: 'white' }}>{iconName}</div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof IconList> = {
  title: 'Base/Icon',
  component: IconList,
};
export default meta;

type Story = StoryObj<typeof IconList>;
export const Icon: Story = {
  render: () => <IconList />,
};
