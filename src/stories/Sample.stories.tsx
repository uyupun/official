import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { styles } from './sample.css';

const SampleComponent = (props: { title: string }) => (
  <h1 className={styles.title}>{props.title}</h1>
);

export default {
  title: 'Sample',
  component: SampleComponent,
} as ComponentMeta<typeof SampleComponent>;

export const Sample: ComponentStoryObj<typeof SampleComponent> = {
  args: {
    title: 'タイトル',
  },
};
