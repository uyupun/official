import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/themes.css';

import { technologies, type Technology } from './constant';

const label: { [Key in Technology]: string } = {
  expo: style({
    color: vars.colors.white,
    backgroundColor: technologies.expo.color,
  }),
  fastApi: style({
    color: vars.colors.white,
    backgroundColor: technologies.fastApi.color,
  }),
};

const styles = recipe({
  variants: {
    label,
  },
});

export { styles };
