import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

import { styles } from './styles.css';

type BaseProps = {
  /**
   * ハイパーリンクが指す先のURL
   *
   * @example
   * import { pagesPath } from '@/lib/$path';
   *
   * <Anchor href={pagesPath.$url()}>anchor text</Anchor>
   */
  href: LinkProps['href'];
  /**
   * アンカーのコンテンツ
   */
  children: ReactNode;
};

export type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;

const Anchor = ({ href, children, rel, target, ...props }: AnchorProps) => {
  return (
    <Link
      {...props}
      href={href}
      className={styles.anchor}
      rel={target === '_blank' ? `${rel ?? ''} noreferrer noopener`.trim() : rel}
      target={target}
    >
      {children}
    </Link>
  );
};

export { Anchor };
