import NextLink, { type LinkProps } from 'next/link';

import { getSafeLinkRel } from '@/utils/getSafeLinkRel';

import { styles } from './styles.css';

import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';

type BaseProps = {
  /**
   * ハイパーリンクが指す先のURL
   *
   * @example
   * import { pagesPath } from '@/utils/$path';
   *
   * <TextLink href={pagesPath.$url()}>link text</TextLink>
   */
  href: LinkProps['href'];
  /**
   * リンクのコンテンツ
   */
  children: ReactNode;
};

export type TextLinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;

const TextLink: FC<TextLinkProps> = ({ href, children, rel, target, ...props }) => {
  return (
    <NextLink
      {...props}
      href={href}
      className={styles.link}
      rel={getSafeLinkRel(rel, target)}
      target={target}
    >
      {children}
    </NextLink>
  );
};

export { TextLink };
