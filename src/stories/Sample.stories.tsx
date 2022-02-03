import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

const SampleComponent = (props: { title: string }) => <h1>{props.title}</h1>;

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Sample',
  component: SampleComponent,
} as ComponentMeta<typeof SampleComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SampleComponent> = (args) => <SampleComponent {...args} />;

export const Sample = Template.bind({});

Sample.args = {
  /*👇 The args you need here will depend on your component */
  title: 'タイトル',
};
