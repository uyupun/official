import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoint } from './breakpoint';
import { vars } from './themes.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    desktop: { '@media': breakpoint },
  },
  defaultCondition: 'mobile',
  properties: {
    position: ['absolute', 'relative', 'fixed'],
    display: ['none', 'block', 'inline', 'inline-block', 'flex', 'inline-flex'],
    alignItems: ['flex-start', 'center', 'flex-end'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    gap: vars.spacing,
    width: vars.size,
    minWidth: vars.size,
    maxWidth: vars.size,
    height: vars.size,
    minHeight: vars.size,
    maxHeight: vars.size,
    paddingTop: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    marginTop: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    pointerEvents: ['none', 'auto'],
    textAlign: ['left', 'center', 'right'],
    fontSize: vars.fontSize,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

const lineHeightProperties = defineProperties({
  properties: {
    lineHeight: vars.lineHeight,
  },
});

const selectorProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    focusVisible: { selector: '&:focus-visible' },
    disabled: { selector: '&:disabled' },
    disabledHover: { selector: '&:disabled:hover' },
  },
  defaultCondition: 'default',
  properties: {
    color: vars.colors,
    backgroundColor: vars.colors,
    borderColor: vars.colors,
    outlineWidth: [1, 2],
    outlineStyle: ['solid'],
    outlineColor: vars.colors,
    outlineOffset: [-1],
    opacity: [0.3, 0.8, 1],
    cursor: ['pointer', 'not-allowed'],
  },
});

const fontProperties = defineProperties({
  properties: {
    fontWeight: ['normal', 'bold'],
    fontStyle: ['normal', 'italic'],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  lineHeightProperties,
  fontProperties,
  selectorProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
