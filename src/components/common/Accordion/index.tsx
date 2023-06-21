import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import { ReactNode } from 'react';

import { ExpandMoreIcon } from '../../base/Icons';

import { styles } from './styles.css';

export type AccordionProps = {
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

const Accordion = ({ isOpen, buttonText, children }: AccordionProps) => {
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