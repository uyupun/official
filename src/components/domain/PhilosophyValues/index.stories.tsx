import { PhilosophyValues as DomainPhilosophyValues } from '.';

import type { Meta, StoryObj } from '@storybook/react';

// componentキーを記述しないことで、PhilosophyValues.Itemの
// ControlにPhilosophyValuesのプロパティ（children）を表示しないようにしている
const meta: Meta = {
  title: 'Domain/PhilosophyValues',
};
export default meta;

type PhilosophyValuesItemStory = StoryObj<typeof DomainPhilosophyValues.Item>;
export const PhilosophyValuesItem: PhilosophyValuesItemStory = {
  render: () => (
    <DomainPhilosophyValues.Item
      description={
        'お客様に信頼される軸となる安心、安全。そして新たな機会創出に向けて挑戦し続けるUnstoppableな精神。これらの軸を重視したプラットフォームの提供に尽力します。'
      }
      title={'安心、安全、Unstoppable'}
    />
  ),
  // argTypesを記述することでControlに表示させる
  argTypes: {
    description: {
      description: '説明文',
      type: 'string',
    },
    title: {
      description: 'タイトル',
      type: 'string',
    },
  },
};

type PhilosophyValuesStory = StoryObj<typeof DomainPhilosophyValues>;
export const PhilosophyValues: PhilosophyValuesStory = {
  render: () => (
    <DomainPhilosophyValues>
      <DomainPhilosophyValues.Item
        description={
          'お客様に信頼される軸となる安心、安全。そして新たな機会創出に向けて挑戦し続けるUnstoppableな精神。これらの軸を重視したプラットフォームの提供に尽力します。'
        }
        title={'安心、安全、Unstoppable'}
      />
      <DomainPhilosophyValues.Item
        description={
          '遊び心やユーモラスな考えは世界を潤し、より鮮明に映し出すと考えています。そのため、我々はおもしろさを追求する『おもしろ帝国』であり続けます。'
        }
        title={'おもしろさファースト'}
      />
      <DomainPhilosophyValues.Item
        description={
          '変革を続ける時代に取り残されないよう、ダイナミックであることが求められています。しかしそれよりももっと大切なことがあります。それは、我々が"お客様"や"お客様のお客様"に感動していただける、ドラマチックな組織であり続けることです。'
        }
        title={'ダイナミックであれ。 ただしその前にドラマチックであれ。'}
      />
      <DomainPhilosophyValues.Item
        description={
          '誰一人として取り残さず、全人類を階層や境界なく、多様性(ダイバーシティ)の心を持って繋ぐことを重視します。'
        }
        title={'ボーダーレス'}
      />
      <DomainPhilosophyValues.Item
        description={
          'より最適化されたプログラム提供のための論理的思考、より革新的なサービスを生み出すための創造的思考、よりリッチな顧客体験を実現するための芸術的思考の3つの思考を持って取り組みます。'
        }
        title={'ロジカル、クリエイティブ、アーティスティック'}
      />
    </DomainPhilosophyValues>
  ),
  // argTypesを記述することでControlに表示させる
  argTypes: {
    children: {
      description: 'PhilosophyValues.Itemを受け取る',
      type: {
        name: 'other',
        value: 'ReactNode',
      },
    },
  },
};
