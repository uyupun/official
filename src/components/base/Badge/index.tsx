import clsx from 'clsx';

import { styles } from './styles.css';

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

type BaseProps = {
  /**
   * バッジのコンテンツ
   */
  children: ReactNode;
};

type Props = BaseProps & Omit<ComponentPropsWithoutRef<'span'>, keyof BaseProps>;

const Badge: FC<Props> = ({ children, className, ...props }) => {
  return (
    <span {...props} className={clsx(styles.badge, className)}>
      {children}
    </span>
  );
};

export { Badge };
