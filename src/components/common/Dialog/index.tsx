import { Dialog as HDialog, Transition } from '@headlessui/react';
import { Fragment, type FC, type ReactNode } from 'react';

import { styles } from './styles.css';

export type DialogProps = {
  /**
   * ダイアログを開いているかどうか
   */
  isOpen: boolean;
  /**
   * ダイアログのコンテンツ
   */
  children: ReactNode;
  /**
   * ダイアログを閉じる時に発火するコールバック関数
   */
  onClose: () => void;
};

const Dialog: FC<DialogProps> = ({ isOpen, children, onClose }) => {
  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter={styles.transition.enter}
      enterFrom={styles.transition.enterFrom}
      enterTo={styles.transition.enterTo}
      leave={styles.transition.leave}
      leaveFrom={styles.transition.leaveFrom}
      leaveTo={styles.transition.leaveTo}
    >
      <HDialog className={styles.dialog} onClose={onClose}>
        <div className={styles.container}>
          <HDialog.Panel className={styles.content}>
            {/* TODO: ダイアログを閉じるためのボタンを配置する */}
            {children}
          </HDialog.Panel>
        </div>
      </HDialog>
    </Transition>
  );
};

export { Dialog };
