import { breakpoint } from '@/styles/breakpoint';

export type ImageProps = {
  /**
   * source 要素で使用する値を持つ配列
   */
  sources: {
    srcset: string;
    format: 'jpeg' | 'png' | 'webp' | 'avif';
    isDesktop?: boolean;
  }[];
  /**
   * img 要素の src 属性に渡す値
   */
  src: string;
  /**
   * img 要素の alt 属性に渡す値
   */
  alt: string;
  /**
   * img 要素の className 属性に渡す値
   */
  className: string;
  /**
   * 画像の読み込みを遅延させるかどうか
   */
  isLazy: boolean;
};

const Image = ({ sources, src, alt, className, isLazy }: ImageProps) => {
  return (
    <picture>
      {sources.map((source, index) => {
        return (
          <source
            key={index}
            srcSet={source.srcset}
            type={`image/${source.format}`}
            media={source.isDesktop ? breakpoint : undefined}
          />
        );
      })}
      <img src={src} alt={alt} className={className} loading={isLazy ? 'lazy' : 'eager'} />
    </picture>
  );
};

export { Image };
