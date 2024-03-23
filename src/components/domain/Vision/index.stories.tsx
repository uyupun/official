import { Vision as DomainVision } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DomainVision> = {
  title: 'Domain/Vision',
  component: DomainVision,
};
export default meta;

type Story = StoryObj<typeof DomainVision>;
export const Vision: Story = {
  render: () => (
    <DomainVision
      description="クリック一つで求める情報にアクセスできる時代は到来しました。これからの時代に求められるのは、スワイプ一つでいかに高い顧客体験を提供できるか、だと確信しています。"
      vision="スワイプ一つで笑みが溢れる世界"
    />
  ),
};
