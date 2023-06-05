import { ComponentProps } from 'react';

import { colors } from '@/styles/themes.css';

type Color = keyof typeof colors;

export type IconProps = Omit<ComponentProps<'svg'>, 'fill' | 'stroke'> & {
  fill?: Color;
  stroke?: Color;
};
