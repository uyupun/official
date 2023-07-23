import { useState } from 'react';

import { Dialog as CommonDialog } from '.';

import type { Meta, StoryObj } from '@storybook/react';

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
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          type="button"
        >
          Open Dialog
        </button>
        <CommonDialog
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <div style={{ height: '1000px' }}>コンテンツ</div>
        </CommonDialog>
      </div>
    );
  },
};
