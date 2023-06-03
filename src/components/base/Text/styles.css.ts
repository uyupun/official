import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';
import { colors, fontSize } from '@/styles/themes.css';

export type FontSize = {
  mobile: keyof typeof fontSize;
  desktop: keyof typeof fontSize;
};
export type FontWeight = 'normal' | 'bold';
export type Color = keyof typeof colors;

const styles = {
  text: (fontSize: FontSize, fontWeight: FontWeight, color: Color) =>
    sprinkles({
      fontSize,
      fontWeight,
      color,
      lineHeight: 'text',
    }),
  inlineBlock: style({
    display: 'inline-block',
  }),
};

export { styles };
