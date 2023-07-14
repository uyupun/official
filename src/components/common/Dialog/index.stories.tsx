import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Dialog as CommonDialog } from '.';

const meta: Meta<typeof CommonDialog> = {
  title: 'Common/Dialog',
  component: CommonDialog,
  parameters: {
    backgrounds: {
      default: 'blue',
    },
  },
};
export default meta;

type Story = StoryObj<typeof CommonDialog>;
export const Dialog: Story = {
  render: function Component() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button type="button" onClick={() => setIsOpen(true)}>
          Open Dialog
        </button>
        <CommonDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div style={{ height: '1000px' }}>コンテンツ</div>
        </CommonDialog>
      </div>
    );
  },
};
