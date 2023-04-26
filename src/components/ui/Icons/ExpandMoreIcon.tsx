import { IconProps } from '@/components/ui/Icons/props';
const SvgExpandMoreIcon = ({ fill, stroke, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 0 24 24"
    width={24}
    fill={fill}
    stroke={stroke}
    aria-hidden={true}
    {...props}
  >
    <path d="M24 24H0V0h24v24z" fill="none" opacity={0.87} />
    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
  </svg>
);
export default SvgExpandMoreIcon;
