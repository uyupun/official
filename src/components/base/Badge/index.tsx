import { styles, type BadgeColor } from './styles.css';

import type { ComponentProps, FC, ReactNode } from 'react';

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

const Badge: FC<BadgeProps> = ({ color, children, ...props }) => {
  return (
    <span {...props} className={styles({ color })}>
      {children}
    </span>
  );
};

export { Badge };
