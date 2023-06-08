import NextLink, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

import { styles } from './styles.css';

type BaseProps = {
  /**
   * ハイパーリンクが指す先のURL
   *
   * @example
   * import { pagesPath } from '@/lib/$path';
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
      rel={target === '_blank' ? `${rel ?? ''} noreferrer noopener`.trim() : rel}
      target={target}
    >
      {children}
    </NextLink>
  );
};

export { TextLink };