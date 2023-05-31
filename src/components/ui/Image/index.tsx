import { breakpoint } from '@/styles/breakpoint';

export type ImageSource = {
  srcset: string;
  format: 'jpeg' | 'png' | 'webp' | 'avif';
  width: number;
  height: number;
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
  className?: string;
  /**
   * 画像の読み込みを遅延させるかどうか
   */
  isLazy: boolean;
};

const getSource = (sources: ImageSource[]): ImageSource | null => {
  if (sources.length === 0) return null;

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

  return sortedSources[0];
};

const Image = ({ sources, alt, className, isLazy }: ImageProps) => {
  const sourceForImgElement = getSource(sources);
  if (sourceForImgElement === null) return <></>;

  return (
    <picture>
      {sources.map((source, index) => {
        return (
          <source
            key={index}
            srcSet={source.srcset}
            type={`image/${source.format}`}
            media={source.isDesktop ? breakpoint : undefined}
            width={source.width}
            height={source.height}
          />
        );
      })}
      <img
        src={sourceForImgElement.srcset}
        alt={alt}
        className={className}
        loading={isLazy ? 'lazy' : 'eager'}
        decoding={'async'}
        width={sourceForImgElement.width}
        height={sourceForImgElement.height}
      />
    </picture>
  );
};

export { Image };
