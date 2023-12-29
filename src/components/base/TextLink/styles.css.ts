import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css';

type Size = 'md' | 'lg';

const size: { [Key in Size]: string } = {
  md: sprinkles({
    fontSize: {
      mobile: 14,
      desktop: 16,
    },
  }),
  lg: sprinkles({
    fontSize: {
      mobile: 24,
      desktop: 36,
    },
  }),
};

const styles = recipe({
  base: style([
    sprinkles({
      display: 'inline-block',
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
  variants: {
    size,
  },
});

export { styles, type Size };
