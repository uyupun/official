import clsx from 'clsx';

import { styles } from './styles.css';

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

type TagName = 'h1' | 'h2';

type BaseProps<T extends TagName> = {
  /**
   * 見出しのタグ
   */
  tagName?: T;
  /**
   * 見出しのコンテンツ
   */
  children: ReactNode;
};

type Props<T extends TagName> = BaseProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseProps<T>>;

const Heading: FC<Props<TagName>> = ({ tagName: TagName = 'h1', children, className, ...rest }) => {
  return (
    <TagName className={clsx(styles.common, styles[TagName], className)} {...rest}>
      {children}
    </TagName>
  );
};

export { Heading };
