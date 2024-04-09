import { Text } from '@/components/base/Text';

import { styles } from './styles.css';

import type { FC } from 'react';

type Props = {
  /**
   * タイトル
   */
  title: string;
  /**
   * 説明文
   */
  description: string;
};

const PhilosophyValue: FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.itemContainer}>
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
  );
};

export { PhilosophyValue };
