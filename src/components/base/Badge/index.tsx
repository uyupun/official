import { styles } from './styles.css';

import type { Technology } from '@/styles/themes.css';
import type { ComponentPropsWithoutRef, FC } from 'react';

type BaseProps = {
  /**
   * バッジのラベル
   */
  label: Technology;
};

type Props = BaseProps & Omit<ComponentPropsWithoutRef<'span'>, keyof BaseProps>;

const Badge: FC<Props> = ({ label, ...props }) => {
  return (
    <span {...props} className={styles({ label })}>
      {label}
    </span>
  );
};

export { Badge };
