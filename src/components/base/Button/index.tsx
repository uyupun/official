import clsx from 'clsx';

import { styles } from './styles.css';

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

type BaseProps = {
  /**
   * スタイルの拡張
   *
   * @example
   * import { style } from '@vanilla-extract/css';
   * const styles = {
   *   wide: style({ width: '100%' }),
   * }
   *
   * <Button className={styles.wide}>wide button</Button>
   */
  className?: string;
  /**
   * ボタンのコンテンツ
   */
  children: ReactNode;
};

type Props = BaseProps & Omit<ComponentPropsWithoutRef<'button'>, keyof BaseProps>;

const Button: FC<Props> = ({ className, type = 'button', children, ...props }) => {
  return (
    <button {...props} className={clsx(styles.button, className)} type={type}>
      {children}
    </button>
  );
};

export { Button };
