import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css';

import type { Color, FontSize, LineHeight } from '@/styles/themes.css';

export type TextFontWeight = 'normal' | 'bold';
export type TextColor = Extract<Color, 'white' | 'red' | 'lightGray'>;
export type TextDisplay = 'block' | 'inlineBlock';
export type TextFontStyle = 'normal' | 'italic';
export type TextFontSizeMobile = Extract<FontSize, 10 | 14 | 16 | 18 | 20>;
export type TextFontSizeDesktop = Extract<FontSize, 10 | 14 | 16 | 18 | 20 | 24 | 32 | 36>;

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

const fontSizeMobile: { [Key in TextFontSizeMobile]: string } = {
  10: sprinkles({
    fontSize: {
      mobile: 10,
    },
  }),
  14: sprinkles({
    fontSize: {
      mobile: 14,
    },
  }),
  16: sprinkles({
    fontSize: {
      mobile: 16,
    },
  }),
  18: sprinkles({
    fontSize: {
      mobile: 18,
    },
  }),
  20: sprinkles({
    fontSize: {
      mobile: 20,
    },
  }),
};

const fontSizeDesktop: { [Key in TextFontSizeDesktop]: string } = {
  10: sprinkles({
    fontSize: {
      desktop: 10,
    },
  }),
  14: sprinkles({
    fontSize: {
      desktop: 14,
    },
  }),
  16: sprinkles({
    fontSize: {
      desktop: 16,
    },
  }),
  18: sprinkles({
    fontSize: {
      desktop: 18,
    },
  }),
  20: sprinkles({
    fontSize: {
      desktop: 20,
    },
  }),
  24: sprinkles({
    fontSize: {
      desktop: 24,
    },
  }),
  32: sprinkles({
    fontSize: {
      desktop: 32,
    },
  }),
  36: sprinkles({
    fontSize: {
      desktop: 36,
    },
  }),
};

const styles = recipe({
  variants: {
    fontWeight,
    color,
    display,
    fontStyle,
    lineHeight,
    fontSizeMobile,
    fontSizeDesktop,
  },
});

export { styles };
