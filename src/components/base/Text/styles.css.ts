import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css';

import type { Color } from '@/styles/themes.css';

export type TextFontWeight = 'normal' | 'bold';
export type TextColor = Extract<Color, 'white' | 'black' | 'red' | 'darkGray'>;
export type TextDisplay = 'block' | 'inlineBlock';
export type TextFontStyle = 'normal' | 'italic';

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

const fontStyle: { [Key in TextFontStyle]: string } = {
  normal: sprinkles({
    fontStyle: 'normal',
  }),
  italic: sprinkles({
    fontStyle: 'italic',
  }),
};

const styles = recipe({
  base: sprinkles({
    lineHeight: 1.8,
    fontSize: {
      mobile: 14,
      desktop: 16,
    },
  }),
  variants: {
    fontWeight,
    color,
    display,
    fontStyle,
  },
});

export { styles };
