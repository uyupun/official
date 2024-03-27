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
      <Heading className={styles.heading} tagName="h2">
        Value
      </Heading>
      {values.map(({ title, description }) => (
        <div className={styles.valueContainer} key={title}>
          <Text
            className={styles.title}
            fontSize={{ mobile: 18, desktop: 24 }}
            lineHeight={1.3}
            tagName="p"
          >
            <strong className={styles.strong}>{title}</strong>
          </Text>
          <Text className={styles.description} tagName="p">
            {description}
          </Text>
        </div>
      ))}
    </section>
  );
};

export { Value };
