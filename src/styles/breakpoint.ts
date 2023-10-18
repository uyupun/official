import { style, type StyleRule } from '@vanilla-extract/css';

export const breakpoint = 'screen and (min-width: 768px)';

type BreakpointStyleRule = {
  mobile: StyleRule;
  desktop: StyleRule;
};
export const breakpointStyle = ({ mobile, desktop }: BreakpointStyleRule): string => {
  return style({
    ...mobile,
    '@media': {
      'screen and (min-width: 768px)': desktop,
    },
  });
};
