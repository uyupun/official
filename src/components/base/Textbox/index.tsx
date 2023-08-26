import clsx from 'clsx';

import { styles } from './styles.css';

import type { ComponentPropsWithoutRef, FC } from 'react';
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

type Props = BaseProps & Omit<ComponentPropsWithoutRef<'input'>, keyof BaseProps>;

const Textbox: FC<Props> = ({ id, placeholder, register, options, errors, ...props }) => {
  return (
    <input
      {...props}
      className={clsx(styles.textbox, errors[id] != null && styles.error)}
      id={id}
      placeholder={placeholder}
      type={'text'}
      {...register(id, options)}
    />
  );
};

export { Textbox };
