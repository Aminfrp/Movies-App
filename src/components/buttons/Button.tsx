import { ReactNode, MouseEventHandler, memo, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  handleClick: MouseEventHandler<HTMLDivElement>;
  style?: CSSProperties;
  className?: string;
}
const Button = (props: Props) => {
  return (
    <div
      onClick={props.handleClick}
      style={props.style}
      className={`flex justify-center items-center hover:cursor-pointer ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default memo(Button);
