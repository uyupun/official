import StarIcon from '@mui/icons-material/Star';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { styles } from './sample.css';

const SampleComponent = (props: { title: string }) => (
  <h1 className={styles.title}>
    <StarIcon sx={{ fontSize: 40 }} />
    {props.title}
  </h1>
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
