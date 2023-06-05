import clsx from 'clsx';
import { ComponentProps } from 'react';
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { styles } from './styles.css';

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

const Textbox = ({ id, placeholder, register, options, errors, ...props }: TextboxProps) => {
  return (
    <input
      {...props}
      id={id}
      type={'text'}
      className={clsx(styles.textbox, errors[id] && styles.error)}
      placeholder={placeholder}
      {...register(id, options)}
    />
  );
};

export { Textbox };
