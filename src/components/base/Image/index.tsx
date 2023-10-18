import { breakpoint } from '@/styles/breakpoint';

import type { FC } from 'react';

type ImageSource = {
  srcset: string;
  format: 'jpeg' | 'png' | 'webp' | 'avif';
  isDesktop?: boolean;
};

type ImageSize = {
  mobile: number;
  desktop: number;
};

type Props = {
  /**
   * source 要素で使用する値を持つ配列
   */
  sources: ImageSource[];
  /**
   * img 要素の alt 属性に渡す値
   */
  alt: string;
  /**
   * img 要素の className 属性に渡す値
   */
  className?: string;
  /**
   * 画像の読み込みを遅延させるかどうか
   * ビューポート外にある画像: true
   * ビューポート内にある画像: false
   */
  isLazy?: boolean;
  /**
   * 画像の横幅
   */
  width: ImageSize;
  /**
   * 画像の高さ
   */
  height: ImageSize;
};

const getSource = (sources: ImageSource[]): ImageSource | null => {
  if (sources.length === 0) return null;

  const compareFormats = (a: ImageSource, b: ImageSource): number => {
    const priorityFormats = ['jpeg', 'png', 'webp', 'avif'];
    return priorityFormats.indexOf(a.format) - priorityFormats.indexOf(b.format);
  };

  const compareIsDesktop = (a: ImageSource, b: ImageSource): number => {
    return (a.isDesktop === true ? 1 : 0) - (b.isDesktop === true ? 1 : 0);
  };

  const sortedSources = [...sources].sort((a, b) => {
    const formatComparison = compareFormats(a, b);
    if (formatComparison !== 0) return formatComparison;
    return compareIsDesktop(a, b);
  });

  return sortedSources[0];
};

/**
 * ビューポートのどこで使用するかによって isLazy の値を以下のように変更する
 * ビューポート外にある画像: true
 * ビューポート内にある画像: false
 * また decoding の値は常に auto とし、ブラウザに任せる
 *
 * ref: https://zenn.dev/ixkaito/articles/deep-dive-into-decoding
 */
const Image: FC<Props> = ({ sources, alt, className, isLazy = true, height, width }) => {
  const sourceForImgElement = getSource(sources);
  if (sourceForImgElement === null) return <></>;

  return (
    <picture>
      {sources.map((source, index) => {
        return (
          <source
            height={source.isDesktop === true ? height.desktop : height.mobile}
            key={index}
            media={source.isDesktop === true ? breakpoint : undefined}
            srcSet={source.srcset}
            type={`image/${source.format}`}
            width={source.isDesktop === true ? width.desktop : width.mobile}
          />
        );
      })}
      <img
        alt={alt}
        className={className}
        decoding="async"
        height={sourceForImgElement.isDesktop === true ? height.desktop : height.mobile}
        loading={isLazy ? 'lazy' : 'eager'}
        src={sourceForImgElement.srcset}
        width={sourceForImgElement.isDesktop === true ? width.desktop : width.mobile}
      />
    </picture>
  );
};

export { Image };
