import React from "react";
import "./style.css";
import { cn } from "../../lib/utils/cn";

interface ButtonWrapperProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  children,
  active,
  className,
  onClick,
}) => {
  return (
    <button
      className={cn("hover_icon", className, {
        active: active,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonWrapper;
