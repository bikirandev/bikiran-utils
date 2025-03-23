import React from "react";
import "./style.css";
import { cn } from "../../lib/utils/cn";
import { iconLoading } from "./icons/icon";
import style from "./style/style.module.css";

interface ButtonWrapperProps {
  ImageComponent: any;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  blockIcon: string;
  hoverIcon: string;
  loading: boolean;
  disabled: boolean;
}

export const ButtonLoading: React.FC = () => {
  return (
    <div className={cn(style.btnLoadingWrapper, "btnLoadingWrapper")}>
      <span className={cn(style.btnContent, "btnContent")}>
        {iconLoading()}
      </span>
    </div>
  );
};

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  className,
  onClick,
  ImageComponent,
  blockIcon,
  hoverIcon,
  loading,
  disabled,
}) => {
  return (
    <button
      className={cn(style.btnClass, className)}
      onClick={onClick}
      disabled={disabled}
    >
      <ImageComponent
        src={blockIcon}
        width={100}
        height={100}
        alt="sync"
        sizes="100vw"
        className={cn(style.blockIcon, "blockIcon")}
      />
      <ImageComponent
        src={hoverIcon}
        width={100}
        height={100}
        alt="sync"
        sizes="100vw"
        className={cn(style.hoverIcon, "hoverIcon")}
      />
      {loading ? (
        <div className={cn(style.btnLoading, "btnLoading")}>
          <ButtonLoading />
        </div>
      ) : null}
    </button>
  );
};

export default ButtonWrapper;
