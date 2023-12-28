import clsx from 'clsx';
import NextLink, { type LinkProps } from 'next/link';

import { getSafeLinkRel } from '@/utils/getSafeLinkRel';

import { styles } from './styles.css';

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
   * 文字サイズを大きくするかどうか
   */
  isLarge?: boolean;
  /**
   * リンクのコンテンツ
   */
  children: ReactNode;
};

type Props = BaseProps & Omit<ComponentPropsWithoutRef<'a'>, keyof BaseProps>;

const TextLink: FC<Props> = ({ href, isLarge = false, children, rel, target, ...props }) => {
  return (
    <NextLink
      {...props}
      className={clsx(styles.link, isLarge && styles.large)}
      href={href}
      rel={getSafeLinkRel(rel, target)}
      target={target}
    >
      {children}
    </NextLink>
  );
};

export { TextLink };
