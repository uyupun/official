import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

const styles = {
  // TODO: heightを指定する
  textarea: style([
    sprinkles({
      fontSize: {
        desktop: 16,
        mobile: 14,
      },
      lineHeight: 'text',
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
      // TODO: rem指定する
      minHeight: '100px',
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
