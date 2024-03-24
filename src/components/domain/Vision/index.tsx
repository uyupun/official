import { Heading } from '@/components/base/Heading';
import { Text } from '@/components/base/Text';

import { styles } from './styles.css';

import type { FC } from 'react';

type Props = {
  /**
   * ビジョン
   */
  vision: string;
  /**
   * ビジョンの説明
   */
  description: string;
};

const Vision: FC<Props> = ({ vision, description }) => {
  return (
    <section className={styles.section}>
      <Heading className={styles.heading} tagName="h2">
        Vision
      </Heading>
      <p className={styles.vision}>
        <strong className={styles.strong}>{vision}</strong>
      </p>
      <Text className={styles.description} tagName="p">
        {description}
      </Text>
    </section>
  );
};

export { Vision };
