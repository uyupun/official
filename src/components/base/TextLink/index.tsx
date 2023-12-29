import NextLink, { type LinkProps } from 'next/link';

import { getSafeLinkRel } from '@/utils/getSafeLinkRel';

import { styles, type Size } from './styles.css';

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

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
   * 文字のサイズ
   */
  size?: Size;
  /**
   * リンクのコンテンツ
   */
  children: ReactNode;
};

type Props = BaseProps & Omit<ComponentPropsWithoutRef<'a'>, keyof BaseProps>;

const TextLink: FC<Props> = ({ href, size = 'md', children, rel, target, ...props }) => {
  return (
    <NextLink
      {...props}
      className={styles({ size })}
      href={href}
      rel={getSafeLinkRel(rel, target)}
      target={target}
    >
      {children}
    </NextLink>
  );
};

export { TextLink };
