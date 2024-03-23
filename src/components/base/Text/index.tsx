import clsx from 'clsx';

import { styles, type TextColor, type TextFontStyle, type TextFontWeight } from './styles.css';

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

type Tag = 'span' | 'p' | 'div';

type BaseProps<T extends Tag> = {
  /**
   * テキストのタグ
   */
  tag?: T;
  /**
   * テキストの太さ
   */
  fontWeight?: TextFontWeight;
  /**
   * テキストのスタイル
   */
  fontStyle?: TextFontStyle;
  /**
   * テキストのカラー
   */
  color?: TextColor;
  /**
   * テキストのコンテンツ
   */
  children: ReactNode;
};

type Props<T extends Tag> = BaseProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BaseProps<T>>;

const Text: FC<Props<Tag>> = ({
  tag = 'span',
  fontWeight = 'normal',
  fontStyle = 'normal',
  color = 'white',
  children,
  className,
  ...rest
}) => {
  const style = styles({
    color,
    fontWeight,
    display: tag === 'span' ? 'inlineBlock' : 'block',
    fontStyle,
  });

  switch (tag) {
    case 'span':
      return (
        <span className={clsx(style, className)} {...rest}>
          {children}
        </span>
      );
    case 'p':
      return (
        <p className={clsx(style, className)} {...rest}>
          {children}
        </p>
      );
    case 'div':
      return (
        <div className={clsx(style, className)} {...rest}>
          {children}
        </div>
      );
  }
};

export { Text };
