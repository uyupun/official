import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css';
import { vars, type Technology } from '@/styles/themes.css';

const label: { [Key in Technology]: string } = {
  Expo: style({
    color: vars.colors.white,
    backgroundColor: vars.technologyColors.Expo,
  }),
  FastApi: style({
    color: vars.colors.white,
    backgroundColor: vars.technologyColors.FastApi,
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
      lineHeight: 1,
      paddingX: 1,
      paddingY: 0.5,
    }),
    {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: vars.colors.white,
      borderRadius: '16px',
    },
  ]),
  variants: {
    label,
  },
});

export { styles };
