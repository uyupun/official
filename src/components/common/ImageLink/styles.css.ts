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
    outlineColor: {
      focusVisible: 'lightBlue',
    },
    opacity: {
      focusVisible: 0.8,
      hover: 0.8,
    },
    cursor: {
      default: 'pointer',
    },
  }),
  {
    textDecoration: 'none',
  },
]);

const styles = {
  imageLink,
  hoverContainer: style([
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
  ]),
  linkText: style([
    sprinkles({
      display: {
        mobile: 'inline-flex',
        desktop: 'none',
      },
      justifyContent: 'center',
      fontSize: {
        mobile: 18,
      },
      color: 'lightBlue',
      marginTop: {
        mobile: 1,
      },
    }),
    {
      width: '100%',
      textDecoration: 'underline',
    },
  ]),
};

export { styles };
