import { PhilosophyValues as DomainPhilosophyValues } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DomainPhilosophyValues> = {
  title: 'Domain/Philosophy/Values',
  component: DomainPhilosophyValues,
};
export default meta;

type Story = StoryObj<typeof DomainPhilosophyValues>;
export const Values: Story = {
  render: () => (
    <DomainPhilosophyValues
      values={[
        {
          title: '安心、安全、Unstoppable',
          description:
            'お客様に信頼される軸となる安心、安全。そして新たな機会創出に向けて挑戦し続けるUnstoppableな精神。これらの軸を重視したプラットフォームの提供に尽力します。',
        },
        {
          title: 'おもしろさファースト',
          description:
            '遊び心やユーモラスな考えは世界を潤し、より鮮明に映し出すと考えています。そのため、我々はおもしろさを追求する『おもしろ帝国』であり続けます。',
        },
        {
          title: 'ダイナミックであれ。 ただしその前にドラマチックであれ。',
          description:
            '変革を続ける時代に取り残されないよう、ダイナミックであることが求められています。しかしそれよりももっと大切なことがあります。それは、我々が"お客様"や"お客様のお客様"に感動していただける、ドラマチックな組織であり続けることです。',
        },
        {
          title: 'ボーダーレス',
          description:
            '誰一人として取り残さず、全人類を階層や境界なく、多様性(ダイバーシティ)の心を持って繋ぐことを重視します。',
        },
        {
          title: 'ロジカル、クリエイティブ、アーティスティック',
          description:
            'より最適化されたプログラム提供のための論理的思考、より革新的なサービスを生み出すための創造的思考、よりリッチな顧客体験を実現するための芸術的思考の3つの思考を持って取り組みます。',
        },
      ]}
    />
  ),
};
