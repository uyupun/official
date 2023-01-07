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
        focus: 'lightBlue',
      },
      opacity: {
        focus: 0.8,
        hover: 0.8,
        disabled: 0.3,
        disabledHover: 0.3,
      },
      cursor: {
        default: 'pointer',
        disabled: 'not-allowed',
      },
    }),
    {
      justifyContent: 'center',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      border: 'none',
      outline: '2px solid',
    },
  ]),
  default: style([
    sprinkles({
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
      borderRadius: '4px',
    },
  ]),
  circle: style([
    sprinkles({
      paddingX: {
        mobile: 0.5,
        desktop: 0.5,
      },
      paddingY: {
        mobile: 0.5,
        desktop: 0.5,
      },
    }),
    {
      borderRadius: '50%',
    },
  ]),
};

export { styles };
