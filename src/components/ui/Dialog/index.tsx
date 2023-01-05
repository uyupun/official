import { Dialog as HDialog } from '@headlessui/react';
import { ReactNode } from 'react';

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

const Dialog = ({ isOpen, children, onClose }: DialogProps) => {
  return (
    <HDialog open={isOpen} onClose={onClose} className={styles.dialog}>
      <div className={styles.container}>
        <HDialog.Panel className={styles.content}>
          {/* TODO: ダイアログを閉じるためのボタンを配置する */}
          {children}
        </HDialog.Panel>
      </div>
    </HDialog>
  );
};

export { Dialog };
