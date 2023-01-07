import { Close } from '@mui/icons-material';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, Story } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const _Button: Story = () => {
  return (
    <dl>
      <dt>Default</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Button type="button" onClick={action('clicked')}>
          Default Button
        </Button>
      </dd>
      <dt>Disabled</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Button type="button" disabled onClick={action('clicked')}>
          Disabled Button
        </Button>
      </dd>
      <dt>Circle</dt>
      <dd style={{ marginBottom: '16px' }}>
        <Button type="button" variant="circle" onClick={action('clicked')}>
          {/* TODO: アイコンコンポーネントに置き換える */}
          <Close sx={{ fontSize: 24 }} />
        </Button>
      </dd>
    </dl>
  );
};
