import { ArgsTable, Title } from '@storybook/addon-docs';
import 'modern-css-reset/dist/reset.min.css';
import React from 'react';
import '../src/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    page: () => (
      <>
        <Title />
        <ArgsTable />
      </>
    ),
  },
};
