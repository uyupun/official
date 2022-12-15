import { Dialog as HDialog } from '@headlessui/react';
import { ReactNode } from 'react';

import { styles } from './styles.css';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
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
