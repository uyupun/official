import { ComponentProps, ReactNode } from 'react';

import { BadgeColor, styles } from './styles.css';

type BaseProps = {
  /**
   * バッジのカラー
   */
  color: BadgeColor;
  /**
   * バッジのコンテンツ
   */
  children: ReactNode;
};

export type BadgeProps = BaseProps & Omit<ComponentProps<'span'>, keyof BaseProps>;

const Badge = ({ color, children, ...props }: BadgeProps) => {
  return (
    <span {...props} className={styles({ color })}>
      {children}
    </span>
  );
};

export { Badge };
