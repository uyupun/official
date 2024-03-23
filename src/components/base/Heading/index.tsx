import clsx from 'clsx';

import { styles } from './styles.css';

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

type Props<T extends 'h1' | 'h2'> = {
  /**
   * 見出しのタグ
   */
  tag?: T;
  /**
   * 見出しのコンテンツ
   */
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'tag' | 'children'>;

const Heading: FC<Props<'h1' | 'h2'>> = ({ tag = 'h1', children, className, ...rest }) => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={clsx(styles.common, styles.h1, className)} {...rest}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={clsx(styles.common, styles.h2, className)} {...rest}>
          {children}
        </h2>
      );
  }
};

export { Heading };
