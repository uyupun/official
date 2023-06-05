import clsx from 'clsx';
import { ReactNode } from 'react';

import { Color, FontSize, FontWeight, styles } from './styles.css';

export type TextProps = {
  /**
   * テキストのタグ
   */
  tag?: 'span' | 'p' | 'div';
  /**
   * テキストのサイズ
   */
  fontSize?: FontSize;
  /**
   * テキストの太さ
   */
  fontWeight?: FontWeight;
  /**
   * テキストのカラー
   */
  color?: Color;
  /**
   * テキストのコンテンツ
   */
  children: ReactNode;
};

const Text = ({
  tag = 'span',
  fontSize = { mobile: 14, desktop: 16 },
  fontWeight = 'normal',
  color = 'black',
  children,
}: TextProps) => {
  const className = clsx(
    styles.text(fontSize, fontWeight, color),
    tag === 'span' && styles.inlineBlock
  );

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
