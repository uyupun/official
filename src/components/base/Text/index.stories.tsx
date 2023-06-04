import { ComponentMeta, Story } from '@storybook/react';

import { Text as BaseText } from '.';

export default {
  title: 'Base/Text',
  component: BaseText,
} as ComponentMeta<typeof BaseText>;

export const Text: Story = () => {
  const fontSizeDefinition = 'fontSize={{ mobile: 18, desktop: 24 }}';

  return (
    <dl>
      <dt style={{ marginBottom: '8px' }}>Default</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText>Default span</BaseText>
        <BaseText tag="p">Default paragraph</BaseText>
        <BaseText tag="div">Default div</BaseText>
      </dd>
      <dt style={{ marginBottom: '8px' }}>fontWeight=&quot;bold&quot;</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText fontWeight="bold">fontWeight=&quot;bold&quot; span</BaseText>
        <BaseText tag="p" fontWeight="bold">
          fontWeight=&quot;bold&quot; paragraph
        </BaseText>
        <BaseText tag="div" fontWeight="bold">
          fontWeight=&quot;bold&quot; div
        </BaseText>
      </dd>
      <dt style={{ marginBottom: '8px' }}>{fontSizeDefinition}</dt>
      <dd style={{ marginBottom: '24px' }}>
        <BaseText fontSize={{ mobile: 18, desktop: 24 }}>{fontSizeDefinition} span</BaseText>
        <BaseText tag="p" fontSize={{ mobile: 18, desktop: 24 }}>
          {fontSizeDefinition} paragraph
        </BaseText>
        <BaseText tag="div" fontSize={{ mobile: 18, desktop: 24 }}>
          {fontSizeDefinition} div
        </BaseText>
      </dd>
    </dl>
  );
};
