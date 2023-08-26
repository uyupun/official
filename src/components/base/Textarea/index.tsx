import clsx from 'clsx';
import {
  type FieldErrors,
  type FieldValues,
  type RegisterOptions,
  type UseFormRegister,
} from 'react-hook-form';

import { styles } from './styles.css';

import type { ComponentPropsWithoutRef, FC } from 'react';

type BaseProps = {
  /**
   * テキストエリアのID
   */
  id: string;
  /**
   * テキストエリアのプレースホルダー
   */
  placeholder?: string;
  /**
   * React Hook Formのregister
   */
  register: UseFormRegister<FieldValues>;
  /**
   * registerのオプション
   */
  options?: RegisterOptions<FieldValues, string>;
  /**
   * formStateのerrors
   */
  errors: FieldErrors<FieldValues>;
};

type Props = BaseProps & Omit<ComponentPropsWithoutRef<'textarea'>, keyof BaseProps>;

const Textarea: FC<Props> = ({ id, placeholder, register, options, errors, ...props }) => {
  return (
    <textarea
      {...props}
      className={clsx(styles.textarea, errors[id] != null && styles.error)}
      id={id}
      placeholder={placeholder}
      {...register(id, options)}
    />
  );
};

export { Textarea };
