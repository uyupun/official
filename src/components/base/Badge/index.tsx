import { styles, type BadgeColor } from './styles.css';

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

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

type Props = BaseProps & Omit<ComponentPropsWithoutRef<'span'>, keyof BaseProps>;

const Badge: FC<Props> = ({ color, children, ...props }) => {
  return (
    <span {...props} className={styles({ color })}>
      {children}
    </span>
  );
};

export { Badge };
