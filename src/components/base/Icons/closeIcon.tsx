import { colors } from '@/styles/themes.css';

import type { IconProps } from '@/components/base/Icons/props';
import type { FC } from 'react';
const SvgCloseIcon: FC<IconProps> = ({ fill, stroke, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 0 24 24"
    width={24}
    fill={fill !== undefined ? colors[fill] : colors.black}
    stroke={stroke}
    aria-hidden={true}
    {...props}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
  </svg>
);
export default SvgCloseIcon;
