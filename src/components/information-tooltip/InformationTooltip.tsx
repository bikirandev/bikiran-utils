import React, { FC } from "react";
import { cn } from "../../lib/utils/cn";
import { IconArrow, IconInfo } from "./icons";
import style from "./style/InfoTooltip.module.css";

type TProps = {
  content: string;
  className?: string;
  children?: React.ReactNode;
  align?: "left" | "right" | "top" | "bottom";
  fillColor?: string;
  borderColor?: string;
};

const InformationTooltip: FC<TProps> = ({
  children,
  content,
  className,
  align = "right",
  fillColor,
  borderColor,
}) => {
  const positionStyles = {
    backgroundColor: fillColor ? fillColor : "#FFF9DB",
    borderColor: borderColor ? borderColor : "#FFE6BA",
    left:
      align === "right"
        ? "calc(100% + 24%)"
        : align === "left"
        ? "auto"
        : "50%",
    right: align === "left" ? "calc(100% + 24%)" : "auto",
    top:
      align === "bottom"
        ? "calc(100% + 20%)"
        : align === "top"
        ? "auto"
        : "50%",
    bottom: align === "top" ? "calc(100% + 19%)" : "auto",
    transform:
      align === "top" || align === "bottom"
        ? "translateX(-50%)"
        : "translateY(-50%)",
  };

  // const animationClasses = cn(
  //   align === "top"
  //     ? "origin-bottom scale-y-0 group-hover:scale-y-100"
  //     : align === "bottom"
  //     ? "origin-top scale-y-0 group-hover:scale-y-100"
  //     : align === "left"
  //     ? "origin-right scale-x-0 group-hover:scale-x-100"
  //     : "origin-left scale-x-0 group-hover:scale-x-100"
  // );

  const arrowStyles = {
    left:
      align === "right"
        ? "calc(100% - 26px)"
        : align === "top"
        ? "16px"
        : "auto", // Adjusts arrow position on the right
    right:
      align === "left"
        ? "calc(100% - 27px)"
        : align === "bottom"
        ? "16px"
        : "auto", // Adjusts arrow position on the left
    top: align === "bottom" ? "8px" : "auto", // Adjusts arrow position on the top
    bottom: align === "top" ? "8px" : "auto", // Adjusts arrow position on the bottom
    transform:
      align === "top"
        ? "translateX(-50%) "
        : align === "right"
        ? "rotate(90deg) translateX(-100%)"
        : align === "left"
        ? "rotate(-90deg) translateX(100%)"
        : align === "bottom"
        ? "rotate(180deg) translateX(-50%)"
        : "", // Centers arrow for top and bottom alignments
  };

  return (
    <div className={cn(style.container, "container")}>
      {children ? children : <IconInfo />}
      <div
        className={cn(
          style.content,
          "content",
          // animationClasses,
          className
        )}
        style={positionStyles}
      >
        <span>{content}</span>
      </div>
      <div className={cn(style.arrow, "arrow")} style={arrowStyles}>
        <IconArrow
          fillColor={fillColor || "#FFF9DB"}
          borderColor={borderColor || "#FFE6BA"}
        />
      </div>
    </div>
  );
};

export default InformationTooltip;
