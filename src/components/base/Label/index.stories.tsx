import { ComponentMeta, Story } from '@storybook/react';

import { Label as BaseLabel } from '.';

export default {
  title: 'Base',
  component: BaseLabel,
} as ComponentMeta<typeof BaseLabel>;

export const Label: Story = () => {
  return (
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
  );
};
