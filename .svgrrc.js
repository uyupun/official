module.exports = {
  typescript: true,
  svgProps: {
    fill: '{fill}',
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
    return tpl`
      import { IconProps } from '@/components/ui/Icons/props';

      const ${variables.componentName} = ({ fill, stroke, ...props }: IconProps) => (
        ${variables.jsx}
      );

      ${variables.exports};
    `;
  },
};
