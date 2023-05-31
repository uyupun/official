module.exports = {
  typescript: true,
  filenameCase: 'camel',
  svgProps: {
    fill: '{fill ? colors[fill] : colors.black}',
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
      import { colors } from '@/styles/themes.css';

      const ${variables.componentName} = ({ fill, stroke, ...props }: IconProps) => (
        ${variables.jsx}
      );

      ${variables.exports};
    `;
  },
};
