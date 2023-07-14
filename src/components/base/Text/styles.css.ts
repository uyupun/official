import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css';
import { Color } from '@/styles/themes.css';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TextFontWeight = 'normal' | 'bold';
export type TextColor = Extract<Color, 'white' | 'black' | 'red' | 'darkGray'>;
export type TextDisplay = 'block' | 'inlineBlock';

const size: { [Key in TextSize]: string } = {
  xs: sprinkles({
    fontSize: {
      mobile: 8,
      desktop: 10,
    },
  }),
  sm: sprinkles({
    fontSize: {
      mobile: 12,
      desktop: 14,
    },
  }),
  md: sprinkles({
    fontSize: {
      mobile: 14,
      desktop: 16,
    },
  }),
  lg: sprinkles({
    fontSize: {
      mobile: 18,
      desktop: 24,
    },
  }),
  xl: sprinkles({
    fontSize: {
      mobile: 20,
      desktop: 36,
    },
  }),
};

const fontWeight: { [Key in TextFontWeight]: string } = {
  normal: sprinkles({
    fontWeight: 'normal',
  }),
  bold: sprinkles({
    fontWeight: 'bold',
  }),
};

const color: { [Key in TextColor]: string } = {
  white: sprinkles({
    color: 'white',
  }),
  black: sprinkles({
    color: 'black',
  }),
  red: sprinkles({
    color: 'red',
  }),
  darkGray: sprinkles({
    color: 'darkGray',
  }),
};

const display: { [Key in TextDisplay]: string } = {
  block: sprinkles({
    display: 'block',
  }),
  inlineBlock: sprinkles({
    display: 'inline-block',
  }),
};

const styles = recipe({
  base: sprinkles({
    lineHeight: 'text',
  }),
  variants: {
    size,
    fontWeight,
    color,
    display,
  },
});

export { styles };
