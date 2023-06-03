import { ComponentMeta, Story } from '@storybook/react';
import { useState } from 'react';

import { Dialog as CommonDialog } from '.';

export default {
  title: 'Common',
  component: CommonDialog,
  parameters: {
    backgrounds: {
      default: 'blue',
    },
  },
} as ComponentMeta<typeof CommonDialog>;

export const Dialog: Story = () => {
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
};
