import { Text as BaseText } from '.';

import type { Meta, StoryObj } from '@storybook/react';

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
        <BaseText fontWeight="bold" tag="p">
          fontWeight=&quot;bold&quot;
        </BaseText>
      </dd>
      <dt style={{ marginBottom: '8px' }}>Font Style</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText tag="p">fontStyle=&quot;normal&quot;</BaseText>
        <BaseText fontStyle="italic" tag="p">
          fontStyle=&quot;italic&quot;
        </BaseText>
      </dd>
      <dt style={{ marginBottom: '8px' }}>Size</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText size="xs" tag="p">
          size=&quot;xs&quot;
        </BaseText>
        <BaseText size="sm" tag="p">
          size=&quot;sm&quot;
        </BaseText>
        <BaseText size="md" tag="p">
          size=&quot;md&quot;
        </BaseText>
        <BaseText size="lg" tag="p">
          size=&quot;lg&quot;
        </BaseText>
        <BaseText size="xl" tag="p">
          size=&quot;xl&quot;
        </BaseText>
      </dd>
      <dt style={{ marginBottom: '8px' }}>Color</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText color="white" tag="p">
          color=&quot;white&quot;
        </BaseText>
        <BaseText color="black" tag="p">
          color=&quot;black&quot;
        </BaseText>
        <BaseText color="red" tag="p">
          color=&quot;red&quot;
        </BaseText>
        <BaseText color="darkGray" tag="p">
          color=&quot;darkGray&quot;
        </BaseText>
      </dd>
    </dl>
  ),
};
