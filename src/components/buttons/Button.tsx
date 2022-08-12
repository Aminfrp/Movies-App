import { ReactNode, MouseEventHandler, memo, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  handleClick: MouseEventHandler<HTMLDivElement>;
  style?: CSSProperties;
  className?: string;
  disabled: boolean;
}
const Button = (props: Props) => {
  return (
    <div
      onClick={props.disabled ? () => {} : props.handleClick}
      style={props.style}
      className={`flex justify-center items-center ${
        props.disabled &&
        "hover:cursor-pointer hover:scale-105 hover:drop-shadow-md"
      } ${props.disabled ? "opacity-1" : "opacity-[0.5]"} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default memo(Button);
