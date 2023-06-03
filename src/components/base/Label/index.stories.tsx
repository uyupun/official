import { ComponentMeta, Story } from '@storybook/react';

import { Label } from '.';

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>;

export const _Label: Story = () => {
  return (
    <dl>
      <dt style={{ marginBottom: '8px' }}>Default</dt>
      <dd style={{ marginBottom: '24px' }}>
        <Label>Required label</Label>
      </dd>
      <dt style={{ marginBottom: '8px' }}>Not required</dt>
      <dd style={{ marginBottom: '24px' }}>
        <Label isRequired={false}>Not required label</Label>
      </dd>
    </dl>
  );
};
