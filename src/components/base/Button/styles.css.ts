import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

const styles = {
  button: style([
    sprinkles({
      display: 'inline-flex',
      minWidth: {
        mobile: 120,
        desktop: 150,
      },
      height: {
        mobile: 40,
        desktop: 48,
      },
      fontSize: {
        mobile: 14,
        desktop: 16,
      },
      color: {
        default: 'white',
        disabled: 'gray',
      },
      backgroundColor: {
        default: 'transparent',
        hover: 'lightWhite',
        disabledHover: 'transparent',
      },
      cursor: {
        default: 'pointer',
        disabled: 'not-allowed',
      },
      paddingX: {
        mobile: 1.5,
        desktop: 2.5,
      },
      borderColor: {
        default: 'white',
        disabled: 'gray',
      },
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
      justifyContent: 'center',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 4,
    },
  ]),
};

export { styles };
