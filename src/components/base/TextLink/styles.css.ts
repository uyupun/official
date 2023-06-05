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
      color: {
        default: 'lightBlue',
        visited: 'purple',
      },
      outlineColor: {
        focusVisible: 'lightBlue',
      },
      opacity: {
        focusVisible: 0.8,
        hover: 0.8,
      },
      cursor: {
        default: 'pointer',
      },
    }),
    {
      textDecoration: 'underline',
    },
  ]),
};

export { styles };
