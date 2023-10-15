import { createThemeContract, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { breakpointStyle } from '@/styles/breakpoint';
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

const recipeStyles = recipe({
  variants: {
    fontWeight,
    color,
    display,
    fontStyle,
  },
});

const themeVars = createThemeContract({
  fontSize: {
    mobile: null,
    desktop: null,
  },
});

const baseStyles = style([
  sprinkles({
    lineHeight: 'text',
  }),
  breakpointStyle(
    {
      fontSize: themeVars.fontSize.mobile,
    },
    {
      fontSize: themeVars.fontSize.desktop,
    }
  ),
]);

export { baseStyles, recipeStyles, themeVars };
