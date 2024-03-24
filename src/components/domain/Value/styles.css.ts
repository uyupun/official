import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/themes.css';

const styles = {
  section: sprinkles({
    textAlign: 'center',
  }),
  heading: sprinkles({
    marginBottom: {
      mobile: 6,
      desktop: 10,
    },
  }),
  valueContainer: style({
    selectors: {
      '&:not(:last-child)': {
        marginBottom: vars.spacing[6],
      },
    },
  }),
  title: sprinkles({
    fontSize: {
      mobile: 18,
      desktop: 24,
    },
    lineHeight: 1.3,
    marginBottom: {
      mobile: 2,
      desktop: 4,
    },
  }),
  strong: sprinkles({
    fontWeight: 'bold',
  }),
  description: sprinkles({
    textAlign: 'left',
  }),
};

export { styles };
