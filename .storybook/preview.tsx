import { ArgsTable, Title } from '@storybook/addon-docs';
import React from 'react';

import { colors } from '../src/styles/themes.css';

import type { Parameters } from '@storybook/react';
import 'the-new-css-reset/css/reset.css';

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
    default: 'gradientBlue',
    values: [
      {
        name: 'gradientBlue',
        value: colors.gradientBlue,
      },
    ],
  },
};
