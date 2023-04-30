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
    }),
    style({
      lineHeight: 'normal',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      padding: 0,
      border: 'none',
    }),
  ]),
  // TODO: width / height のサイズを画面幅に応じて変える
  icon: style({
    transition: 'transform 300ms',
  }),
  rotate: style({
    transform: 'rotate(180deg)',
  }),
};

export { styles };
