import clsx from 'clsx';

import { styles } from './styles.css';

import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type BaseProps = {
  /**
   * ボタンの種類
   */
  variant?: 'default' | 'circle';
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

export type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

const Button: FC<ButtonProps> = ({
  variant = 'default',
  className,
  type = 'button',
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        styles.button,
        variant === 'default' ? styles.default : styles.circle,
        className
      )}
    >
      {children}
    </button>
  );
};

export { Button };
