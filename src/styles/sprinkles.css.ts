import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from './themes.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    desktop: { '@media': 'screen and (min-width: 768px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    position: ['absolute', 'relative', 'fixed'],
    display: ['none', 'block', 'inline', 'inline-block', 'flex'],
    alignItems: ['flex-start', 'center', 'flex-end'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
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

const colorProperties = defineProperties({
  properties: {
    color: vars.colors,
    background: vars.colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
