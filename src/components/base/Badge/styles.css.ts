import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/themes.css';

const badgeColor = {
  expo: '#000000',
  fastApi: '#009485',
} as const;
export type BadgeColor = keyof typeof badgeColor;

const color: { [Key in BadgeColor]: string } = {
  expo: style({
    color: vars.colors.white,
    backgroundColor: badgeColor.expo,
  }),
  fastApi: style({
    color: vars.colors.white,
    backgroundColor: badgeColor.fastApi,
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
    color,
  },
});

export { styles };
