import { Heading } from '@/components/base/Heading';
import { Text } from '@/components/base/Text';

import { styles } from './styles.css';

import type { FC } from 'react';

type Props = {
  /**
   * ビジョンのタイトル
   */
  title: string;
  /**
   * ビジョンの説明
   */
  description: string;
};

const Vision: FC<Props> = ({ title, description }) => {
  return (
    <section className={styles.section}>
      <Heading className={styles.heading} tagName="h2">
        Vision
      </Heading>
      <Text className={styles.title} tagName="p">
        <strong className={styles.strong}>{title}</strong>
      </Text>
      <Text className={styles.description} tagName="p">
        {description}
      </Text>
    </section>
  );
};

export { Vision };
