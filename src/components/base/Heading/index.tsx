import clsx from 'clsx';

import { styles } from './styles.css';

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

type Tag = 'h1' | 'h2';

type BaseProps<T extends Tag> = {
  /**
   * 見出しのタグ
   */
  tag?: T;
  /**
   * 見出しのコンテンツ
   */
  children: ReactNode;
};

type Props<T extends Tag> = BaseProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BaseProps<T>>;

const Heading: FC<Props<Tag>> = ({ tag = 'h1', children, className, ...rest }) => {
  const Component = tag;
  return (
    <Component className={clsx(styles.common, styles[tag], className)} {...rest}>
      {children}
    </Component>
  );
};

export { Heading };
