import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

const styles = {
  textbox: style([
    sprinkles({
      height: 40,
      fontSize: 16,
      lineHeight: 1,
      color: 'white',
      paddingX: 1,
      borderColor: 'white',
      outlineWidth: {
        focusVisible: 2,
      },
      outlineStyle: {
        focusVisible: 'solid',
      },
      outlineColor: {
        focusVisible: 'white',
      },
      outlineOffset: {
        focusVisible: -1,
      },
    }),
    {
      width: '100%',
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 5,
      outline: 'none',
    },
  ]),
  error: sprinkles({
    color: 'red',
    borderColor: 'red',
  }),
};

export { styles };
