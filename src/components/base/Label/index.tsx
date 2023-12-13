import clsx from 'clsx';

import { styles } from './styles.css';

import type { ComponentPropsWithoutRef, FC } from 'react';

type BaseProps = {
  /**
   * ラベルのテキスト
   */
  text: string;
  /**
   * 必須かどうか
   */
  isRequired?: boolean;
};

type Props = BaseProps & Omit<ComponentPropsWithoutRef<'label'>, keyof BaseProps>;

const Label: FC<Props> = ({ text, isRequired = true, className, ...props }) => {
  return (
    <label className={clsx(styles.label, className)} {...props}>
      {text}
      {isRequired && (
        <span aria-hidden className={styles.requiredMark}>
          *
        </span>
      )}
    </label>
  );
};

export { Label };
