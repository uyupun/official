import { PhilosophyValue as DomainPhilosophyValue } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DomainPhilosophyValue> = {
  title: 'Domain/Philosophy/Values',
  component: DomainPhilosophyValue,
};
export default meta;

type Story = StoryObj<typeof DomainPhilosophyValue>;
export const Value: Story = {
  render: () => (
    <DomainPhilosophyValue
      description={
        'お客様に信頼される軸となる安心、安全。そして新たな機会創出に向けて挑戦し続けるUnstoppableな精神。これらの軸を重視したプラットフォームの提供に尽力します。'
      }
      title={'安心、安全、Unstoppable'}
    />
  ),
};
