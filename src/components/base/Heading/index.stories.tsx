import { ComponentMeta, Story } from '@storybook/react';

import { Heading as BaseHeading } from '.';

export default {
  title: 'Base',
  component: BaseHeading,
} as ComponentMeta<typeof BaseHeading>;

export const Heading: Story = () => {
  return (
    <div>
      <BaseHeading>Heading level 1</BaseHeading>
      <BaseHeading tag="h2">Heading level 2</BaseHeading>
    </div>
  );
};
