import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css';
import { Color } from '@/styles/themes.css';

export type BadgeColor = Extract<Color, 'blue'>;

const color: { [Key in BadgeColor]: string } = {
  blue: sprinkles({
    color: 'white',
    backgroundColor: 'blue',
  }),
};

const styles = recipe({
  base: style([
    sprinkles({
      display: 'inline-block',
      fontSize: {
        mobile: 14,
        desktop: 16,
      },
      paddingX: 1,
      paddingY: 0.5,
    }),
    {
      borderRadius: '16px',
    },
  ]),
  variants: {
    color,
  },
});

export { styles };
