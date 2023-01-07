import { createGlobalTheme } from '@vanilla-extract/css';

export const colors = {
  white: '#FEFEFE',
  black: '#333333',
  silver: '#F8F8F8',
  gray: '#C8C8C8',
  blue: '#1E1ADE',
  lightBlue: '#0080FF',
  purple: '#B01CF6',
} as const;

export const vars = createGlobalTheme(':root', {
  colors: colors,
  spacing: {
    0.5: '4px',
    1: '8px',
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
  },
  fontSize: {
    8: '0.5rem',
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
  },
  lineHeight: {
    text: '1.8',
    heading: '1.3',
  },
  fontWeight: {
    normal: 'normal',
    bold: 'bold',
  },
});
