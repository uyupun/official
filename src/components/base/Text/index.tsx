import { ReactNode } from 'react';

import { TextColor, TextFontWeight, TextSize, styles } from './styles.css';

export type TextProps = {
  /**
   * テキストのタグ
   */
  tag?: 'span' | 'p' | 'div';
  /**
   * テキストのサイズ
   */
  size?: TextSize;
  /**
   * テキストの太さ
   */
  fontWeight?: TextFontWeight;
  /**
   * テキストのカラー
   */
  color?: TextColor;
  /**
   * テキストのコンテンツ
   */
  children: ReactNode;
};

const Text = ({
  tag = 'span',
  size = 'md',
  fontWeight = 'normal',
  color = 'black',
  children,
}: TextProps) => {
  const className = styles({
    size,
    color,
    fontWeight,
    display: tag === 'span' ? 'inlineBlock' : 'block',
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
