import NextLink, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

import { getSafeLinkRel } from '@/utils/getSafeLinkRel';

import { styles } from './styles.css';

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

const TextLink = ({ href, children, rel, target, ...props }: TextLinkProps) => {
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
