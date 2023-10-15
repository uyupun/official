import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';

import { vars, type FontSize } from '@/styles/themes.css';

import {
  baseStyles,
  recipeStyles,
  themeVars,
  type TextColor,
  type TextFontStyle,
  type TextFontWeight,
} from './styles.css';

import type { FC, ReactNode } from 'react';

type Props = {
  /**
   * テキストのタグ
   */
  tag?: 'span' | 'p' | 'div';
  /**
   * テキストのサイズ
   */
  fontSize?: {
    mobile: FontSize;
    desktop: FontSize;
  };
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

const Text: FC<Props> = ({
  tag = 'span',
  fontSize = {
    mobile: 14,
    desktop: 16,
  },
  fontWeight = 'normal',
  fontStyle = 'normal',
  color = 'black',
  children,
}) => {
  const recipeClassName = recipeStyles({
    color,
    fontWeight,
    display: tag === 'span' ? 'inlineBlock' : 'block',
    fontStyle,
  });

  switch (tag) {
    case 'span':
      return (
        <span
          className={clsx(baseStyles, recipeClassName)}
          style={assignInlineVars(themeVars, {
            fontSize: {
              mobile: vars.fontSize[fontSize.mobile],
              desktop: vars.fontSize[fontSize.desktop],
            },
          })}
        >
          {children}
        </span>
      );
    case 'p':
      return (
        <p
          className={clsx(baseStyles, recipeClassName)}
          style={assignInlineVars(themeVars, {
            fontSize: {
              mobile: vars.fontSize[fontSize.mobile],
              desktop: vars.fontSize[fontSize.desktop],
            },
          })}
        >
          {children}
        </p>
      );
    case 'div':
      return (
        <div
          className={clsx(baseStyles, recipeClassName)}
          style={assignInlineVars(themeVars, {
            fontSize: {
              mobile: vars.fontSize[fontSize.mobile],
              desktop: vars.fontSize[fontSize.desktop],
            },
          })}
        >
          {children}
        </div>
      );
  }
};

export { Text };
