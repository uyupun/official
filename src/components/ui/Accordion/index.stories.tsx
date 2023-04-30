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
      <Accordion isOpen={true} buttonText="2023">
        {'isOpen={true}'}
      </Accordion>
      <Accordion isOpen={false} buttonText="2022">
        {'isOpen={false}'}
      </Accordion>
      <Accordion buttonText="2021" isOpen={isDesktop()}>
        {'isOpen={isDesktop()} // 画面幅に応じて制御'}
      </Accordion>
    </>
  );
};
