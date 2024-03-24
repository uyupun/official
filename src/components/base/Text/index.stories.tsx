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
      <dt style={{ color: 'white', marginBottom: '8px' }}>Tag</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText>tagName=&quot;span&quot;</BaseText>
        <BaseText tagName="p">tagName=&quot;p&quot;</BaseText>
        <BaseText tagName="div">tagName=&quot;div&quot;</BaseText>
      </dd>
      <dt style={{ color: 'white', marginBottom: '8px' }}>Font Weight</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText tagName="p">fontWeight=&quot;normal&quot;</BaseText>
        <BaseText fontWeight="bold" tagName="p">
          fontWeight=&quot;bold&quot;
        </BaseText>
      </dd>
      <dt style={{ color: 'white', marginBottom: '8px' }}>Font Style</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText tagName="p">fontStyle=&quot;normal&quot;</BaseText>
        <BaseText fontStyle="italic" tagName="p">
          fontStyle=&quot;italic&quot;
        </BaseText>
      </dd>
      <dt style={{ color: 'white', marginBottom: '8px' }}>Color</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText color="white" tagName="p">
          color=&quot;white&quot;
        </BaseText>
        <BaseText color="red" tagName="p">
          color=&quot;red&quot;
        </BaseText>
        <BaseText color="lightGray" tagName="p">
          color=&quot;lightGray&quot;
        </BaseText>
      </dd>
    </dl>
  ),
};
