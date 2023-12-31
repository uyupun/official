import NextLink, { type LinkProps } from 'next/link';

import { Image } from '@/components/base/Image';
import { getSafeLinkRel } from '@/utils/getSafeLinkRel';

import { styles } from './styles.css';

import type { ComponentProps, FC, HTMLAttributeAnchorTarget, ReactNode } from 'react';

type BaseProps = {
  /**
   * ハイパーリンクが指す先のURL
   *
   * @example
   * import { pagesPath } from '@/utils/$path';
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

type Props = BaseProps & Omit<ComponentProps<typeof Image>, keyof BaseProps | 'alt'>;

const ImageLink: FC<Props> = ({ href, target, rel, text, children, ...rest }) => {
  return (
    <NextLink
      className={styles.imageLink}
      href={href}
      rel={getSafeLinkRel(rel, target)}
      target={target}
    >
      {/*
        リンク内の画像の alt は空文字列とし、 children または text で提供される文字列で補足する
        refs: https://www.w3.org/WAI/tutorials/images/functional
              https://dequeuniversity.com/rules/axe/4.4/image-redundant-alt
      */}
      <div className={styles.imageWrapper}>
        <Image {...rest} alt="" />
      </div>
      <div className={styles.hoverContainer}>{children}</div>
      <div className={styles.linkText}>{text}</div>
    </NextLink>
  );
};

export { ImageLink };
