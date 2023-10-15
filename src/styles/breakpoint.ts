import { style, type StyleRule } from '@vanilla-extract/css';

export const breakpoint = 'screen and (min-width: 768px)';

export const breakpointStyle = (mobileStyle: StyleRule, desktopStyle: StyleRule): string => {
  return style({
    ...mobileStyle,
    '@media': {
      'screen and (min-width: 768px)': desktopStyle,
    },
  });
};
