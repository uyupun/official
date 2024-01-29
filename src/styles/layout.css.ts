import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  minHeight: '100dvh',
  background: 'linear-gradient(to bottom, #0078B7 0, #001E43 667px, #001E43 100%)',
  '@media': {
    'screen and (min-width: 768px)': {
      background: 'linear-gradient(to bottom, #0078B7 0, #001E43 1024px, #001E43 100%)',
    },
  },
});
