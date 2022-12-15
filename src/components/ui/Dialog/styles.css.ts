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
      opacity: 0.3,
    },
    sprinkles({
      position: 'fixed',
      background: 'black',
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
      background: 'white',
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
};

export { styles };
