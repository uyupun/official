import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

const imageLink = style([
  sprinkles({
    display: 'inline-block',
    position: 'relative',
    fontSize: {
      mobile: 18,
      desktop: 20,
    },
    color: 'white',
    outlineWidth: {
      focusVisible: 1,
    },
    outlineStyle: {
      focusVisible: 'solid',
    },
    outlineColor: {
      focusVisible: 'white',
    },
    cursor: {
      default: 'pointer',
    },
  }),
  {
    textDecoration: 'none',
  },
]);

const imageWrapper = sprinkles({
  backgroundColor: 'white',
});

const hoverContainer = style([
  sprinkles({
    position: 'absolute',
    display: {
      mobile: 'none',
      desktop: 'inline-flex',
    },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hoverBlue',
    padding: 1,
  }),
  {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    transition: 'opacity 300ms',
    selectors: {
      [`${imageLink}:focus-visible &`]: {
        opacity: 1,
      },
      [`${imageLink}:hover &`]: {
        opacity: 1,
      },
    },
  },
]);

const linkText = style([
  sprinkles({
    display: {
      mobile: 'inline-flex',
      desktop: 'none',
    },
    justifyContent: 'center',
    fontSize: {
      mobile: 18,
    },
    lineHeight: 1,
    color: 'white',
    marginTop: {
      mobile: 1,
    },
  }),
  {
    width: '100%',
    textDecoration: 'underline',
  },
]);

const styles = {
  imageLink,
  imageWrapper,
  hoverContainer,
  linkText,
};

export { styles };
