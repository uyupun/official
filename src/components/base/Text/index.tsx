import { styles, type TextColor, type TextFontStyle, type TextFontWeight } from './styles.css';

import type { FC, ReactNode } from 'react';

type Props = {
  /**
   * テキストのタグ
   */
  tag?: 'span' | 'p' | 'div';
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
  fontWeight = 'normal',
  fontStyle = 'normal',
  color = 'white',
  children,
}) => {
  const className = styles({
    color,
    fontWeight,
    display: tag === 'span' ? 'inlineBlock' : 'block',
    fontStyle,
  });

  switch (tag) {
    case 'span':
      return <span className={className}>{children}</span>;
    case 'p':
      return <p className={className}>{children}</p>;
    case 'div':
      return <div className={className}>{children}</div>;
  }
};

export { Text };
