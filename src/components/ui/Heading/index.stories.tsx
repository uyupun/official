import { ComponentMeta, Story } from '@storybook/react';

import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const _Heading: Story = () => {
  return (
    <div>
      <Heading>Heading level 1</Heading>
      <Heading tag="h2">Heading level 2</Heading>
    </div>
  );
};
