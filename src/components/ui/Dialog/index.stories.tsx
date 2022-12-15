import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Dialog } from './index';

export default {
  title: 'ui/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

export const Index: ComponentStoryObj<typeof Dialog> = {
  args: {
    isOpen: false,
    onClose: action('onClose'),
    children: <div style={{ height: '1000px' }}>コンテンツ</div>,
  },
};
