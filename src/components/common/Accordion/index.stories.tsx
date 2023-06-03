import { ComponentMeta, Story } from '@storybook/react';

import { isDesktop } from '@/utils/isDesktop';

import { Accordion as CommonAccordion } from '.';

export default {
  title: 'Common',
  component: CommonAccordion,
} as ComponentMeta<typeof CommonAccordion>;

export const Accordion: Story = () => {
  return (
    <>
      <CommonAccordion isOpen={true} buttonText="2023">
        {'isOpen={true}'}
      </CommonAccordion>
      <CommonAccordion isOpen={false} buttonText="2022">
        {'isOpen={false}'}
      </CommonAccordion>
      <CommonAccordion buttonText="2021" isOpen={isDesktop()}>
        {'isOpen={isDesktop()} // 画面幅に応じて制御'}
      </CommonAccordion>
    </>
  );
};
