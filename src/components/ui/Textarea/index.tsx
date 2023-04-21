import clsx from 'clsx';
import { ComponentProps } from 'react';
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { styles } from './styles.css';

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

const Textarea = ({ id, placeholder, register, options, errors, ...props }: TextareaProps) => {
  return (
    <textarea
      {...props}
      id={id}
      className={clsx(styles.textarea, errors[id] && styles.error)}
      placeholder={placeholder}
      {...register(id, options)}
    />
  );
};

export { Textarea };
