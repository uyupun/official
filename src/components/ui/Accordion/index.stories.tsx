import { ComponentMeta, Story } from '@storybook/react';

import { isDesktop } from '@/utils/isDesktop';

import { Accordion } from '.';

export default {
  title: 'Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const _Accordion: Story = () => {
  return (
    <>
      <Accordion defaultOpen={true} buttonText="2023">
        {'defaultOpen={true}'}
      </Accordion>
      <Accordion defaultOpen={false} buttonText="2022">
        {'defaultOpen={false}'}
      </Accordion>
      <Accordion buttonText="2021" defaultOpen={isDesktop()}>
        {'defaultOpen={isDesktop()} // 画面幅に応じて制御'}
      </Accordion>
    </>
  );
};
