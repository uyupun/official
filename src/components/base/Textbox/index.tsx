import clsx from 'clsx';

import { styles } from './styles.css';

import type { ComponentProps, FC } from 'react';
import type { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

type BaseProps = {
  /**
   * テキストボックスのID
   */
  id: string;
  /**
   * テキストボックスのプレースホルダー
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

export type TextboxProps = BaseProps & Omit<ComponentProps<'input'>, keyof BaseProps>;

const Textbox: FC<TextboxProps> = ({ id, placeholder, register, options, errors, ...props }) => {
  return (
    <input
      {...props}
      id={id}
      type={'text'}
      className={clsx(styles.textbox, errors[id] != null && styles.error)}
      placeholder={placeholder}
      {...register(id, options)}
    />
  );
};

export { Textbox };
