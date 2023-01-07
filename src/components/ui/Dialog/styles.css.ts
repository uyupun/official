import { style } from '@vanilla-extract/css';

import { sprinkles } from '../../../styles/sprinkles.css';

const styles = {
  dialog: style([
    {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflowY: 'auto',
    },
    sprinkles({
      position: 'fixed',
    }),
  ]),
  container: style([
    {
      width: '100%',
      maxWidth: '1360px',
      minHeight: '100%',
      margin: 'auto',
    },
    sprinkles({
      padding: {
        mobile: 1.5,
        desktop: 5,
      },
    }),
  ]),
  content: style([
    {
      width: '100%',
      borderRadius: '20px',
    },
    sprinkles({
      backgroundColor: 'white',
      paddingX: {
        mobile: 2.5,
        desktop: 5,
      },
      paddingY: {
        mobile: 5,
        desktop: 10,
      },
    }),
  ]),
  transition: {
    enter: style({
      transitionTimingFunction: 'ease',
      transitionDuration: '300ms',
    }),
    enterFrom: style({
      opacity: 0,
      transform: 'scale(.95)',
    }),
    enterTo: style({
      opacity: 1,
      transform: 'scale(1)',
    }),
    leave: style({
      transitionTimingFunction: 'ease',
      transitionDuration: '300ms',
    }),
    leaveFrom: style({
      opacity: 1,
      transform: 'scale(1)',
    }),
    leaveTo: style({
      opacity: 0,
      transform: 'scale(.95)',
    }),
  },
};

export { styles };
