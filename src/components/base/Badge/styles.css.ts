import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/themes.css';

const styles = {
  badge: style([
    sprinkles({
      display: 'inline-block',
      fontSize: {
        mobile: 14,
        desktop: 16,
      },
      lineHeight: 1,
      color: 'white',
      paddingX: 1,
      paddingY: 0.5,
    }),
    {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: vars.colors.white,
      borderRadius: '16px',
    },
  ]),
};

export { styles };
