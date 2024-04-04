import { Heading } from '@/components/base/Heading';
import { Text } from '@/components/base/Text';

import { styles } from './styles.css';

import type { FC, ReactNode } from 'react';

type ItemProps = {
  /**
   * タイトル
   */
  title: string;
  /**
   * 説明文
   */
  description: string;
};

const Item: FC<ItemProps> = ({ title, description }) => {
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

type ListProps = {
  /**
   * PhilosophyValues.Itemを1つ以上受け取る
   */
  children: ReactNode;
};

/**
 * compound component用の型
 */
type CompoundType = {
  Item: FC<ItemProps>;
};

const PhilosophyValues: FC<ListProps> & CompoundType = ({ children }) => {
  return (
    <section className={styles.section}>
      <Heading className={styles.heading} tagName="h2">
        Value
      </Heading>
      {children}
    </section>
  );
};

PhilosophyValues.Item = Item;

export { PhilosophyValues };
