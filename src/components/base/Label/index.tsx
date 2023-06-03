import clsx from 'clsx';
import { ComponentProps } from 'react';

import { styles } from './styles.css';

type BaseProps = {
  /**
   * 必須かどうか
   */
  isRequired?: boolean;
};

export type LabelProps = BaseProps & Omit<ComponentProps<'label'>, keyof BaseProps>;

const Label = ({ isRequired = true, htmlFor, children }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={clsx(styles.label, isRequired && styles.requiredMark)}>
      {children}
    </label>
  );
};

export { Label };
