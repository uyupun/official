import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

const styles = {
  link: style([
    sprinkles({
      display: 'inline-block',
      fontSize: {
        mobile: 14,
        desktop: 16,
      },
      lineHeight: 1,
      color: 'white',
      outlineWidth: {
        focusVisible: 1,
      },
      outlineStyle: {
        focusVisible: 'solid',
      },
      outlineColor: {
        focusVisible: 'white',
      },
      cursor: {
        default: 'pointer',
      },
    }),
    {
      textDecoration: 'underline',
    },
  ]),
  large: sprinkles({
    fontSize: {
      mobile: 24,
      desktop: 36,
    },
    fontWeight: 'bold',
    lineHeight: 1.3,
  }),
};

export { styles };
