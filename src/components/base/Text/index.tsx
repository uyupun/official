import clsx from 'clsx';

import { type LineHeight } from '@/styles/themes.css';

import { styles, type TextColor, type TextFontStyle, type TextFontWeight } from './styles.css';

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

type TagName = 'span' | 'p' | 'div';

type BaseProps<T extends TagName> = {
  /**
   * テキストのタグ
   */
  tagName?: T;
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
   * テキストの行間
   */
  lineHeight?: LineHeight;
  /**
   * テキストのコンテンツ
   */
  children: ReactNode;
};

type Props<T extends TagName> = BaseProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseProps<T>>;

const Text: FC<Props<TagName>> = ({
  tagName: TagName = 'span',
  fontWeight = 'normal',
  fontStyle = 'normal',
  color = 'white',
  lineHeight = 1.8,
  children,
  className,
  ...rest
}) => {
  const style = styles({
    color,
    fontWeight,
    display: TagName === 'span' ? 'inlineBlock' : 'block',
    fontStyle,
    lineHeight,
  });

  return (
    <TagName className={clsx(style, className)} {...rest}>
      {children}
    </TagName>
  );
};

export { Text };
