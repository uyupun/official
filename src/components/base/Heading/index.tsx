import clsx from 'clsx';
import { ReactNode } from 'react';

import { styles } from './styles.css';

export type HeadingProps = {
  /**
   * 見出しのタグ
   */
  tag?: 'h1' | 'h2';
  /**
   * 見出しのコンテンツ
   */
  children: ReactNode;
};

const Heading = ({ tag = 'h1', children }: HeadingProps) => {
  switch (tag) {
    case 'h1':
      return <h1 className={clsx(styles.common, styles.h1)}>{children}</h1>;
    case 'h2':
      return <h2 className={clsx(styles.common, styles.h2)}>{children}</h2>;
  }
};

export { Heading };
