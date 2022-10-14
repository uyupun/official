import { style } from '@vanilla-extract/css';

import { theme } from '../styles/theme';

export const styles = {
  title: style({
    display: 'flex',
    alignItems: 'center',
    color: theme.blue,
  }),
};
