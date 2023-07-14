import { Meta, StoryObj } from '@storybook/react';

import { Heading as BaseHeading } from '.';

const meta: Meta<typeof BaseHeading> = {
  title: 'Base/Heading',
  component: BaseHeading,
};
export default meta;

type Story = StoryObj<typeof BaseHeading>;
export const Heading: Story = {
  render: () => (
    <div>
      <BaseHeading>Heading level 1</BaseHeading>
      <BaseHeading tag="h2">Heading level 2</BaseHeading>
    </div>
  ),
};
