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
      <dt style={{ color: 'white', marginBottom: '8px' }}>Tag Name</dt>
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
      <dt style={{ color: 'white', marginBottom: '8px' }}>Line Height</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText lineHeight={1} tagName="p">
          lineHeight=&#123;1&#125;
        </BaseText>
        <BaseText lineHeight={1.3} tagName="p">
          lineHeight=&#123;1.3&#125;
        </BaseText>
        <BaseText lineHeight={1.8} tagName="p">
          lineHeight=&#123;1.8&#125;
        </BaseText>
      </dd>
      <dt style={{ color: 'white', marginBottom: '8px' }}>Font Size</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText fontSize={{ mobile: 10, desktop: 10 }} tagName="p">
          fontSize=&#123;&#123;mobile: 10, desktop: 10&#125;&#125;
        </BaseText>
        <BaseText fontSize={{ mobile: 14, desktop: 14 }} tagName="p">
          fontSize=&#123;&#123;mobile: 14, desktop: 14&#125;&#125;
        </BaseText>
        <BaseText fontSize={{ mobile: 16, desktop: 16 }} tagName="p">
          fontSize=&#123;&#123;mobile: 16, desktop: 16&#125;&#125;
        </BaseText>
        <BaseText fontSize={{ mobile: 18, desktop: 18 }} tagName="p">
          fontSize=&#123;&#123;mobile: 18, desktop: 18&#125;&#125;
        </BaseText>
        <BaseText fontSize={{ mobile: 20, desktop: 20 }} tagName="p">
          fontSize=&#123;&#123;mobile: 20, desktop: 20&#125;&#125;
        </BaseText>
        <BaseText fontSize={{ mobile: 20, desktop: 24 }} tagName="p">
          fontSize=&#123;&#123;mobile: 20, desktop: 24&#125;&#125;
        </BaseText>
        <BaseText fontSize={{ mobile: 20, desktop: 32 }} tagName="p">
          fontSize=&#123;&#123;mobile: 20, desktop: 32&#125;&#125;
        </BaseText>
        <BaseText fontSize={{ mobile: 20, desktop: 36 }} tagName="p">
          fontSize=&#123;&#123;mobile: 20, desktop: 36&#125;&#125;
        </BaseText>
      </dd>
    </dl>
  ),
};
