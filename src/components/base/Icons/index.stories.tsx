import { Meta, StoryObj } from '@storybook/react';

import * as Icons from '.';

const IconList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {Object.entries(Icons).map(([iconName, IconComponent], index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconComponent />
          <div>{iconName}</div>
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
