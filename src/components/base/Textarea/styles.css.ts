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
      fontSize: {
        desktop: 16,
        mobile: 14,
      },
      lineHeight: 1.8,
      color: 'black',
      paddingX: 1,
      paddingY: 1.25,
      borderColor: {
        default: 'gray',
        focusVisible: 'blue',
      },
    }),
    {
      width: '100%',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '5px',
      resize: 'vertical',
    },
  ]),
  error: sprinkles({
    borderColor: 'red',
    backgroundColor: 'lightRed',
  }),
};

export { styles };
