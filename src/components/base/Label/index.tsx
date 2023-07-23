import clsx from 'clsx';

import { styles } from './styles.css';

import type { ComponentProps, FC } from 'react';

type BaseProps = {
  /**
   * 必須かどうか
   */
  isRequired?: boolean;
};

export type LabelProps = BaseProps & Omit<ComponentProps<'label'>, keyof BaseProps>;

const Label: FC<LabelProps> = ({ isRequired = true, htmlFor, children }) => {
  return (
    <label className={clsx(styles.label, isRequired && styles.requiredMark)} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export { Label };
