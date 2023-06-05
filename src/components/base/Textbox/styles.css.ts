import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

const styles = {
  textbox: style([
    sprinkles({
      height: {
        desktop: 40,
        mobile: 36,
      },
      fontSize: {
        desktop: 16,
        mobile: 14,
      },
      color: 'black',
      paddingX: 1,
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
    },
  ]),
  error: sprinkles({
    borderColor: 'red',
    backgroundColor: 'lightRed',
  }),
};

export { styles };
