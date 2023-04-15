import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

const styles = {
  textbox: style([
    sprinkles({
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
      height: '40px',
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
