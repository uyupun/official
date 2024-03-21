import NextLink, { type LinkProps } from 'next/link';
import { useMemo, type ComponentProps, type FC } from 'react';

import { Image } from '@/components/base/Image';

type BaseProps = {
  /**
   * ハイパーリンクが指す外部サイトのURL
   */
  href: LinkProps['href'];
  /**
   * ロゴの種類
   */
  type: 'discussion' | 'github' | 'home' | 'qiita' | 'uyupun' | 'uyupun-archive' | 'x' | 'youtube';
};

type ImageProps = ComponentProps<typeof Image>;

type Props = BaseProps & Omit<ImageProps, 'sources'>;

const Logo: FC<Props> = ({ href, type, alt, ...rest }) => {
  const sources: ImageProps['sources'] = useMemo(
    () => [
      {
        srcset: `./images/logos/${type}/${type}.avif`,
        format: 'avif',
        isDesktop: true,
      },
      {
        srcset: `./images/logos/${type}/${type}.webp`,
        format: 'webp',
        isDesktop: true,
      },
      {
        srcset: `./images/logos/${type}/${type}.png`,
        format: 'png',
        isDesktop: true,
      },
      {
        srcset: `./images/logos/${type}/${type}-mobile.avif`,
        format: 'avif',
      },
      {
        srcset: `./images/logos/${type}/${type}-mobile.webp`,
        format: 'webp',
      },
      {
        srcset: `./images/logos/${type}/${type}-mobile.png`,
        format: 'png',
      },
    ],
    [type]
  );

  return (
    <NextLink href={href} rel={'noopener noreferrer'} target={'_blank'}>
      <Image {...rest} alt={alt} sources={sources} />
    </NextLink>
  );
};

export { Logo };
