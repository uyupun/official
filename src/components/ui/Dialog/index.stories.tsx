import { ComponentMeta, Story } from '@storybook/react';
import { useState } from 'react';

import { Dialog } from '.';

export default {
  title: 'Dialog',
  component: Dialog,
  parameters: {
    controls: { hideNoControlsWarning: true },
    backgrounds: {
      default: 'blue',
    },
  },
} as ComponentMeta<typeof Dialog>;

export const _Dialog: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Dialog
      </button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{ height: '1000px' }}>コンテンツ</div>
      </Dialog>
    </div>
  );
};
