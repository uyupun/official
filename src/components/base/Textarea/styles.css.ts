import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

const styles = {
  textarea: style([
    sprinkles({
      height: {
        desktop: 300,
        mobile: 200,
      },
      minHeight: 100,
      fontSize: 16,
      lineHeight: 1.8,
      color: 'white',
      paddingX: 1,
      paddingY: 1.25,
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
      resize: 'vertical',
      outline: 'none',
    },
  ]),
  error: sprinkles({
    color: 'red',
    borderColor: 'red',
    outlineColor: {
      focusVisible: 'red',
    },
  }),
};

export { styles };
