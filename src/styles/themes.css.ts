import { createGlobalTheme } from '@vanilla-extract/css';

export const colors = {
  white: '#FEFEFE',
  black: '#333333',
  silver: '#F8F8F8',
  gray: '#C8C8C8',
  darkGray: '#656565',
  blue: '#1E1ADE',
  lightBlue: '#0080FF',
  hoverBlue: 'rgba(30, 26, 222, 0.8)',
  purple: '#B01CF6',
  red: '#E6002F',
  lightRed: '#FBD4D4',
  gradientBlue: 'linear-gradient(#0078B7, #001E43)',
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

export const lineHeight = {
  1: '1',
  1.3: '1.3',
  1.8: '1.8',
} as const;

/**
 *  width と height で使用する
 */
export const size = {
  16: '1rem',
  24: '1.5rem',
  36: '2.25rem',
  40: '2.5rem',
  100: '6.25rem',
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
