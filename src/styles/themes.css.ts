import { createGlobalTheme } from '@vanilla-extract/css';

export const colors = {
  white: '#FEFEFE',
  translucentWhite: 'rgba(255, 255, 255, 0.25)',
  gray: '#94989B',
  lightGray: '#E2E2E2',
  blue: '#1E1ADE',
  translucentBlue: 'rgba(11, 96, 223, 0.8)',
  gradientBlue: 'linear-gradient(#0078B7, #001E43)',
  red: '#FF4747',
  transparent: 'transparent',
} as const;

export type Color = keyof typeof colors;

export const spacing = {
  0.5: '4px',
  1: '8px',
  1.25: '10px',
  1.5: '12px',
  2: '16px',
  2.5: '20px',
  3: '24px',
  3.5: '28px',
  4: '32px',
  5: '40px',
  6: '48px',
  7: '56px',
  8: '64px',
  9: '72px',
  10: '80px',
  11: '88px',
  12: '96px',
  13: '108px',
  14: '116px',
  15: '124px',
  20: '160px',
  25: '200px',
} as const;

export const fontSize = {
  10: '0.625rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  24: '1.5rem',
  32: '2rem',
  36: '2.25rem',
  48: '3rem',
  64: '4rem',
} as const;

export type FontSize = keyof typeof fontSize;

export const lineHeight = {
  1: '1',
  1.3: '1.3',
  1.8: '1.8',
} as const;

export type LineHeight = keyof typeof lineHeight;

/**
 *  width と height で使用する
 */
export const size = {
  16: '1rem',
  24: '1.5rem',
  36: '2.25rem',
  40: '2.5rem',
  48: '3rem',
  100: '6.25rem',
  120: '7.5rem',
  150: '9.375rem',
  200: '12.5rem',
  300: '18.75rem',
};

export const vars = createGlobalTheme(':root', {
  colors,
  spacing,
  fontSize,
  lineHeight,
  size,
});
