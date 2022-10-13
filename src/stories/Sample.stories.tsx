import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

const SampleComponent = (props: { title: string }) => <h1>{props.title}</h1>;

export default {
  title: 'Sample',
  component: SampleComponent,
} as ComponentMeta<typeof SampleComponent>;

export const Sample: ComponentStoryObj<typeof SampleComponent> = {
  args: {
    title: 'タイトル',
  },
};
