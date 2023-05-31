import { breakpoint } from '@/styles/breakpoint';

type ImageSource = {
  srcset: string;
  format: 'jpeg' | 'png' | 'webp' | 'avif';
  isDesktop?: boolean;
};

export type ImageProps = {
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
  className: string;
  /**
   * 画像の読み込みを遅延させるかどうか
   */
  isLazy: boolean;
};

const getSrc = (sources: ImageSource[]): string | null => {
  if (sources.length === 0) {
    return null;
  }

  const compareFormats = (a: ImageSource, b: ImageSource): number => {
    const priorityFormats = ['jpeg', 'png', 'webp', 'avif'];
    return priorityFormats.indexOf(a.format) - priorityFormats.indexOf(b.format);
  };

  const compareIsDesktop = (a: ImageSource, b: ImageSource): number => {
    return (a.isDesktop ? 1 : 0) - (b.isDesktop ? 1 : 0);
  };

  const sortedSources = [...sources].sort((a, b) => {
    const formatComparison = compareFormats(a, b);
    if (formatComparison !== 0) return formatComparison;
    return compareIsDesktop(a, b);
  });

  return sortedSources[0].srcset;
};

const Image = ({ sources, alt, className, isLazy }: ImageProps) => {
  const src = getSrc(sources);
  if (src === null) return <></>;

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
      <img
        src={src}
        alt={alt}
        className={className}
        loading={isLazy ? 'lazy' : 'eager'}
        decoding={'async'}
      />
    </picture>
  );
};

export { Image };
