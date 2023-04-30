import { ComponentMeta, Story } from '@storybook/react';

import * as Icons from '.';

const { ...icons } = Icons;

const IconList = () => {
  const iconComponents = Object.keys(icons).map((icon) => icons[icon as keyof typeof icons]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {iconComponents.map((IconComponent, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconComponent />
          <div>{Object.keys(icons)[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Icon',
  component: IconList,
} as ComponentMeta<typeof IconList>;

export const _Icon: Story = () => <IconList />;
