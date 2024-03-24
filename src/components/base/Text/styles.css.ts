import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css';

import type { Color, LineHeight } from '@/styles/themes.css';

export type TextFontWeight = 'normal' | 'bold';
export type TextColor = Extract<Color, 'white' | 'red' | 'lightGray'>;
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
  red: sprinkles({
    color: 'red',
  }),
  lightGray: sprinkles({
    color: 'lightGray',
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

const lineHeight: { [Key in LineHeight]: string } = {
  1: sprinkles({
    lineHeight: 1,
  }),
  1.3: sprinkles({
    lineHeight: 1.3,
  }),
  1.8: sprinkles({
    lineHeight: 1.8,
  }),
};

const styles = recipe({
  base: sprinkles({
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
    lineHeight,
  },
});

export { styles };
