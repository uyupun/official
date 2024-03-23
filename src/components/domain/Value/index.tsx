import { Heading } from '@/components/base/Heading';
import { Text } from '@/components/base/Text';

import { styles } from './styles.css';

import type { FC } from 'react';

type ValueItem = {
  title: string;
  description: string;
};

type Props = {
  /**
   * バリューと説明の配列
   */
  values: ValueItem[];
};

const Value: FC<Props> = ({ values }) => {
  return (
    <section className={styles.section}>
      <Heading className={styles.heading} tag="h2">
        Value
      </Heading>
      {values.map(({ title, description }, index) => (
        <div className={styles.valueContainer} key={title}>
          <p className={styles.value}>
            <strong className={styles.strong}>{title}</strong>
          </p>
          <Text className={styles.description} tag="p">
            {description}
          </Text>
        </div>
      ))}
    </section>
  );
};

export { Value };
