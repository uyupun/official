import clsx from 'clsx';

import { styles, type TextColor, type TextFontStyle, type TextFontWeight } from './styles.css';

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

type TagName = 'span' | 'p' | 'div';

type BaseProps<T extends TagName> = {
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

type Props<T extends TagName> = BaseProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseProps<T>>;

const Text: FC<Props<TagName>> = ({
  tag: Tag = 'span',
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
    display: Tag === 'span' ? 'inlineBlock' : 'block',
    fontStyle,
  });

  return (
    <Tag className={clsx(style, className)} {...rest}>
      {children}
    </Tag>
  );
};

export { Text };
