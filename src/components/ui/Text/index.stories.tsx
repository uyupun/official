import { ComponentMeta, Story } from '@storybook/react';

import { Text } from '.';

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const _Text: Story = () => {
  const fontSizeDefinition = 'fontSize={{ mobile: 18, desktop: 24 }}';

  return (
    <dl>
      <dt style={{ marginBottom: '8px' }}>Default</dt>
      <dd style={{ marginBottom: '24px' }}>
        <Text>Default span</Text>
        <Text tag="p">Default paragraph</Text>
        <Text tag="div">Default div</Text>
      </dd>
      <dt style={{ marginBottom: '8px' }}>fontWeight=&quot;bold&quot;</dt>
      <dd style={{ marginBottom: '24px' }}>
        <Text fontWeight="bold">fontWeight=&quot;bold&quot; span</Text>
        <Text tag="p" fontWeight="bold">
          fontWeight=&quot;bold&quot; paragraph
        </Text>
        <Text tag="div" fontWeight="bold">
          fontWeight=&quot;bold&quot; div
        </Text>
      </dd>
      <dt style={{ marginBottom: '8px' }}>{fontSizeDefinition}</dt>
      <dd style={{ marginBottom: '24px' }}>
        <Text fontSize={{ mobile: 18, desktop: 24 }}>{fontSizeDefinition} span</Text>
        <Text tag="p" fontSize={{ mobile: 18, desktop: 24 }}>
          {fontSizeDefinition} paragraph
        </Text>
        <Text tag="div" fontSize={{ mobile: 18, desktop: 24 }}>
          {fontSizeDefinition} div
        </Text>
      </dd>
    </dl>
  );
};
