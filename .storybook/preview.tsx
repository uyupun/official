import { ArgsTable, Title } from '@storybook/addon-docs';
import React from 'react';

import { colors } from '../src/styles/themes.css';

import type { Parameters } from '@storybook/react';
import 'modern-css-reset/dist/reset.min.css';

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
