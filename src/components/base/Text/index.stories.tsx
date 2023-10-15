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
        <BaseText fontSize={{ mobile: 10, desktop: 12 }} tag="p">
          {'fontSize={{ mobile: 10, desktop: 12 }}'}
        </BaseText>
        <BaseText fontSize={{ mobile: 12, desktop: 14 }} tag="p">
          {'fontSize={{ mobile: 12, desktop: 14 }}'}
        </BaseText>
        <BaseText fontSize={{ mobile: 14, desktop: 16 }} tag="p">
          {'fontSize={{ mobile: 14, desktop: 16 }}'}
        </BaseText>
        <BaseText fontSize={{ mobile: 16, desktop: 18 }} tag="p">
          {'fontSize={{ mobile: 16, desktop: 18 }}'}
        </BaseText>
        <BaseText fontSize={{ mobile: 18, desktop: 20 }} tag="p">
          {'fontSize={{ mobile: 18, desktop: 20 }}'}
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
