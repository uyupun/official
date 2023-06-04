import { zodResolver } from '@hookform/resolvers/zod';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { object, string } from 'zod';

import { Textbox as BaseTextbox } from '.';

export default {
  title: 'Base/Textbox',
  component: BaseTextbox,
} as ComponentMeta<typeof BaseTextbox>;

const schema = object({
  title: string().nonempty().max(10),
});

export const Textbox: Story = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  return (
    <form onSubmit={handleSubmit(action('handleSubmit'))}>
      <dl>
        <dt style={{ marginBottom: '8px' }}>
          <label htmlFor="title">Title</label>
        </dt>
        <dd style={{ marginBottom: '24px' }}>
          <BaseTextbox id="title" register={register} errors={errors} />
        </dd>
      </dl>
      <button type="submit">Submit</button>
    </form>
  );
};
