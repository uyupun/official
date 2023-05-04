import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

import { styles } from './styles.css';

type BaseProps = {
  /**
   * ハイパーリンクが指す先のURL
   *
   * @example
   * import { pagesPath } from '@/lib/$path';
   *
   * <Link href={pagesPath.$url()}>link text</Link>
   */
  href: NextLinkProps['href'];
  /**
   * リンクのコンテンツ
   */
  children: ReactNode;
};

export type LinkProps = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;

const Link = ({ href, children, rel, target, ...props }: LinkProps) => {
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

export { Link };
