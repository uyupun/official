import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

const styles = {
  button: style([
    sprinkles({
      display: 'inline-flex',
      fontSize: {
        mobile: 14,
        desktop: 16,
      },
      color: 'white',
      backgroundColor: 'blue',
      outlineColor: {
        focusVisible: 'lightBlue',
      },
      opacity: {
        focusVisible: 0.8,
        hover: 0.8,
        disabled: 0.3,
        disabledHover: 0.3,
      },
      cursor: {
        default: 'pointer',
        disabled: 'not-allowed',
      },
      paddingX: {
        mobile: 1.5,
        desktop: 2.5,
      },
      paddingY: {
        mobile: 1,
        desktop: 1.5,
      },
    }),
    {
      justifyContent: 'center',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      border: 'none',
      borderRadius: 4,
      outline: '2px solid',
    },
  ]),
};

export { styles };
