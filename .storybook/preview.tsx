import { ArgsTable, Title } from '@storybook/addon-docs';
import 'modern-css-reset/dist/reset.min.css';
import { Parameters } from '@storybook/react';
import React from 'react';

import '../src/styles/globals.css';
import { colors } from '../src/styles/themes.css';

export const parameters: Parameters = {
  controls: {
    hideNoControlsWarning: true,
  },
  docs: {
    page: () => (
      <>
        <Title />
        <ArgsTable />
      </>
    ),
  },
  backgrounds: {
    values: [
      {
        name: 'blue',
        value: colors.blue,
      },
    ],
  },
};
