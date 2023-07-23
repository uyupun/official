import clsx from 'clsx';
import {
  type FieldErrors,
  type FieldValues,
  type RegisterOptions,
  type UseFormRegister,
} from 'react-hook-form';

import { styles } from './styles.css';

import type { ComponentProps, FC } from 'react';

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

export type TextareaProps = BaseProps & Omit<ComponentProps<'textarea'>, keyof BaseProps>;

const Textarea: FC<TextareaProps> = ({ id, placeholder, register, options, errors, ...props }) => {
  return (
    <textarea
      {...props}
      id={id}
      className={clsx(styles.textarea, errors[id] != null && styles.error)}
      placeholder={placeholder}
      {...register(id, options)}
    />
  );
};

export { Textarea };
