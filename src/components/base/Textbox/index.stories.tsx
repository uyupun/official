import { zodResolver } from '@hookform/resolvers/zod';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { object, string } from 'zod';

import { Textbox as BaseTextbox } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BaseTextbox> = {
  title: 'Base/Textbox',
  component: BaseTextbox,
};
export default meta;

type Story = StoryObj<typeof BaseTextbox>;
const schema = object({
  title: string().min(1).max(10),
});

export const Textbox: Story = {
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
            <label htmlFor="title" style={{ color: 'white' }}>
              Title
            </label>
          </dt>
          <dd style={{ marginBottom: '24px' }}>
            <BaseTextbox errors={errors} id="title" register={register} />
          </dd>
        </dl>
        <button style={{ color: 'white' }} type="submit">
          Submit
        </button>
      </form>
    );
  },
};
