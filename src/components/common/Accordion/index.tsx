import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';

import { ExpandMoreIcon } from '../../base/Icons';

import { styles } from './styles.css';

import type { FC, ReactNode } from 'react';

type Props = {
  /**
   * 初期描画時のアコーディオンの状態
   */
  isOpen: boolean;
  /**
   * アコーディオンを開閉するためのボタンテキスト
   */
  buttonText: string;
  /**
   * アコーディオンのコンテンツ
   */
  children: ReactNode;
};

const Accordion: FC<Props> = ({ isOpen, buttonText, children }) => {
  return (
    <Disclosure defaultOpen={isOpen}>
      {({ open }) => (
        <>
          <div className={styles.buttonWrapper}>
            <Disclosure.Button className={styles.button}>
              {buttonText}
              <ExpandMoreIcon className={clsx(styles.icon, open && styles.rotate)} />
            </Disclosure.Button>
          </div>

          <Disclosure.Panel>{children}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export { Accordion };
