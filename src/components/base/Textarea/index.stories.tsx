import { zodResolver } from '@hookform/resolvers/zod';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { object, string } from 'zod';

import { Textarea as BaseTextarea } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BaseTextarea> = {
  title: 'Base/Textarea',
  component: BaseTextarea,
};
export default meta;

type Story = StoryObj<typeof BaseTextarea>;
const schema = object({
  description: string().min(1).max(10),
});

export const Textarea: Story = {
  render: function Component() {
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
            <BaseTextarea errors={errors} id="description" register={register} />
          </dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
    );
  },
};
