import { action } from '@storybook/addon-actions';
import { ComponentMeta, Story } from '@storybook/react';

import { CloseIcon } from '../../../assets/icons/';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const _Button: Story = () => {
  return (
    <dl>
      <dt style={{ marginBottom: '8px' }}>Default</dt>
      <dd style={{ marginBottom: '24px' }}>
        <Button type="button" onClick={action('clicked')}>
          Default Button
        </Button>
      </dd>
      <dt style={{ marginBottom: '8px' }}>Disabled</dt>
      <dd style={{ marginBottom: '24px' }}>
        <Button type="button" disabled onClick={action('clicked')}>
          Disabled Button
        </Button>
      </dd>
      <dt style={{ marginBottom: '8px' }}>Circle</dt>
      <CloseIcon type="button" onClick={action('clicked')} />
    </dl>
  );
};
