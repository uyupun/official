module.exports = {
  typescript: true,
  filenameCase: 'camel',
  svgProps: {
    fill: '{fill !== undefined ? colors[fill] : colors.black}',
    stroke: '{stroke}',
    'aria-hidden': true,
  },
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
  template: (variables, { tpl }) => {
    /* eslint-disable @typescript-eslint/restrict-template-expressions */
    return tpl`
      import { colors } from '@/styles/themes.css';

      import type { IconProps } from '@/components/base/Icons/props';
      import type { FC } from 'react';

      const ${`${variables.componentName}: FC<IconProps>`} = ({ fill, stroke, ...props }) => (
        ${variables.jsx}
      );

      ${variables.exports};
    `;
    /* eslint-enable @typescript-eslint/restrict-template-expressions */
  },
};
