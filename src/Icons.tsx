import { FunctionComponent } from "react";

interface IconProps {
  className?: string;
  onClick?: () => void;
}

export const LogoIcon: FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    <svg viewBox="0 0 1200 600" fill="none" className={props.className} onClick={props.onClick}>
      <path d="m0,0h1200v600H0" />
      <path fill="#fff" d="m0,200h1200v200H0" />
    </svg>
  );
};
