import { action } from '@storybook/addon-actions';

import { Button as BaseButton } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BaseButton> = {
  title: 'Base/Button',
  component: BaseButton,
};
export default meta;

type Story = StoryObj<typeof BaseButton>;
export const Button: Story = {
  render: () => (
    <dl>
      <dt style={{ color: 'white', marginBottom: '8px' }}>Default</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseButton onClick={action('clicked')} type="button">
          Default Button
        </BaseButton>
      </dd>
      <dt style={{ color: 'white', marginBottom: '8px' }}>Disabled</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseButton disabled onClick={action('clicked')} type="button">
          Disabled Button
        </BaseButton>
      </dd>
    </dl>
  ),
};
