import { Label as BaseLabel } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BaseLabel> = {
  title: 'Base/Label',
  component: BaseLabel,
};
export default meta;

type Story = StoryObj<typeof BaseLabel>;
export const Label: Story = {
  render: () => (
    <dl>
      <dt style={{ color: 'white', marginBottom: '8px' }}>Default</dt>
      <dd style={{ color: 'white', marginBottom: '24px' }}>
        <BaseLabel text="Required label" />
      </dd>
      <dt style={{ color: 'white', marginBottom: '8px' }}>Not required</dt>
      <dd style={{ color: 'white', marginBottom: '24px' }}>
        <BaseLabel isRequired={false} text="Not required label" />
      </dd>
      <dt style={{ color: 'white', marginBottom: '8px' }}>Form</dt>
      <dd style={{ color: 'white', marginBottom: '24px' }}>
        <BaseLabel text="textbox 1">
          <input aria-required style={{ marginLeft: '16px' }} type="text" />
        </BaseLabel>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
          <BaseLabel htmlFor="textbox2" text="textbox 2" />
          <input aria-required id="textbox2" type="text" />
        </div>
      </dd>
    </dl>
  ),
};
