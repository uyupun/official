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

const Image = ({ sources, alt, className, isLazy }: ImageProps) => {
  if (sources.length === 0) return <></>;

  const formatPriority = ['jpeg', 'png', 'webp', 'avif'];
  const sortedSources = [...sources].sort((a, b) => {
    const formatComparison = formatPriority.indexOf(a.format) - formatPriority.indexOf(b.format);
    if (formatComparison !== 0) return formatComparison;
    return (a.isDesktop ? 1 : 0) - (b.isDesktop ? 1 : 0);
  });
  const src = sortedSources[0].srcset;

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
