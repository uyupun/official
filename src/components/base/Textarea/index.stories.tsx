import { zodResolver } from '@hookform/resolvers/zod';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { object, string } from 'zod';

import { Textarea as BaseTextarea } from '.';

export default {
  title: 'Base',
  component: BaseTextarea,
} as ComponentMeta<typeof BaseTextarea>;

const schema = object({
  description: string().nonempty().max(10),
});

export const Textarea: Story = () => {
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
          <label htmlFor="description">Description</label>
        </dt>
        <dd style={{ marginBottom: '24px' }}>
          <BaseTextarea id="description" register={register} errors={errors} />
        </dd>
      </dl>
      <button type="submit">Submit</button>
    </form>
  );
};
