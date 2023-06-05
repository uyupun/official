import { ComponentMeta, Story } from '@storybook/react';

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

export default {
  title: 'Base/Icon',
  component: IconList,
} as ComponentMeta<typeof IconList>;

export const Icon: Story = () => <IconList />;
