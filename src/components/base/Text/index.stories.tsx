import { Meta, StoryObj } from '@storybook/react';

import { Text as BaseText } from '.';

const meta: Meta<typeof BaseText> = {
  title: 'Base/Text',
  component: BaseText,
};
export default meta;

type Story = StoryObj<typeof BaseText>;
export const Text: Story = {
  render: () => (
    <dl>
      <dt style={{ marginBottom: '8px' }}>Tag</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText>tag=&quot;span&quot;</BaseText>
        <BaseText tag="p">tag=&quot;p&quot;</BaseText>
        <BaseText tag="div">tag=&quot;div&quot;</BaseText>
      </dd>
      <dt style={{ marginBottom: '8px' }}>Font Weight</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText tag="p">fontWeight=&quot;normal&quot;</BaseText>
        <BaseText tag="p" fontWeight="bold">
          fontWeight=&quot;bold&quot;
        </BaseText>
      </dd>
      <dt style={{ marginBottom: '8px' }}>Size</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText tag="p" size="xs">
          size=&quot;xs&quot;
        </BaseText>
        <BaseText tag="p" size="sm">
          size=&quot;sm&quot;
        </BaseText>
        <BaseText tag="p" size="md">
          size=&quot;md&quot;
        </BaseText>
        <BaseText tag="p" size="lg">
          size=&quot;lg&quot;
        </BaseText>
        <BaseText tag="p" size="xl">
          size=&quot;xl&quot;
        </BaseText>
      </dd>
      <dt style={{ marginBottom: '8px' }}>Color</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText tag="p" color="white">
          color=&quot;white&quot;
        </BaseText>
        <BaseText tag="p" color="black">
          color=&quot;black&quot;
        </BaseText>
        <BaseText tag="p" color="red">
          color=&quot;red&quot;
        </BaseText>
        <BaseText tag="p" color="darkGray">
          color=&quot;darkGray&quot;
        </BaseText>
      </dd>
    </dl>
  ),
};
