import clsx from 'clsx';

import { styles } from './styles.css';

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

type TagName = 'h1' | 'h2';

type BaseProps<T extends TagName> = {
  /**
   * 見出しのタグ
   */
  tag?: T;
  /**
   * 見出しのコンテンツ
   */
  children: ReactNode;
};

type Props<T extends TagName> = BaseProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseProps<T>>;

const Heading: FC<Props<TagName>> = ({ tag: Tag = 'h1', children, className, ...rest }) => {
  return (
    <Tag className={clsx(styles.common, styles[Tag], className)} {...rest}>
      {children}
    </Tag>
  );
};

export { Heading };
