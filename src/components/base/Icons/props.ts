import type { Color } from '@/styles/themes.css';
import type { ComponentProps } from 'react';

export type IconProps = Omit<ComponentProps<'svg'>, 'fill' | 'stroke'> & {
  fill?: Color;
  stroke?: Color;
};
