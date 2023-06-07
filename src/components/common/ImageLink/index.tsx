import NextLink, { LinkProps } from 'next/link';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import { Image, ImageProps } from '@/components/base/Image';

import { styles } from './styles.css';

export type ImageLinkProps = Omit<ImageProps, 'alt'> & {
  /**
   * ハイパーリンクが指す先のURL
   *
   * @example
   * import { pagesPath } from '@/lib/$path';
   *
   * <ImageLink href={pagesPath.$url()}>link text</ImageLink>
   */
  href: LinkProps['href'];
  /**
   * リンクの target
   */
  target?: HTMLAttributeAnchorTarget;
  /**
   * リンクの rel
   */
  rel?: string;
  /**
   * スマホ幅の時に表示するリンクのテキスト
   */
  text: string;
  /**
   * ホバー時に表示するコンテンツ
   */
  children: ReactNode;
};

const ImageLink = ({ href, target, rel, text, children, ...rest }: ImageLinkProps) => {
  return (
    <NextLink
      href={href}
      className={styles.imageLink}
      rel={target === '_blank' ? `${rel ?? ''} noreferrer noopener`.trim() : rel}
      target={target}
    >
      {/*
        リンク内の画像の alt は空文字列とし、 children または text で提供される文字列で補足する
        refs: https://www.w3.org/WAI/tutorials/images/functional
              https://dequeuniversity.com/rules/axe/4.4/image-redundant-alt
      */}
      <Image {...rest} alt="" />
      <div className={styles.hoverContainer}>{children}</div>
      <div className={styles.linkText}>{text}</div>
    </NextLink>
  );
};

export { ImageLink };
