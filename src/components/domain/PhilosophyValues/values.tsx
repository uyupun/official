import { Heading } from '@/components/base/Heading';

import { styles } from './styles.css';
import { PhilosophyValue } from './value';

import type { ComponentProps, FC } from 'react';

type Props = {
  /**
   * タイトルと説明文を保持する配列
   */
  values: Array<ComponentProps<typeof PhilosophyValue>>;
};

const PhilosophyValues: FC<Props> = ({ values }) => {
  return (
    <section className={styles.section}>
      <Heading className={styles.heading} tagName="h2">
        Value
      </Heading>
      {values.map((value) => (
        <PhilosophyValue description={value.description} key={value.title} title={value.title} />
      ))}
    </section>
  );
};

export { PhilosophyValues };
