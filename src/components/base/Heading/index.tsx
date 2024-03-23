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
  const Component = tag;
  return (
    <Component className={clsx(styles.common, styles[tag], className)} {...rest}>
      {children}
    </Component>
  );
};

export { Heading };
