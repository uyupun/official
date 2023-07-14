import { Meta, StoryObj } from '@storybook/react';

import { Label as BaseLabel } from '.';

const meta: Meta<typeof BaseLabel> = {
  title: 'Base/Label',
  component: BaseLabel,
};
export default meta;

type Story = StoryObj<typeof BaseLabel>;
export const Label: Story = {
  render: () => (
    <dl>
      <dt style={{ marginBottom: '8px' }}>Default</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseLabel>Required label</BaseLabel>
      </dd>
      <dt style={{ marginBottom: '8px' }}>Not required</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseLabel isRequired={false}>Not required label</BaseLabel>
      </dd>
    </dl>
  ),
};
