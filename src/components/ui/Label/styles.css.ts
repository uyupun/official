import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/themes.css';

const styles = {
  label: sprinkles({
    fontSize: {
      mobile: 14,
      desktop: 16,
    },
    color: 'black',
  }),
  requiredMark: style({
    position: 'relative',
    '::after': {
      content: '*',
      position: 'absolute',
      top: '-75%',
      color: vars.colors.red,
      paddingLeft: vars.spacing['0.5'],
    },
  }),
};

export { styles };
