import { isDesktop } from '@/utils/isDesktop';

import { Accordion as CommonAccordion } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommonAccordion> = {
  title: 'Common/Accordion',
  component: CommonAccordion,
};
export default meta;

type Story = StoryObj<typeof CommonAccordion>;
export const Accordion: Story = {
  render: () => (
    <>
      <CommonAccordion buttonText="2023" isOpen={true}>
        <div style={{ color: 'white' }}>{'isOpen={true}'}</div>
      </CommonAccordion>
      <CommonAccordion buttonText="2022" isOpen={false}>
        <div style={{ color: 'white' }}>{'isOpen={false}'}</div>
      </CommonAccordion>
      <CommonAccordion buttonText="2021" isOpen={isDesktop()}>
        <div style={{ color: 'white' }}>{'isOpen={isDesktop()} // 画面幅に応じて制御'}</div>
      </CommonAccordion>
    </>
  ),
};
