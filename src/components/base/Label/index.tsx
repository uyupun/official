import clsx from 'clsx';

import { styles } from './styles.css';

import type { ComponentPropsWithoutRef, FC } from 'react';

type BaseProps = {
  /**
   * 必須かどうか
   */
  isRequired?: boolean;
};

type Props = BaseProps & Omit<ComponentPropsWithoutRef<'label'>, keyof BaseProps>;

const Label: FC<Props> = ({ isRequired = true, htmlFor, children }) => {
  return (
    <label className={clsx(styles.label, isRequired && styles.requiredMark)} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export { Label };
