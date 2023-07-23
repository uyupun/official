import { action } from '@storybook/addon-actions';

import { CloseIcon } from '@/components/base/Icons';

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
      <dt style={{ marginBottom: '8px' }}>Default</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseButton type="button" onClick={action('clicked')}>
          Default Button
        </BaseButton>
      </dd>
      <dt style={{ marginBottom: '8px' }}>Disabled</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseButton type="button" disabled onClick={action('clicked')}>
          Disabled Button
        </BaseButton>
      </dd>
      <dt style={{ marginBottom: '8px' }}>Circle</dt>
      <BaseButton type="button" variant="circle" aria-label="閉じる" onClick={action('clicked')}>
        <CloseIcon fill="white" />
      </BaseButton>
    </dl>
  ),
};
