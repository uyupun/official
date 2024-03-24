import clsx from 'clsx';

import { type LineHeight } from '@/styles/themes.css';

import {
  styles,
  type TextColor,
  type TextFontSizeDesktop,
  type TextFontSizeMobile,
  type TextFontStyle,
  type TextFontWeight,
} from './styles.css';

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

type TagName = 'span' | 'p' | 'div';

type FontSize = {
  mobile: TextFontSizeMobile;
  desktop: TextFontSizeDesktop;
};

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
   * テキストのフォントサイズ
   */
  fontSize?: FontSize;
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
  fontSize = {
    mobile: 14,
    desktop: 16,
  },
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
    fontSizeMobile: fontSize.mobile,
    fontSizeDesktop: fontSize.desktop,
  });

  return (
    <TagName className={clsx(style, className)} {...rest}>
      {children}
    </TagName>
  );
};

export { Text };
