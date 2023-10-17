import { style, type StyleRule } from '@vanilla-extract/css';

export const breakpoint = 'screen and (min-width: 768px)';

type BreakpointStyleRule = {
  mobileStyle: StyleRule;
  desktopStyle: StyleRule;
};
export const breakpointStyle = ({ mobileStyle, desktopStyle }: BreakpointStyleRule): string => {
  return style({
    ...mobileStyle,
    '@media': {
      'screen and (min-width: 768px)': desktopStyle,
    },
  });
};
