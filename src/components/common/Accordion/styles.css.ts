import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

const styles = {
  buttonWrapper: style({
    textAlign: 'center',
  }),
  button: style([
    sprinkles({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 0.5,
      fontSize: {
        mobile: 24,
        desktop: 36,
      },
      color: 'black',
      outlineColor: {
        focusVisible: 'blue',
      },
      lineHeight: 1,
    }),
    style({
      backgroundColor: 'transparent',
      cursor: 'pointer',
      padding: 0,
      border: 'none',
    }),
  ]),
  icon: style([
    sprinkles({
      width: {
        mobile: 24,
        desktop: 36,
      },
      height: {
        mobile: 24,
        desktop: 36,
      },
    }),
    style({
      transition: 'transform 300ms',
    }),
  ]),
  rotate: style({
    transform: 'rotate(180deg)',
  }),
};

export { styles };
