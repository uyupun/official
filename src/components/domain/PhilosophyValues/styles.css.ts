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
  itemContainer: style({
    selectors: {
      '&:not(:last-child)': {
        marginBottom: vars.spacing[6],
      },
    },
  }),
  title: sprinkles({
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
